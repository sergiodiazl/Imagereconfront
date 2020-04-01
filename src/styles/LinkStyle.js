import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const LinkStyle=styled(Link)`
display:block;
text-decoration:none;
color: #f15d22 ;
transition: 0.5s all ease-out;
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
&:hover {
    
   
    border-radius:5px;
    background-color: #f15d22 ;
    color:#fff;
  }
`;
export const BackLinkStyle=styled(Link)`
text-decoration:none;
color:inherit;
margin:5%;
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
&:hover {

    color:inherit;
  }
`;
export const ALinkStyle=styled.a`
text-decoration:none;
color: #f15d22 ;
margin:1%;
transition: 0.5s all ease-out;
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
&:hover {
    
    border:2px solid #f15d22 ;
    border-radius:5px;
    background-color: #f15d22 ;
    color:#fff;
  }
`;