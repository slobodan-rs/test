import React, { Component } from 'react';
import styled from 'styled-components';
import image4 from '../images/14.png'
import image5 from '../images/15.png'
import image6 from '../images/16.png'
import image7 from '../images/17.png'
import image8 from '../images/18.png'
const Section = styled.section`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  width: full-width;
  height: 474px;
  background-color: white;
  position: relative;
  top: 1550px;
}
@media only screen and (min-width: 1024px){
  width: full-width;
  height: 474px;
  background-color: white;
  position: relative;
  top: 220px;
}

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
@media only screen and (max-width: 768px) {
  /* For mobile phones: */

clear: both;
   display: inline-block;
   overflow: hidden;
   white-space: nowrap;
}
@media only screen and (min-width: 1024px){

}

`
const ImgContainer = styled.div`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */

clear: both;
   display: inline-block;
   overflow: hidden;
   white-space: nowrap;
}
@media only screen and (min-width: 1024px){
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0 0 0;
  margin-left: -100px;
}

`
const ImgDiv = styled.div`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
}
@media only screen and (min-width: 1024px){
margin-left: 20px;
}

`

const Img = styled.img`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */

  width: 100px;
  height: 200px;
}
@media only screen and (min-width: 1024px){
  width: 200px;
  height: 300px;
}

`
const Text = styled.h4`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
   position: relative;
   top: -150px;
   display: inline-block;
   overflow: hidden;
   white-space: nowrap;
   text-align: left;
   font-size: 16px;
}
@media only screen and (min-width: 1024px){
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;

  /* identical to box height, or 22px */

  /* Black */
  color: #242728;
  text-align: left;
}

`
const Text1 = styled.h4`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position: relative;
  top: -190px;
  margin-left: 100px;
  font-size: 12px;
}
font-family: Fira Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 150%;

/* or 24px */

/* Gray 2 */
color: #555C5E;
text-align: left;
`

const Button1 = styled.button`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
   display: inline-block;
   overflow: hidden;
   white-space: nowrap;
   width: 150px;
   height: 37px;
   font-size: 12px;
}
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
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position: relative;
  top: -150px;
  margin-left: 100px;
  font-size: 12px;
}
padding-top:17px;
`
const ButtonDiv1 = styled.div`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position: relative;
  top: -150px;
  margin-left: 100px;
  font-size: 12px;
}
padding-top:0px;
`

class GuideSection extends Component {
  render() {
    return (
      <div>
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
         </ButtonDiv>
         </ImgDiv>

         <ImgDiv>
         <Img src={image6} alt="test" />
           <Text>Ecommerce edition</Text>
        <Text1>Moving from online to <br />offline</Text1>
        <ButtonDiv1>
        <Button1>Download guide</Button1>
        </ButtonDiv1>
         </ImgDiv>

         <ImgDiv>
         <Img src={image7} alt="test" />
           <Text>Agency guide</Text>

         <Text1>Deliver the best experience <br /> for clients</Text1>
         <ButtonDiv1>
         <Button1>Download guide</Button1>
         </ButtonDiv1>
         </ImgDiv>

         <ImgDiv>
         <Img src={image8} alt="test" />
           <Text>How to create buzz</Text>
         <Text1>marketing and messaging <br /> success</Text1>
         <ButtonDiv1>
         <Button1>Download guide</Button1>
         </ButtonDiv1>
         </ImgDiv>
         </ImgContainer>
                   </GalleryContainer>
         </Container>
         </Section>

            </div>
    )
  }
}
export default GuideSection;
