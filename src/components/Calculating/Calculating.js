import React from 'react'

import styled,{keyframes} from 'styled-components';
import {TextStyle} from '../../styles/TextStyle'
// Create the keyframes
const grow = keyframes`
  from {
    transform: scale(1);
  }
  to {
     transform: scale(1.5);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const EmojiStyle = styled.div`
  display: inline-block;
  animation: ${grow} 0.5s alternate infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export default function Calculating() {
    return (
        <TextStyle>
            <p>Thinking <EmojiStyle><span role='img'aria-label='thinking emoji'>&#129300;</span></EmojiStyle> </p>
        </TextStyle>
    )
}
