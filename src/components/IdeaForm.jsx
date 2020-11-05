import React, { Component } from 'react'
import styled from 'styled-components'


class IdeaForm extends Component {
    render() {
        return (
            <form>
                <TitleDiv>Name your idea</TitleDiv>
                <StyledTitleInput type="text" placeholder="ex. Custom made ice cream" />
                <MessageDiv>Tell the landlord about your brand and what you want to do in the space</MessageDiv>
                <StyledMessageInput type="text" rows='10' placeholder="Describe what your brand is about and what you want to do" />
                <ImgDivTitle>Upload your best brand images</ImgDivTitle>
                <ImgDivDiscription>Landlords love to see images so include some good quality product shots, press images or event photos.</ImgDivDiscription>
                <ImgContainer>
                    <p><i className="fas fa-plus"></i></p>
                    <p>Add images</p>
                </ImgContainer>
                <SocialDiv>
                    <h6>Your social handles</h6>
                </SocialDiv>
                <SocialDiv optional>
                    <p>optional</p>
                </SocialDiv>
                {/*--------- Input Feelds ------------*/}
                <StyledIconInsta>
                    <i className="fab fa-instagram" ></i>
                </StyledIconInsta>
                <StyledSocialInputInsta type="text" placeholder="@yourbrand" />
                <StyledIconFace>
                    <i className="fab fa-facebook-f"></i>
                </StyledIconFace>
                <StyledSocialInputFace type="text" placeholder="@yourbrand" />
                <StyledIconTwitter>
                    <i className="fab fa-twitter"></i>
                </StyledIconTwitter>
                <StyledSocialInputTwitter type="text" placeholder="@yourbrand" />
                <StyledIconWeb>
                    <i className="fas fa-globe"></i>
                </StyledIconWeb>
                <StyledSocialInputWeb type="text" placeholder="@yourbrand" />
                <SelectTitle>
                    <h6>How did you discover xNomad?</h6>
                </SelectTitle>
                <StyledSelect >
                    <option value="Select your option">Select your option</option>
                    <option value="1"></option>
                    <option value="2"></option>
                </StyledSelect>
                <ButtonsDiv>
                    <PrevBtn>Previous Step</PrevBtn>
                    <NextBtn>Next</NextBtn>
                </ButtonsDiv>

                {/*----------- Filled Page -----------*/}
                {/* <CoverImg />
                <StyledButton>REPLACE COVER IMAGE</StyledButton>
                <ImgDivOne></ImgDivOne>
                <ImgDivTwo></ImgDivTwo>
                <ImgDivThree></ImgDivThree>
                <ButtonsDiv>
                    <PrevBtn>Previous Step</PrevBtn>
                    <SendToBtn>Send to landlord</SendToBtn>
                </ButtonsDiv> */}
            </form>
        )
    }
}

export default IdeaForm

// Slyled Components
const TitleDiv = styled.h6`
/* Name your idea */
    position: absolute;
    width: 644px;
    height: 22px;
    left: 64px;
    top: 341px;

    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;

    @media(max-width: 1024px){
        position: absolute;
        width: 80%;
        height: 22px;
        left: 0;
        top: 345px;
        padding: 16px;
    }
`

