import React, { Component } from 'react';
import styled from 'styled-components'
import {Col, Row} from 'reactstrap';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
const Section = styled.section `
`
const Container = styled.div`
background-color: grey !important;
position: relative;
  text-align: center;
  width: 100%;
  height: 60px;

`
const ClientImages = styled.div`
`


const Image = styled.img`
position:absolute;
  top: 0%;
  left: 25%;
  transform: translate(-50%, 0%);
padding-top: 5px;
`

const Image1 = styled.img`
position: absolute;
  top: 0%;
  left: 0%;
  transform: translate(0%, 0%);
padding-top: 5px;
`
const Image3 = styled.img`
position: absolute;
  top: 0%;
  left: 33%;
  transform: translate(0%, 0%);
padding-top: 5px;
`

const Image4 = styled.img`
position: absolute;
  top: 0%;
  left: 47%;
  transform: translate(0%, 0%);
padding-top: 5px;
`

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <>
      <Section>
       <Container>
         <Row>
          <Col md="3">
            <ClientImages>
            <Image src={img1} alt="logoimg" />
            </ClientImages>
          </Col>
          <Col md="3">
          <ClientImages>
          <Image1 src={img2} alt="logoimg" />
          </ClientImages>
          </Col>
          <Col md="3">

          </Col>
          <Col md="3">
            <ClientImages>
            <Image3 src={img3} alt="logoimg" />
            </ClientImages>
          </Col>
          <Col md="3">
          <ClientImages>
          <Image4 src={img4} alt="logoimg" />
          </ClientImages>
          </Col>
          <Col md="3">

          </Col>
         </Row>
       </Container>
      </Section>
      </>
    )
  }
}

export default Client;
