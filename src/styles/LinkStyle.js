import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const LinkStyle=styled(Link)`
text-decoration:none;
background-color: Chartreuse ;
border: 2px solid Chartreuse ;
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}

`;