const StyledTitleInput = styled.input`
    position: absolute;
    width: 644px;
    height: 52px;
    left: 64px;
    top: 409px;
    border: 1px solid #868F92;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 14px;

    ::placeholder,
    ::-webkit-input-placeholder  {
        position: absolute;
        width: 197px;
        height: 24px;
        left: 78px;
        top: 423px;

        /* Body Small */
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
    }
    @media(max-width: 1024px){
        position: absolute;
        width: 90%;
        height: 52px;
        left: 16px;
        top: 443px;

        ::placeholder,
        ::-webkit-input-placeholder  {
            position: absolute;
            width: 197px;
            height: 24px;
            left: 30px;
            top: 467px;
            font-family: Fira Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 150%;
            color: #868F92;
        }
    }

`
const MessageDiv = styled.h6`
/* Tell the landlord about your brand and what you want to do in the space */
    position: absolute;
    width: 610px;
    height: 22px;
    left: 64px;
    top: 415px;
    padding: 24px 0 16px 0;

    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;

    @media(max-width: 1024px){
        width: 80%;
        height: 44px;
        left: 0px;
        top: 477px;
        padding: 16px;
    }
`
const StyledMessageInput = styled.textarea`
/* Rectangle 149 */
    position: absolute;
    width: 644px;
    height: 158px;
    left: 64px;
    top: 523px;
    order: 1px solid #868F92;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 14px;

    ::placeholder,
    ::-webkit-input-placeholder  {
        position: absolute;
        width: 434px;
        height: 24px;
        left: 78px;
        top: 537px;
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
    }
    @media(max-width: 1024px){
        width: 90%;
        height: 158px;
        left: 16px;
        top: 597px;

    ::placeholder,
    ::-webkit-input-placeholder  {
        width: 315px;
        height: 48px;
        left: 30px;
        top: 611px;
    }
    }

`
const SocialDiv = styled.div`
    position: absolute;
    width: 224px;
    height: 22px;
    left: ${({ optional }) => optional ? '266px' : '64px'};
    top: ${({ optional }) => optional ? '1060px' : '1035px'};

    h6 {
        font-family: Charter;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 120%;
    }
    p {
        font-family: Fira Sans;
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        color: #868F92;
    }
    @media(max-width: 1024px){
        position: absolute;
        width: 164px;
        height: 22px;
        left: ${({ optional }) => optional ? '184px' : '16px'};
        top: ${({ optional }) => optional ? '1173px' : '1149px'};
        p{
            font-family: Charter;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 120%;
        }
    }

`
const StyledIconInsta = styled.div`
    position: absolute;
    left: 75px;
    top: 1131px;
    z-index: 1;
    color: #555C5E;
    @media(max-width: 1024px){
        left: 26px;
        top: 1245px;
    }
`

const StyledSocialInputInsta = styled.input`
    position: absolute;
    width: 644px;
    height: 52px;
    left: 64px;
    top: 1113px;
    border: 1px solid #868F92;
    box-sizing: border-box;
    border-radius: 2px;
    padding-left: 30px;

    ::placeholder,
    ::-webkit-input-placeholder {
        position: absolute;
        width: 92px;
        height: 24px;
        left: 112px;
        top: 1195px;

        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;

        /* Gray 4 */
        color: #868F92;
    }
    @media(max-width: 1024px){
        width: 90%;
        height: 52px;
        left: 16px;
        top: 1227px;
    }

`
const StyledIconFace = styled.div`
    position: absolute;
    left: 75px;
    top: 1199px;
    z-index: 1;
    color: #555C5E;
    @media(max-width: 1024px){
        left: 26px;
        top: 1314px;
    }
`
const StyledSocialInputFace = styled.input`
    position: absolute;
    width: 644px;
    height: 52px;
    left: 64px;
    top: 1181px;
    padding-left: 30px;

    /* Gray 4 */
    border: 1px solid #868F92;
    box-sizing: border-box;
    border-radius: 2px;

    ::placeholder,
    ::-webkit-input-placeholder {
        position: absolute;
        width: 92px;
        height: 24px;
        left: 64px;
        top: 811px;

        /* Body Small */
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
    }
    @media(max-width: 1024px){
        width: 90%;
        height: 52px;
        left: 16px;
        top: 1295px;
    }

`
const StyledIconTwitter = styled.div`
    position: absolute;
    left: 75px;
    top: 1267px;
    z-index: 1;
    color: #555C5E;
    @media(max-width: 1024px){
        left: 26px;
        top: 1382px;
    }
`
const StyledSocialInputTwitter = styled.input`
    position: absolute;
    width: 644px;
    height: 52px;
    left: 64px;
    top: 1249px;
    padding-left: 30px;

    /* Gray 4 */
    border: 1px solid #868F92;
    box-sizing: border-box;
    border-radius: 2px;

    ::placeholder,
    ::-webkit-input-placeholder {
        position: absolute;
        width: 92px;
        height: 24px;
        left: 112px;
        top: 1195px;

        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        /* Gray 4 */
        color: #868F92;
    }
    @media(max-width: 1024px){
        width: 90%;
        height: 52px;
        left: 16px;
        top: 1363px;
    }

`
const StyledIconWeb = styled.div`
    position: absolute;
    left: 75px;
    top: 1335px;
    z-index: 1;
    color: #555C5E;
    @media(max-width: 1024px){
        left: 26px;
        top: 1449px;
    }
`
const StyledSocialInputWeb = styled.input`
    position: absolute;
    width: 644px;
    height: 52px;
    left: 64px;
    top: 1317px;
    padding-left: 30px;

    /* Gray 4 */
    border: 1px solid #868F92;
    box-sizing: border-box;
    border-radius: 2px;

    ::placeholder,
    ::-webkit-input-placeholder {
        position: absolute;
        width: 92px;
        height: 24px;
        left: 112px;
        top: 1195px;

        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;

        /* Gray 4 */
        color: #868F92;
    }
    @media(max-width: 1024px){
        width: 90%;
        height: 52px;
        left: 16px;
        top: 1431px;
    }

`
const ImgDivTitle = styled.h6`
/* Upload your best brand images */
    position: absolute;
    width: 322px;
    height: 22px;
    left: 64px;
    top: 685px;

    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
    color: #242728;

    @media(max-width: 1024px) {
        width: 343px;
        height: 22px;
        left: 0;
        top: 747px;
        padding: 16px;
    }
`
const ImgDivDiscription = styled.p`
    position: absolute;
    width: 644px;
    height: 48px;
    left: 64px;
    top: 743px;

    /* Body Small */
    font-family: Fira Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #555C5E;

    @media(max-width: 1024px){
        width: 343px;
        height: 72px;
        left: 0;
        top: 805px;
        padding: 16px;
    }
`

