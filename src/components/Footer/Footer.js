import React from 'react'
import styled from 'styled-components';
import {TextStyle} from '../../styles/TextStyle'
import {LinkStyle,ALinkStyle} from '../../styles/LinkStyle'

const FooterStyle = styled.footer`
  display: flex;
  flex-flow:row wrap;
  align-items:center;
  justify-content:space-around;
  background: #f5f5dc;
  

`;

export default function Footer() {
  return (
    <FooterStyle>
     
      <TextStyle>
       <ALinkStyle href="https://sergiodl.herokuapp.com" target='_blank'> Sergio diaz Leguizamon 2019</ALinkStyle>

      <LinkStyle to='/about'>How it works </LinkStyle>
      
      <ALinkStyle href="https://github.com/sergiodiazl/Imagereconfront" target='_blank'>Code on Github </ALinkStyle>
      </TextStyle>
      </FooterStyle>
  )
}
