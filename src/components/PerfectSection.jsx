import React, { Component } from 'react';
import styled from 'styled-components';


class PerfectSection extends Component {
  render() {
    return (
      <Section>
        <ContainerWrapper>
          <Container>
            <Title>Need help finding the perfect space?</Title>
            <Discription>Contact our retail expert and that will listen to your needs and suggest the appropriate spaces for you.</Discription>
          </Container>
          <Button>Contact our retail expert</Button>
        </ContainerWrapper>
      </Section>
    )
  }
}
export default PerfectSection;

// Styled Components 

const Section = styled.section`
  width: 100%;
  height: 480px;

  @media(max-width: 767px){
    height: 100%;
  }
`
const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`
const Container = styled.div`
  width: 422px;
  margin-top: 148px;

  @media(max-width: 767px){
    margin-top: 48px;
    margin-left: 16px;
  }
`
const Title = styled.h3`
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 120%;
  color: #111118;

  @media(max-width: 767px){
    font-size: 32px;
    margin: 0 16px 0 0;
  }
`
const Discription = styled.p`
  padding-top: 24px;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  color: #111118;
`
const Button = styled.button`
  margin-top: 213px;
  width: 533px;
  height: 64px;
  background: #0F6B5C;
  border: none;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #FFFFFF;

  @media(max-width: 767px){
    width: 90%;
    margin-top: 24px;
  }
`
