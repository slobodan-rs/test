import React, { useRef } from 'react'
import styled from 'styled-components'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

//Icons and images
import Xnomad from './assets/icons/Xnomad.svg'
import XnomadMobile from './assets/icons/XnomadMobile.svg'
import search from './assets/icons/search.svg'

//Components
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
import FooterSection from './components/FooterSection'
import PartnerSection from './components/PartnerSection'
import About from './components/About'
import FurnitureAndDesign from './components/FurnitureAndDesign'
import Staffing from './components/Staffing'
import PointOfSale from './components/PointOfSale'
import Marketing from './components/Marketing'
import DataAndAnalytics from './components/DataAndAnalytics'



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
            <EnquiryOneWrapper>
              <EnquiryOneLeft>
                <FurnitureAndDesign setHoveredId={setHoveredId} hoveredId={hoveredId} disableHover={disableHover} setDisableHover={setDisableHover} setClickedId={setClickedId} clickedId={clickedId} />
                <Staffing />
                <PointOfSale />
                <Marketing setHoveredId={setHoveredId} hoveredId={hoveredId} disableHover={disableHover} setDisableHover={setDisableHover} setClickedId={setClickedId} clickedId={clickedId} />
                <DataAndAnalytics />
              </EnquiryOneLeft>
              <EnquiryOneRight>
                <EnquiryOneCardWrapper>
                  <CardPDF />
                </EnquiryOneCardWrapper>
              </EnquiryOneRight>
              <EnquiryOneLeft reposition>
                <EnquiryOneButton>Next</EnquiryOneButton>
              </EnquiryOneLeft>
            </EnquiryOneWrapper>

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
    </>
  )
}

//Styled Components

const Wrapper = styled.div``

const Header = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 96px;
  border-bottom: 2px solid black;

  @media (max-width: 1024px) {
    border-bottom: none;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    height: 60px;
    width: 100%;
    display: inline-block;
    overflow: none;
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
    display: inline-block;
    width: 45px;
    height: 45px;
    padding: 8px 16px;

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

  @media (max-width: 767px) {
    background: ${({ mobile }) =>
    mobile ? `url(${XnomadMobile})` : `url(${Xnomad})`};
    position: relative;
    left: 20%;
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (min-width: 768px) and (max-width: 925px) {
    background: ${({ mobile }) =>
    mobile ? `url(${XnomadMobile})` : `url(${Xnomad})`};
    position: relative;
    left: 35%;
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (min-width: 925px) and (max-width: 1024px) {
    background: ${({ mobile }) =>
    mobile ? `url(${XnomadMobile})` : `url(${Xnomad})`};
    position: relative;
    left: 38%;
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

const EnquiryOneCardWrapper = styled.div`
  background-color: #f0eeea;
  width: 421px;
  height: 723px;
  padding-top: 5px;
  margin-top: 93px;

  @media(max-width: 767px){
    width: 100%;
    height: 746px;
    margin-top: 0px;
  }
  @media(min-width: 768px) and (max-width: 820px){
    width: 351px;
    height: 746px;
    margin-top: 0px;
  }
  @media(min-width: 820px) and (max-width: 1024px){
    width: 371px;
    height: 746px;
    margin-top: 0px;
    margin-left: 16px;
  }
`
const EnquiryOneWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`
const EnquiryOneLeft = styled.div`
    width: 38%;
    margin-left: 68px;
    margin-top: ${({ reposition }) => reposition ? '0' : '93px'};

    @media(max-width: 1024px){
        width: 100%;
        margin: 16px;
    }
`
const EnquiryOneRight = styled.div`
     width: 50%;
     @media(max-width: 768px){
        width: 100%;
        margin: 16px;
    }
`
const EnquiryOneButton = styled.button`
  width: 147px;
  height: 68px;
  background: #0F6B5C;
  border: none;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom: 10px;

  @media(max-width: 768px){
    width: 100%;
    margin-bottom: 10px;
  }
`
const IdeaCardWrapper = styled.div`
  position: absolute;
  width: 421px;
  height: 723px;
  left: 955px;
  top: 189px;
  background-color: #f0eeea;

  @media (max-width: 767px) {
    left: 16px;
    top: 1659px;
    width: 90%;
    height: 766px;
  }
  @media (min-width: 768px) and (max-width: 1024px){
    left: 16px;
    top: 1659px;
    width: 343px;
    height: 766px;
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
  width: 300px;
  border: 1px solid #d7dadb;
  border-right: none;
  border-bottom: none;
  border-top: none;
  padding: 35px 40px;
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
    margin-right: 10px;
    background-size: 40px;
    border: none;
  }
`
