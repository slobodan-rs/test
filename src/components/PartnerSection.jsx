import React, { Component } from 'react';
import styled from 'styled-components';
import logos from '../assets/logos.png'
const Section = styled.section`
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  width: full-width;
  height: 4px;
  background-color: white;
  position: relative;
  top: 2500px;
}
width: full-width;
height: 4px;
background-color: white;
position: relative;
top: 2750px;
left: 486px;
`
const Logocontainer = styled.div`
width: 100%;
display: flex;
background-color: #D7D2CB;
padding-top: 2%;
padding-bottom: 2%;
`
const Imagescontainer = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
margin-left: 5%;
margin-right: 5%;
`
const Image = styled.img`
margin-right: ${props => props.right};
width: ${props => props.width ? "40vw" : "100%"};
max-width: ${props => props.max};
`
const Maintxt = styled.h1`
color: #686058;
font-size: ${props => props.fontsize};
padding-left: ${props => props.no ? "0" : "20%"};
padding-right: ${props => props.right ? "5%" : "20%"};;
`

class PartnerSection extends Component {
  render() {
    return (
      <div>
      <Section>
      <Logocontainer>
             <Imagescontainer>
                 <Maintxt fontsize="1vw" no right>Proud partners:</Maintxt>
                 <Image src={logos} width="80vw" max="70%"/>
             </Imagescontainer>
         </Logocontainer>
         </Section>

            </div>
    )
  }
}
export default PartnerSection;
