import React, { Component } from 'react'
import styled from 'styled-components'

// imgages & icons
import Image from '../images/image.png'
import calendar from '../icons/calendar.svg'
import arrow from '../icons/arrow.svg'


class CardPDF extends Component {


    render() {
        return (
            <CardDiv>
                <CardTopTitle>Stockholm, Ostermalm</CardTopTitle>
                <CardTitle>Artillerigatan - Snoot</CardTitle>
                <CardImageDiv>
                    <CardImage src={Image} alt="" />
                    <CardImageCaption>30 m2 <br /> <br /> 10 000 visitors / day</CardImageCaption>
                </CardImageDiv>
                <Line />
                <CardCalendar>
                    <img src={calendar} alt="calendar" />7 August 2020 <img src={arrow} alt="arrow" />30 August 2020
                </CardCalendar>
                <Line />
                <CardInfoDiv>
                    <CardInfo1>Rent <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.666016 8.00069C0.666016 9.94561 1.43863 11.8109 2.8139 13.1861C4.18917 14.5614 6.05443 15.334 7.99935 15.334C9.94427 15.334 11.8095 14.5614 13.1848 13.1861C14.5601 11.8109 15.3327 9.94561 15.3327 8.00069C15.3327 6.05577 14.5601 4.19051 13.1848 2.81524C11.8095 1.43998 9.94427 0.667358 7.99935 0.667358C6.05443 0.667358 4.18917 1.43998 2.8139 2.81524C1.43863 4.19051 0.666016 6.05577 0.666016 8.00069V8.00069Z" stroke="#0F6B5C" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.66602 11.3367H8.66602C8.4892 11.3367 8.31964 11.2665 8.19461 11.1414C8.06959 11.0164 7.99935 10.8468 7.99935 10.67V6.33669C7.99935 6.24828 7.96423 6.1635 7.90172 6.10099C7.83921 6.03848 7.75442 6.00336 7.66602 6.00336H6.66602" stroke="#0F6B5C" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.82878 4.33337C7.79581 4.33337 7.76359 4.34315 7.73618 4.36146C7.70877 4.37978 7.68741 4.40581 7.6748 4.43626C7.66218 4.46671 7.65888 4.50023 7.66531 4.53256C7.67174 4.56489 7.68762 4.59458 7.71092 4.61789C7.73423 4.6412 7.76393 4.65707 7.79626 4.6635C7.82859 4.66994 7.8621 4.66664 7.89256 4.65402C7.92301 4.64141 7.94904 4.62004 7.96735 4.59264C7.98567 4.56523 7.99544 4.533 7.99544 4.50004C7.99544 4.45584 7.97788 4.41345 7.94663 4.38219C7.91537 4.35093 7.87298 4.33337 7.82878 4.33337Z" stroke="#0F6B5C" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </CardInfo1>
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

        )
    }
}

export default CardPDF

const CardDiv = styled.div`
    width: 421px;
    height: 723px;
    @media(max-width: 1024px){
        width: 343px;
        height: 766px;
        padding-left: 5px;
    }

`
const CardTopTitle = styled.p`
padding-top: 20px;
margin-left: 30px;
color: #555C5E;
`
const CardTitle = styled.h1`
margin-left: 20px;
`
const CardImageDiv = styled.div`
display: flex;
padding: 20px 0;
`
const CardImage = styled.img`
width: 169px;
height: 118px;
margin-left: 30px;
`
const CardImageCaption = styled.div`
margin-top: 10px;
margin-left: 20px;
color: #868F92;
`
const Line = styled.hr`
margin-top: 25px;
margin: auto;
width: 85%;
background-color: #868F92;
text-align: center;
`
const CardCalendar = styled.div`
    color: #868F92;
    text-align: center;

    font-family: Fira Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    padding: 10px 20px 20px 20px;

    img {
        position: relative;
        top: 12px;
        right: 5px;
        padding: 7px;
    }
    @media(max-width: 1024px){
        img{
            width: 20px;
            padding: 8px 5px;
        }
    }
`
const CardInfoDiv = styled.div`
display: flex;
`
const CardInfo1 = styled.div`
    color: #868F92;
    margin-left: 30px;
    margin-top: 20px;
    width: 70%;

    @media(max-width: 1024px) {
        width: 450px;
    }
`
const CardInfo2 = styled.div`
color: black;
margin-left: 30px;
margin-top: 20px;
width: 70%;
padding-bottom: 24px;
`
const CardSpan1 = styled.span`
    color: #868F92;
    margin-top: 22px;
    width: 50%;
    margin-right: 40px;
    text-align: right;
    overflow: auto;
    @media(max-width: 1024px) {
        width: 60%;
    }
`
const CardSpan2 = styled.span`
margin-top: 20px;
color: #868F92;
width: 50%;
margin-right: 40px;
text-align: right;
@media(max-width: 1024px) {
    width: 60%;
    }
`
const CardSpan3 = styled.span`
margin-top: 20px;
color: #868F92;
width: 50%;
margin-right: 40px;
text-align: right;
`
const CardSpan4 = styled.span`
margin-top: 20px;
color: #868F92;
width: 50%;
margin-right: 40px;
text-align: right;
`
const CardSpan5 = styled.span`
margin-top: 20px;
width: 50%;
margin-right: 40px;
text-align: right;
`
const DownloadBtn = styled.button`
    margin-top: 20px;
    background-color: #0f6b5c;
    color: white;
    width:370px;
    height:50px;
    margin-left: 20px;
    border: 1px solid #0f6b5c;
    @media(max-width: 1024px){
        width: 80%;
        height: 68px;
        margin-left: 35px;
    }
`
const CardFooter = styled.div`
color: #868F92;
margin-top: 30px;
text-align: center;
@media(max-width: 1024px){
        margin-top: 15px;
    }
`

