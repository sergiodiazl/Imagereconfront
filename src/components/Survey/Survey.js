import React from 'react'
import styled from 'styled-components'
import{YesButton,NoButton} from '../../styles/ButtonStyle'
import {TextStyle } from '../../styles/TextStyle'
const ButtonFlex=styled.div`
display:flex
`;



export default function Survey(props) {
    const {voteYes,voteNo}=props;
    return (
        <TextStyle>
             <h3>Did i guess?</h3>
                <ButtonFlex>
                    <YesButton onClick={voteYes}>&#10004; Yes</YesButton>
                    <NoButton  onClick={voteNo}>&#10008;No</NoButton>
                </ButtonFlex>
        </TextStyle>
    )
}

