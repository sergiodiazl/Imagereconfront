import React from 'react'

import styled from 'styled-components';
const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content:space-between;
  align-items:center;
  margin:5% ;
`;
export default function Container(props) {
    return (
        <ContainerStyle>
             {props.children}
        </ContainerStyle>
    )
}
