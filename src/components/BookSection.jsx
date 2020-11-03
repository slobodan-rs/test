import React, { Component } from 'react';
import styled from 'styled-components';
import realestate from '../icons/realestate.png'
import icon from '../icons/Icon.png'
import message from '../icons/Message.png'
import iconreal from '../icons/Iconreal.png'
import shop from '../icons/Shop.png'
const Section = styled.section`
width: full-width;
height: 474px;
background-color: #686058;
position: relative;
top: 2600px;
`
const Container = styled.div``
const Row = styled.div``
const TitleContainer = styled.div`
`
const Title = styled.h1`
position: relative;
left: 10%;
color: white;
padding-top: 20px;
`

const GalleryContainer = styled.div`
margin-top: 50px;
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
margin-right: 30px;
font-family: Charter;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 120%;

/* identical to box height, or 22px */

color: #F4F5F4;


`
const Text1 = styled.h4`
color: white;
margin-right: 30px;

/* Body Small */
font-family: Fira Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 150%;

/* or 24px */

color: #D7D2CB;
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
