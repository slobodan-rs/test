import styled from 'styled-components'

const SectionDescription = styled.section`
/* To send an enquiry, landlords require some information about your idea for the space. If they like your idea, you'll be able to ask any questions and set up a viewing. */
  position: absolute;
  width: 644px;
  height: 81px;
  left: 64px;
  top: 266px;

  p{
    font-family: Fira Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
  }
  @media(max-width: 1024px){
    position: absolute;
    width: 343px;
    height: 108px;
    left: 16px;
    top: 204px;
        p{
          position: absolute;
          width: 343px;
          height: 108px;
          left: 16px;
          top: 204px;


        }
    }
`

export default SectionDescription