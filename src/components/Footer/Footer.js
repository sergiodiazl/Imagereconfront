import React from 'react'
import styled from 'styled-components';
import {TextStyle as TStyle} from '../../styles/TextStyle'
import {LinkStyle,ALinkStyle} from '../../styles/LinkStyle'

const FooterStyle = styled.footer`
  display: flex;
  flex-flow:row ;
  align-items:center;
  justify-content:space-around;
  background: #f5f5dc;
  margin:0;

`;
const TextStyle = styled(TStyle)`
  margin:0;
`;

export default function Footer() {
  return (
    
    <FooterStyle>
     
     
       <ALinkStyle href="https://sergiodl.com" target='_blank'>
       <TextStyle> Sergio diaz Leguizamon 2019   </TextStyle>
       </ALinkStyle>

      <LinkStyle to='/about'>
         <TextStyle> How it works </TextStyle>  
         </LinkStyle>
      
      <ALinkStyle href="https://github.com/sergiodiazl/Imagereconfront" target='_blank'>
      <TextStyle> Code on Github  </TextStyle> </ALinkStyle>
      
      </FooterStyle>
   
  )
}
