import React from 'react'
import ResultItem from '../ResultItem/ResultItem'
import styled from 'styled-components';
const ResultsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin:5%;
  justify-content:space-around;
  
  
`;
export default function Results(props) {
    const  predictions = props.predictions[0]
    return (
        <ResultsStyle>
           
           {predictions.map((prediction)=>
            <ResultItem key={prediction.label +prediction.probability}
            label={prediction.label}
            probability={prediction.probability}/>)
           
          }
        </ResultsStyle>
    )
}
