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
margin-top: 30px;
`

const GalleryContainer = styled.div`
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
color: white;
margin-right: 30px;
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
                  <Text>Use our data to find a <br />retail space available daily, <br />weekly or monthly.</Text>
                  </ImgDiv>
                  <ImgDiv>
                  <Img src={message} alt="test" />
                    <Text>Find your space</Text>
                  <Text>TExt</Text>
                  </ImgDiv>
                  <ImgDiv>
                  <Img src={icon} alt="test" />
                    <Text>Find your space</Text>
                  <Text>TExt</Text>
                  </ImgDiv>

                  <ImgDiv>
                  <Img src={iconreal} alt="test" />
                    <Text>Find your space</Text>
                  <Text>TExt</Text>
                  </ImgDiv>
                  <ImgDiv>
                  <Img src={shop} alt="test" />
                    <Text>Find your space</Text>
                  <Text>TExt</Text>
                  </ImgDiv>
                  </ImgContainer>
                   </GalleryContainer>
         </Container>
         </Section>
    )
  }
}
export default BookSection;
