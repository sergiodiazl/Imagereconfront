import React, { Component } from 'react';
import Results from '../Results/Results';
import Error from '../Error/Error';
import Calculating from '../Calculating/Calculating';
import Survey from '../Survey/Survey';
import SurveyGraph from '..//SurveyGraph/SurveyGraph'
import {BoxStyle}from '../../styles/BoxStyle'
import axios from 'axios';
import styled from 'styled-components';
import {ButtonStyle  as GuessButton} from '../../styles/ButtonStyle'
import { TextStyle } from '../../styles/TextStyle';


const ImageInput = styled.input.attrs({
    type: 'file',
})`
        height: 0;
        overflow: hidden;
        width: 0;
        + label {
            background: #f15d22;
            border: none;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            display: inline-block;
            font-size: inherit;
            font-weight: 600;
            margin-bottom: 1rem;
            outline: none;
            padding: 1rem 50px;
            position: relative;
            transition: all 0.3s;
            vertical-align: middle; 
            &:hover {
              background-color: darken(#f15d22, 30%);
            }
  `
export default class Form extends Component {
    state = {
        selectedFile: null,
        imagePreviewUrl: null,
        loadingImage: false,
        imageError: false,
        loadingResults: false,
        results: [],
        resultError: false,
        typeError: false,
        totalPredictions:0,
        correctPredictions:0,
        canVote:false,
    };
    fileChangedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            results:[]
        })

        let reader = new FileReader();
        reader.onloadstart = () => {
            this.setState({ loadingImage: true, imageError: false })
        }
        reader.onerror = () => {
            this.setState({

                imageError: true,
                loadingImage: false,
            });
            reader.abort();
        }
        reader.onloadend = () => {
            if (this.isImage(reader.result)) {
                this.setState({
                    imagePreviewUrl: reader.result,
                    loadingImage: false,
                    typeError: false,
                });
            }
            else {
                this.setState({
                    imageError: true,
                    loadingImage: false,
                });
            }
        }
        reader.readAsDataURL(event.target.files[0])
    }
    isImage = (readFile) => {

        if (readFile.slice(0, 10) === 'data:image') {
            return true;
        } else {
            this.setState({ imagePreviewUrl: null })
            return false;
        }
    }
    uploadHandler = () => {
        const { selectedFile } = this.state
        if (selectedFile != null) {
            const formData = new FormData()
            this.setState({ loadingResults: true, resultError: false ,canVote:false})
            formData.append(
                'image',
                selectedFile,
            )
            axios.post('https://imagenetkeras.herokuapp.com/predict', formData, {
                onUploadProgress: progressEvent => {
                    console.log(progressEvent.loaded / progressEvent.total)
                }
            }).then((response) => {
                console.log(response);
                if (response.data.success === true) {
                    this.setState({ results: [response.data.predictions], loadingResults: false ,canVote:true})

                }
                else {
                    this.setState({ resultError: true, loadingResults: false })
                }
            }, (error) => {
                console.log(error);
                this.setState({ resultError: true, loadingResults: false })
            });
        }
        else {
            this.setState({ typeError: true })
        }
    }
    resetVotes=()=>{
        this.setState({
            totalPredictions:0,
            correctPredictions:0,
        })
    }
    voteYes=()=>{
        this.setState({
            totalPredictions:this.state.totalPredictions+1,
            correctPredictions:this.state.correctPredictions+1,
            canVote:false,
        })
    }
    voteNo=()=>{
        this.setState({
            totalPredictions:this.state.totalPredictions+1,
            canVote:false,
        })
    }
    render() {
        const { loadingImage, loadingResults, imageError, resultError, results, typeError,totalPredictions,correctPredictions,canVote } = this.state
        let imagePreview = (<TextStyle>Please select an Image for Preview</TextStyle>);
        if (this.state.imagePreviewUrl) {
            imagePreview = (<div className="image-container" ><img src={this.state.imagePreviewUrl} alt="icon" width="200" /> </div>);
        }

        return (
            <BoxStyle>
                <h1>I will guess what your image is</h1>
                <ImageInput type="file" id="imageInput" onChange={this.fileChangedHandler} />
                <label htmlFor="imageInput" >choose an image</label>
                {imagePreview}
                {loadingImage ? 'loading image' : null}
                <GuessButton onClick={this.uploadHandler}>Let me guess </GuessButton>
                {loadingResults ? <Calculating /> : null}
                {results.length > 0 ? <Results predictions={results} /> : null}
                {canVote?<Survey voteYes={this.voteYes} voteNo={this.voteNo}/>:null}
                {totalPredictions>0?<SurveyGraph total={totalPredictions} correct={correctPredictions} reset={this.resetVotes}/>:null}
                {imageError ? <Error message='error loading image ,try again' /> : null}
                {resultError ? <Error message='api error ' /> : null}
                {typeError ? <Error message='invalid file type' /> : null}
            </BoxStyle>
        );
    }
}
