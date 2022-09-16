import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import ScrollTrigger from "gsap/ScrollTrigger";
const Section = styled.section`
width: 100vw;
height: 100vh;
position: relative;
display: flex;
align-items: center;
justify-content: center;
`
const TextContainer = styled.div`
width: 100vw;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: var(--dark);
color: var(--white);
`;

const moveUp = keyframes`
 100% {
    transform: translateY(0);
 }
`;

const Text = styled.p`
  width: 50%;
  font-size: var(--fontlg);
  position: relative;
  height: var(--fontmd);
  overflow: hidden;
  span {
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${moveUp};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: ${props => props.delay};
    font-family: var(--fontL);
    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .author {
    width: 100%;
    text-align: end;
    background-image: linear-gradient(-180deg, var(--gradient));
  }
`;
const Quote = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef  = useRef(null)
  useLayoutEffect(() => {
    let Elem = sectionRef.current
   let trigger =  ScrollTrigger.create({
     trigger: Elem,
     start: "top top",
     pin: true,
     pinSpacing: false,
   
   });
   return () =>{ if(trigger) trigger.kill();}
  }, [])
  return (
    <Section ref={sectionRef}>
      <TextContainer>
        <Text delay="0s">
          <span>&#8220; You can't connect the dots looking forward;</span>
        </Text>
        <Text delay="0.4s">
          <span>
            &nbsp;&nbsp;&nbsp;you can only connect them looking backward.
          </span>
        </Text>
        <Text delay="0.8s">
          <span> &nbsp;&nbsp;&nbsp;so you have to trust that the dots </span>
        </Text>
        <Text delay="1.2s">
          <span>
            &nbsp;&nbsp;&nbsp;will somehow connect in your future. &#8220;
          </span>
        </Text>
        <Text delay="1.6s">
          <span className="author">&#x23AF; Steved Jobs</span>
        </Text>
      </TextContainer>
    </Section>
  );
}

export default Quote