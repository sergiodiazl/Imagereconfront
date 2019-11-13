import React from 'react'
import styled from 'styled-components';
const FooterStyle = styled.footer`
  display: flex;
  align-items:center;
  justify-content:space-around;
  background: #aaa;
min-height:10vh;

`;
export default function Footer() {
    return (
        <FooterStyle>
            im foother
        </FooterStyle>
    )
}
