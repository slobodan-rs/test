import React, { Component } from 'react';
import styled from 'styled-components';
import image from './images/img.jpg'
import image1 from './images/img.jpg'
import image2 from './images/img.jpg'
const Section = styled.section`
margin-top: 300px;
`
const Container = styled.div``
const Row = styled.div``
const TitleContainer = styled.div``
const Title = styled.h1`
position: relative;
left: 10%;
`
const PostContainer = styled.div`
position: relative;
`
const Post = styled.div``
const Blog1 = styled.div`
margin-top: 140px;
`
const Image = styled.img`
position:absolute;
  top: 50%;
  left: 15%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
`
const Image1 = styled.img`
position:absolute;
  top: 50%;
  left: 37%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
`
const Image2 = styled.img`
position:absolute;
  top: 50%;
  left: 59%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
`
const SinglePost = styled.div``
const PostTitle = styled.h5`
position:absolute;
  top: 250%;
  left: 20%;
  transform: translate(-50%, -50%);
  `
  const PostTitle1 = styled.h5`
  position:absolute;
    top: 250%;
    left: 50%;
    transform: translate(-50%, -50%);
    `
    const PostTitle2 = styled.h5`
    position:absolute;
      top: 250%;
      left: 82%;
      transform: translate(-50%, -50%);
      `
const PostDesc = styled.h4``
const PostView = styled.p``


class Featured extends Component {
  render() {
    return (
      <>
      <Section>
        <Container>
         <Row>
          <TitleContainer>
          <Title>Featured space</Title>
          </TitleContainer>
         </Row>
         <PostContainer>
          <Post>
           <Blog1>
             <Image src={image} alt="" />
             <SinglePost>
              <PostTitle></PostTitle>
              <PostDesc></PostDesc>
              <PostView></PostView>
             </SinglePost>
           </Blog1>
          </Post>

          <Post>
           <Blog1>
             <Image1 src={image1} alt="" />
             <SinglePost>
              <PostTitle1></PostTitle1>
              <PostDesc></PostDesc>
              <PostView></PostView>
             </SinglePost>
           </Blog1>
          </Post>

          <Post>
           <Blog1>
             <Image2 src={image2} alt="" />
             <SinglePost>
              <PostTitle2></PostTitle2>
              <PostDesc></PostDesc>
              <PostView></PostView>
             </SinglePost>
           </Blog1>
          </Post>
         </PostContainer>
        </Container>
      </Section>
      </>
    )
  }
}

export default Featured;
