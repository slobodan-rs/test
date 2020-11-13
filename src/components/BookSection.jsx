import React, { Component } from 'react';
import styled from 'styled-components';

// img
import book from '../images/book.svg'
import bookMobile from '../images/book-mobile.svg'


class BookSection extends Component {
  render() {
    return (
      <Section>
        <Title>Book a space as easy as a hotel</Title>
      </Section>
    )
  }
}
export default BookSection;

//Styled Compoents
const Section = styled.section`
  width: 100%;
  height: 475px;
  padding-top: 80px;
  margin-top: 80px;
  background-color: #686058;
  background-image: url(${book});
  background-repeat: no-repeat;
  background-position: center;

  @media(max-width: 768px){
    margin-top: 160px;
    width: 100%;
    height: 880px;
    background: url(${bookMobile});
    background-repeat: no-repeat;
    background-position: center;
    background-color: #686058;
    padding-top: 100px;
  }
  @media(min-width: 769px) and (max-width: 1024px){
    background-size: 90%;
  }
`
const Title = styled.h4`
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  color: #FFFFFF;
  text-align: left;
  margin-left: 275px;
  padding-bottom: 73px;

  @media(max-width: 767px){
    width: 343px;
    font-size: 28px;
    margin-left: 16px;
    margin-top: -50px;
  }
  @media(min-width: 768px) and (max-width: 769px){
    text-align: center;
    margin: -50px 0;
  }
  @media(min-width: 769px) and (max-width: 1024px){
   text-align: center;
   margin: 0;
  }
`