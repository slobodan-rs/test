import React, { Component } from 'react'
import styled from 'styled-components'


class Form extends Component {
    render() {
        return (
            <form>
                <TitleDiv>
                    <h6>Name your idea</h6>
                </TitleDiv>
                <StyledTitleInput type="text" placeholder="ex. Custom made ice cream" />
                <MessageDiv>
                    <h6>Tell the landlord about your brand and what you want to do in the space</h6>
                </MessageDiv>
                <StyledMessageInput type="text" placeholder="Describe what your brand is about and what you want to do" />
                <ImgDivTitle>
                    <h6>Upload your best brand images</h6>
                </ImgDivTitle>
                <ImgDivDiscription>
                    <p>Landlords love to see images so include some good quality product shots, press images or event photos.</p>
                </ImgDivDiscription>
                <ImgContainer>
                    <p><i class="fas fa-plus"></i></p>
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
                    <i class="fab fa-instagram" ></i>
                </StyledIconInsta>
                <StyledSocialInputInsta type="text" placeholder="@yourbrand" />
                <StyledIconFace>
                    <i class="fab fa-facebook-f"></i>
                </StyledIconFace>
                <StyledSocialInputFace type="text" placeholder="@yourbrand" />
                <StyledIconTwitter>
                    <i class="fab fa-twitter"></i>
                </StyledIconTwitter>
                <StyledSocialInputTwitter type="text" placeholder="@yourbrand" />
                <StyledIconWeb>
                    <i class="fas fa-globe"></i>
                </StyledIconWeb>
                <StyledSocialInputWeb type="text" placeholder="@yourbrand" />
                <SelectTitle>
                    <h6>How did you discover xNomad?</h6>
                </SelectTitle>
                <StyledSelect >
                    <option value="" disabled selected>Select your option</option>
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

export default Form

// Slyled Components
const TitleDiv = styled.div`
/* Name your idea */
    position: absolute;
    width: 644px;
    height: 22px;
    left: 64px;
    top: 341px;
    
    h6 {
        font-family: Charter;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 120%;
    }
    @media(max-width: 1024px){
        position: absolute;
        width: 343px;
        height: 22px;
        left: 16px;
        top: 415px;
        h6 {
            font-family: Charter;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 120%;


        }
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
        width: 343px;
        height: 52px;
        left: 16px;
        top: 453px;


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
const MessageDiv = styled.div`
/* Tell the landlord about your brand and what you want to do in the space */
    position: absolute;
    width: 343px;
    height: 44px;
    left: 16px;
    top: 537px;

    h6 {
        font-family: Charter;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 120%;
    }
    @media(max-width: 1024px){
        width: 343px;
        height: 44px;
        left: 16px;
        top: 537px;
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
        width: 343px;
        height: 158px;
        left: 16px;
        top: 597px;
    }
    ::placeholder,
    ::-webkit-input-placeholder  {
        width: 315px;
        height: 48px;
        left: 30px;
        top: 611px;
    }

`
const SocialDiv = styled.div`
    position: absolute;
    width: 164px;
    height: 22px;
    left: ${({ optional }) => optional ? '236px' : '64px'};
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

`
const StyledIconInsta = styled.div`
    position: absolute;
    left: 75px;
    top: 1131px;
    z-index: 1;
    color: #555C5E;
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
        

        /* Body Small */
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;

        /* identical to box height, or 24px */

        /* Gray 4 */
        color: #868F92;
    }
       
`
const StyledIconFace = styled.div`
    position: absolute;
    left: 75px;
    top: 1199px;
    z-index: 1;
    color: #555C5E;
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
       
`
const StyledIconTwitter = styled.div`
    position: absolute;
    left: 75px;
    top: 1267px;
    z-index: 1;
    color: #555C5E;
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

        /* Body Small */
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;

        /* identical to box height, or 24px */

        /* Gray 4 */
        color: #868F92;
    }
       
`
const StyledIconWeb = styled.div`
    position: absolute;
    left: 75px;
    top: 1335px;
    z-index: 1;
    color: #555C5E;
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

        /* Body Small */
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;

        /* identical to box height, or 24px */

        /* Gray 4 */
        color: #868F92;
    }
       
`
const ImgDivTitle = styled.div`
/* Upload your best brand images */
    position: absolute;
    width: 262px;
    height: 22px;
    left: 64px;
    top: 685px;

    h6 {
        font-family: Charter;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 120%;
        color: #242728;
    }
    @media(max-width: 1024px) {
        width: 343px;
        height: 22px;
        left: 16px;
        top: 787px;
    }
`
const ImgDivDiscription = styled.div`
    position: absolute;
    width: 644px;
    height: 48px;
    left: 64px;
    top: 743px;

    p {
        /* Body Small */
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        color: #555C5E;
    }
    @media(max-width: 1024px){
        width: 343px;
        height: 72px;
        left: 16px;
        top: 825px;


    }
`
const CoverImg = styled.div`
    position: absolute;
    width: 644px;
    height: 244px;
    left: calc(50% - 644px/2 - 334px);
    top: calc(50% - 244px/2 + 70px);

    background: url(tips_cover-26648e9dc0e66239924af3734b7be0be.jpg);
    border-radius: 2px;
`
const StyledButton = styled.button`
    /* Auto Layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 0px 0px 12px;

    position: absolute;
    width: 196px;
    height: 44px;
    right: 744px;
    top: 1316px;
    

    background: #FFFFFF;
    border-radius: 2px;

    /* Nav Link */
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    /* identical to box height, or 125% */
    letter-spacing: 0.5px;
    text-transform: uppercase;

    /* Green */
    color: #0F6B5C;

    /* Inside Auto Layout */
    flex: none;
    order: 0;
    align-self: center;
    flex-grow: 0;
    margin: 0px 12px;
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
        width: 343px;
        height: 244px;
        left: 16px;
        top: 913px;
    }
    p {
        width: 93px;
        height: 20px;
        left: 141px;
        top: 1038px;
    }
`
const ImgDivOne = styled.div`
    position: absolute;
    width: 199px;
    height: 199px;
    left: 64px;
    top: 1385px;

    background: url(Tip_AH_2-741c343588b3b15cfae6f521a2098a1d.jpg);
    border-radius: 2px;
`
const ImgDivTwo = styled.div`
    position: absolute;
    width: 199px;
    height: 199px;
    left: 287px;
    top: 1385px;

    background: url(Tip_AH_1-d91e38de507a057276682ad3e1dad653.jpg);
    border-radius: 2px;
`
const ImgDivThree = styled.div`
    position: absolute;
    width: 199px;
    height: 199px;
    left: 509px;
    top: 1385px;

    border: 1px dashed #868F92;
    box-sizing: border-box;
    border-radius: 2px;
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

        /* identical to box height, or 22px */

        /* Black */
        color: #242728;
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
`
const ButtonsDiv = styled.div`
    display: flex;
    margin-top: 7vh;
    width: 50vw;
    margin-left: 5vw;
    position: absolute;
    left: -32px;
    top: 1450px;  
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
`
const SendToBtn = styled.button`
    background-color: #0f6b5c;
    color: white;
    width:203px;
    height:68px;
    margin-left: 20px;
    border-radius: 2px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`
