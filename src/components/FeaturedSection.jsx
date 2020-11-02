import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.section`
position: relative;
top: 2600px;
`
const Container = styled.div``
const Row = styled.div``
const TitleContainer = styled.div``
const Title = styled.h1`
position: relative;
left: 10%;
`

const GalleryContainer = styled.div``
const ImgContainer = styled.div`

  justify-content: left;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0 0 0;
`
const ImgDiv = styled.div`

margin-left: 20px;
`

const Img = styled.img`
  width: 300px;
  height: 250px;
  background-color: grey;
`
const Text = styled.h4`
text-align: center;
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
                  <Img src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="test" />
                  <Text>Normaln, Stockholm</Text>
                  <Text>Vasastan Pop up</Text>
                  </ImgDiv>

                  <ImgDiv>
                  <Img src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="test" />
                    <Text>Normaln, Stockholm</Text>
                  <Text>Vasastan Pop up</Text>
                  </ImgDiv>

                  <ImgDiv>
                  <Img src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="test" />
                    <Text>Normaln, Stockholm</Text>
                  <Text>Vasastan Pop up</Text>
                  </ImgDiv>
                  </ImgContainer>
                   </GalleryContainer>
         </Container>
         </Section>
    )
  }
}
export default FeaturedSection;
