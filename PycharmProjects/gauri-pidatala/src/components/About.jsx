import React from 'react';
import styled, { keyframes } from 'styled-components';

const WavySection = styled.div`
  padding: 20px;
  margin: 20px;
  border: none;
  border-radius: 0;
  background-size: cover;
  position: relative;
  color: #333;
  overflow: hidden;
  background-color: #f0ead6;
`;

const PlaneAnimationContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

const hop = keyframes`
  0%, 100% { transform: translate(100px, 300px); }
  33% { transform: translate(400px, 200px); }
  66% { transform: translate(700px, 100px); }
`;

const SvgContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  .plane {
    animation: ${hop} 10s infinite;
  }
`;

const About = () => {
  return (
    // <WavySection>
      <div>
      <h1>About</h1>
      <p>About our website.</p>
      <PlaneAnimationContainer>
        <SvgContainer>
          <img src="/public/globe-plane.svg" alt="Plane hopping over locations" />
        </SvgContainer>
      </PlaneAnimationContainer>
          </div>
    // </WavySection>
  );
};

export default About;
