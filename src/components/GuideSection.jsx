import React, { Component } from 'react';
import styled from 'styled-components';
import image4 from '../images/14.png'
import image5 from '../images/15.png'
import image6 from '../images/16.png'
import image7 from '../images/17.png'
import image8 from '../images/18.png'
const Section = styled.section`
width: full-width;
height: 474px;
background-color: white;
position: relative;
top: 2700px;
`
const Container = styled.div``
const Row = styled.div``
const TitleContainer = styled.div`
`
const Title = styled.h1`
position: relative;
position: relative;
left: 10%;
font-family: Charter;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 120%;

/* or 38px */

color: #686058;
`

const GalleryContainer = styled.div`
margin-top: 10px;
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
  width: 200px;
  height: 300px;
`
const Text = styled.h4`
font-family: Charter;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 120%;

/* identical to box height, or 22px */

/* Black */
color: #242728;
text-align: left;
`
const Text1 = styled.h4`
font-family: Fira Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 150%;

/* or 24px */

/* Gray 2 */
color: #555C5E;
text-align: left;
`
const Button = styled.button`
position: absolute;
width: 199px;
height: 67px;

border: 1px solid #0F6B5C;
box-sizing: border-box;
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

color: #0F6B5C;


`
const Button1 = styled.button`
position: absolute;
width: 199px;
height: 67px;

border: 1px solid #0F6B5C;
box-sizing: border-box;
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

color: #0F6B5C;


`
const ButtonDiv = styled.div`
padding-top:25px;
`
class GuideSection extends Component {
  render() {
    return (
      <Section>
        <Container>
      <Row>
         <TitleContainer>
         <Title>
             <h4>Free guide for your success</h4>
         </Title>
         </TitleContainer>
        </Row>
         <GalleryContainer>

         <ImgContainer>
         <ImgDiv>
         <Img src={image4} alt="test" />
           <Text>How to get started</Text>
         <Text1>An introduction to pop-ups</Text1>
         <ButtonDiv>
         <Button1>Download guide</Button1>
         </ButtonDiv>
         </ImgDiv>

         <ImgDiv>
         <Img src={image5} alt="test" />
           <Text>Fashion edition</Text>
         <Text1>A guide for fashion brands</Text1>
         <ButtonDiv>
         <Button1>Download guide</Button1>
         </ButtonDiv><Button1>Download guide</Button1>
         </ImgDiv>

         <ImgDiv>
         <Img src={image6} alt="test" />
           <Text>Ecommerce edition</Text>
        <Text1>Moving from online to <br />offline</Text1>
          <Button>Download guide</Button>
         </ImgDiv>

         <ImgDiv>
         <Img src={image7} alt="test" />
           <Text>Agency guide</Text>

         <Text1>Deliver the best experience <br /> for clients</Text1>
         <Button>Download guide</Button>
         </ImgDiv>

         <ImgDiv>
         <Img src={image8} alt="test" />
           <Text>How to create buzz</Text>
         <Text>marketing and messaging <br /> success</Text>
         <Button>Download guide</Button>
         </ImgDiv>
         </ImgContainer>
                   </GalleryContainer>
         </Container>
         </Section>
    )
  }
}
export default GuideSection;
