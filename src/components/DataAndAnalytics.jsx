import React from 'react'
import styled from 'styled-components'



const DataAndAnalytics = ({ setHoveredId, hoveredId, disableHover, setDisableHover, clickedId, setClickedId }) => {
    return (
        <>
            <Title>Data &amp; Analytics</Title>
            <Discription>What is data  &amp; Analytics</Discription>
            <OptionDiv>
                <OptionWrapp>
                    <OptionDivLeft>
                        <OptionDivLeftTitle>Data &amp; Analytics package</OptionDivLeftTitle>
                        <OptionDivLeftBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod duis nec nunc.</OptionDivLeftBody>
                    </OptionDivLeft>
                    <OptionDivRight>Always included Worth 10 000 SEK</OptionDivRight>
                </OptionWrapp>
            </OptionDiv>
        </>
    )
}
export default DataAndAnalytics

// Styled Components
const Title = styled.h5`
   font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 120%;
    color: #242728;
    margin-top: 56px;
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
    margin-top: 9px;

`
const OptionDiv = styled.div`
  border: 1px solid #bcc1c3;
  height: 131px;
  width: auto;
  display: flex;
  overflow: hidden;
  align-items: center;
  margin-top: 2vh;
  margin-bottom: 56px;
  background-color: #0f6b5c;
  color: white;
  
    @media(max-width: 768px){
            height: 198px;
    }
`
const OptionWrapp = styled.div`

    @media(max-width: 768px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`
const OptionDivLeft = styled.div`
  padding: 15px;
  display: inline-block;
  width: 60%;
  height: 131px;

  @media(max-width: 768px){
    margin: 0 16px;
    padding: 0;
    }
`

const OptionDivLeftTitle = styled.h6`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  margin-top: 23px;

    @media(max-width: 768px){
        margin-top: 0;
    }

`
const OptionDivLeftBody = styled.p`
  font-family: Fira Sans;
  font-size: 14px;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  margin-top: 6px;
`
const OptionDivRight = styled.div`
  width: 30%;
  height: auto;
  text-align: end;
  float: right;
  margin-top: 70px;
  margin-right: 20px;

  @media(max-width: 768px){
    width: 100%;
    padding-right: 0;
    text-align: left;
    margin: 0px 16px 0px 16px;
    }
`

