import React from 'react'
import styled from 'styled-components';
import {TextStyle} from '../../styles/TextStyle'
import {LinkStyle} from '../../styles/LinkStyle'

const FooterStyle = styled.footer`
  display: flex;
  align-items:center;
  justify-content:space-around;
  background: #f5f5dc;


`;

export default function Footer() {
  return (
    <FooterStyle>
     
      <TextStyle>Sergio diaz Leguizamon 2019

      <LinkStyle to='/about'>How it works </LinkStyle>
      <LinkStyle href="https://github.com/sergiodiazl/Imagereconfront">Code on Github</LinkStyle>
      </TextStyle>
      </FooterStyle>
  )
}
