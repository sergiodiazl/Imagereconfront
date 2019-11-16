import React from 'react'
import styled from 'styled-components';
import {TextStyle} from '../../styles/TextStyle'
import {LinkStyle as Link}from '../../styles/LinkStyle'
const HeaderStyle = styled.header`
  display: flex;
  justify-content:space-around;
  background-color: #f5f5dc;


`;
const LinkStyle= styled(Link)`
margin:0;

&:hover {
    
  border:none;
  border-radius:5px;
  background-color:#f5f5dc;
  color: #f15d22 ;
}


`;
export default function Header() {
    return (
        <HeaderStyle>
          <LinkStyle to='/'>
            <TextStyle>
         <h1>Imagenet Image classification</h1> 
          </TextStyle>
          </LinkStyle>
          </HeaderStyle>
    )
}
