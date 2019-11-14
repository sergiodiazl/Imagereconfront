import React from 'react'
import styled from 'styled-components'
const ButtonFlex=styled.div`
display:flex
`;
const Button=styled.button`
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
  
}
`;
const YesButton=styled(Button)`

background-color: Chartreuse ;
border: 2px solid Chartreuse ;
&:hover {
  background-color: #fff;
  color:Chartreuse ;
}
`;
const NoButton=styled(Button)`

background-color: Red ;
border: 2px solid Red ;
&:hover {
  background-color: #fff;
  color:Red ;
}
`;

export default function Survey(props) {
    const {voteYes,voteNo}=props;
    return (
        <div>
             Did i guess?
                <ButtonFlex>
                    <YesButton onClick={voteYes}>&#10004; Yes</YesButton>
                    <NoButton  onClick={voteNo}>&#10008;No</NoButton>
                </ButtonFlex>
        </div>
    )
}