const ImgContainer = styled.div`
/* Rectangle 149 */
    position: absolute;
    width: 644px;
    height: 244px;
    left: 64px;
    top: 807px;

    border: 1px dashed #868F92;
    box-sizing: border-box;
    border-radius: 2px;
    p {
        position: absolute;
        left: 42.61%;
        right: 69.93%;
        top: 42.23%;
        bottom: 58.92%;
        width: 93px;
        height: 20px;

        /* Nav Link */
        font-family: Fira Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;

        /* identical to box height, or 125% */
        letter-spacing: 0.5px;
        text-transform: uppercase;

        /* Gray 3 */
        color: #6D7679;
    }
    p:first-child{
        position: absolute;
        left: 48.61%;
        right: 69.93%;
        top: 33.23%;
        bottom: 58.92%;
    }
    @media(max-width: 1024px) {
        width: 90%;
        height: 244px;
        left: 16px;
        top: 913px;
    }
    p {
        width: 93px;
        height: 20px;
        left: 0px;
        top: 1038px;

        :nth-child(2){
            width: 93px;
            height: 20px;
            left: calc(50% - 93px/2);
            top: 100px;
            z-index: 1;
        }
    }
`

const SelectTitle = styled.div`
    position: absolute;
    width: 644px;
    height: 22px;
    left: 64px;
    top: 1363px;

    h6 {
        font-family: Charter;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 120%;
        /* Black */
        color: #242728;
    }
    @media(max-width: 1024px){
        width: 90%;
        height: 22px;
        left: 16px;
        top: 1477px;
    }
`
const StyledSelect = styled.select`
    position: absolute;
    width: 644px;
    height: 52px;
    left: 64px;
    top: 1437px;

    /* Gray 4 */
    border: 1px solid #868F92;
    box-sizing: border-box;
    border-radius: 2px;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    background-color: white;
    padding: 10px;

    @media(max-width: 1024px){
        width: 90%;
        height: 52px;
        left: 16px;
        top: 1545px;
    }
`
const ButtonsDiv = styled.div`
    display: flex;
    margin-top: 7vh;
    width: 50vw;
    height: 15vh;
    margin-left: 5vw;
    position: absolute;
    left: -32px;
    top: 1450px;

    @media(max-width: 1024px){
        margin: 0px;
        position: absolute;
        padding: 10px 10px 10px 10px;
        width: 95%;
        height: 52px;
        left: 0%;
        right: 0%;
        bottom: 0px;
        top: 2529px;
        box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.28);
    }
`
const PrevBtn = styled.button`
    background-color: white;
    border: 1px solid black;
    width:160px;
    height:68px;
    border-radius: 2px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #0f6b5c;
    border-color:  #0f6b5c;

    @media(max-width: 1024px){
        width: 167px;
        height: 52px;
        left: 0%;
        right: 0%;
        bottom: 0px;
        border: none;
    }

`
const NextBtn = styled.button`
    background-color: #0f6b5c;
    color: white;
    width:100px;
    height:68px;
    margin-left: 20px;
    border-radius: 2px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    @media(max-width: 1024px){
        width: 167px;
        height: 52px;
        left: 0%;
        right: 0%;
        bottom: 0px;
        margin-left: 40px;
    }
`
