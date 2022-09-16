import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react'
import styled from 'styled-components'
import { Model } from '../components/Scene';


const Container = styled.div`
width: 100vw;
height: 100vh;

position: fixed;
top: 0;
z-index: 1;
background-color: transparent;

`;
const PhoneModel = () => {
  return (
    <Container id = 'phone-model'>
      <Canvas camera={{fov: 14}}>
        <ambientLight intensity={1.24} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null} >
           <Model /> 
        </Suspense>
      

        <Environment preset="night"/>
        {/* <OrbitControls /> */}
      </Canvas>
    </Container>
  );
}

export default PhoneModel