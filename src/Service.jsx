import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.section`
margin-top: 300px;
`
const Container = styled.div`

`
const Row = styled.div`

`
const TitleContainer = styled.div``
const Title = styled.h1`
position: relative;
top: 2300px !@important;;
left: 10%;
`

class Service extends Component {
  render() {
    return (
      <Section>
        <Container>
         <Row>
          <TitleContainer>
          <Title>Featured space</Title>
          </TitleContainer>
         </Row>
         </Container>
         </Section>
    )
  }
}
export default Service;
