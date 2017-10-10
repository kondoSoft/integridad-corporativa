import React from 'react'
import styled, {keyframes} from 'styled-components'
import logoFacebook from './icon-facebook.svg'
import logoGoogle from './icon-google.svg'

const ButtonAnimation = keyframes`
  from{
    bottom:-90px;
  }
  to{
    bottom:0px;
  }
`

const TitleAnimation = keyframes`
  from{
    left:-300px;
  }
  to{
    left:0px;
  }
`

const Input = styled.input`
  border:none;
  border-bottom:2px solid #FFF;
  color:#FFF;
  background:transparent;
  transition:0.3s;
  width:40%;
  min-width:250px;
  height:30px;
  margin:10px 0px;
  &:focus{
    outline:none;
    background:rgba(0,0,0,0.4);
    padding-left:10px;
    font-size:16px;
    &::-webkit-input-placeholder {
      color:rgba(0,0,0,0);
    }
  }
  &::-webkit-input-placeholder {
    color:#FFF;
  }
  &:-moz-placeholder {
    color:#FFF;
  }
  &::-moz-placeholder {
    color:#FFF;
  }
  &:-ms-input-placeholder {
    color:#FFF;
  }
  &::-ms-input-placeholder {
    color:#FFF;
  }
`

const Wrapper = styled.div`
  overflow:hidden;
  margin:0 auto;
  margin-top:20px;
  // width: 800px;
  height: 600px;
  box-sizing: border-box;
  background: orange;
  display:flex;
  justify-content:space-between;
  flex-direction:column;
`

const Form = styled.form`
  display:flex;
  flex-direction:column;
  margin-left:30px;
  padding:20px;
  padding-left:50px;
  position:relative;
  top:25%;
`

const Title = styled.h2`
  font-size:24px;
  color:#FFF;
  position:relative;
  left:0px;
  animation-name:${TitleAnimation};
  animation-duration:1s;
`

const Submit = styled.div`
  overflow:hidden;
  width:100%;
  background:#000;
  color:#FFF;
  text-align:center;
  height:80px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:12px;
  cursor:pointer;
  position:relative;
  bottom:0px;
  animation-name:${ButtonAnimation};
  animation-duration:1s;
`

const Logo = styled.img`
  filter:invert(100%);
  width:50%;
  height: 50%;
`

const Row = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  padding-left:70px;
  margin-top:90px;
`

const Circle = styled.div`
  display:flex;
  margin:10px;
  justify-content:center;
  align-items:center;
  width:40px;
  height:40px;
  background:#000;
  border-radius:50%;
  cursor:pointer;
  transition:0.3s;
  &:hover{
    filter:invert(100%);
  }
`

const Register = (props) => (
  <Wrapper>
    <Form action=''>
      <Title>Sign Up</Title>
      <Input type='text' placeholder='EMAIL ADDRESS' />
      <Input type='text' placeholder='PASSWORD' />
      <Input type='text' placeholder='CONFIRM PASSWORD' />
    </Form>
    <Row>
      <Circle>
        <Logo src={logoFacebook} alt='' />
      </Circle>
      <Circle>
        <Logo src={logoGoogle} alt='' />
      </Circle>
    </Row>
    <Submit>
      <p>SUBMIT</p>
    </Submit>
  </Wrapper>
)

export default Register
