import React from 'react'
import styled from 'styled-components'


const OptionDivTitles = [
    {
        titleText: 'I will do my own marketing',
        bodyText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod duis nec nunc.',
        price: 0,
    },
    {
        titleText: 'Small marketing package',
        bodyText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod duis nec nunc.',
        price: '27 000',
    },
    {
        titleText: 'Medium marketing package',
        bodyText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod duis nec nunc.',
        price: '40 000',
    },
    {
        titleText: 'Large marketing package',
        bodyText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod duis nec nunc.',
        price: '54 000',
    },
]

function svgToBase64Url(svgString, width, height) {
    const base64SVG = btoa(
        `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="${width}px" height="${height}px">${svgString}</svg>`
    )
    return `url('data:image/svg+xml;base64,${base64SVG}')`
}

const Marketing = ({ setHoveredId, hoveredId, disableHover, setDisableHover, clickedId, setClickedId }) => {
    return (
        <>
            <Title>Influencer Marketing</Title>
            <Discription>Which marketing package fits you best?</Discription>
            {OptionDivTitles.map((item, idx) => {
                return (
                    <OptionDiv
                        key={idx}
                        id={idx + 10}
                        onMouseEnter={() => setHoveredId(idx)}
                        hoverActive={hoveredId === idx && !disableHover}
                        onMouseLeave={() => setHoveredId(null)}
                        // On-click I want to (1) set that element to its color, and (2) make sure that hoover is disabled
                        onClick={() => {
                            setClickedId(idx)
                            setDisableHover(true)
                        }}
                        clickActive={clickedId === idx}
                    // noHover={disableHover}
                    >
                        <OptionWrapp>
                            <OptionDivLeft>
                                <OptionDivLeftTitle>{item.titleText}</OptionDivLeftTitle>
                                <OptionDivLeftBody>{item.bodyText}</OptionDivLeftBody>
                            </OptionDivLeft>
                            <OptionDivRight>
                                {' '}
                                {idx !== 0 ? '+' : ''} SEK {item.price}
                            </OptionDivRight>
                        </OptionWrapp>
                    </OptionDiv>
                )
            })}
        </>

    )
}
export default Marketing

// Styled Components
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
    padding-top: 9px;
`
const OptionDiv = styled.div`
  border: 1px solid #bcc1c3;
  height: 131px;
  width: auto;
  display: flex;
  overflow: hidden;
  align-items: center;
  margin-top: 2vh;
  ${(p) => (p.hoverActive ? 'background: #0f6b5c;' : '')}
  ${(p) => (p.hoverActive ? 'color: white;' : 'black;')}

  ${(p) => (p.clickActive ? 'background: #0f6b5c;' : '')}
  ${(p) => (p.clickActive ? 'color: white;' : 'black;')}
    &:hover {
    cursor: ${svgToBase64Url(
    '<svg id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 857.1763 133.1918"><defs><style>.cls-1,.cls-2,.cls-3,.cls-4,.cls-5{stroke:#000;}.cls-1{stroke-width:16.1175px;}.cls-2{fill:#252831;stroke-miterlimit:10;stroke-width:8.3734px;}.cls-3{fill:#4d4d4d;stroke-width:9.4719px;}.cls-4{stroke-width:9.472px;}.cls-5{stroke-width:9.1663px;}</style></defs><line class="cls-1" x1="27.0526" y1="31.7677" x2="96.2038" y2="100.9188"/><line class="cls-1" x1="96.2038" y1="31.7677" x2="27.0526" y2="100.9188"/><path d="M325.3969-.2386C313.2153,7.12,287.9279,27.59,287.836,66.1636c-.0884,37.1391,25.099,58.731,36.9853,66.7615-25.0908-5.6-52.9727-33.9818-52.8945-66.8117C272.0088,31.6434,302.095,4.0149,325.3969-.2386Z"/><path d="M372.3123,120.7652c12.9174-8.4247,22.455-28.2689,22.521-55.9961.0637-26.7434-8.3866-46.8148-22.2542-56.09,20.0768,5.7494,40.1176,26.6421,40.0474,56.1383C412.5577,93.7244,392.4172,114.7172,372.3123,120.7652Z"/><line class="cls-2" x1="656.8527" y1="10.7983" x2="603.1847" y2="131.376"/><polygon points="647.778 20.784 656.168 0.22 714.837 132.466 691.929 120.79 647.778 20.784"/><polygon points="747.811 13.692 762.841 -0.22 762.544 132.907 747.576 118.918 747.811 13.692"/><path d="M816.86,123.33c12.9177-8.526,22.4559-28.6083,22.5227-56.6679C839.4475,39.598,830.9979,19.2864,817.13,9.9c20.0767,5.8178,40.117,26.96,40.0459,56.81C857.1067,95.9639,836.9656,117.2088,816.86,123.33Z"/><path id="Path_85" data-name="Path 85" class="cls-3" d="M234.8,0V119"/><path id="Path_84" data-name="Path 84" class="cls-4" d="M124.8614,1.4447V132.5741"/><path id="Path_1" data-name="Path 1" d="M116.2171.04h19.1077L239.3,111.1068v21.58Z"/><polyline points="439.197 -0.505 498.002 95.563 494.326 112.593 439.131 25.964"/><polygon points="567.3 1.192 567.3 131.983 554.3 122.149 554.3 27.351 553.724 1.192 567.3 1.192"/><path id="Path_84-2" data-name="Path 84" class="cls-5" d="M443.7347,16.7809V133.1918"/></svg>',
    '70',
    '70'
)},
      auto;
  }
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
  width: 70%;
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
  width: 40%;
  height: auto;
  text-align: end;
  float: right;
  margin-top: -90px;
  margin-right: 20px;

  @media(max-width: 768px){
    padding-right: 0;
    text-align: left;
    margin: 16px 16px 0px 16px;
    }
`

