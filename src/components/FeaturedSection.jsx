import React, { Component } from 'react';
import styled from 'styled-components';
import image1 from '../images/6.png'
import image2 from '../images/7.png'
import image3 from '../images/8.png'
const Section = styled.section`
@media only screen and (min-width: 320px) {
  /* For mobile phones: */
  position: relative;
  top: 1620px;
}
@media only screen and (min-width: 1024px){
  position: relative;
  top: 200px;
}
`
const Container = styled.div``
const Row = styled.div``
const TitleContainer = styled.div``
const Title = styled.h1`
@media only screen and (min-width: 320px) {
  /* For mobile phones: */
  position: relative;
  left: 10%;
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
@media only screen and (min-width: 320px) {
  /* For mobile phones: */
  justify-content: left;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0 0 0;
}
@media only screen and (min-width: 1024px){
  justify-content: left;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0 0 0;
}

`
const ImgDiv = styled.div`
@media only screen and (min-width: 320px) {
  /* For mobile phones: */
  margin-left: 2px;
}
@media only screen and (min-width: 1024px){
margin-left: 10px;
}

`
const ImgDiv1 = styled.div`
@media only screen and (min-width: 320px) {
  /* For mobile phones: */
  margin-left: 170px;
  margin-top: -260px;
}
@media only screen and (min-width: 1024px){
margin-left: 10px;
margin-top: 0px;
}

`
const Img = styled.img`
@media only screen and (min-width: 320px) {
  /* For mobile phones: */
  width: 120px;
  height: 150px;
  background-color: grey;
}
@media only screen and (min-width: 1024px){
  width: 250px;
  height: 250px;
  background-color: grey;
}

`
const Text = styled.h4`
@media only screen and (min-width: 320px) {
  /* For mobile phones: */
  text-align: left;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 150%;

  /* identical to box height, or 24px */
  text-transform: uppercase;

  /* Gray 2 */
  color: #555C5E;
}
@media only screen and (min-width: 1024px){
  text-align: center;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;

  /* identical to box height, or 24px */
  text-transform: uppercase;

  /* Gray 2 */
  color: #555C5E;
}

`
const Text1 = styled.h4`
@media only screen and (min-width: 320px) {
  /* For mobile phones: */
  text-align: left;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 120%;

  /* identical to box height, or 29px */

  /* Gray 1 */
  color: #3C4143;
}
@media only screen and (min-width: 1024px){
  text-align: center;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 120%;

  /* identical to box height, or 29px */

  /* Gray 1 */
  color: #3C4143;
}

`
const Text2 = styled.h4`
@media only screen and (min-width: 320px) {
  /* For mobile phones: */
  text-align: left;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 120%;

  /* identical to box height, or 22px */

  /* Black */
  color: #242728;
}
@media only screen and (min-width: 1024px){
  text-align: center;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 120%;

  /* identical to box height, or 22px */

  /* Black */
  color: #242728;
}

`
const Text3 = styled.h4`
@media only screen and (min-width: 320px) {
  /* For mobile phones: */
  text-align: left;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 9px;
  line-height: 150%;

  /* identical to box height, or 24px */

  /* Gray 2 */
  color: #555C5E;
}
@media only screen and (min-width: 1024px){
  text-align: center;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 150%;

  /* identical to box height, or 24px */

  /* Gray 2 */
  color: #555C5E;
}

`

class FeaturedSection extends Component {
  render() {
    return (
      <Section>
        <Container>
         <Row>
          <TitleContainer>
          <Title>
              <h4>Featured Spaces</h4>
          </Title>
          </TitleContainer>
         </Row>
         <GalleryContainer>
                  <ImgContainer>
                  <ImgDiv>
                  <Img src={image1} alt="test" />
                  <Text>Norrmalm, Stockholm</Text>
                  <Text1>Vasastan Pop up</Text1>
                  <Text2>from 1 500 kr / day</Text2>
                  <Text3>40 m2 • 13 064 visitors / day</Text3>
                  </ImgDiv>

                  <ImgDiv1>
                  <Img src={image2} alt="test" />
                  <Text>Norrmalm, Stockholm</Text>
                  <Text1>Space For Beautiful Things</Text1>
                  <Text2>from 8 000 kr / day</Text2>
                  <Text3>40 m2 • 3 296 visitors / day</Text3>
                  </ImgDiv1>

                  <ImgDiv>
                  <Img src={image3} alt="test" />
                  <Text>Kungsholmen, Stockholm</Text>
                  <Text1>Minimalistic Space</Text1>
                  <Text2>from 5 000 kr / day</Text2>
                  <Text3>60 m2</Text3>
                  </ImgDiv>
                  <ImgDiv1>
                  <Img src={image3} alt="test" />
                  <Text>Kungsholmen, Stockholm</Text>
                  <Text1>Minimalistic Space</Text1>
                  <Text2>from 5 000 kr / day</Text2>
                  <Text3>60 m2</Text3>
                  </ImgDiv1>
                  </ImgContainer>
                   </GalleryContainer>
         </Container>
         </Section>
    )
  }
}
export default FeaturedSection;
