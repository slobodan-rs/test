import React from "react";
import styled from 'styled-components';
import Image from '../assets/Image.png';
import aganda from '../assets/aganda.png';

const Container = styled.div`
display: flex;
margin-left: 3vw;
`

const Innercontainer = styled.div`

`

const Maintxt = styled.h1`
font-size: ${props => props.size};
font-family: ${props => props.family};
font-weight: ${props => props.weight};
color: ${props => props.color ? "#868F92" : "#242728"};
color: ${props => props.one};
padding-left: ${props => props.left};
`

const Signup = styled.form``

const Names = styled.div`
display: flex;
`

const Styledinput = styled.input`
border: 1px solid #868F92;
padding-right: ${props => props.small ?"8vw" : "30vw"};
margin-right: 1.5vw;
height: 3vw;
font-size: 1vw;
::placeholder{
    padding: 1vw;
    font-size: 1vw;
}
`

const Btn = styled.button`
background-color: ${props => props.green ? "#0F6B5C" : "white"};
border: ${props => props.green ? "none" : "1px solid #0F6B5C"};
font-family: sans-serif;
padding: 1.2vw;
margin-right: ${props => props.noright ? "0" : "2vw"};
margin-left: ${props => props.left};
width: ${props => props.width};
font-weight: 700;
font-size: 1vw;
height: 4vw;
color: ${props => props.green ? "white" : "#0F6B5C"};
margin-bottom: ${props => props.nobottom ? "0" : "10vw"};
`

const Card = styled.div`
background-color: #F0EEEA;
padding-left: 2vw;
padding-right: 5vw;
margin-left: 20vw;
`

const Styledimg = styled.img`
margin-right: 3vw;
width: 12vw;
`

const Image2 = styled.img`
margin-top: 0.7vw;
margin-right: 3vw;
height: 1.5vw;
width: 1.5vw;
`

const Line = styled.hr`
border-bottom: none;
border-left: none;
border-right: none;
border-top: 1px solid #BCC1C3;
width: 100%;
`

export default class Main extends React.Component {
    render() {
        return(
            <div>
            <br></br>
            <br></br>
                <Container>
                    <Innercontainer>
                        <Maintxt family="serif" size="3vw">Review your information</Maintxt>
                        <Maintxt family="sans-serif" size="1.2vw" weight="200">Complete your profile with your business details and basic information</Maintxt>
                        <br></br>
                        <br></br>
                        <Signup>
                            <Maintxt family="serif" size="1.2vw">Company name</Maintxt>
                            <Styledinput placeholder="Your brand name"/>
                            <br></br>
                            <Maintxt family="serif" size="1.2vw">Your name</Maintxt>
                            <Names>
                                <Styledinput placeholder="First name" small/>
                                <Styledinput placeholder="Last name" small/>
                            </Names>
                            <br></br>
                            <Maintxt family="serif" size="1.2vw">Your email</Maintxt>
                            <Styledinput placeholder="john@yourbrand.com"/>
                            <br></br>
                            <Maintxt family="serif" size="1.2vw">Phone number</Maintxt>
                            <Styledinput placeholder=" +46"/>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Names>
                                <Btn width="12vw">PREVIOUS STEP</Btn>
                                <Btn green width="9vw">NEXT</Btn>
                            </Names>
                            
                        </Signup>

                    </Innercontainer>
                        
                    <Innercontainer>
                    <Card>
                    <br></br>
                    <Maintxt family="sans-serif" size="1vw" small weight="200" one="#555C5E">Stockholm, Östermalm</Maintxt>
                    <Maintxt family="serif" size="2vw">Artillerigatan - Snoot</Maintxt>
                    <Names>
                        <Styledimg src={Image}/>
                        <Maintxt color family="sans-serif" size="1vw" small weight="200">30 m2 <br/> 10 000 visitors / day</Maintxt>
                    </Names>
                    <Line/>
                    <Names>
                        <Image2 src={aganda} />
                        <Maintxt family="sans-serif" size="1vw" small weight="200" one="#555C5E">7 August 2020 → 30 August 2020</Maintxt>
                    </Names>
                    <Line/>
                    <br></br>
                    <Names>
                        <Maintxt family="sans-serif" size="1vw" small weight="200" one="#555C5E">Rent</Maintxt>
                        <Maintxt family="sans-serif" size="1vw" small weight="200" one="#555C5E" left="15vw">SEK 140 000</Maintxt>
                    </Names>
                    <Names>
                        <Maintxt family="sans-serif" size="1vw" small weight="200" one="#555C5E">Furniture (S)</Maintxt>
                        <Maintxt family="sans-serif" size="1vw" small weight="200" one="#555C5E" left="12vw">SEK 27 000</Maintxt>
                    </Names>
                    <Names>
                        <Maintxt family="sans-serif" size="1vw" small weight="200" one="#555C5E">Marketing (S)</Maintxt>
                        <Maintxt family="sans-serif" size="1vw" small weight="200" one="#555C5E" left="12vw">SEK 50 000</Maintxt>
                    </Names>
                    <Names>
                        <Maintxt family="sans-serif" size="1vw" small weight="200" one="#555C5E">Data & Analytics</Maintxt>
                        <Maintxt family="sans-serif" size="1vw" small weight="200" one="#555C5E" left="13vw">SEK 0</Maintxt>
                    </Names>
                    <Names>
                        <Maintxt family="sans-serif" size="1vw" small weight="700" one="#555C5E">Total</Maintxt>
                        <Maintxt family="sans-serif" size="1vw" small weight="700" one="#555C5E"  left="15vw">SEK 217 000</Maintxt>
                    </Names>
                    <Line/>
                    <Btn green noright left="2vw" nobottom width="20vw">DOWNLOAD ESTIMATE AS PDF</Btn>
                    <br></br>
                    <Maintxt family="sans-serif" size="1vw" small weight="200" one="#555C5E" left="2vw">This estimate is an approximation of final costs</Maintxt>
                    <br></br>
                </Card>

                    </Innercontainer>
                </Container>

            </div>
        )
    }
}