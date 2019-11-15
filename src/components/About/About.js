import React from 'react'
import {BoxStyle}from '../../styles/BoxStyle'
import { TextStyle } from '../../styles/TextStyle'
export default function About() {
    return (
        <BoxStyle>
            <TextStyle>
                <h2>How it works?</h2>
                <article>
                    <p>ImageNet is an image database organized according to the WordNet hierarchy (currently only the nouns), in which each node of the hierarchy is depicted by hundreds and thousands of images</p>
                    <p>The server side of the  page is a python-flask app that has an endpoint that allows you to query a keras classification model that was trained using the ImageNet database,it is not perfect but has a decent accuracy</p>
                    <p>The client side is a javascrpit react spingle page app ,you can uploads your files to query from here</p> 
                     <p>You can read or download the code from github.</p>
                </article>
            </TextStyle>
        </BoxStyle>
    )
}
