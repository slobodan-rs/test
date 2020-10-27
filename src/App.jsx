import React from 'react'
import styled from 'styled-components'
import Xnomad from './icons/Xnomad.svg'
import Plus from './icons/Plus.svg'
import Minus from './icons/Minus.svg'
import { OptionDivTitles } from './consts.js'
import { Login } from './Login.jsx'

function svgToBase64Url(svgString, width, height) {
  const base64SVG = btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="${width}px" height="${height}px">${svgString}</svg>`
  )
  return `url('data:image/svg+xml;base64,${base64SVG}')`
}

const Wrapper = styled.div``

const Header = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 6vh;
  border-bottom: 2px solid black;
`
const Price = styled.p`
  margin: auto;
`
const CompanyIcon = styled.img`
  width: 9vw;
  height: 5vh;
  margin-left: 5vw;
  &:hover {
    cursor: pointer;
    border-bottom: 6px solid black;
  }
  ${(p) => (p.active ? 'border-bottom: solid black;' : '')}
`

const HeaderTextBoxes = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3vw;
  font-weight: 500px;
  color: ${(p) => (p.id === 0 ? '#0f6b5c' : '')};
  &:hover {
    cursor: pointer;
    border-bottom: 3px solid #0f6b5c;
  }
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

const TitleText = styled.p`
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  /* or 38px */

  /* Black */

  color: #242728;
`
const TitleSubText1 = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  /* identical to box height, or 29px */

  /* Black */

  color: #242728;
`
const TitleSubText2 = styled.a`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  letter-spacing: 0.5px;
  text-transform: uppercase;

  /* Green */

  color: #0f6b5c;
`
const OptionDiv = styled.div`
  border: 1px solid #bcc1c3;
  height: 131px;
  width: auto;
  display: flex;
  overflow: hidden;
  align-items: center;
  margin-top: 2vh;
  ${(p) => (p.hoverActive ? 'background: #0f6b5c;' : '')}
  ${(p) => (p.hoverActive ? 'color: white;' : 'black;')}

  ${(p) => (p.clickActive ? 'background: #0f6b5c;' : '')}
  ${(p) => (p.clickActive ? 'color: white;' : 'black;')}
    &:hover {
    cursor: ${svgToBase64Url(
        '<svg xmlns="http://www.w3.org/2000/svg" id="Lager_1" data-name="Lager 1" width="40" height="40" viewBox="0 0 161.398 161.398"><defs><style>.cls-1,.cls-2,.cls-3,.cls-4{fill:none;stroke:#fff;}.cls-1,.cls-3{stroke-width:5px;}.cls-2{stroke-width:13px;}.cls-3,.cls-4{stroke-miterlimit:10;}.cls-4{stroke-width:4px;}.cls-5{fill:#fff;}</style></defs><title>nomad</title><g id="Symbol_1_3" data-name="Symbol 1 3"><circle id="Ellipse_3" data-name="Ellipse 3" class="cls-1" cx="80.699" cy="80.699" r="78.199"/><g id="Group_4" data-name="Group 4"><path id="Path_4" data-name="Path 4" class="cls-2" d="M53.403,87.5989l50.075,53.551" transform="translate(-19 -19.5)"/><line id="Line_2" data-name="Line 2" class="cls-3" x1="58.959" y1="33.0099" x2="58.959" y2="128.8649"/><line id="Line_3" data-name="Line 3" class="cls-4" x1="124.3062" y1="32.3879" x2="124.3062" y2="121"/><path id="Path_3" data-name="Path 3" class="cls-2" d="M104.478,86.5989l-18.706,20.005L54.403,140.15" transform="translate(-19 -19.5)"/><path id="Path_1" data-name="Path 1" class="cls-5" d="M75.1689,51.8879H86.01l58.987,79.552v15.456Z" transform="translate(-19 -19.5)"/></g></g></svg>',
        '50',
        '50'
      )},
      auto;
  }
`
const OptionDivLeft = styled.div`
  padding: 15px;
  display: inline-block;
  width: 70%;
  height: 131px;
`
const OptionDivRight = styled.div`
  display: inline-block;
  width: 30%;
  padding-right: 20px;
  height: auto;
  text-align: end;
`

const OptionDivLeftTitle = styled.p`
  //styleName: H6;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
`

const OptionDivLeftBody = styled.p`
  font-family: Fira Sans;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
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
          <CompanyIcon src={Xnomad} href='https://www.xnomad.co/' />
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
                  hoverActive={hoveredId === idx && !disableHover}
                  onMouseLeave={() => setHoveredId(null)}
                  // On-click I want to (1) set that element to its color, and (2) make sure that hoover is disabled
                  onClick={() => {
                    setClickedId(idx)
                    setDisableHover(true)
                  }}
                  clickActive={clickedId === idx}
                  // noHover={disableHover}t
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
