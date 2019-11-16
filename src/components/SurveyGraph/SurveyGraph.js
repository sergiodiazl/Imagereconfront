import React from 'react'
import {Pie} from 'react-chartjs-2';
import { TextStyle } from '../../styles/TextStyle'

import {ButtonStyle  as ResetButton} from '../../styles/ButtonStyle'
import styled from 'styled-components'
const GraphFlex=styled.div`
display:flex;
flex-flow:column wrap;
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
            <TextStyle>
            total: {total}
            right: {correct}
            </TextStyle>
            {total>0?<Pie data={data}/>:null}
        <ResetButton onClick={reset}>Reset votes</ResetButton>
        
        </GraphFlex>
    )
}
