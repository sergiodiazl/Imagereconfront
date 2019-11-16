import React from 'react'
import {TextStyle} from '../../styles/TextStyle'
import {BoxStyle}from '../../styles/BoxStyle'
import ReturnButton from '../ReturnButton/ReturnButton'
export default function NotFound() {
    return (
        <BoxStyle>
           <TextStyle><h2>Are you lost?</h2>
           <p>The page you are looking for does not exist,the classic 404 error</p>
           </TextStyle>
           <ReturnButton/>
        </BoxStyle>
    )
}
