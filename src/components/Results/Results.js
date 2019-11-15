import React from 'react'
import ResultItem from '../ResultItem/ResultItem'
import styled from 'styled-components';

import {TextStyle} from '../../styles/TextStyle'
const ResultsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content:space-around;
  
  
`;
export default function Results(props) {
    const  predictions = props.predictions[0]
    return (
        
           <TextStyle>
             <h3>It's one of these</h3>
          
           <ResultsStyle>
           {predictions.map((prediction)=>
            <ResultItem key={prediction.label +prediction.probability}
            label={prediction.label}
            probability={prediction.probability}/>)
           
          }
        </ResultsStyle>
        </TextStyle>
    )
}
