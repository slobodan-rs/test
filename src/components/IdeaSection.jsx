import styled from 'styled-components'


const IdeaSection = styled.section`
/* Pitch your idea to the landlord */
  position: absolute;
  width: 456px;
  height: 38px;
  left: 64px;
  top: 139px;

  h4 {
    font-family: Charter;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 120%;
  }
  @media(max-width: 1024px){
      width: 343px;
      height: 68px;
      left: 0;
      top: 70px;
      padding: 16px;
      h4 {
        font-size: 28px;
        }
    }
`

export default IdeaSection