import React, { Component } from 'react';
import styled from 'styled-components';
import image from './images/img.jpg'
import Client from './Client';
import Blog from './Blog';

import SinglePost from './SinglePost'
import Featured from './Featured'
import Service from './Service'

const Header = styled.section`
margin-top: 200px;
`
const BgOverlay = styled.div``
const Container = styled.div``
const Row = styled.div``
const BgContent = styled.div`
position: relative;
  text-align: center;
  color: white;
`
const HomeTitle = styled.h1`
position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Form = styled.form`
position: absolute;
  top: 52%;
  left: 46%;
  transform: translate(-50%, -50%);

`
const Form1 = styled.form`
position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Form2 = styled.form`
position: absolute;
  top: 52%;
  left: 54%;
  transform: translate(-50%, -50%);
`
const Select = styled.select``
const Option = styled.option``
const Input = styled.input`
position: absolute;
  top: 50%;
  right:-355%;
  transform: translate(-50%, -50%);
`
const Bg = styled.img``

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Size'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Form works')
    event.preventDefault();
  }
  render() {
    return (
    <>
    <Header>
      <BgOverlay></BgOverlay>
      <Container>
        <Row>
          <BgContent>
            <Bg src={image} alt="some"/>
            <HomeTitle>where your customer <br/> meets your brand</HomeTitle>
            <Form onSubmit={this.handleSubmit}>
            <Select value={this.state.value} onChange={this.handleChange}>
            <Option value="1">1</Option>
            </Select>
            </Form>
            <Form1 onSubmit={this.handleSubmit}>
            <Select value={this.state.value} onChange={this.handleChange}>
            <Option value="1">1</Option>
            </Select>
            </Form1>
            <Form2 onSubmit={this.handleSubmit}>
            <Select value={this.state.value} onChange={this.handleChange}>
            <Option value="1">1</Option>
            </Select>
            <Input type="submit" value="Submit" />
            </Form2>
          </BgContent>
        </Row>
      </Container>
    </Header>



    <Client />


    <Blog />


    <SinglePost />

    <Featured />

    <Service />

    </>
  )
  }
}

export default Home;
