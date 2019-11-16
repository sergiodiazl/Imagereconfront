import React from 'react'
import{BackButton}from '../../styles/ButtonStyle'
import {BackLinkStyle}from '../../styles/LinkStyle'
export default function ReturnButton() {
    return (
   
            <BackButton>
                <BackLinkStyle to='/'>
                    Go to the main page
                </BackLinkStyle>
            </BackButton>
       
    )
}
