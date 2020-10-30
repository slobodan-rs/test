import React, {Component} from 'react'
import styled from 'styled-components'
import Image from './images/image.png'
const Section = styled.section``
const FirstView = styled.div`
  display: flex;
  height: 100vw;
  margin-top: 7vh;
  width: 50vw;
`
const FirstViewLeft = styled.div`
  margin-left: 5vw;
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
`
const TitleSubText1 = styled.p`
margin-top: -10px;
clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 125% */

letter-spacing: 0.5px;

/* Green */

color: black;
`
const FirstViewRight = styled.div`
margin-top: 20px;
margin-left: 200px;
`
const FormDiv= styled.div`
margin-left: 5vw;
font-weight: bold;
font-size: 20px;
line-height: 120%;
/* or 38px */

/* Black */

color: #242728;
margin-top: -1150px;
`

const LoginDiv = styled.div`
  background-color: white;
  height: 35vh;
  width: 15vw;
  opacity: 1;
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
height: 30px;
width: 500px;
border-radius: 5px;
`
const FLnameContainer = styled.div`
  clear: both;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
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
`
const FirstnameInput = styled.input`
border: 1px solid grey;
height: 30px;
width: 245px;
border-radius: 5px;
`
const LastnameContainer = styled.div`
display: inline-block;
margin-left: 10px;

`

const LastnameInput = styled.input`
border: 1px solid grey;
height: 30px;
width: 245px;
border-radius: 5px;
`
const EmailContainer = styled.div``
const EmailTitle = styled.p`
font-family: Charter;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 120%;
`
const EmailInput = styled.input`
border: 1px solid grey;
height: 30px;
width: 500px;
border-radius: 5px;
`
const PhoneContainer = styled.div``
const PhoneTitle = styled.p`
font-family: Charter;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 120%;
`
const PhoneInput = styled.input`
border: 1px solid grey;
height: 30px;
width: 500px;
border-radius: 5px;
`

const ButtonsDiv = styled.div`
display: flex;
margin-top: 7vh;
width: 50vw;
margin-left: 5vw;
`
const PrevBtn = styled.button`
background-color: white;
border: 1px solid black;
width:160px;
height:50px;
border-radius: 5px;
`
const NextBtn = styled.button`
background-color: #0f6b5c;
color: white;
width:100px;
height:50px;
margin-left: 20px;
border-radius: 5px;
`

const CardDiv = styled.div`
width: 421px;
height: 700px;
background-color: #F0EEEA;
`
const CardTopTitle = styled.p`
padding-top: 20px;
margin-left: 30px;
color: #555C5E;
`
const CardTitle = styled.h1`
margin-left: 30px;
`
const CardImageDiv = styled.div`
display: flex;
`
const CardImage = styled.img`
width: 169px;
height: 118px;
margin-left: 30px;
`
const CardImageCaption = styled.div`
margin-top: 10px;
margin-left: 30px;
color: #868F92;
`
const CardImageCaption1 = styled.div`

`
const Line = styled.hr`
margin-top: 25px;
width: 80%;
background-color: #868F92;
`
const CardCalendar = styled.div`
color: #868F92;
margin-top: 25px;
margin-left: 50px;
`
const CardInfoDiv = styled.div`
display: flex;
`
const CardInfo1 = styled.div`
color: #868F92;
margin-left: 30px;
margin-top: 20px;
`
const CardInfo2 = styled.div`
color: black;
margin-left: 30px;
margin-top: 20px;
`
const CardSpan1 = styled.span`
margin-left: 210px;
color: #868F92;
margin-top: 20px;
`
const CardSpan2 = styled.span`
margin-left: 140px;
margin-top: 20px;
color: #868F92;
`
const CardSpan3 = styled.span`
margin-left: 133px;
margin-top: 20px;
color: #868F92;
`
const CardSpan4 = styled.span`
margin-left: 110px;
margin-top: 20px;
color: #868F92;
`
const CardSpan5 = styled.span`
margin-left: 207px;
margin-top: 20px;
`
const DownloadBtn = styled.button`
margin-top: 20px;
background-color: #0f6b5c;
color: white;
width:370px;
height:50px;
margin-left: 20px;
border: 1px solid #0f6b5c;
`
const CardFooter = styled.div`
color: #868F92;
margin-top: 20px;
margin-left: 20px;
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
      <CardDiv>
      <CardTopTitle>Stockholm, Ostermalm</CardTopTitle>
      <CardTitle>Artillerigatan - Snoot</CardTitle>
      <CardImageDiv>
      <CardImage src={Image} alt="" />
      <CardImageCaption>30 m2 <br /> <br /> 10 000 visitors / day</CardImageCaption>
      </CardImageDiv>
      <Line />
      <CardCalendar><i class="far fa-calendar-alt"></i>7 August 2020 <i class="fas fa-arrow-right"></i> 30 August 2020 </CardCalendar>
      <Line />
      <CardInfoDiv>
      <CardInfo1>Rent </CardInfo1>
      <CardSpan1>SEK 140 000 </CardSpan1>
      </CardInfoDiv>
      <CardInfoDiv>
      <CardInfo1>Furniture (S) </CardInfo1>
      <CardSpan2>SEK 27 000 </CardSpan2>
      </CardInfoDiv>
      <CardInfoDiv>
      <CardInfo1>Marketing (S) </CardInfo1>
      <CardSpan3>SEK 50 000 </CardSpan3>
      </CardInfoDiv>
      <CardInfoDiv>
      <CardInfo1>Data & Analytics </CardInfo1>
      <CardSpan4>SEK 0 </CardSpan4>
      </CardInfoDiv>
      <CardInfoDiv>
      <CardInfo2>Total </CardInfo2>
      <CardSpan5>SEK 217 000 </CardSpan5>
      </CardInfoDiv>
      <Line />
      <DownloadBtn>DOWNLOAD ESTIMATE AS PDF</DownloadBtn>
      <CardFooter>The estimate is an approximation of final cost</CardFooter>
      </CardDiv>
      </FirstViewRight>
    </FirstView>
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
</Section>
  )
}
}
export default About;
