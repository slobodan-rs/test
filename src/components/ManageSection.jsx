import React, { Component } from 'react';
import styled from 'styled-components';
import trusted from '../assets/trusted.png'
const Section = styled.section`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  width: full-width;
  height: 350px;
  background-color: #F0EEEA;
  position: relative;
  top: 1450px;
}
width: full-width;
height: 350px;
background-color: #F0EEEA;
position: relative;
top: 2550px;
`
const Container = styled.div``
const Row = styled.div``
const TitleContainer = styled.div`
`
const Title = styled.h1`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 120%;

  /* or 54px */
  text-align: center;

  /* Brown */
  color: #686058;
  padding-top:30px;
  text-align: center;
}
font-family: Charter;
font-style: normal;
font-weight: bold;
font-size: 45px;
line-height: 120%;

/* or 54px */
text-align: center;

/* Brown */
color: #686058;
padding-top:30px;
text-align: center;
`
const Image = styled.img`
padding: ${props => props.padd};
padding-left: 10%;
padding-bottom: ${props => props.bottom};
padding-top: ${props => props.top};
width: ${props => props.width};
`

class ManageSection extends Component {
  render() {
    return (
      <Section>
        <Container>
      <Row>
         <TitleContainer>
         <Title>
             <h4>"We now manage our empty space just <br /> as someone would on AirBnB"</h4>
         </Title>
         </TitleContainer>
        </Row>
        <Image src={trusted} width="75%" padd="1%"/>
         </Container>
         </Section>
    )
  }
}
export default ManageSection;
