import React, { Component } from 'react';
import styled from 'styled-components';

//Images
import icon1 from '../assets/icons/1.png'
import icon2 from '../assets/icons/2.png'
import icon3 from '../assets/icons/3.png'
import icon4 from '../assets/icons/4.png'
import icon5 from '../assets/icons/5.png'


class MoveinSection extends Component {
  render() {
    return (
      <Section>
        <Title>Make your space move-in-ready</Title>
        <ContainerWrapper>
          <Container>
            <Img src={icon5} alt="Design & furniture" />
            <MobileWrapper>
              <ContainerTitle>Design & furniture</ContainerTitle>
              <Dicription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis.</Dicription>
            </MobileWrapper>
          </Container>
          <Container>
            <Img src={icon4} alt="Staffing" />
            <MobileWrapper>
              <ContainerTitle>Staffing</ContainerTitle>
              <Dicription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis.</Dicription>
            </MobileWrapper>
          </Container>
          <Container>
            <Img src={icon1} alt="Influencer marketing" />
            <MobileWrapper>
              <ContainerTitle>Influencer marketing</ContainerTitle>
              <Dicription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis.</Dicription>
            </MobileWrapper>
          </Container>

          <Container>
            <Img src={icon3} alt="Cleaning" />
            <MobileWrapper>
              <ContainerTitle>Cleaning</ContainerTitle>
              <Dicription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis.</Dicription>
            </MobileWrapper>
          </Container>
          <Container>
            <Img src={icon2} alt="Data & Analytics" />
            <MobileWrapper>
              <ContainerTitle>Data & Analytics</ContainerTitle>
              <Dicription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis.</Dicription>
            </MobileWrapper>
          </Container>
        </ContainerWrapper>
      </Section >
    )
  }
}
export default MoveinSection;

//Styled Components
const Section = styled.section`
  width: 100%;
  height: 100%;
  background: #144745;
  padding-bottom: 71px;
`
const Title = styled.h4`
  padding-top: 71px;
  margin-left: 275px;
  margin-bottom: 41px;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  color: #FFF;

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
    width: 279px;
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
  width: 84px;
  height: 84px;
  margin: auto;
  text-align: center;
  display: block;
`
const ContainerTitle = styled.h4`
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  color: #F4F5F4;
  margin: 37px 24px 8px 0;

  @media(max-width: 767px){
    padding-left: 25px;
    width: 100%;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    width: 100%;
  }
`
const Dicription = styled.h4`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #D7D2CB;

  @media(max-width: 767px){
    padding-left: 25px;
    width: 100%;
  }
  @media(min-width: 768px) and (max-width: 1024px){
  }
`