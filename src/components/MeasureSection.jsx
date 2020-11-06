import React, { Component } from 'react';
import styled from 'styled-components';
import image4 from '../images/9.png'
import image5 from '../images/10.png'
import image6 from '../images/11.png'
const Section = styled.section`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position: relative;
  top: 1450px;
}
@media only screen and (min-width: 1024px){

  position: relative;
  top: 1500px;
}

`
const Container = styled.div``
const Row = styled.div``
const TitleContainer = styled.div``
const Title = styled.h1`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position: relative;
  left: 3%;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;

  /* or 38px */

  color: #686058;
}
@media only screen and (min-width: 1024px){
  position: relative;
  left: 10%;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;

  /* or 38px */

  color: #686058;
}

`

const GalleryContainer = styled.div``
const ImgContainer = styled.div`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0 0 0;
}
@media only screen and (min-width: 1024px){
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0 0 0;
}

`
const ImgDiv = styled.div`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
margin-left: 5px;
}
@media only screen and (min-width: 1024px) and (max-width: 1600px){
  position: relative;
  left: -60px;
}

`
const ImgDiv1 = styled.div`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
margin-left: 5px;
}
@media only screen and (min-width: 1024px){
  position: relative;
left: 0%;
}

`
const ImgDiv2 = styled.div`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
margin-left: 5px;
}
@media only screen and (min-width: 1024px){
  position: relative;
  left: 3%;
}

`
const Img = styled.img`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
 width: 300px;
 height: 200px;
}
@media only screen and (min-width: 1024px){
  width: 300px;
  height: 150px;
}
`
const Text = styled.h4`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  text-align: left;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  color: #111118;
}
@media only screen and (min-width: 1024px){
  text-align: left;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;

  /* identical to box height, or 22px */

  color: #111118;
}

`
const Text1 = styled.h4`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  text-align: left;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;

  /* or 24px */

  color: #111118;
}
@media only screen and (min-width: 1024px){
  text-align: left;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;

  /* or 24px */

  color: #111118;
}

`
class MeasureSection extends Component {
  render() {
    return (
      <Section>
        <Container>
         <Row>
          <TitleContainer>
          <Title>
              <h4>Measure your space</h4>
          </Title>
          </TitleContainer>
         </Row>
         <GalleryContainer>
                  <ImgContainer>
                  <ImgDiv>
                  <Img src={image4} alt="test" />
                    <Text>Daily foot traffic</Text>
                  <Text1>Understand how your customer interacts with the city,<br /> how they move around and where they shop.</Text1>
                  </ImgDiv>

                  <ImgDiv1>
                  <Img src={image5} alt="test" />
                    <Text>Conversion per hour</Text>
                  <Text1>Track the engagement of your store by understanding<br /> who enters it and how long they stay.</Text1>
                  </ImgDiv1>

                  <ImgDiv2>
                  <Img src={image6} alt="test" />
                    <Text>Demographics</Text>
                  <Text1>Understand who your customers are, segmented by age,<br /> gender, spend.</Text1>
                  </ImgDiv2>

                  </ImgContainer>
                   </GalleryContainer>
         </Container>
         </Section>
    )
  }
}
export default MeasureSection;
