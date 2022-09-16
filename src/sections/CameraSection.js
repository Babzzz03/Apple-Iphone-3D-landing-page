import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
width: 100vw;
min-height: 100vh;
position: relative;
z-index: 1;
background-color: var(--white) ;
overflow: hidden;
`;
const CameraSection = () => {
  return (
    <Section>
        <video src=""></video>
    </Section>
  )
}

export default CameraSection