import React, { Component } from 'react';
import styled from 'styled-components';
import icon1 from '../icons/1.png'
import icon2 from '../icons/2.png'
import icon3 from '../icons/3.png'
import icon4 from '../icons/4.png'
import icon5 from '../icons/5.png'
const Section = styled.section`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  width: full-width;
  height: 800px;
  background-color: #144745;
  position: relative;
  top: 1500px;
}
width: full-width;
height: 450px;
background-color: #144745;
position: relative;
top: 2600px;
`
const Container = styled.div``
const Row = styled.div``
const TitleContainer = styled.div`
`
const Title = styled.h1`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position: relative;
  left: 10%;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;

  /* or 38px */

  color: #FFFFFF;
  padding-top: 20px;
}
position: relative;
left: 10%;
font-family: Charter;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 120%;

/* or 38px */

color: #FFFFFF;
padding-top: 20px;
`

const GalleryContainer = styled.div`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  clear: both;
   display: inline-block;
   overflow: hidden;
   white-space: nowrap;
}
padding-top: 10px;
`
const ImgContainer = styled.div`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  clear: both;
   display: inline-block;
   overflow: hidden;
   white-space: nowrap;
}
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0 0 0;
`
const ImgDiv = styled.div`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
margin-left: 20px;
`

const Img = styled.img`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
  width: 50px;
  height: 50px;
`
const Text = styled.h4`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  margin-left: 20px;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 120%;

  /* identical to box height, or 22px */

  color: #F4F5F4;
  clear: both;
   display: inline-block;
   overflow: hidden;
   white-space: nowrap;
}
font-family: Charter;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 120%;

/* identical to box height, or 22px */

color: #F4F5F4;


margin-right: 30px;
`
const Text1 = styled.h4`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  color: white;
  margin-left: 70px;
  margin-top: -25px;

  /* Body Small */
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;

  /* or 24px */

  color: #D7D2CB;
}
font-family: Fira Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 150%;

/* or 24px */

color: #D7D2CB;
margin-right: 30px;
`
class MoveinSection extends Component {
  render() {
    return (
      <Section>
        <Container>
      <Row>
         <TitleContainer>
         <Title>
             <h4>Make your space move-in-ready</h4>
         </Title>
         </TitleContainer>
        </Row>
         <GalleryContainer>

                  <ImgContainer>
                  <ImgDiv>
                  <Img src={icon5} alt="test" />
                  <Text>Design & furniture</Text>
                  <Text1>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit. Ut turpis.</Text1>
                  </ImgDiv>
                  <ImgDiv>
                  <Img src={icon4} alt="test" />
                    <Text>Staffing</Text>
                    <Text1>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit. Ut turpis.</Text1>
                  </ImgDiv>
                  <ImgDiv>
                  <Img src={icon1} alt="test" />
                    <Text>Influencer marketing</Text>
                  <Text1>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit. Ut turpis.</Text1>
                  </ImgDiv>

                  <ImgDiv>
                  <Img src={icon3} alt="test" />
                    <Text>Cleaning</Text>
                <Text1>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit. Ut turpis.</Text1>
                  </ImgDiv>
                  <ImgDiv>
                  <Img src={icon2} alt="test" />
                    <Text>Data & Analytics</Text>
                  <Text1>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit. Ut turpis.</Text1>
                  </ImgDiv>
                  </ImgContainer>
                   </GalleryContainer>
         </Container>
         </Section>
    )
  }
}
export default MoveinSection;
