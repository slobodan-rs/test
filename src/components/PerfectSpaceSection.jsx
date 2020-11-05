import React, { Component } from 'react'
import styled from 'styled-components'

//images 
import perfectSpace from '../images/perfect-space.jpeg'

class PerfectSpaceSection extends Component {
    render() {
        return (
            <>
                <Title>
                    <h4>A perfect space for your brand</h4>
                </Title>
                <StyledImgDiv />
                <Discription>
                    <div>Östermalm, Stockholm</div>
                    <h5>Grev Turegatan</h5>
                    <h6>5 000 kr/week</h6>
                    <div>Here you have an unique opportunity to pop up at one of Stockholms best locations. The space offers generous display windows facing the buzzing street of Grev Turegatan. The store is unfurnished and can easily be fabricated to your needs.</div>
                    <div>32 m2 • 16 000 visitors/week</div>
                </Discription>
            </>
        )
    }
}
export default PerfectSpaceSection

//Styled Components
const Title = styled.div`
    position: absolute;
    width: 452px;
    height: 38px;
    left: 175px;
    top: 1643px;
    h4 {
        font-family: Charter;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 120%;
        color: #686058;
    }
    @media(max-width: 1024px){
        left: 16px;
        top: 1321px;
        width: 90%;
        h4{
            font-size: 28px;
        }
    }
`
const StyledImgDiv = styled.div`
    position: absolute;
    width: 1572px;
    height: 725px;
    left: 10%;
    top: 1781px;
    background: url(${perfectSpace});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 

    @media(max-width: 1024px){
        width: 100%;
        left: 0;
        top: 1239px;
        background-size: 100%;
    }
`
const Discription = styled.div`
    position: absolute;
    width: 756px;
    height: 353px;
    left: 375px;
    top: 2259px;
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
        top: 59px;
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
        top: 109px;
        font-family: Charter;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 120%;
        color: #242728;
    }
    @media(max-width: 1024px){
        width: 92%;
        height: 179px;
        left: 16px;
        top: 1650px;

        div {
            :nth-child(1) {
                top: 20px;
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
            top: 20px;
        }
        h6 {
            top: 40px;
            font-size: 20px;
        }

    }
`

