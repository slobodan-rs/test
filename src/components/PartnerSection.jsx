import React, { Component } from 'react';
import styled from 'styled-components';


import partners from '../assets/images/partners.svg'
import partnersMobile from '../assets/images/partners-mobile.svg'


class PartnerSection extends Component {
  render() {
    return (
      <Section>
        <Partners />
      </Section>

    )
  }
}
export default PartnerSection;

//Styled Components
const Section = styled.section`
  width: 100%;
  height: 108px;
  background: #D7D2CB;

  @media(max-width: 768px){
    height: 208px;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    height: 108px;
    }
`
const Partners = styled.div`
    background-image: url(${partners});
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 108px;

    @media(max-width: 767px){
      background-image: url(${partnersMobile});
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      height: 208px;
    }

    @media(min-width: 768px) and (max-width: 1024px){
      background-size: 80%;
    }
`
