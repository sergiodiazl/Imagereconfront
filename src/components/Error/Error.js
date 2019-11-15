import React from 'react'
import {TextStyle} from '../../styles/TextStyle'
import styled from 'styled-components';
const ErrorStyle= styled.div`
background: red;
color:#fff;
padding: 1rem 50px;
border-radius: 5px;
margin: 0 1em;
padding: 0.25em 1em;
`;
export default function Error(props) {
    const {message}=props
    return (
        <ErrorStyle>
            <TextStyle>{message}</TextStyle>
        </ErrorStyle>
    )
}
