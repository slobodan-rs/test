import React, { Component } from 'react';
import styled from 'styled-components';
import image from './images/img.jpg'
import image1 from './images/img.jpg'
import image2 from './images/img.jpg'
const Section = styled.section`
margin-top: 50px;
`
const Container = styled.div``
const Row = styled.div``
const TitleContainer = styled.div``
const Title = styled.h1`
position: relative;
left: 10%;
`
const PostContainer = styled.div`
margin-top: 150px;
position: relative;
`
const Post = styled.div``
const Blog1 = styled.div`
`
const Image = styled.img`
position:absolute;
  top: 36%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 250px;
`
const Image1 = styled.img`
position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 250px;
`
const Image2 = styled.img`
position:absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 250px;
`
const SinglePost = styled.div`

`
const PostTitle = styled.h5`
  `
const PostDesc = styled.h4``
const PostView = styled.p``


class Blog extends Component {
  render() {
    return (
      <>
      <Section>
        <Container>
         <Row>
          <TitleContainer>
          <Title>Space for every occasion</Title>
          </TitleContainer>
         </Row>
         <PostContainer>
          <Post>
           <Blog1>

             <SinglePost>
             <Image src={image} alt="" />
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
              <PostTitle></PostTitle>
              <PostDesc></PostDesc>
              <PostView></PostView>
             </SinglePost>
           </Blog1>
          </Post>

          <Post>
           <Blog1>
             <Image2 src={image2} alt="" />
             <SinglePost>
              <PostTitle></PostTitle>
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

export default Blog;
