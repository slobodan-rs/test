import React, { Component } from 'react'
import styled from 'styled-components'

//images 
import perfectSpace from '../assets/images/perfect-space.jpeg'

class PerfectSpaceSection extends Component {
    render() {
        return (
            <Wrapper>
                <Title>
                    <h4>A perfect space for your brand</h4>
                </Title>
                <StyledImgDiv>
                    <Discription>
                        <div>Östermalm, Stockholm</div>
                        <h5>Grev Turegatan</h5>
                        <h6>5 000 kr/week</h6>
                        <div>Here you have an unique opportunity to pop up at one of Stockholms best locations. The space offers generous display windows facing the buzzing street of Grev Turegatan. The store is unfurnished and can easily be fabricated to your needs.</div>
                        <div>32 m2 • 16 000 visitors/week</div>
                    </Discription>
                </StyledImgDiv>
            </Wrapper>
        )
    }
}
export default PerfectSpaceSection

//Styled Components

const Wrapper = styled.section`
    width: 100%;
    height: 1000px;

    @media(max-width: 1024px){
        height: 100%;
    }
`
const Title = styled.div`
    height: 38px;
    margin-top: 80px;
    margin-left: 275px;
    margin-bottom: 40px;
    h4 {
        font-family: Charter;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 120%;
        color: #686058;
    }
    @media(max-width: 1024px){
        text-align: center;
        margin: 48px 16px 0px 16px;
        h4{
            font-size: 28px;
        }
    }
`
const StyledImgDiv = styled.div`
    margin: auto;
    width: 1312px;
    height: 725px;
    background: url(${perfectSpace});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 

    @media(max-width: 767px){
        height: 100%;
        width: 100%;
        background-size: 100%;
        margin-top: 50px;
    }
    @media(min-width: 768px) and (max-width: 1024px){
        height: 100%;
        width: 100%;
        background-size: 100%;
        margin-top: 50px;
    }
    @media(min-width: 1280px) and (max-width: 1280px){
        width: 97%;
        margin: 0 auto;
    }
`
const Discription = styled.div`
    position: relative;
    width: 756px;
    height: 353px;
    left: 135px;
    top: 500px;
    background: #F0EEEA;
    border-radius: 2px;
    
    div {
    :nth-child(1) {
        position: absolute;
        width: 184px;
        height: 24px;
        left: 31px;
        top: 73px;
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        text-transform: uppercase;
        /* Gray 2 */
        color: #555C5E;
    }
    :nth-child(4) {
        position: absolute;
        width: 310px;
        height: 232px;
        left: 373px;
        top: 77px;
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 150%;
        /* Black */
        color: #242728;
    }
    :nth-child(5) {
        position: absolute;
        width: 204px;
        height: 24px;
        left: 31px;
        top: 302px;
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        color: #555C5E;
    }
    }
    h5 {
        position: absolute;
        width: 307px;
        height: 29px;
        left: 31px;
        top: 110px;
        font-family: Charter;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 120%;
        /* Gray 1 */
        color: #3C4143;
    }
    h6 {
        position: absolute;
        height: 22px;
        left: 31px;
        top: 165px;
        font-family: Charter;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 120%;
        color: #242728;
    }
    @media(max-width: 768px){
        width: 92%;
        height: 179px;
        left: 16px;
        top: 100px;

        div {
            :nth-child(1) {
                top: 30px;
                font-size: 14px;
            }
            :nth-child(4) {
                display: none;
            }
            :nth-child(5) {
                top: 140px;
                font-size: 16px;
            }
        }
        h5 {
            font-size: 20px;
            top: 50px;
        }
        h6 {
            top: 80px;
            font-size: 20px;
        }

    }
    @media(min-width: 769px) and (max-width: 1024px){
        left: 150px;
        top: 200px;
    }

`
