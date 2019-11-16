import React from 'react'
import ReturnButton from '../ReturnButton/ReturnButton'
import {BoxStyle}from '../../styles/BoxStyle'
import { TextStyle } from '../../styles/TextStyle'
import { ALinkStyle } from '../../styles/LinkStyle'
export default function About() {
    return (
        <BoxStyle>
            <TextStyle>
                <h2>How it works?</h2>
                <article>
                    <p>ImageNet is an image database organized according to the WordNet hierarchy (currently only the nouns), in which each node of the hierarchy is depicted by hundreds and thousands of images</p>
                    <p>The server side of the  page is a python-flask app that has an endpoint that allows you to query a keras classification model that was trained using the ImageNet database,it is not perfect but has a decent accuracy</p>
                    <p>The client side is a javascript react single page app ,you can uploads your files to query from here</p> 
                     <p><ALinkStyle href='https://github.com/sergiodiazl/Imagereconfront' target='_blank' >You can read or download the code from github.</ALinkStyle></p>
                    <p>The api may throw errors sometimes as its hosted in a free server that might go down unannouced,thanks for understanding</p>
                </article>
                <ReturnButton/>
            </TextStyle>
        </BoxStyle>
    )
}
