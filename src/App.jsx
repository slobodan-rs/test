import React from 'react'
import styled from 'styled-components'
import Xnomad from './icons/Xnomad.svg'
import Plus from './icons/Plus.svg'
import Minus from './icons/Minus.svg'
import { OptionDivTitles } from './consts.js'
import { Login } from './Login.jsx'

const Wrapper = styled.div``

const Header = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 6vh;
  border-bottom: 2px solid black;
`
const CompanyIcon = styled.img`
  width: 9vw;
  height: 5vh;
  margin-left: 5vw;
`

const HeaderTextBoxes = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3vw;
  font-weight: 500px;
  color: ${(p) => (p.id === 0 ? '#0f6b5c' : '')};
`

const headerTexts = ['MAKE IT MOVE IN READY', 'ABOUT YOU', 'PITCH YOUR IDEA']

const FirstView = styled.div`
  display: flex;
  height: 100vw;
  margin-top: 7vh;
`
const FirstViewLeft = styled.div`
  margin-left: 5vw;
`

const TitleText = styled.div`
  font-size: 30px;
  margin-bottom: 2vh;
`
const TitleSubText1 = styled.div`
  font-size: 20px;
  margin-bottom: 1.5vh;
`
const TitleSubText2 = styled.div`
  font-size: 12px;
  color: #0f6b5c;
`
const OptionDiv = styled.div`
  border: 1px solid #bcc1c3;
  width: 35vw;
  height: 11vh;
  display: flex;
  align-items: center;
  margin-top: 2vh;
  ${(p) => (p.active ? 'background: #0f6b5c;' : '')}
  ${(p) => (p.active ? 'color: white;' : 'black;')}

  ${(p) => (p.superActive ? 'background: #0f6b5c;' : '')}
  ${(p) => (p.superActive ? 'color: white;' : 'black;')}
  &:hover {
    cursor: url('https://www.xnomad.co/static/media/LOGO_Name.bf44d7c0.svg'),
      auto;
  }
`
const OptionDivLeft = styled.div`
  margin-left: 2vw;
  margin-right: 11.5vw;
`
const OptionDivLeftTitle = styled.div`
  //styleName: H6;
  font-family: Charter;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
`

const OptionDivLeftBody = styled.div`
  font-family: Fira Sans;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
`
const OptionDivRight = styled.div`
  margin-right: 2vw;
  min-width: 6vw;
`

const FirstViewRight = styled.div``

const StaffinDiv = styled.div`
  margin-left: 5vw;
  width: 35vw;
`

const StaffingTitle1 = styled.div`
  font-size: 24px;
  margin-bottom: 1.5vh;
`

const StaffingTitle2 = styled.div`
  font-size: 16px;
  color: #0f6b5c;
  margin-bottom: 1.5vh;
`
const StaffingTitle3 = styled.div`
  font-size: 18px;
  margin-bottom: 3vh;
  font-weight: bold;
`
const StaffingAnalyticsDiv = styled.div`
  display: flex;
  align-items: center;
  height: 81px;
`
const StaffingAnalyticsDivCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f0eeea;
  width: 170px;
  height: 10vh;
`
const StaffingAnalyticsDivCounterIcon = styled.img`
  width: 2.5vw;
  height: 7vh;
  &:hover {
    cursor: pointer;
  }
`
const StaffingAnalyticsDivDisplayer = styled.div`
  width: 450px;
  height: 100%;
  margin-left: 5vw;
  background-color: #f0eeea;
  margin-left: 2vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const App = () => {
  const [hoveredId, setHoveredId] = React.useState(null)
  const [clickedId, setClickedId] = React.useState(null)
  const [disableHover, setDisableHover] = React.useState(false)

  const [staffingCounter, setStaffingCounter] = React.useState(0)
  let StaffingAnalyticsDivDisplayerPrice = `SEK 350/h ${'   '}   x ${'   '}   14 days ${'   '}  = ${'   '}  SEK ${
    39200 + staffingCounter * 4000
  }`
  return (
    <>
      <Login />
      <Wrapper>
        <Header>
          <CompanyIcon src={Xnomad} />
          {headerTexts.map((item, idx) => {
            return (
              <HeaderTextBoxes id={idx}>
                {idx + 1}. {item}
              </HeaderTextBoxes>
            )
          })}
        </Header>
        <FirstView>
          <FirstViewLeft>
            <TitleText>Make your space move-in ready</TitleText>
            <TitleSubText1>Furniture + Design</TitleSubText1>
            <TitleSubText2>
              WHICH FURNITURE PACKAGE FITS YOU BEST?
            </TitleSubText2>
            {OptionDivTitles.map((item, idx) => {
              return (
                <OptionDiv
                  id={idx + 10}
                  onMouseEnter={() => setHoveredId(idx)}
                  active={hoveredId === idx && !disableHover}
                  onMouseLeave={() => setHoveredId(null)}
                  // On-click I want to (1) set that element to its color, and (2) make sure that hoover is disabled
                  onClick={() => setClickedId(idx) && setDisableHover(true)}
                  superActive={clickedId === idx}
                  // noHover={disableHover}
                >
                  <OptionDivLeft>
                    <OptionDivLeftTitle>{item.titleText}</OptionDivLeftTitle>
                    <OptionDivLeftBody>{item.bodyText}</OptionDivLeftBody>
                  </OptionDivLeft>
                  <OptionDivRight>
                    {' '}
                    {idx !== 0 ? '+' : ''} SEK {item.price}
                  </OptionDivRight>
                </OptionDiv>
              )
            })}
          </FirstViewLeft>
          <FirstViewRight></FirstViewRight>
        </FirstView>
        <StaffinDiv>
          <StaffingTitle1>Staffing</StaffingTitle1>
          <StaffingTitle2>HOW MANY STAFF DO YOU NEED?</StaffingTitle2>
          <StaffingTitle3>Number of staff</StaffingTitle3>
          <StaffingAnalyticsDiv>
            <StaffingAnalyticsDivCounter>
              <StaffingAnalyticsDivCounterIcon
                onClick={(e) => {
                  setStaffingCounter((...p) => {
                    if (parseInt(p) === 0) {
                      return 0
                    } else return parseInt(p) - 1
                  })
                }}
                src={Minus}
              />
              {staffingCounter}
              <StaffingAnalyticsDivCounterIcon
                onClick={(e) => {
                  setStaffingCounter((...p) => parseInt(p) + 1)
                }}
                src={Plus}
              />
            </StaffingAnalyticsDivCounter>
            <StaffingAnalyticsDivDisplayer>
              {StaffingAnalyticsDivDisplayerPrice}
            </StaffingAnalyticsDivDisplayer>
          </StaffingAnalyticsDiv>
        </StaffinDiv>
      </Wrapper>
    </>
  )
}
