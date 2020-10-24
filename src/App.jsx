import React from 'react'
import styled from 'styled-components'
import Xnomad from './icons/Xnomad.svg'

const Wrapper = styled.div``

const Header = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 6vh;
  border-bottom: 2px solid black;
`
const Price = styled.p`
margin:auto
`
const CompanyIcon = styled.img`
  width: 9vw;
  height: 5vh;
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

const TitleText = styled.p`
font-family: Charter;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 120%;
/* or 38px */


/* Black */

color: #242728;
`
const TitleSubText1 = styled.p`
font-family: Charter;
font-style: normal;
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

color: #0F6B5C;
`
const OptionDiv = styled.div`
  border: 1px solid #bcc1c3;
  height:131px;
  width:auto;
  display: block;
  overflow:hidden;
  align-items: center;
  margin-top: 2vh;
  background: ${(p) => (p.active ? '#0f6b5c' : '')};
  color: ${(p) => (p.active ? 'white' : 'black')};
  &:hover {
    cursor: url('cursor: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png"), auto;'),
      auto;
  }
`
const OptionDivLeft = styled.div`
padding:15px;
display:inline-block;
width:50%;
height:131px;

`
const OptionDivLeftTitle = styled.p`
  //styleName: H6;
  font-family: Charter;
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
const OptionDivRight = styled.div`
display:inline-block;
width:20%;
padding:5px;
height:auto;
`

const OptionDivTitles = [
  {
    titleText: 'I bring my own furniture',
    bodyText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod duis nec nunc.',
    price: 0,
  },
  {
    titleText: '(S) Furniture package (0-80 m2)',
    bodyText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod duis nec nunc.',
    price: '27 000',
  },
  {
    titleText: '(M) Furniture package  (80-200 m2)',
    bodyText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod duis nec nunc.',
    price: '40 000',
  },
  {
    titleText: '(L) Furniture package (+200 m2)',
    bodyText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod duis nec nunc.',
    price: '54 000',
  },
]

const FirstViewRight = styled.div``

export const App = () => {
  const [hoveredId, setHoveredId] = React.useState(null)
  return (
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
          <TitleSubText2>WHICH FURNITURE PACKAGE FITS YOU BEST?</TitleSubText2>
          <div>
          {OptionDivTitles.map((item, idx) => {
            return (
              <OptionDiv
                id={idx + 10}
                onMouseEnter={() => setHoveredId(idx)}
                active={hoveredId === idx}
                onMouseLeave={() => setHoveredId(null)}
              >
                <OptionDivLeft>
                  <OptionDivLeftTitle>{item.titleText}</OptionDivLeftTitle>
                  <OptionDivLeftBody>{item.bodyText}</OptionDivLeftBody>
                </OptionDivLeft>
                <OptionDivRight>
                  <Price>
                  {' '}
                  {idx !== 0 ? '+' : ''} SEK {item.price}
                  </Price>
                </OptionDivRight>
              </OptionDiv>
            )
          })}
          </div>
        </FirstViewLeft>
        <FirstViewRight></FirstViewRight>
      </FirstView>
    </Wrapper>
  )
}
