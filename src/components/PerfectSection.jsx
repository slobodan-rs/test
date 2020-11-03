import React, { Component } from 'react';
import styled from 'styled-components';
import realestate from '../icons/realestate.png'
import icon from '../icons/Icon.png'
import message from '../icons/Message.png'
import iconreal from '../icons/Iconreal.png'
import shop from '../icons/Shop.png'
import TrustedSVG from './TrustedSVG.jsx'
const Section = styled.section`
width: full-width;
height: 480px;
background-color: #F0EEEA;
position: relative;
top: 2840px;
`
const Container = styled.div``
const Row = styled.div``
const TitleContainer = styled.div`
`
const Title = styled.h1`
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

const ClientContainer = styled.div`
margin-top: 100px;
`
const ImgContainer = styled.div`

  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0 0 0;
`
const ImgDiv = styled.div`

margin-left: 20px;
`

const Img = styled.img`
  width: 50px;
  height: 50px;
`
const Text = styled.h4`
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
position: relative;
left: 60%;
padding-top: -100px;
`
const Button = styled.button`

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
             <h4>Contact our retail expert and that will listen to your <br />needs and suggest the appropriate spaces for you.</h4>
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
