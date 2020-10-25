import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const LoginWrapper = styled.div`
  opacity: 1;
`
const LoginAroundCanvas = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
`
const LoginDiv = styled.div`
  background-color: white;
  height: 35vh;
  width: 15vw;
  opacity: 1;
`
const LoginHeader = styled.div`
  font-weight: bold;
  width: 100%;
  display: flex;
`
const LoginHeaderSignUp = styled.div`
  ${(p) => (p.active ? 'border-bottom: solid black;' : '')}
`
const LoginHeaderLogIn = styled.div`
  ${(p) => (p.active ? 'border-bottom: solid black;' : '')}
  margin-left: 4vw;
`

const EmailContainer = styled.div``
const EmailTitle = styled.p`
  font-weight: bold;
`
const EmailInput = styled.input`
  border: none;
  width: 80%;
`
const EmailBottomText = styled.p`
  color: red;
`

export const Login = () => {
  const [textInField, setTextInField] = React.useState(null)
  return (
    <LoginWrapper>
      <LoginAroundCanvas>
        <LoginDiv>
          <LoginHeader>
            <LoginHeaderSignUp active={true}>Sign up</LoginHeaderSignUp>
            <LoginHeaderLogIn>Log in</LoginHeaderLogIn>
          </LoginHeader>
          <EmailContainer>
            <EmailTitle>Email</EmailTitle>
            <EmailInput
              type='text'
              placeholder='john.doe@example.com'
              onChange={(e) => setTextInField(e.target.value)}
            ></EmailInput>{' '}
            <EmailBottomText>
              {!textInField && `You need to add an email.`}
            </EmailBottomText>
          </EmailContainer>
        </LoginDiv>
      </LoginAroundCanvas>
    </LoginWrapper>
  )
}
