import React, { Component } from 'react';
import styled from 'styled-components';

// Images
import image4 from '../assets/images/14.png'
import image5 from '../assets/images/15.png'
import image6 from '../assets/images/16.png'
import image7 from '../assets/images/17.png'
import image8 from '../assets/images/18.png'

class GuideSection extends Component {
  render() {
    return (
      <Section>
        <Title>Free guides to your success</Title>
        <ContainerWrapper>

          <Container>
            <Img src={image8} alt="How to get started" />
            <MobileWrapper>
              <ContainerTitle>How to get started</ContainerTitle>
              <Dicription>An introduction to pop-ups</Dicription>
              <Button>Download Guide</Button>
            </MobileWrapper>
          </Container>

          <Container>
            <Img src={image7} alt="Fashion edition" />
            <MobileWrapper>
              <ContainerTitle>Fashion edition</ContainerTitle>
              <Dicription>A guide for fashion brands</Dicription>
              <Button>Download Guide</Button>
            </MobileWrapper>
          </Container>

          <Container>
            <Img src={image6} alt="Ecommerce edition" />
            <MobileWrapper>
              <ContainerTitle>Ecommerce edition</ContainerTitle>
              <Dicription>Moving from online to offline</Dicription>
              <Button>Download Guide</Button>
            </MobileWrapper>
          </Container>

          <Container>
            <Img src={image4} alt="Agency guide" />
            <MobileWrapper>
              <ContainerTitle>Agency guide</ContainerTitle>
              <Dicription>Deliver the best experience for clients</Dicription>
              <Button>Download Guide</Button>
            </MobileWrapper>
          </Container>

          <Container>
            <Img src={image5} alt="How to create buzz" />
            <MobileWrapper>
              <ContainerTitle>How to create buzz</ContainerTitle>
              <Dicription>marketing and messaging success</Dicription>
              <Button>Download Guide</Button>
            </MobileWrapper>
          </Container>

        </ContainerWrapper>
      </Section >
    )
  }
}
export default GuideSection;

//Styled Components
const Section = styled.section`
  width: 100%;
  height: 100%;
  padding-bottom: 71px;
`
const Title = styled.h4`
  margin-left: 275px;
  margin-bottom: 41px;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  color: #686058;

  @media(max-width: 767px){
    width: 263px;
    margin-left: 16px;
    margin-top: 96px;
    font-size: 28px;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    margin-left: 16px;
    font-size: 28px;
    text-align: center;
  }
`
const ContainerWrapper = styled.div`
  margin: 0 175px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  @media(max-width: 767px){
    margin: 0 16px;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    
  }
`
const Container = styled.div`
  width: 199px;

  @media(max-width: 767px){
    padding: 30px 0;
    width: 343px;
    display: flex;
    align-items: baseline;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    padding: 30px 0;
  }
`
const MobileWrapper = styled.div`

  @media(min-width: 768px) and (max-width: 1024px){
    display: block;
  }
`
const Img = styled.img`
  width: 199px;
  height: 280px;
  margin: auto;
  text-align: center;
  display: block;

  @media(max-width: 767px){
    margin-top: 30px;
    width: 112px;
    height: 158px;
  }

  @media(min-width: 768px) and (max-width: 1024px){
  
  
  }
`
const ContainerTitle = styled.h4`
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  color: #242728;
  margin: 37px 24px 8px 0;

  @media(max-width: 767px){
    padding-left: 20px;
    width: 100%;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    width: 100%;
  }
`
const Dicription = styled.h4`
  width: 199px;
  height: 49px;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #555C5E;

  @media(max-width: 767px){
    padding-left: 20px;
    width: 207px;
    height: 48px;
  }
  @media(min-width: 768px) and (max-width: 1024px){
  }
`
const Button = styled.button`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #0F6B5C;
  width: 199px;
  height: 67px;
  background-color: #FFF;
  border: 1px solid  #0F6B5C;

  @media(max-width: 767px){
    margin-left: 20px;
    height: 52px;
    width: 207px;
  }
  @media(min-width: 768px) and (max-width: 1024px){
  }
`