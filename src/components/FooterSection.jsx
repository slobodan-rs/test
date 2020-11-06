import React from "react";
import styled from 'styled-components';
import Logo from '../assets/Logo.png';
import social from '../assets/social.png';
const Container = styled.div`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  position:relative;
  background-color: #D7D2CB;
  padding: ${props => props.nopadd ? "10%" : "10%"};
  display: inline-block;
  top: 2450px;
}

position:relative;
background-color: #D7D2CB;
padding: ${props => props.nopadd ? "0" : "7%"};
display: flex;
top: 1775px;
`
const Image = styled.img`
width: 10vw;
`
const Innercontainer = styled.div`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */

}

`
const Innercontainer1 = styled.div`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  margin-right: 300px;
  margin-top: 0px;
}
max-width: 25%;
width: 30%;
padding-right: ${props => props.right ? "0" : "5%"};
`

const Innercontainer2 = styled.div`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
margin-right: 100px;
margin-top: -50px;
}
max-width: 25%;
width: 30%;
padding-right: ${props => props.right ? "0" : "5%"};
`
const Innercontainer3 = styled.div`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */

}
max-width: 25%;
width: 30%;
padding-right: ${props => props.right ? "0" : "5%"};
`

const Innercontainer4 = styled.div`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */

}
max-width: 25%;
width: 30%;
padding-right: ${props => props.right ? "0" : "5%"};
`

const Txt = styled.p`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
word-wrap: break-word
font-size: 10px;
clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
}
font-family: sans-serif;
font-size: 18px;
font-weight: ${props => props.bold ? "bold" : "none"};
color: #333333;
`
const Txt1 = styled.p`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  font-family: sans-serif;
  font-size: 12px;
  color: #333333;
  margin-right: 50px;
}
font-family: sans-serif;
font-size: 16px;
font-weight: ${props => props.bold ? "bold" : "none"};
color: #333333;
margin-top: -35px;
margin-right: 20px;
clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
`
const Txtcontainer = styled.div`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */

}
width: 100%;
margin-top: 10%;
text-align: center;

`

export default class Footer extends React.Component {
    render() {
        return(
            <div>
                <Container>
                    <Innercontainer>
                    <Image src={Logo}/>
                       <br></br>
                       <br></br>
                       <Image src={social}/>
                       <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Txt1>Let your idea meet your customer through <br /> easy to book and flexible pop-up spaces.</Txt1>
                    </Innercontainer>
                    <Innercontainer1>
                        <Txt bold>Explore spaces</Txt>
                        <Txt>Norrmalm</Txt>
                        <Txt>Vasastan</Txt>
                        <Txt>Kungshulmen</Txt>
                        <Txt>Sodermalm</Txt>
                    </Innercontainer1>
                    <Innercontainer2>
                        <br></br>
                        <br></br>
                        <Txt>Galma Stan</Txt>
                        <Txt>Bibliotekgatan</Txt>
                        <Txt>Kungsgatan</Txt>
                        <Txt>Ostermalm</Txt>
                    </Innercontainer2>
                    <Innercontainer3>
                        <Txt bold>About</Txt>
                        <Txt>hello@xnomad.com</Txt>
                        <Txt>FAQ</Txt>
                        <Txt>About us</Txt>
                        <Txt>Contact us</Txt>
                    </Innercontainer3>
                    <Innercontainer4>
                        <Txt bold>Legal</Txt>
                        <Txt>Privacy Policy</Txt>
                        <Txt>Terms of Service</Txt>
                    </Innercontainer4>

                </Container>
                <Container nopadd>
                    <Txtcontainer>
                        <Txt>Copyright © 2020 xNomad</Txt>
                    </Txtcontainer>
                </Container>

            </div>
        )
    }
}
