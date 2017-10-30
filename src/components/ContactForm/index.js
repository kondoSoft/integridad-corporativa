import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  width: 50%;
  height: 400px;
  margin: 50px auto;
  background: #EBEBEB;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`

const Input = styled.input`
  display: block;
  width: 90%;
  margin: 10px 0px;
  height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 14px;
  &:focus{
    outline: none;
  }
  &::-webkit-input-placeholder {
    font-size: 14px;
  }
  &:-moz-placeholder {
    font-size: 14px;
  }
  &::-moz-placeholder {
    font-size: 14px;
  }
  &:-ms-input-placeholder {
    font-size: 14px;
  }
  &::-ms-input-placeholder {
    font-size: 14px;
  }
`

const TextArea = styled.textarea`
  resize: none;
  width: 90%;
  font-size: 14px;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #CCC;
  &:focus{
    outline: none;
    border: none;
  }
  &::-webkit-input-placeholder {
    font-size: 14px;
    padding-left: 5px;
  }
  &:-moz-placeholder {
    font-size: 14px;
    padding-left: 5px;
  }
  &::-moz-placeholder {
    font-size: 14px;
    padding-left: 5px;
  }
  &:-ms-input-placeholder {
    font-size: 14px;
    padding-left: 5px;
  }
  &::-ms-input-placeholder {
    font-size: 14px;
    padding-left: 5px;
  }
`

const Submit = styled.button`
  text-transform: uppercase;
  border: none;
  background: #ED4630;
  color: #FFF;
  transition: 0.3s;
  padding: 10px 60px;
  font-size: 20px;
  border: 2px solid #ED4630;
  font-weight: 400;
  &:hover{
    background: none;
    color: #ED4630;
    border: 2px solid #ED4630;
    cursor: pointer;
  }
`

const ContactForm = props => (
  <Form>
    <Input type='text' placeholder='Nombre' />
    <Input type='email' placeholder='Correo electrónico' />
    <TextArea name='' id='' cols='30' rows='10' placeholder='Mensaje' />
    <Submit>enviar</Submit>
  </Form>
)

export default ContactForm
