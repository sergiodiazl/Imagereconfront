import React from 'react'
import styled from 'styled-components';
const HeaderStyle = styled.header`
  display: flex;
  lign-items:center;
  justify-content:space-around;
  background: #aaa;
min-height:10vh;

`;
export default function Header() {
    return (
        <HeaderStyle>
            Imagenet Image classification
        </HeaderStyle>
    )
}
