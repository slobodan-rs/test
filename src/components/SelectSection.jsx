import React, { Component } from 'react'
import styled from 'styled-components'

//images
import landibgImg from '../assets/images/tryck-16.jpg'
import trustedMobile from '../assets/images/trusted-mobile.svg'

//Components
import TrustedSVG from './TrustedSVG'

class SelectSection extends Component {
    render() {
        return (
            <Wrapper>
                <ImgDiv>
                    <StyledH1>Where your customer<br></br> meets your brand</StyledH1>
                    <SelectWrapper>
                        <StyledSelect1 name="Size">
                            <option value="">Size</option>
                        </StyledSelect1>
                        <StyledSelect2 name="Month">
                            <option value="">Month</option>
                        </StyledSelect2>
                        <StyledSelect3 name="Location">
                            <option value="">Location</option>
                        </StyledSelect3>
                        <StyledButton>Browse our spaces</StyledButton>
                    </SelectWrapper>
                </ImgDiv>
                <Referals>
                    <TrustedSVG />
                </Referals>
            </Wrapper>
        )
    }
}

export default SelectSection

// Styled Components
const Wrapper = styled.section`
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 0;
`
const ImgDiv = styled.div`
    width: 100%;
    height: 900px;
    background: url(${landibgImg}), url(DSCF1674.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 

    @media(max-width: 1024px) {
        width: 100%;
        height: 475px;
        background: linear-gradient(0deg, rgba(25, 25, 25, 0.25), rgba(25, 25, 25, 0.25)), url(${landibgImg}), url(DSCF1674.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`
const SelectWrapper = styled.div`
    width: 746px;
    height: 78px;
    display: inline-block;
    padding-top: 28px;
    @media(max-width: 1024px){
        width: 210px;
        height: 68px;
    }
`
const StyledH1 = styled.h1`
/* Where your customer meets your brand */
    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 115%;
    color: #FFFFFF;
    margin: 0px;
    padding-top: 287px;


    /* White */
    color: #FFFFFF;
    @media(max-width: 1024px){
        font-size: 40px;
        line-height: 115%;
        padding-top: 88px;
    }
`
const StyledSelect1 = styled.select`
/* Rectangle 3 */
    width: 121px;
    height: 68px;
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

    @media(max-width: 1024px){
        display: none;
    }
`
const StyledSelect2 = styled.select`
    width: 149px;
    height: 68px;
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

    @media(max-width: 1024px){
        display: none;
    }
`
const StyledSelect3 = styled.select`
    width: 168px;
    height: 68px;
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

    @media(max-width: 1024px){
        display: none;
    }
`
const StyledButton = styled.button`
/* button */
    padding: 24.6px 70px;
    height: 68px;

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

    @media(max-width: 1024px){
        width: 210px;
        height: 68px;
        padding: 10px;
    }
`
const Referals = styled.div`
    width: 100%;
    height: 108px;
    background: #D7D2CB;
    text-align: center;
    @media(max-width: 1024px){
        background: url(${trustedMobile});
        background-repeat: no-repeat;
        background-color:#D7D2CB;
        background-position: center;
        width: 100%;
        height: 276px;
        left: 0px;
        right: 0px;
        top: 475px;
    }
`