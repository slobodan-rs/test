import React, { useRef } from 'react'
import styled from 'styled-components'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

//Icons and images
import Xnomad from './icons/Xnomad.svg'
import XnomadMobile from './icons/XnomadMobile.svg'
import Plus from './icons/Plus.svg'
import Minus from './icons/Minus.svg'
import search from './icons/search.svg'

//Components
import { OptionDivTitles } from './consts.js'
import IdeaSection from './components/IdeaSection'
import IdeaSectionDiscript from './components/IdeaSectionDiscript'
import IdeaForm from './components/IdeaForm'
import SelectSection from './components/SelectSection'
import SpacesSection from './components/SpacesSection'
import PerfectSpaceSection from './components/PerfectSpaceSection'
import FeaturedSection from './components/FeaturedSection'
import BookSection from './components/BookSection'
import ManageSection from './components/ManageSection'
import MeasureSection from './components/MeasureSection'
import MoveinSection from './components/MoveinSection'
import GuideSection from './components/GuideSection'
import EnquiryMobileIcons from './components/EnquiryMobileIcons'
import CardPDF from './components/CardPDF'
import SuccessSection from './components/SuccessSection'
import PerfectSection from './components/PerfectSection'
import Nav from './components/Nav'
import EnquiryStep2 from './components/EnquiryStep2'
import FooterSection from './components/FooterSection'
import PartnerSection from './components/PartnerSection'
import About from './About'
// <<<<<<< HEAD

// =======
// >>>>>>> 4e9f743ac8d6c08f9410ff3b9b022c26fe6f8430
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

  @media (max-width: 1024px) {
    border-bottom: none;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    height: 60px;
  }
`
const CompanyIcon = styled.img`
  width: 9vw;
  height: 5vh;
  margin-left: 5vw;
  &:hover {
    cursor: pointer;
    border-bottom: 6px solid black;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`
const CompanyIconMobile = styled.img`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    width: 90%;
    height: 5vh;
    margin-right: 80%;
    &:hover {
      cursor: pointer;
    }
  }
`
const CompanyIconMain = styled.img`
  width: 183px;
  margin-top: 5px;
  padding: 55px 40px 10px 10px;
  background: url(${Xnomad});
  background-size: 183px 27px;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1024px) {
    background: ${({ mobile }) =>
      mobile ? `url(${XnomadMobile})` : `url(${Xnomad})`};
    position: relative;
    left: 20%;
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center;
  }
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
  @media (max-width: 1024px) {
    display: none;
  }
`
const HeaderTextBoxesRewiev = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3vw;
  font-weight: 500px;
  color: ${(p) => (p.id === 1 ? '#0f6b5c' : '')};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`
