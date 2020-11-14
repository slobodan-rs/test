import React, { Component } from 'react';
import styled from 'styled-components';

//Images
import arrow from '../assets/icons/success-arrow.svg'
import location from '../assets/icons/success-location.svg'
import image4 from '../assets/images/12.png'
import image5 from '../assets/images/13.png'


class SuccessSection extends Component {
  render() {
    return (
      <Section>
        <Header>Success stories</Header>
        <ContainerWrapper>
          <Container>
            <Img src={image4} alt="test" />
            <SubContainer>
              <SubTitle>Voi</SubTitle>
              <Title>Custom helmets in an art gallery</Title>
              <Discription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque magna duis rhoncus tincidunt est parturient tortor proin. Hac eleifend placerat a sem adipiscing iaculis. Tincidunt convallis amet amet at et mi arcu faucibus luctus.</Discription>
              <Links>
                <ReadMore>Read More</ReadMore>
                <ViewSpace>View Space</ViewSpace>
              </Links>
            </SubContainer>

          </Container>
          <Container>
            <Img src={image5} alt="test" />
            <SubContainer>
              <SubTitle>Babymocs</SubTitle>

              <Title>Walking the walk</Title>
              <Discription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque magna duis rhoncus tincidunt est parturient tortor proin. Hac eleifend placerat a sem adipiscing iaculis. Tincidunt convallis amet amet at et mi arcu faucibus luctus.</Discription>
              <Links>
                <ReadMore>Read More</ReadMore>
                <ViewSpace>View Space</ViewSpace>
              </Links>
            </SubContainer>
          </Container>
        </ContainerWrapper>
        <ButtonDiv>
          <Button>EXPLORE OUR BLOG</Button>
        </ButtonDiv>
      </Section>
    )
  }
}
export default SuccessSection;

// Styled Components

const Section = styled.section`
  width: 100%;

`
const Header = styled.h4`
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  color: #686058;
  margin : 80px 0 41px 275px;

  @media(max-width: 767px){
    width: 223px;
    margin-left: 16px;
    font-size: 28px;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    margin-left: 16px;
    font-size: 28px;
    text-align: center;
  }
`
const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 20px;

  @media(max-width: 767px){
    margin: 0;
    width: 100%;
  }
  @media(min-width: 768px) and (max-width: 1024px){
  }
`
const Container = styled.div`
  width: 40%;

  @media(max-width: 767px){
    margin: 0;
    width: 100%;
    height: 476px;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    margin: 0 auto;
    width: 100%;
    height: 700px;
  }
`
const Img = styled.img`
  width: 582px;

  @media(max-width: 767px){
    margin: 0;
    width: 100%;
  }
`
const SubContainer = styled.div`
  width: 503px;
  background: #F0EEEA;
  border-radius: 2px;
  padding: 40px 0;
  margin: -167px 0 0 142px;
  z-index: 1;
  position: relative;

  @media(max-width: 767px){
    margin: -100px auto;
    width: 95%;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    margin: -167px 0 0 152px;
    width: 80%;
  }
`
const SubTitle = styled.p`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  text-transform: uppercase;
  color: #555C5E;
  margin: 2px 48px;

  @media(max-width: 767px){
    margin: 2px 24px 16px 24px;
    
  }
`
const Title = styled.h5`
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  color: #111118;
  margin: 2px 48px 16px 48px;
  @media(max-width: 767px){
    margin: 2px 24px 16px 24px;
    width: 80%;
  }
`
const Discription = styled.div`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  color: #111118;
  margin: 16px 48px;

  @media(max-width: 767px){
    display: none;
  }
`
const Links = styled.div`
  display: inline-block;
  margin-top: 30px;
  margin: 16px 48px;

  @media(max-width: 767px){
    width: 100%;
    margin:0;
  }
`
const ReadMore = styled.a`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #0F6B5C;
  padding-left: 30px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: left;

  @media(max-width: 767px){
    margin-left: 30px;
    padding-left: 30px;
    background-position-x: -5px;
    background-position-y: 3px;
  }
`
const ViewSpace = styled.a`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #0F6B5C;
  margin-left: 20px;
  padding: 0 20px;
  background-image: url(${location});
  background-repeat: no-repeat;
  background-position: left;

  @media(max-width: 767px){
    margin-right: 10px;
    background-position-x: 0px;
    background-position-y: 0px;
    float: right;
    padding-left: 20px;
  }
`
const ButtonDiv = styled.div`
  margin: 63px 0;
  width: 100%;
  height: 64px;
  text-align: center;

  @media(max-width: 768px){
    margin: 0;
  }
  @media(min-width: 769px) and (max-width: 1024px){
    margin: 0;
  }
`
const Button = styled.button`
  width: 533px;
  height: 64px;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #FFFFFF;
  background: #0F6B5C;
  border: none;

  @media(max-width: 768px){
    width: 90%;
  }
`