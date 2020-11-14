import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const LoginWrapper = styled.div`
  opacity: 1;
`
const LoginAroundCanvas = styled.div`
  height: 120vh;
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
border-top: none;
border-right: none;
border-left: none;
border-bottom: 1px solid black;
`
const EmailBottomText = styled.p`
  color: red;
`

const FLnameContainer = styled.div`
  clear: both;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
`

const FirstnameContainer = styled.div`
display: inline-block;

`
const FirstnameTitle = styled.p`
  font-weight: bold;
`
const FirstnameInput = styled.input`
border-top: none;
border-right: none;
border-left: none;
border-bottom: 1px solid black;
`
const FirstnameBottomText = styled.p`
  color: red;
`


const LastnameContainer = styled.div`
display: inline-block;

`
const LastnameTitle = styled.p`
  font-weight: bold;
`

const LastnameInput = styled.input`
border-top: none;
border-right: none;
border-left: none;
border-bottom: 1px solid black;
`
const LastnameBottomText = styled.p`
  color: red;
`

const PasswordContainer = styled.div`
display: inline-block;

`
const PasswordTitle = styled.p`
  font-weight: bold;
`

const PasswordInput = styled.input`
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid black;
`
const PasswordBottomText = styled.p`
  color: red;
`

const RadioContainer = styled.div`
  display: inline-block;
`

const RadioMark = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid #777777;
  width: 14px;
  height: 14px;
  left: 0;
  border-radius: 20%;
  margin-right: 5px;
  vertical-align: middle;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: blue;
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    transition: all 110ms;
  }
`

const RadioInput = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${RadioMark} {
    &::after {
      content: '';
      display: block;
      width: 15px;
      height: 10px;
      opacity: 1;
      left: 12%;
      top: 12%;
    }
  }
`
const Radiolabel = styled.label`
  display: flex;
  cursor: pointer;
  padding: 5px 10px 5px 0;
  position: relative;
  clear: both;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  ${props =>
    props.disabled &&
    `
    cursor: not-allowed;
    opacity: 0.4;
  `}
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
          <FLnameContainer>
            <FirstnameContainer>
              <FirstnameTitle>First Name</FirstnameTitle>
              <FirstnameInput
                type='text'
                placeholder='First Name'
                onChange={(e) => setTextInField(e.target.value)}
              >
              </FirstnameInput>{' '}
              <FirstnameBottomText>
                {!textInField && `You need to add First Name.`}
              </FirstnameBottomText>
            </FirstnameContainer>

            <LastnameContainer>
              <LastnameTitle>Last Name</LastnameTitle>
              <LastnameInput
                type='text'
                placeholder='Last Name'
                onChange={(e) => setTextInField(e.target.value)}
              >
              </LastnameInput>{' '}
              <LastnameBottomText>
                {!textInField && `You need to add Last Name.`}
              </LastnameBottomText>
            </LastnameContainer>
          </FLnameContainer>

          <PasswordContainer>
            <PasswordTitle>Password</PasswordTitle>
            <PasswordInput
              type='password'
              placeholder='****'
              onChange={(e) => setTextInField(e.target.value)}
            >
            </PasswordInput>{' '}
            <PasswordBottomText>
              {!textInField && `You need to add Password.`}
            </PasswordBottomText>
          </PasswordContainer>
          <RadioContainer>
            <Radiolabel>
              <RadioInput name="name" type="radio" />
              <RadioMark />
              I accept the terms and privacy policy
            </Radiolabel>
          </RadioContainer>
        </LoginDiv>
      </LoginAroundCanvas>
    </LoginWrapper>
  )
}
