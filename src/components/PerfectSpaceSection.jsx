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
`
const Discription = styled.div`
    position: absolute;
    width: 756px;
    height: 353px;
    left: 375px;
    top: 2189px;
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
`

