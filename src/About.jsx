import React, { Component } from 'react'
import styled from 'styled-components'

import CardPDF from './components/CardPDF'

const Section = styled.section``
const FirstView = styled.div`
  display: flex;
  margin-top: 63px;
  width: 50%;
  @media(max-width: 1024px){
    width: 100%;
    margin-top: 23px;
    
  }
`
const FirstViewLeft = styled.div`
  margin-left: 64px;
  @media(max-width: 1024px){
    margin-left: 16px;
    
  }
`

const TitleText = styled.p`
    clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    font-weight: bold;
    font-size: 32px;
    line-height: 120%;
  /* or 38px */

  /* Black */
  color: #242728;
  @media(max-width: 1024px){
    position: relative;
    top: 0px;
    left: 0px;
    overflow: visible;
    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 120%;
    margin-top: 16px;
  }
`
const TitleSubText1 = styled.p`
margin-top: -10px;
clear: both;
width: 644px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
margin-top: 39px;
/* identical to box height, or 125% */

letter-spacing: 0.5px;

/* Green */

color: black;
@media(max-width: 1024px) {
  margin-top: 10px;
  width: 100%;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  color: #242728;

}
`
const FirstViewRight = styled.div`
margin-top: 20px;
margin-left: 200px;
`
const FormDiv = styled.div`
margin-left: 64px;
font-weight: bold;
font-size: 20px;
line-height: 120%;
/* or 38px */

/* Black */

color: #242728;
margin-top: -1150px;
@media(max-width: 1024px){
  margin-left: 16px;
}
`

const CompanyContainer = styled.div``
const CompanyTitle = styled.div`
font-family: Charter;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 120%;
`
const CompanyInput = styled.input`
margin-top: 15px;
border: 1px solid grey;
width: 500px;
border-radius: 5px;
padding:14px;
@media(max-width: 1024px){
  width: 95%;
  }

`
const FLnameContainer = styled.div`
  clear: both;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  

  @media(max-width: 1024px){
    display: flex;
    flex-wrap: wrap;
    overflow: visible;
  }
`

const FirstnameContainer = styled.div`
display: inline-block;

`
const FirstnameTitle = styled.p`
font-family: Charter;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 120%;
margin: 16px 0;
`
const FirstnameInput = styled.input`
border: 1px solid grey;
width: 230px;
border-radius: 5px;
padding:14px;
@media(max-width: 767px){
    width: 82vw;
    margin-bottom: 20px;
  }
  @media (min-width: 768px) and (max-width: 1024px){
    width: 84vw;
    margin-bottom: 20px;
  }
`
const LastnameContainer = styled.div`
display: inline-block;
margin-left: 10px;

`

const LastnameInput = styled.input`
border: 1px solid grey;
width: 230px;
border-radius: 5px;
padding:14px;
@media(max-width: 767px){
    width: 82vw;
    margin-left: -10px;
  }
  @media (min-width: 768px) and (max-width: 1024px){
    width: 84vw;
    margin-left: -10px;
  }
`
const EmailContainer = styled.div``
const EmailTitle = styled.p`
font-family: Charter;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 120%;
margin: 16px 0;
`
const EmailInput = styled.input`
border: 1px solid grey;
width: 500px;
border-radius: 5px;
padding:14px;

@media(max-width: 1024px){
  width: 95%;
  }
`
const PhoneContainer = styled.div``
const PhoneTitle = styled.p`
font-family: Charter;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 120%;
margin: 16px 0;
`
const PhoneInput = styled.input`
border: 1px solid grey;
width: 500px;
border-radius: 5px;
padding:14px;
@media(max-width: 1024px){
    width: 95%;
  }
`

const ButtonsDiv = styled.div`
display: flex;
margin-top: 64px;
width: 345px;
margin-left: 64px;
@media(max-width: 767px){
        position: absolute;
        width: 100%;
        height: 52px;
        left: 0%;
        right: 0%;
        bottom: 0px;
        top: 1329px;
        box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.28);
        margin: 0 10px 0 -7px;
        padding: 10px 27px;
    }
    @media (min-width: 768px) and (max-width: 1024px){
        position: absolute;
        width: 100%;
        height: 52px;
        left: 0%;
        right: 0%;
        bottom: 0px;
        top: 1329px;
        box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.28);
        margin: 0 10px 0 -7px;
        padding: 10px 80px 10px 27px;
  }
`
const PrevBtn = styled.button`
background-color: white;
border: 1px solid black;
width:160px;
height:50px;
border-color:  #0F6B5C;
color: #0F6B5C;
font-weight: 500;
font-size: 16px;
line-height: 20px;
@media(max-width: 1024px){
        width: 167px;
        height: 52px;
        left: 0%;
        right: 0%;
        bottom: 0px;
        border: none;
    }
`
const NextBtn = styled.button`
background-color: #0f6b5c;
color: white;
width:100px;
height:50px;
margin-left: 20px;
font-weight: 500;
font-size: 16px;
line-height: 20px;
@media(max-width: 1024px){
        width: 167px;
        height: 52px;
        left: 0%;
        right: 0%;
        bottom: 0px;
        margin-left: 40px;
    }
`
const RewievCardWrapper = styled.div`
    position: absolute;
    width: 421px;
    height: 723px;
    left: 955px;
    top: 189px;
    background-color: #F0EEEA;
    @media(max-width: 767px){
        left: 12px;
        top: 809px;
        width: 90%;
    }
    @media (min-width: 768px) and (max-width: 1024px){
      left: 16px;
      top: 749px;
      width: 343px;
      height: 766px;
  }
`
const FormWrapper = styled.div`
  position: relative;
  top: 1200px;
  left: 0px;
  @media(max-width: 1024px){
    width: 90%;
  }
`
class About extends Component {
  render() {
    return (
      <Section>
        <FirstView>
          <FirstViewLeft>
            <TitleText>Review your information</TitleText>
            <TitleSubText1>Complete your profile with your business details and basic information</TitleSubText1>
          </FirstViewLeft>
          <FirstViewRight>
            <RewievCardWrapper>
              <CardPDF />
            </RewievCardWrapper>
          </FirstViewRight>
        </FirstView>
        <FormWrapper>
          <FormDiv>
            <CompanyContainer>
              <CompanyTitle>Company name</CompanyTitle>
              <CompanyInput
                type='text'
                placeholder='Your brand name'
              />
            </CompanyContainer>
            <FLnameContainer>
              <FirstnameContainer>
                <FirstnameTitle>Your name</FirstnameTitle>
                <FirstnameInput
                  type='text'
                  placeholder='First Name'
                >
                </FirstnameInput>{' '}
              </FirstnameContainer>

              <LastnameContainer>
                <LastnameInput
                  type='text'
                  placeholder='Last Name'
                >
                </LastnameInput>{' '}
              </LastnameContainer>
            </FLnameContainer>
            <EmailContainer>
              <EmailTitle>Your Email</EmailTitle>
              <EmailInput
                type='text'
                placeholder='john@example.com'
              ></EmailInput>{' '}
            </EmailContainer>
            <PhoneContainer>
              <PhoneTitle>Phone number</PhoneTitle>
              <PhoneInput
                type='text'
                placeholder='+46'
              ></PhoneInput>{' '}
            </PhoneContainer>
          </FormDiv>
          <ButtonsDiv>
            <PrevBtn>Previous Step</PrevBtn>
            <NextBtn>Next</NextBtn>
          </ButtonsDiv>
        </FormWrapper>
      </Section>
    )
  }
}
export default About;
