import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: block;
  margin-top: -500px;
  width: 35vw;
`
const Title = styled.h2`
  color: #000000;
`
const Text = styled.p`
`

const NameInputLabel = styled.p`
  margin-top: 50px;
`

const NameInputField = styled.input`
  width: 35vw;
  height: 40px;
  border:1px solid #D3D3D3;
  padding-left: 10px;
  transition: 0.5s;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 1px solid #000000;
  }
`

const Label = styled.p`
  margin-top: 30px;
`

const TextAreaInput = styled.textarea`
  width: 35vw;
  border:1px solid #D3D3D3;
  padding: 10px 0 0 10px;
  transition: 0.5s;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 1px solid #000000;
  }
`
const SubLabel = styled.p`
  color: #777777;
  font-size: 13px;
`

const AddImageDiv = styled.div`
  border: 1px dotted #D3D3D3;
  width: 36vw;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const AddImageContent = styled.div``

const Plus = styled.p`
  text-align: center;
  font-size: 24px;
  color: #0F6B5C;
`

const Add = styled.p`
  font-size: 14px;
  color: #6D7679; 
  margin-top: -10px;
`

const SocialInputs = styled.input`
  width: 35vw;
  height: 40px;
  border:1px solid #D3D3D3;
  padding-left: 10px;
  transition: 0.5s;
  border-radius: 5px;
  font-family: Arial, FontAwesome;
  margin-top: 10px;

  &:focus {
    outline: none;
    border: 1px solid #000000;
  }
`

const SelectOption = styled.select`
  width: 35vw;
  height: 40px;
  border:1px solid #D3D3D3;
  padding: 10px;
  transition: 0.5s;
  border-radius: 5px;
  font-family: Arial, FontAwesome;
  margin-top: 10px;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 1px solid #000000;
  }
`

const ButtonArea = styled.div`
  width: 35vw;
  height: auto;
  display: flex;
  flex-direction: row;
  margin-top: 25px;
`
const ButtonStep = styled.button`
  width: 120px;
  height: 60px;
  border:1px solid #0F6B5C;
  color: #0F6B5C; 
  background-color: #ffffff;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.2s;
  font-weight: bold;

  &:hover {
    background-color: #0F6B5C;
    color: #ffffff; 
  }
  
`

const ButtonNext = styled.button`
  width: 120px;
  height: 60px;
  border:1px solid #0F6B5C;
  color: #ffffff; 
  background-color: #0F6B5C;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 30px;
  transition: 0.2s;
  font-weight: bold;

  &:hover {
    background-color: #ffffff;
    color: #0F6B5C; 
  }
`





class Idea extends Component {
  render() {
    return (
      <>
      <Section>
        <Title>
          Pitch your idea to the landlord
        </Title>
        <Text>
          To send an enquiry, landlords require some information about your idea for the space. If they like your idea, you'll be able to ask any questions and set up a viewing.
        </Text>
        <NameInputLabel>
          Name your idea
        </NameInputLabel>
        <NameInputField
          type='text'
          placeholder='ex. Custom made ice cream'
        ></NameInputField>
        <Label>
          Tell the landlord about your brand and what you want to do in the space
        </Label>
        <TextAreaInput
          rows='10'
          placeholder='Describe what your brand is about and what you want to do'
        ></TextAreaInput>
        <Label>
          Upload your best brand images 
        </Label>
        <SubLabel>
          Landlords love to see images so include some good quality product shots, press images or event photos.
        </SubLabel>
        <AddImageDiv>
          <AddImageContent>
            <Plus>+ <br/></Plus> 
            <Add>ADD IMAGES</Add>
          </AddImageContent>
        </AddImageDiv>
        <Label>
          Your Social handles <span>optional</span>
        </Label>
        <SocialInputs
          type='text'
          placeholder='&#xf16d; &nbsp; @yourbrand'
        ></SocialInputs>
        <SocialInputs
          type='text'
          placeholder='&#xf082; &nbsp; @yourbrand'
        ></SocialInputs>
        <SocialInputs
          type='text'
          placeholder='&#xf081; &nbsp; @yourbrand'
        ></SocialInputs>
        <SocialInputs
          type='text'
          placeholder='&#xF002; &nbsp; www.yourbrand.com'
        ></SocialInputs>
        <Label>
          How did you discover xNomad?
        </Label>
        <SelectOption></SelectOption>

        <ButtonArea>
          <ButtonStep>PREVIOUS STEP</ButtonStep>
          <ButtonNext>NEXT</ButtonNext>
        </ButtonArea>
        

      </Section>
      
      </>
    )
  }
}

export default Idea;
