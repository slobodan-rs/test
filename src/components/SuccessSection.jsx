import React, { Component } from 'react';
import styled from 'styled-components';
import image4 from '../images/12.png'
import image5 from '../images/13.png'
const Section = styled.section`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position: relative;
  top: 1500px;
  margin-left: -90px;
}
position: relative;
top: 2600px;
`
const Container = styled.div``
const Row = styled.div``
const TitleContainer = styled.div``
const Title = styled.h1`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position: relative;
  left: 30%;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;

  /* or 38px */

  color: #686058;
}
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

const GalleryContainer = styled.div``
const ImgContainer = styled.div`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */

}
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0 0 0;
`
const ImgDiv = styled.div`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position:relative;
  left:-40%;
width: 100px;
height: 20px;
}
margin-left: 100px;
`
const ImgDiv1 = styled.div`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
margin-left: -90px;
width: 100px;
height: 20px;
margin-top:-100px;
}
margin-left: 100px;
`
const Img = styled.img`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  width: 270px;
  height: 230px;
  background-color: grey;
}
  width: 600px;
  height: 430px;
  background-color: grey;
`
const Text = styled.h4`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  font-size: 15px;
  margin-left: 30px;
}
font-family: Charter;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 120%;

/* identical to box height, or 29px */

color: #111118;


`
const Text1 = styled.h4`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  display: none;
}
font-family: Fira Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 150%;
left: 30px;
/* or 27px */

color: #111118;
`
const Textdiv = styled.div`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position: absolute;
  width: 270px;
  height: 150px;
  top: 230px;
  left: 100px;
  background: #F0EEEA;
  border-radius: 2px;
}
position: absolute;
width: 533px;
height: 335px;
top: 350px;
left: 300px;
background: #F0EEEA;
border-radius: 2px;
`
const Textdiv1 = styled.div`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position: absolute;
  width: 270px;
  height: 150px;
  top: 570px;
  left: 100px;
  background: #F0EEEA;
  border-radius: 2px;
}
position: absolute;
width: 533px;
height: 335px;
top: 350px;
left: 1000px;
background: #F0EEEA;
border-radius: 2px;
`
const ButtonDiv = styled.div`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position: relative;
  left: 25%;
  padding-top: 250px;
}
position: relative;
left: 30%;
padding-top: 250px;
`
const Button = styled.button `

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position: absolute;
  width: 270px;
  height: 64px;
}
  position: absolute;
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
letter-spacing: 0.5px;
text-transform: uppercase;

/* White */
color: #FFFFFF;
`
const SDiv = styled.div`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  padding-top:450px;
  margin-left: -170px;
}

`
const TextDiv3 = styled.div`
display: flex;
`
const Text2 = styled.h4`
margin-left: 20px;
font-size: 16px;
color: #0F6B5C;
`
const Text3 = styled.h4`
margin-left: 10px;
font-size: 16px;
color: #0F6B5C;
`
class SuccessSection extends Component {
  render() {
    return (
      <Section>
        <Container>
         <Row>
          <TitleContainer>
          <Title>
              <h4>Success Stories</h4>
          </Title>
          </TitleContainer>
         </Row>
         <GalleryContainer>
                  <ImgContainer>

                  <ImgDiv>
                  <Img src={image4} alt="test" />
                  </ImgDiv>
                  <Textdiv>
                  <Text>Custom helmets in an art gallery</Text>
                  <Text1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque magna duis rhoncus tincidunt est parturient tortor proin. Hac eleifend placerat a sem adipiscing iaculis. Tincidunt convallis amet amet at et mi arcu faucibus luctus.</Text1>
                  <TextDiv3>
                  <Text2><i class="fas fa-arrow-right"></i> Read More</Text2>
                  <Text3><i class="fas fa-map-marker-alt"></i> View space</Text3>
                  </TextDiv3>
                  </Textdiv>

                  <SDiv>
                  <ImgDiv1>
                  <Img src={image5} alt="test" />
                  </ImgDiv1>
                  <Textdiv1>
                  <Text>Walking the walk</Text>
                  <Text1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque magna duis rhoncus tincidunt est parturient tortor proin. Hac eleifend placerat a sem adipiscing iaculis. Tincidunt convallis amet amet at et mi arcu faucibus luctus.</Text1>
                  <TextDiv3>
                  <Text2><i class="fas fa-arrow-right"></i> Read More</Text2>
                  <Text3><i class="fas fa-map-marker-alt"></i> View space</Text3>
                  </TextDiv3>
                  </Textdiv1>
                  </SDiv>

                  </ImgContainer>
                  <ButtonDiv>
                  <Button>EXPLORE OUR BLOG</Button>
                  </ButtonDiv>

                   </GalleryContainer>

         </Container>
         </Section>
    )
  }
}
export default SuccessSection;
