import React from "react";
import styled from 'styled-components';

//Images
import Logo from '../assets/Logo.png';
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'


class FooterSection extends React.Component {
  render() {
    return (
      <div>
        <Footer>
          <Container>
            <Block tabletFirs>
              <img src={Logo} alt="Logo" />
              <Social>
                <img src={twitter} alt="Logo" />
                <img src={instagram} alt="Logo" />
                <img src={instagram} alt="Logo" />
                <img src={instagram} alt="Logo" />
              </Social>
              <Discription>Let your idea meet your customer through easy to book and flexible pop-up spaces.</Discription>
            </Block>
            <Block>
              <Title>Explore spaces</Title>
              <Text>Norrmalm</Text>
              <Text>Vasastan</Text>
              <Text>Kungsholmen</Text>
              <Text>Södermalm</Text>
            </Block>
            <Block reposition>
              <Text>Galma Stan</Text>
              <Text>Bibliotekgatan</Text>
              <Text>Kungsgatan</Text>
              <Text>Ostermalm</Text>
            </Block>
            <Block>
              <Title>About</Title>
              <Text>hello@xnomad.com</Text>
              <Text>FAQ</Text>
              <Text>About us</Text>
              <Text>Contact us</Text>
            </Block>
            <Block>
              <Title>Legal</Title>
              <Text>Privacy Policy</Text>
              <Text>Terms of Service</Text>
            </Block>
          </Container>
          <Copyright>Copyright &#169; 2020 xNomad</Copyright>
        </Footer>

      </div>
    )
  }
}
export default FooterSection

//Styled Components
const Footer = styled.footer`
  width: 100%;
  height: 100%;
  background-color: #D7D2CB;
  padding-bottom: 32px;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 65px;

  @media(max-width: 767px){
    margin: 48px 0;
    padding: 48px 0 0 0;
  }
  @media(min-width: 768px) and (max-width: 870px){
    margin: 225px 44px 0 44px;
  }
`
const Block = styled.div`
  margin-top: ${({ reposition }) => reposition ? '110px' : '76px'};

  @media(max-width: 767px){
    width: 100%;
    margin: 16px;
  }
  @media(min-width: 768px) and (max-width: 870px){
    width: ${({ tabletFirs }) => tabletFirs ? '100%' : '145px'};
  }
  
`
const Social = styled.div`
  margin-top: 35px;

  img {
    padding-right: 24px;
  }

`
const Discription = styled.div`
  margin-top: 24px;
  width: 310px;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #333333;
`
const Title = styled.h6`
  font-family: Charter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  color: #333333;
  margin-bottom: 12px;
`
const Text = styled.div`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 200%;
  color: #333333;
`
const Copyright = styled.div`
  width: 100%;
  margin-top: 193px;
  text-align: center;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #333333;

  @media(max-width: 767px){
    margin-top: 0; 
  }
  @media(min-width: 768px) and (max-width: 870px){
    margin-top: 50px;
  }
  @media(min-width: 870px) and (max-width: 1024px){
    margin-top: 0px;
  }
`



