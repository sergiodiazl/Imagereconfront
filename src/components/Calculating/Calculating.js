import React from 'react'

import styled,{keyframes} from 'styled-components';
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
        <div>
            <p>Thinking <EmojiStyle>&#129300;</EmojiStyle> </p>
        </div>
    )
}
