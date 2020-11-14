import React, { Component } from 'react';
import styled from 'styled-components';

//Images
import airbnb from '../assets/images/airbnb.svg'
import airbnbMobile from '../assets/images/airbnb-mobile.svg'

class ManageSection extends Component {
  render() {
    return (
      <Section>
        <Title>"We now manage our empty space just as someone would on AirBnB"</Title>
        <Image />
      </Section>
    )
  }
}
export default ManageSection;

// Styled Components
const Section = styled.section`
  width: 100%;
  height: 100%;
  text-align: center;
  background: #F0EEEA;
`
const Title = styled.h4`
  width: 866px;
  margin: 0 auto;
  padding: 71px 0 97px 0;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 120%;
  text-align: center;
  color: #686058;

  @media (max-width: 767px) {
    width: 343px;
    padding: 50px 0px 40px 0px;
    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 125%;
    text-align: center;
    color: #686058;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 31px 0 0 0;
    font-size: 32px;
    width: 100%;
  }
`
const Image = styled.div`
  padding-bottom: 158px;
  background: url(${airbnb});
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 767px) {
    padding-top: 40px;
    background: url(${airbnbMobile});
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    background-size: 90%;
  }
`
