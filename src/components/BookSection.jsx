import React, { Component } from 'react';
import styled from 'styled-components';
import realestate from '../icons/realestate.png'
import icon from '../icons/Icon.png'
import message from '../icons/Message.png'
import iconreal from '../icons/Iconreal.png'
import shop from '../icons/Shop.png'
const Section = styled.section`

@media only screen and (max-width: 768px) {
  width: full-width;
  height: 800px;
  background-color: #686058;
  position: relative;
  top: 1500px;
}
@media only screen and (min-width: 1024px){
  width: full-width;
  height: 474px;
  background-color: #686058;
  position: relative;
  top: 200px;
}

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
  color: white;
  padding-top: 20px;
  font-size: 20px;
}
@media only screen and (min-width: 1024px){
  position: relative;
  left: 10%;
  color: white;
  padding-top: 20px;

`

const GalleryContainer = styled.div`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
margin-top: 20px;
display: flex;
clear: both;
   display: inline-block;
   overflow: hidden;
   white-space: nowrap;
}
@media only screen and (min-width: 1024px){
  margin-top: 50px;
}

`
const ImgContainer = styled.div`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0 0 0;
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
    margin-left: -30px;
  }

`
const ImgDiv = styled.div`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  margin-left: 20px;
}
@media only screen and (min-width: 1024px){
  margin-left: 20px;
}

`

const Img = styled.img`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  width: 50px;
  height: 50px;
}
@media only screen and (min-width: 1024px){
  width: 50px;
  height: 50px;
}
`
const Text = styled.h4`

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  margin-left: 20px;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;

  /* identical to box height, or 22px */

  color: #F4F5F4;
  clear: both;
   display: inline-block;
   overflow: hidden;
   white-space: nowrap;
}
@media only screen and (min-width: 1024px){
  margin-right: 30px;
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;

  /* identical to box height, or 22px */

  color: #F4F5F4;
}



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
@media only screen and (min-width: 1024px){
  color: white;
  margin-right: 30px;

  /* Body Small */
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;

  /* or 24px */

  color: #D7D2CB;
}

`
class BookSection extends Component {
  render() {
    return (
      <Section>
        <Container>
      <Row>
         <TitleContainer>
         <Title>
             <h4>Book a space as easy a hotel</h4>
         </Title>
         </TitleContainer>
        </Row>
         <GalleryContainer>

                  <ImgContainer>
                  <ImgDiv>
                  <Img src={realestate} alt="test" />
                  <Text>Find your space</Text>
                  <Text1>Use our data to find a <br />retail space available daily, <br />weekly or monthly.</Text1>
                  </ImgDiv>

                  <ImgDiv>
                  <Img src={message} alt="test" />
                    <Text>Propose your idea</Text>
                  <Text1>Describe your idea and <br />brand to ensure the space <br /> matches your vision</Text1>
                  </ImgDiv>

                  <ImgDiv>
                  <Img src={icon} alt="test" />
                    <Text>Select add-ons</Text>
                  <Text1>Remove all the hard work. <br />Design, furniture, staffing <br /> you name it!</Text1>
                  </ImgDiv>
                  <ImgDiv>
                  <Img src={iconreal} alt="test" />
                    <Text>Book & pay</Text>
                  <Text1>We’ll handle all the <br />paperwork and details all<br /> online.</Text1>
                  </ImgDiv>
                  <ImgDiv>
                  <Img src={shop} alt="test" />
                    <Text>Open your store</Text>
                  <Text1>Get out there and tell your<br /> stories with your new <br /> physical presence.</Text1>
                  </ImgDiv>
                  </ImgContainer>
                   </GalleryContainer>
         </Container>
         </Section>
    )
  }
}
export default BookSection;
