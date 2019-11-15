import styled from 'styled-components'

export const ButtonStyle = styled.button`
cursor: pointer;
font-family: 'Poppins', sans-serif;
color:#fff;
background-color: palevioletred;
font-size: inherit;
font-weight: 600;
margin-bottom: 1rem;
outline: none;
padding: 1rem 50px;
border-radius: 5px;
border: 2px solid palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
transition: 0.5s all ease-out;
&:hover {
  background-color: #fff;
  color:palevioletred;
}
`;

export const YesButton=styled(ButtonStyle)`

background-color: Chartreuse ;
border: 2px solid Chartreuse ;
&:hover {
  background-color: #fff;
  color:Chartreuse ;
}
`;
export const NoButton=styled(ButtonStyle)`

background-color: Red ;
border: 2px solid Red ;
&:hover {
  background-color: #fff;
  color:Red ;
}
`;

export const BackButton=styled(ButtonStyle)`

background-color: #0080ff; ;
border: 2px solid #0080ff;
&:hover {
  background-color: #fff;
  color:#0080ff ;
}
`;