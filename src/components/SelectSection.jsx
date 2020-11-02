import React, { Component } from 'react'
import styled from 'styled-components'

//images
import landibgImg from '../images/tryck-16.jpg'


import TrustedSVG from './TrustedSVG'

class SelectSection extends Component {
    render() {
        return (
            <Wrapper>
                <ImgDiv>
                    <StyledH1>Where your customer<br></br> meets your brand</StyledH1>
                    <StyledSelect1 name="Size">
                        <option value="" disabled selected>Size</option>
                    </StyledSelect1>
                    <StyledSelect2 name="Month">
                        <option value="" disabled selected>Month</option>
                    </StyledSelect2>
                    <StyledSelect3 name="Location">
                        <option value="" disabled selected>Location</option>
                    </StyledSelect3>
                    <StyledButton>Browse our spaces</StyledButton>
                </ImgDiv>
                <Referals />
                <TrustedSVG />
            </Wrapper>
        )
    }
}

export default SelectSection

// Styled Components
const Wrapper = styled.section`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 5.56%;
    bottom: 0%;
    width: 100vw;
    margin: auto;
`
const ImgDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 736px;
    left: 0px;
    top: 0px;
    background: url(${landibgImg}), url(DSCF1674.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 

    @media(max-width: 1024px) {
        position: absolute;
        height: 475px;
        left: 0px;
        right: 0px;
        top: 0px;
        background: linear-gradient(0deg, rgba(25, 25, 25, 0.25), rgba(25, 25, 25, 0.25)), url(${landibgImg}), url(DSCF1674.jpg);
    }
`
const StyledH1 = styled.h1`
/* Where your customer meets your brand */
    position: absolute;
    width: 866px;
    height: 166px;
    left: 25%;
    top: 180px;
    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 115%;

    /* or 83px */
    text-align: center;

    /* White */
    color: #FFFFFF;
`
const StyledSelect1 = styled.select`
/* Rectangle 3 */
    position: absolute;
    width: 121px;
    height: 68px;
    left: 597px;
    top: 479px;
    background: #FFFFFF;
    /* Gray 7 */
    border: 1px solid #E4E6E7;
    box-sizing: border-box;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    padding: 20px 20px 21px 24px;
`
const StyledSelect2 = styled.select`
    position: absolute;
    width: 149px;
    height: 68px;
    left: 718px;
    top: 479px;
    background: #FFFFFF;
    /* Gray 7 */
    border: 1px solid #E4E6E7;
    box-sizing: border-box;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    padding: 20px 20px 21px 24px;

`
const StyledSelect3 = styled.select`
    position: absolute;
    width: 168px;
    height: 68px;
    left: 867px;
    top: 479px;
    background: #FFFFFF;
    /* Gray 7 */
    border: 1px solid #E4E6E7;
    box-sizing: border-box;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    padding: 20px 20px 21px 24px;
`
const StyledButton = styled.button`
/* button */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px 0px 0px 24px;

    position: absolute;
    width: 210px;
    height: 68px;
    left: 1034px;
    top: 479px;

    /* Green */
    background: #0F6B5C;
    border: none;
    /* Nav Link */
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    /* identical to box height, or 125% */
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #FFFFFF;
`
const Referals = styled.div`
    position: absolute;
    width: 100vw;
    height: 108px;
    left: 0px;
    top: 736px;
    background: #D7D2CB;
`