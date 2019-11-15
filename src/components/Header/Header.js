import React from 'react'
import styled from 'styled-components';
import {TextStyle} from '../../styles/TextStyle'
const HeaderStyle = styled.header`
  display: flex;
  lign-items:center;
  justify-content:space-around;
  background: #f5f5dc;


`;
export default function Header() {
    return (
        <HeaderStyle>
           < TextStyle><h1>Imagenet Image classification</h1></TextStyle>
        </HeaderStyle>
    )
}
