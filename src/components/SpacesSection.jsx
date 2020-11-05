import React, { Component } from 'react'
import styled from 'styled-components'

//images
import articleImg1 from '../images/landing-img1.jpg'
import articleImg2 from '../images/landing-img2.jpeg'
import articleImg3 from '../images/landing-img3.jpeg'

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
    position: absolute;
    height: 38px;
    left: 175px;
    top: 924px;
    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 120%;
    color: #686058;
    @media(max-width: 1024px){
        position: relative;
        left: 0;
        top: 759px;
        font-size: 28px;
        text-align: center
    }
`
const ArticleOne = styled.article`
    position: absolute;
    width: 421px;
    height: 561px;
    left: 10%;
    top: 1072px;
    background: #F0EEEA;
    border-radius: 2px;

    h5 {
        font-family: Charter;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 120%;
        color: #242728;
        padding: 0px 40px 0px 40px;
    }
    div {
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        padding: 0px 40px 20px 40px;
    }
    @media(max-width: 1024px){
        width: 93%;
        height: 128px;
        left: 16px;
        top: 857px;

        h5{
            position: absolute;
            width: 207px;
            height: 24px;
            left: 104px;
            top: 0px;
            font-family: Charter;
            font-size: 20px;
            z-index: 1;
        }
        div{
            position: absolute;
            width: 207px;
            height: 48px;
            left: 104px;
            top: 60px;

            &:nth-child(3){
            display: none;
            }
        }
        
    }
`
const ArticleTwo = styled.article`
    position: absolute;
    width: 422px;
    height: 561px;
    left: 40%;
    top: 1072px;
    background: #F0EEEA;
    border-radius: 2px;

    h5 {
        font-family: Charter;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 120%;
        color: #242728;
        padding: 0px 40px 0px 40px;
    }
    div {
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        padding: 0px 40px 20px 40px;
    }
    @media(max-width: 1024px){
        width: 93%;
        height: 128px;
        left: 16px;
        top: 1001px;
        h5{
            position: absolute;
            width: 207px;
            height: 24px;
            left: 104px;
            top: 0px;
            font-family: Charter;
            font-size: 20px;
            z-index: 1;
        }
        div{
            position: absolute;
            width: 207px;
            height: 48px;
            left: 104px;
            top: 60px;

           &:nth-child(3){
            display: none;
            }

        }
    }
`
const ArticleThree = styled.article`
    position: absolute;
    width: 422px;
    height: 561px;
    left: 70%;
    top: 1072px;
    background: #F0EEEA;
    border-radius: 2px;

    h5 {
        font-family: Charter;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 120%;
        color: #242728;
        padding: 0px 40px 0px 40px;
    }
    div {
        font-family: Fira Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        padding: 0px 40px 20px 40px;
    }
    @media(max-width: 1024px){
        width: 93%;
        height: 128px;
        left: 16px;
        top: 1145px;
        h5{
            position: absolute;
            width: 207px;
            height: 24px;
            left: 104px;
            top: 0px;
            font-family: Charter;
            font-size: 20px;
        }
        div{
            position: absolute;
            width: 207px;
            height: 48px;
            left: 104px;
            top: 60px;

            &:nth-child(3){
            display: none;
            }
        }   
    }
`
const ArticleImg = styled.img`
    width: 421px;
    height: 315px;
    @media(max-width: 1024px){
        width: 112px;
        height: 112px;
        padding: 10px;
    }
`
