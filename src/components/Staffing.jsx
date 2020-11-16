import React, { Component } from 'react'
import styled from 'styled-components'

//Images
import minus from '../assets/icons/minus-staffing.svg'
import plus from '../assets/icons/plus-staffing.svg'

class Staffing extends Component {
    render() {
        return (
            <Wrapper>
                <Title>Staffing</Title>
                <Discription>How many staff do you need?</Discription>
                <Number>Number of staff</Number>
                <ContainerWrapper>
                    <PlusAndMinus>
                        <Minus src={minus} alt="minus" />
                        <Num>0</Num>
                        <Plus src={plus} alt="minus" />
                    </PlusAndMinus>
                    <Calculation>
                        <StyledPar>SEK 350/h</StyledPar>
                        <StyledPar>x</StyledPar>
                        <StyledPar>14 days</StyledPar>
                        <StyledPar>=</StyledPar>
                        <StyledPar>SEK 39 200</StyledPar>

                    </Calculation>
                </ContainerWrapper>

            </Wrapper>

        )
    }
}
export default Staffing

//Styled Components
const Wrapper = styled.div`
    margin-top: 56px;
`
const Title = styled.h5`
    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 120%;
    color: #242728;
`
const Discription = styled.p`
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #0F6B5C;
    padding-top: 16px;
`
const Number = styled.p`
    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
    color: #000000;
    padding-top: 15px;
`
const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`
const PlusAndMinus = styled.div`
    background-color: #F0EEEA;
    width: 172px;
    height: 81px;
    text-align: center;
    padding: auto;
    margin-top: 16px;
`
const Minus = styled.img`
    width: 32px;
    height: 32px;
    display: inline-block;
    margin: 25px 0 24px 27px;
`
const Plus = styled.img`
    width: 32px;
    height: 32px;
    display: inline-block;
    margin: 25px 24px 24px 0;
`
const Num = styled.p`
    font-family: Fira Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 150%;
    align-items: center;
    color: #000000;
    display: inline-block;
    padding: 0 23px;
    margin-bottom: 0px;
    position: relative;
    bottom: 33px;
`
const Calculation = styled.div`
    margin-top: 16px;
    width: 65%;
    height: 81px;
    background-color: #F0EEEA;
    display: inline-block;
    text-align: center;

    @media(max-width: 768px){
        width: 100%;
    }
`
const StyledPar = styled.p`
    display:inline-block;
    padding:  32px 7px;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    color: #000000;

`
