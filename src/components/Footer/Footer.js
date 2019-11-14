import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const FooterStyle = styled.footer`
  display: flex;
  align-items:center;
  justify-content:space-around;
  background: #f5f5dc;


`;
export default function Footer() {
  return (
    <FooterStyle>
      <p>Sergio diaz Leguizamon 2019
 </p>
      <Link to='/about'>How it works </Link>
      <p><a href="https://github.com/sergiodiazl/Imagereconfront">Code on Github</a></p></FooterStyle>
  )
}
