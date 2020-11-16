import React, { Component } from 'react'
import styled from 'styled-components'

class PointOfSale extends Component {
    render() {
        return (
            <Wrapper>

                <Title>Point-of-Sale (PoS)</Title>
                <Discription>Do I need a point of sale?</Discription>
                <Container>
                    <PosButtonOne>I have my own PoS system <br /> SEK 0</PosButtonOne>
                    <PosButtonTwo>Add a PoS system <br /> + SEK 1 000</PosButtonTwo>
                </Container>
            </Wrapper>

        )
    }
}
export default PointOfSale

//Styled Components
const Wrapper = styled.div`
    padding: 56px 0;

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
    padding: 13px 0;
`
const Container = styled.div`
    width: 100%;
    height: 131px;
    text-align:center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
`
const PosButtonOne = styled.button`
    width: 50%;
    background: #0F6B5C;
    border: 2px solid #0F6B5C;
    box-sizing: border-box;
    border: none;
    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
    color: #FFFFFF;
    text-align: center;
`
const PosButtonTwo = styled.button`
    width: 50%;
    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
    border: 1px solid #BCC1C3;
    box-sizing: border-box;
    color: #000000;
    text-align: center;
`
