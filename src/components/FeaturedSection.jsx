import React, { Component } from 'react';
import styled from 'styled-components';
import image1 from '../images/6.png'
import image2 from '../images/7.png'
import image3 from '../images/8.png'
import image4 from '../images/featured-spaces-4.jpg'

class FeaturedSection extends Component {
  render() {
    return (
      <Section>
        <TitleWrapper>
          <Title>Featured Spaces</Title>
          <StyledButton>Browse all spaces →</StyledButton>
        </TitleWrapper>
        <GalleryContainer>
          <ImgDiv>
            <Img src={image1} alt="test" />
            <Text>Norrmalm, Stockholm</Text>
            <Text1>Vasastan Pop up</Text1>
            <TextMobile>Space For Beautiful Things</TextMobile>
            <Text2>from 1 500 kr / day</Text2>
            <Text3>40 m2 • 13 064 visitors / day</Text3>
          </ImgDiv>

          <ImgDiv>
            <Img src={image2} alt="test" />
            <Text>Norrmalm, Stockholm</Text>
            <Text1>Space For Beautiful Things</Text1>
            <TextMobile>Space For Beautiful Things</TextMobile>
            <Text2>from 8 000 kr / day</Text2>
            <Text3>40 m2 • 3 296 visitors / day</Text3>
          </ImgDiv>

          <ImgDiv>
            <Img src={image3} alt="test" />
            <Text>Kungsholmen, Stockholm</Text>
            <Text1>Minimalistic Space</Text1>
            <TextMobile>Space For Beautiful Things</TextMobile>
            <Text2>from 5 000 kr / day</Text2>
            <Text3>60 m2</Text3>
          </ImgDiv>

          <ImgDiv>
            <Img src={image4} alt="test" />
            <Text>Kungsholmen, Stockholm</Text>
            <Text1>Minimalistic Space</Text1>
            <TextMobile>Space For Beautiful Things</TextMobile>
            <Text2>from 5 000 kr / day</Text2>
            <Text3>60 m2</Text3>
          </ImgDiv>
        </GalleryContainer>
      </Section>
    )
  }
}
export default FeaturedSection;

const Section = styled.section`
  width: 100%;

`
const TitleWrapper = styled.div`
  display: inline-block;
  width: 100%;
  height: 150px;

  @media(min-width: 768px) and (max-width: 1024px){
    text-align: center;
  }
`
const Title = styled.h4`
  display: inline-block;
  width: 239px;
  height: 38px;
  margin-top: 40px;
  margin-left: 275px;
  margin-bottom: 41px;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  color: #686058;

  @media(max-width: 767px){
    margin-top: 150px;
    margin-left: 16px;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    margin-top: 220px;
    margin-left: 16px;
    text-align: center;
  }

`
const StyledButton = styled.button`
  margin-top: 40px;
  margin-right: 130px;
  float: right;
  width: 208px;
  height: 45px;
  background: #0F6B5C;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #FFFFFF;
  border: none;

  @media(max-width: 767px){
    position: relative;
    float: none;
    width: 92%;
    height: 45px;
    top: 571px;
    left: 16px;
    margin: 0;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    position: relative;
    float: none;
    width: 87%;
    height: 45px;
    top: 1071px;
    left: 0;
    margin: 0;
  }
`

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`
const ImgDiv = styled.div`
  width: 377px;
  height: 483px;
  background: #F0EEEA;
  border-radius: 2px;
  margin: 10px;
  border-top: 8px solid #144745;

  @media(max-width: 767px){
    width: 164px;
    height: 212px;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    width: 377px;
    height: 483px;
  }
`
const Img = styled.img`
  width: 377px;
  height: 282px;

  @media(max-width: 767px){
    width: 164px;
    height: 121px;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    width: 377px;
    height: 282px;
  }
`
const Text = styled.h4`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  padding: 16px 24px 0 24px;
  text-transform: uppercase;
  color: #555C5E;

  @media(max-width: 767px){
    display: none;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    display: block
  }
`
const Text1 = styled.h4`
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  color: #3C4143;
  padding-left: 24px;

  @media(max-width: 767px){
    display: none;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    display: block
  }
`
const Text2 = styled.h4`
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  padding: 16px 24px;
  color: #242728;

  @media(max-width: 767px){
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: #242728;
    padding: 0 8px;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
    padding: 16px 24px;
    color: #242728;
  }

`
const TextMobile = styled.h4`
  display: none;
  @media(max-width: 767px){
    display: block;
    padding: 8px;
    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 120%;
    color: #3C4143;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    display: none
  }
`
const Text3 = styled.h4`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  padding: 30px 24px 5px 24px;
  color: #555C5E;

  @media(max-width: 767px){
    display: none;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    display: block
  }
`