const HeaderTextBoxesIdea = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3vw;
  font-weight: 500px;
  color: ${(p) => (p.id === 2 ? '#0f6b5c' : '')};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`

const headerTexts = ['MAKE IT MOVE IN READY', 'ABOUT YOU', 'PITCH YOUR IDEA']

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
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  /* or 38px */
  clear: both;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;

  /* Black */

  color: #242728;
`
const FirstViewRight = styled.div`
  margin-top: 20px;
  margin-left: 150px;
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
        '<svg id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 857.1763 133.1918"><defs><style>.cls-1,.cls-2,.cls-3,.cls-4,.cls-5{stroke:#000;}.cls-1{stroke-width:16.1175px;}.cls-2{fill:#252831;stroke-miterlimit:10;stroke-width:8.3734px;}.cls-3{fill:#4d4d4d;stroke-width:9.4719px;}.cls-4{stroke-width:9.472px;}.cls-5{stroke-width:9.1663px;}</style></defs><line class="cls-1" x1="27.0526" y1="31.7677" x2="96.2038" y2="100.9188"/><line class="cls-1" x1="96.2038" y1="31.7677" x2="27.0526" y2="100.9188"/><path d="M325.3969-.2386C313.2153,7.12,287.9279,27.59,287.836,66.1636c-.0884,37.1391,25.099,58.731,36.9853,66.7615-25.0908-5.6-52.9727-33.9818-52.8945-66.8117C272.0088,31.6434,302.095,4.0149,325.3969-.2386Z"/><path d="M372.3123,120.7652c12.9174-8.4247,22.455-28.2689,22.521-55.9961.0637-26.7434-8.3866-46.8148-22.2542-56.09,20.0768,5.7494,40.1176,26.6421,40.0474,56.1383C412.5577,93.7244,392.4172,114.7172,372.3123,120.7652Z"/><line class="cls-2" x1="656.8527" y1="10.7983" x2="603.1847" y2="131.376"/><polygon points="647.778 20.784 656.168 0.22 714.837 132.466 691.929 120.79 647.778 20.784"/><polygon points="747.811 13.692 762.841 -0.22 762.544 132.907 747.576 118.918 747.811 13.692"/><path d="M816.86,123.33c12.9177-8.526,22.4559-28.6083,22.5227-56.6679C839.4475,39.598,830.9979,19.2864,817.13,9.9c20.0767,5.8178,40.117,26.96,40.0459,56.81C857.1067,95.9639,836.9656,117.2088,816.86,123.33Z"/><path id="Path_85" data-name="Path 85" class="cls-3" d="M234.8,0V119"/><path id="Path_84" data-name="Path 84" class="cls-4" d="M124.8614,1.4447V132.5741"/><path id="Path_1" data-name="Path 1" d="M116.2171.04h19.1077L239.3,111.1068v21.58Z"/><polyline points="439.197 -0.505 498.002 95.563 494.326 112.593 439.131 25.964"/><polygon points="567.3 1.192 567.3 131.983 554.3 122.149 554.3 27.351 553.724 1.192 567.3 1.192"/><path id="Path_84-2" data-name="Path 84" class="cls-5" d="M443.7347,16.7809V133.1918"/></svg>',
        '70',
        '70'
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
  font-size: 14px;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
`

const StaffinDiv = styled.div`
  margin-left: 5vw;
  width: 35vw;
  margin-top: -500px;
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
const PointofsaleDiv = styled.div`
  margin-left: 5vw;
  width: 35vw;
`

const PointofsaleTitle = styled.div`
  font-size: 24px;
  margin-bottom: 1.5vh;
`
const PointofsaleTitle1 = styled.div`
  font-size: 16px;
  color: #0f6b5c;
  margin-bottom: 1.5vh;
`
const POSDiv = styled.div`
  display: flex;
  align-items: center;
  height: 81px;
  margin-top: 10px;
`

const POSDivDisplayer = styled.div`
  width: 300px;
  height: 100px;
  background-color: #0f6b5c;
  margin-left: 5vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const POSDivDisplayer1 = styled.div`
  width: 300px;
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
`
const POSText = styled.div`
  text-align: center;
  color: white;
`
const DataDiv = styled.div`
  margin-left: 5vw;
  width: 35vw;
  margin-top: -550px;
`
const DataAnalyticsDisplayer = styled.div`
  width: 600px;
  height: 100px;
  background-color: #0f6b5c;
  margin-left: 5vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const POSText1 = styled.div`
  text-align: center;
  color: black;
`
const DataAnalyticsTitle1 = styled.div`
  font-size: 24px;
  margin-bottom: 1.5vh;
`
const DataAnalyticsTitle2 = styled.div`
  font-size: 16px;
  color: #0f6b5c;
  margin-bottom: 1.5vh;
`

const DataAnalyticsDiv = styled.div`
  display: flex;
  align-items: center;
  height: 81px;
`
const DataAnalyticsText = styled.div`
  margin-left: -150px;
  color: white;
`
const SpaceCardWrapper = styled.div`
  position: absolute;
  width: 421px;
  height: 723px;
  left: 955px;
  top: 189px;
  background-color: #f0eeea;
  @media (max-width: 1024px) {
    left: 17px;
    top: 1659px;
    width: 90%;
  }
`
const IdeaCardWrapper = styled.div`
  position: absolute;
  width: 421px;
  height: 723px;
  left: 955px;
  top: 189px;
  background-color: #f0eeea;
  @media (max-width: 1024px) {
    left: 17px;
    top: 1659px;
    width: 90%;
  }
`
const FloatRight = styled.div`
  float: right;

  @media (max-width: 1024px) {
    display: ${({ show }) => (show ? 'flex' : 'none')};
    flex-direction: column;
    width: 170px;
    float: none;
    margin: 0 auto;
    text-align: center;
  }
