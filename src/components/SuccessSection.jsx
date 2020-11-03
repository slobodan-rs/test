import React, { Component } from 'react';
import styled from 'styled-components';
import image from './images/img.jpg'
import image1 from './images/img.jpg'
import image2 from './images/img.jpg'
const Section = styled.section`
margin-top: 300px;
`
const Container = styled.div`
`
const Row = styled.div``
const TitleContainer = styled.div``
const Title = styled.h1`
position: relative;
left: 10%;
`
const PostContainer = styled.div`
position: relative;
  text-align: center;
  color: white;
`
const Post = styled.div``
const Blog1 = styled.div`
margin-top: 100px;
`
const Image = styled.img`
position:absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
`
const Image1 = styled.img`
position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
`
const Image2 = styled.img`
position:absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
`

  const PostTitle1 = styled.h5`
  position:absolute;
  top: 10%;
  left: 15%;
  transform: translate(-50%, -50%);
    `
    const PostTitle2 = styled.h5`
    position:absolute;
      top: 16%;
      left: 12%;
      transform: translate(-50%, -50%);
      `
const PostDesc = styled.h6`
position:absolute;
  bottom: 0%;
  left: 15%;
  transform: translate(-50%, -50%);
`
const PostPrice = styled.h5`
position:absolute;
  top: 25%;
  left: 11%;
  transform: translate(-50%, -50%);
`
const PostText = styled.p`
position:absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Bg = styled.img``
const Info = styled.div`
position:absolute;
  top: 130%;
  left: 40%;
  transform: translate(-50%, -50%);
width: 800px;
height: 400px;
background-color: grey;
`
class SinglePost extends Component {
  render() {
    return (
      <>
      <Section>
        <Container>
         <Row>
          <TitleContainer>
          <Title>A perfect space for your brand</Title>
          </TitleContainer>
         </Row>
         <Row>
         <PostContainer>
          <Bg src={image} alt="some"/>
          <Info>
          <PostTitle1>Ostermaln, Stockholm</PostTitle1>
          <PostTitle2>Grev Turegatan</PostTitle2>
          <PostPrice>5.000kr/week</PostPrice>
          <PostText>TEXT</PostText>
          <PostDesc>32 m2 * 1600 visitors/week</PostDesc>
          </Info>
         </PostContainer>
         </Row>
        </Container>
      </Section>
      </>
    )
  }
}

export default S;
