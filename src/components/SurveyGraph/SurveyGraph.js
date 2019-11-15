import React from 'react'
import {Pie} from 'react-chartjs-2';
import styled from 'styled-components'
const GraphFlex=styled.div`
display:flex;
flex-flow:column wrap;
`;
const ResetButton=styled.button`
cursor: pointer;
font-family: 'Poppins', sans-serif;
color:#fff;
background-color: palevioletred;
font-size: inherit;
font-weight: 600;
margin-bottom: 1rem;
outline: none;
padding: 1rem 50px;
border-radius: 5px;
border: 2px solid palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
transition: 0.5s all ease-out;
&:hover {
  background-color: #fff;
  color: palevioletred;
}
`;
export default function SurveyGraph(props) {
    const {total,correct,reset}=props;
    const data = {
        labels: [
            'Correct',
            'Wrong',
        ],
        datasets: [{
            data: [correct,total-correct],
            backgroundColor: [
            'Chartreuse',
            'red',
            ],
            hoverBackgroundColor: [
            'Chartreuse',
            'red',
            ]
        }]
    };
    return (
        <GraphFlex>
            total {total}
            right {correct}
            {total>0?<Pie data={data}/>:null}
        <ResetButton onClick={reset}>Reset votes</ResetButton>
        
        </GraphFlex>
    )
}