`
const StyledSearchInput = styled.input`
  position: absolute;
  top: 0%;
  width: 900px;
  border: 1px solid #d7dadb;
  border-right: none;
  border-bottom: none;
  border-top: none;
  padding: 38px 40px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position-x: 10px;
  background-position-y: 35px;

  ::placeholder {
    font-family: Fira Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
  }
  :focus {
    outline: none;
  }
  @media (max-width: 1024px) {
    display: ${({ searchIcon }) => (searchIcon ? 'flex' : 'none')};
    background-image: none;
    width: 45%;
    padding: 30px;
    left: 85px;
    border: none;
  }
`
const SearchIcon = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    position: relative;
    width: 38px;
    height: 38px;
    top: 17px;
    float: right;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-size: 40px;
    border: none;
  }
`

export const App = () => {
  const [hoveredId, setHoveredId] = React.useState(null)
  const [clickedId, setClickedId] = React.useState(null)
  const [disableHover, setDisableHover] = React.useState(false)

  const [burgerMenu, setBurgerMenu] = React.useState(false)
  const [navExpand, setNavExpend] = React.useState(false)
  const [searchField, setSeacrhField] = React.useState(false)
  const inputRef = useRef()

  const handleNav = () => {
    !navExpand ? setNavExpend(true) : setNavExpend(false)
  }
  const handleSearchIcon = () => {
    setNavExpend(false)
    searchField ? setSeacrhField(false) : setSeacrhField(true)
  }

  // Uncommet when pagination is done
  // useEffect(() => {
  //   inputRef.current.focus()
  // }, [searchField]);

  let frontColor = '#FFFF'
  let backColor = '#0F6B5C'

  const [staffingCounter, setStaffingCounter] = React.useState(0)
  let StaffingAnalyticsDivDisplayerPrice = `SEK 350/h ${'   '}   x ${'   '}   14 days ${'   '}  = ${'   '}  SEK ${
    39200 + staffingCounter * 4000
  }`
  return (
    <>
      {/* <Login /> */}
      <Wrapper>
        <Router>
          {/* --------- LANDING PAGE --------- */}
          <Route exact path='/'>
            <Nav onClick={handleNav} expand={navExpand}>
              <CompanyIconMain
                href='https://www.xnomad.co/'
                mobile={!burgerMenu ? setBurgerMenu(true) : burgerMenu}
              />
              <SearchIcon onClick={handleSearchIcon} />
              <StyledSearchInput
                type='text'
                placeholder='Search retail spaces...'
                searchIcon={searchField}
                ref={inputRef}
              />
              <FloatRight show={navExpand}>
                <Link to='/'></Link>
                <Link to='/add-listening'>ADD LISTENING</Link>
                <Link to='/for-brands'>FOR BRANDS</Link>
                <Link to='/for-landlords'>FOR LANDLORDS</Link>
                <Link to='/signup'>SIGN UP</Link>
                <Link to='/login'>LOG IN</Link>
              </FloatRight>
            </Nav>
            <SelectSection />
            <SpacesSection />
            <PerfectSpaceSection />
            <FeaturedSection />
            <BookSection />
            <ManageSection />
            <MeasureSection />
            <MoveinSection />
            <SuccessSection />
            <GuideSection />
            <PartnerSection />
            <PerfectSection />
            <FooterSection />
            {/* --------- / LANDING PAGE --------- */}
          </Route>

          <Route exact path='/enquiry1'>
            {/* --------- ENQUIRY PAGE 1 --------- */}
            <Header>
              <CompanyIcon src={Xnomad} href='https://www.xnomad.co/' />
              <CompanyIconMobile
                src={XnomadMobile}
                href='https://www.xnomad.co/'
              />
              <EnquiryMobileIcons
                firstBack={backColor}
                firstFront={frontColor}
              />
              {headerTexts.map((item, idx) => {
                return (
                  <HeaderTextBoxes id={idx} key={idx}>
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
                      key={idx}
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
                      // noHover={disableHover}
                    >
                      <OptionDivLeft>
                        <OptionDivLeftTitle>
                          {item.titleText}
                        </OptionDivLeftTitle>
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
              {/* <<<<<<< HEAD */}
              <FirstViewRight>
                <SpaceCardWrapper>
                  <CardPDF />
                </SpaceCardWrapper>
              </FirstViewRight>
              {/* ======= */}
              <FirstViewRight></FirstViewRight>
              {/* >>>>>>> 4e9f743ac8d6c08f9410ff3b9b022c26fe6f8430 */}
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
            <PointofsaleDiv>
              <PointofsaleTitle>Points-of-sale</PointofsaleTitle>
              <PointofsaleTitle1>DO I NEED A POINT OF SALE?</PointofsaleTitle1>
            </PointofsaleDiv>
            <POSDiv>
              <POSDivDisplayer>
                <POSText>
                  I have my own PoS System <br /> SEK 0
                </POSText>
              </POSDivDisplayer>
              <POSDivDisplayer1>
                <POSText1>
                  I have my own PoS System <br /> SEK 0
                </POSText1>
              </POSDivDisplayer1>
            </POSDiv>
            <FirstView>
              <FirstViewLeft>
                <TitleSubText1>Influencer Marketing</TitleSubText1>
                <TitleSubText2>
                  WHICH Marketing PACKAGE FITS YOU BEST?
                </TitleSubText2>
                {OptionDivTitles.map((item, idx) => {
                  return (
                    <OptionDiv
                      key={idx}
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
                      // noHover={disableHover}
                    >
                      <OptionDivLeft>
                        <OptionDivLeftTitle>Title Here</OptionDivLeftTitle>
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
            <DataDiv>
              <DataAnalyticsTitle1>Data & Analytics</DataAnalyticsTitle1>
              <DataAnalyticsTitle2>
                WHAT IS DATA & ANALYTICS
              </DataAnalyticsTitle2>
            </DataDiv>
            <DataAnalyticsDiv>
              <DataAnalyticsDisplayer>
                <DataAnalyticsText>
                  Data & Analytics package <br /> Lorem ipsum dolor sit amet,
                  consectetur <br /> adipiscing elit. Mauris euismod duis nec
                  nunc.
                </DataAnalyticsText>
              </DataAnalyticsDisplayer>
            </DataAnalyticsDiv>
            {/* --------- / ENQUIRY PAGE 1 --------- */}
          </Route>

          <Route exact path='/enquiry2'>
            {/* --------- ENQUIRY PAGE 2 --------- */}
            <Header>
              <CompanyIcon src={Xnomad} href='https://www.xnomad.co/' />
              <CompanyIconMobile
                src={XnomadMobile}
                href='https://www.xnomad.co/'
              />
              <EnquiryMobileIcons
                secondBack={backColor}
                secondFront={frontColor}
              />
              {headerTexts.map((item, idx) => {
                return (
                  <HeaderTextBoxesRewiev id={idx} key={idx}>
                    {idx + 1}. {item}
                  </HeaderTextBoxesRewiev>
                )
              })}
            </Header>
            <About />
            {/* <Home /> */}
            {/* --------- / ENQUIRY PAGE 2 --------- */}
          </Route>

          <Route exact path='/enquiry3'>
            {/* --------- ENQUIRY PAGE 3 --------- */}
            <Header>
              <CompanyIcon src={Xnomad} href='https://www.xnomad.co/' />
              <CompanyIconMobile
                src={XnomadMobile}
                href='https://www.xnomad.co/'
              />
              <EnquiryMobileIcons
                thirdBack={backColor}
                thirdFront={frontColor}
              />
              {headerTexts.map((item, idx) => {
                return (
                  <HeaderTextBoxesIdea id={idx} key={idx}>
                    {idx + 1}. {item}
                  </HeaderTextBoxesIdea>
                )
              })}
            </Header>
            <IdeaSection>
              <h4>Pitch your idea to the landlord</h4>
            </IdeaSection>
            <IdeaSectionDiscript>
              To send an enquiry, landlords require some information about your
              idea for the space. If they like your idea, you'll be able to ask
              any questions and set up a viewing.
            </IdeaSectionDiscript>
            <IdeaForm />
            <IdeaCardWrapper>
              <CardPDF />
            </IdeaCardWrapper>

            {/* --------- / ENQUIRY PAGE 3 --------- */}
          </Route>
        </Router>
      </Wrapper>
      {/* <<<<<<< HEAD
  <Router>

    <Switch>
      <Route path='/about' component={About} />
    </Switch>
  </Router>
=======
>>>>>>> 4e9f743ac8d6c08f9410ff3b9b022c26fe6f8430 */}
    </>
  )
}
