import React from 'react'
import styled from 'styled-components';
const FooterStyle = styled.footer`
  display: flex;
  align-items:center;
  justify-content:space-around;
  background: #f5f5dc;
min-height:10vh;

`;
export default function Footer() {
    return (
        <FooterStyle>
            <p>Sergio diaz Leguizamon 2019
 </p>       
 <p><a href="https://github.com/sergiodiazl/Imagereconfront">Code on Github</a></p></FooterStyle>
    )
}
