import React, { Component } from 'react'
import Results from '../Results/Results'
import Calculating from '../Calculating/Calculating'
import axios from 'axios';
import styled from 'styled-components';
const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  
  min-height:50vh;
  min-width:50vw;
  align-items: center;
  align-self:center;
  border-radius:2%;
  padding:5%;
  justify-content:space-between;
  background:#fff;
  
`;
const Button = styled.button`
cursor: pointer;
background: #fff;

color: palevioletred;
border: 2px solid palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
transition: 0.5s all ease-out;
&:hover {
  background-color: palevioletred;
  color: #fff;
}
`;
const GuessButton = styled(Button)`
  

  color: palevioletred;
  border: 2px solid palevioletred;
  
  
  &:hover {
    background-color: palevioletred;
    color: #fff;
  }
`;
const ImageInput = styled(Button)`
  cursor: pointer;
  background: #fff;

  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: #fff;
  }
`;
export default class Form extends Component {
    state = {
        selectedFile: null,
        imagePreviewUrl: null,
        loadingImage: false,
        imageError: false,
        loadingResults: false,
        results: [],
        resultError: false,
        typeError:false,
        
    };
    fileChangedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
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

        if(readFile.slice(0,10)==='data:image'){
            return true;
        }else{
            this.setState({imagePreviewUrl:null})
            return false;
        }
    }
    uploadHandler = () => {
        const{selectedFile}=this.state
        const formData = new FormData()
        this.setState({ loadingResults: true, resultError: false })
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
                this.setState({ results: [response.data.predictions], loadingResults: false })

            }
            else {
                this.setState({ resultError: true, loadingResults: false })
            }
        }, (error) => {
            console.log(error);
            this.setState({ resultError: true, loadingResults: false })
        });

    }

    render() {
        const { loadingImage, loadingResults, imageError, resultError, results,typeError } = this.state
        let imagePreview = (<div className="previewText image-container">Please select an Image for Preview</div>);
        if (this.state.imagePreviewUrl) {
            imagePreview = (<div className="image-container" ><img src={this.state.imagePreviewUrl} alt="icon" width="200" /> </div>);
        }

        return (
            <FormStyle>
                <h1>I will guess what your image is</h1>
                <ImageInput as='input' type="file" name="avatar" onChange={this.fileChangedHandler} />

                {imagePreview}
                {loadingImage ? 'loading image' : null}
                

                <GuessButton onClick={this.uploadHandler}>Let me guess </GuessButton>
                {loadingResults ? <Calculating/> : null}
                {results.length > 0 ? <Results predictions={results} /> : null}
                {imageError ? 'error loading image ,try again' : null}
                {resultError ? 'api error' : null}
                {typeError ? 'invalid file type' : null}
            </FormStyle>
        );
    }
}
