import React, { Component } from 'react';
import styled from 'styled-components';

//Images
import chart1 from '../assets/images/chart1.svg'
import chart2 from '../assets/images/chart2.svg'
import chart3 from '../assets/images/chart3.svg'

class MeasureSection extends Component {
  render() {
    return (
      <Section>
        <Title>Measure your success</Title>
        <ContainerWrapper>
          <Container>
            <Img src={chart1} alt="Daily foot Traffic" />
            <ChartTitle>Daily foot traffic</ChartTitle>
            <Discription>Understand how your customer interacts with the city,<br /> how they move around and where they shop.</Discription>
          </Container>

          <Container>
            <Img src={chart2} alt="Conversion per hour" />
            <ChartTitle>Conversion per hour</ChartTitle>
            <Discription>Track the engagement of your store by understanding<br /> who enters it and how long they stay.</Discription>
          </Container>

          <Container>
            <Img src={chart3} alt="Demographics" recenter />
            <ChartTitle>Demographics</ChartTitle>
            <Discription>Understand who your customers are, segmented by age,<br /> gender, spend.</Discription>
          </Container>

        </ContainerWrapper>
      </Section>
    )
  }
}
export default MeasureSection;

// Styled Components
const Section = styled.section`
  width: 100%;

`
const Title = styled.h4`
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
    margin-left: 16px;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    margin-left: 16px;
    text-align: center;
  }

`
const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  @media(max-width: 767px){
    margin-left: 16px;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    width: 100%;
  }
`
const Container = styled.div`
  width: 422px;
  height: 100%;
  border-radius: 2px;
  margin: 10px;

`
const Img = styled.img`
  width: 422px;
  height: 262px;
  padding-left: ${({ recenter }) => recenter ? '10px' : '0'};

  @media(max-width: 767px){
    width: 343px;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    text-align: center;
  }
`
const ChartTitle = styled.h4`
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  color: #111118;
  padding: 37px 0 8px 0;
  
  @media(max-width: 767px){
    padding: 0;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    text-align: center;
  }
`
const Discription = styled.h4`
  padding: 8px 0 80px 0;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #111118;

  @media(max-width: 767px){
    padding: 18px 10px 65px 0;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    text-align: center;
  }
`