import React from 'react'

import styled,{keyframes} from 'styled-components';
import {TextStyle} from '../../styles/TextStyle'
const fadeIn=keyframes`
0%{opacity:0}
100%{opacity:1}

`;
const ItemStyle = styled.div`
  display: block;
  border-radius:3%;
  margin:3% 0%;
  color:#fff;
  background:#0080ff;
  animation:${fadeIn} 0.5s ease-in 1;
  
`;
export default function ResultItem(props) {
    const {label,probability}=props
    return (
        <ItemStyle>
         <TextStyle>{label.replace(/[^a-z0-9+]+/gi, " ")}: {(probability*100).toFixed(2)}%</TextStyle> 
        </ItemStyle>
    )
}
