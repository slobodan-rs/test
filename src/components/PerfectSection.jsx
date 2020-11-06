import React, { Component } from 'react';
import styled from 'styled-components';
const Section = styled.section`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  width: full-width;
  height: 350px;
  background-color: #F0EEEA;
  position: relative;
  top: 2490px;
}
width: full-width;
height: 480px;
background-color: #F0EEEA;
position: relative;
top: 3000px;
`
const Container = styled.div``
const Row = styled.div``
const TitleContainer = styled.div`
`

const Text = styled.h4`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position: relative;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;

  /* or 54px */

  color: #111118;
  padding-top:20px;

  text-align: left;
}
position: relative;
font-family: Charter;
font-style: normal;
font-weight: bold;
font-size: 45px;
line-height: 120%;

/* or 54px */

color: #111118;
padding-top:70px;

text-align: left;
left: 10%;
`
const Text1 = styled.h4`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position: relative;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;

  /* or 27px */

  color: #111118;

  text-align: left;
  margin-left: -20px;
}
position: relative;
font-family: Fira Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 150%;

/* or 27px */

color: #111118;

text-align: left;
left: 10%;
`
const ButtonDiv = styled.div`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position: relative;
  left: 10%;
  padding-top: 20px;
}
position: relative;
left: 60%;
padding-top: -100px;
`
const Button = styled.button`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position: relative;
  width: 250px;
  height: 64px;
}
position: relative;
width: 533px;
height: 64px;

/* Green */
background: #0F6B5C;
border-radius: 2px;

font-family: Fira Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;

/* identical to box height, or 125% */
text-align: center;
letter-spacing: 0.5px;
text-transform: uppercase;

/* White */
color: #FFFFFF;
`
class PerfectSection extends Component {
  render() {
    return (
      <Section>
        <Container>
      <Row>
         <TitleContainer>
         <Text>
             <h4>Need help finding <br /> the perfect space?</h4>
         </Text>
         <Text1>
             <h4>Contact our retail expert and that <br /> will listen to your needs and suggest the appropriate spaces for you.</h4>
         </Text1>
         </TitleContainer>

        </Row>
         </Container>
         <ButtonDiv>
         <Button>Contact our retail expert</Button>
         </ButtonDiv>
         </Section>
    )
  }
}
export default PerfectSection;
