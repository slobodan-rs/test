import styled from 'styled-components'


const Section = styled.section`
/* Pitch your idea to the landlord */
  position: absolute;
  width: 456px;
  height: 38px;
  left: 64px;
  top: 189px;

  h4 {
    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 120%;
  }
  @media(max-width: 1024px){
      position: absolute;
      width: 343px;
      height: 68px;
      left: 16px;
      top: 120px;
      h4 {
        font-family: Charter;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 120%;
        }
    }
`

export default Section