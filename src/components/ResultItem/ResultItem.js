import React from 'react'

import styled from 'styled-components';
const ItemStyle = styled.div`
  display: block;
  
  margin:3%;
  padding:3%;
  color:#fff;
  background:#0080ff;
  
`;
export default function ResultItem(props) {
    const {label,probability}=props
    return (
        <ItemStyle>
         <li>{label.replace(/[^a-z0-9+]+/gi, " ")}: {(probability*100).toFixed(2)}%</li>   
        </ItemStyle>
    )
}
