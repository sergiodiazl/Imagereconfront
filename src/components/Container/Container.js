import React from 'react'

import styled from 'styled-components';
const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow:1;
  justify-content:space-between;
  align-items:center;
  margin-top:5%;
`;
export default function Container(props) {
    return (
        <ContainerStyle>
             {props.children}
        </ContainerStyle>
    )
}
