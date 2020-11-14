import React, { Component } from 'react'
import styled from 'styled-components'

//images
import articleImg1 from '../assets/images/landing-img1.jpg'
import articleImg2 from '../assets/images/landing-img2.jpeg'
import articleImg3 from '../assets/images/landing-img3.jpeg'

class SpacesSection extends Component {
    render() {
        return (
            <>
                <TitleH4>Spaces for every occasion</TitleH4>
                <Wrapper>
                    <ArticleOne>
                        <ArticleImg src={articleImg1} alt="High Street" />
                        <h5>High Street</h5>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mauris condimentum in lectus consequat laoreet. Imperdiet amet eu.</div>
                        <div>5 000 kr/week • 16 000 visitors/week</div>
                    </ArticleOne>
                    <ArticleTwo>
                        <ArticleImg src={articleImg2} alt="High Street" />
                        <h5>Shopping Mall</h5>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mauris condimentum in lectus consequat laoreet. Imperdiet amet eu.</div>
                        <div>5 000 kr/week • 16 000 visitors/week</div>
                    </ArticleTwo>
                    <ArticleThree>
                        <ArticleImg src={articleImg3} alt="High Street" />
                        <h5>Showroom</h5>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mauris condimentum in lectus consequat laoreet. Imperdiet amet eu.</div>
                        <div>5 000 kr/week • 16 000 visitors/week</div>
                    </ArticleThree>
                </Wrapper>
            </>
        )
    }
}
export default SpacesSection

// Styled Components
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: left;

    @media(max-width: 1024px){
        width: 100%;
    }
`
const TitleH4 = styled.h4`
    margin-top: 80px;
    margin-left: 275px;
    margin-bottom: 40px;
    height: 38px;
    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 120%;
    color: #686058;
    @media(max-width: 1024px){
        font-size: 28px;
        text-align: center;
        margin: 48px 16px 16px 16px;
    }
`
const ArticleOne = styled.article`
    width: 421px;
    height: 561px;
    background: #F0EEEA;
    border-radius: 2px;
    margin: 10px;

    h5 {
        font-family: Charter;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 120%;
        color: #242728;
        padding: 20px 30px 10px 30px;
    }
    div {
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        padding: 10px 30px 10px 30px;
    }
    @media(max-width: 768px){
        width: 100%;
        height: 128px;
        margin: 16px;

        h5{
            position: absolute;
            height: 24px;
            left: 124px;
            top: 953px;
            font-family: Charter;
            font-size: 20px;
            z-index: 1;
        }
        div{
            position: absolute;
            width: 137px;
            height: 48px;
            left: 124px;
            top: 1005px;

            &:nth-child(3){
            display: none;
            }
        }
    }
`
const ArticleTwo = styled.article`
    width: 422px;
    height: 561px;
    background: #F0EEEA;
    border-radius: 2px;
    margin: 10px;

    h5 {
        font-family: Charter;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 120%;
        color: #242728;
        padding: 20px 30px 10px 30px;
    }
    div {
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        padding: 10px 30px 10px 30px;
    }
    @media(max-width: 768px){
        width: 100%;
        height: 128px;
        margin: 16px;

        h5{
            position: absolute;
            height: 24px;
            left: 124px;
            top: 1116px;
            font-family: Charter;
            font-size: 20px;
            z-index: 1;
        }
        div{
            position: absolute;
            width: 137px;
            height: 48px;
            left: 124px;
            top: 1165px;

            &:nth-child(3){
            display: none;
            }
        }
    }
`
const ArticleThree = styled.article`
    width: 422px;
    height: 561px;
    background: #F0EEEA;
    border-radius: 2px;
    margin: 10px;

    h5 {
        font-family: Charter;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 120%;
        color: #242728;
        padding: 20px 30px 10px 30px;
    }
    div {
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        padding: 10px 30px 10px 30px;
    }
    @media(max-width: 768px){
        width: 100%;
        height: 128px;
        margin: 16px;

        h5{
            position: absolute;
            height: 24px;
            left: 124px;
            top: 1273px;
            font-family: Charter;
            font-size: 20px;
            z-index: 1;
        }
        div{
            position: absolute;
            width: 137px;
            height: 48px;
            left: 124px;
            top: 1325px;

            &:nth-child(3){
            display: none;
            }
        }
    }
`
const ArticleImg = styled.img`
    width: 421px;
    height: 315px;
    @media(max-width: 768px){
        width: 112px;
        height: 112px;
        padding: 10px;
    }
`
