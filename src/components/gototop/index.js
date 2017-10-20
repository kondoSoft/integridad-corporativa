import styled, {keyframes} from 'styled-components'
import React from 'react'

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 0.6;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 50px;
  z-index: 100;
  left: 90%;
  background: #561212;
  height: 50px;
  text-align: center;
  top: 80%;
  transition: 0.3s;
  cursor: pointer;
  opacity: 0.6;
  animation-name: ${fadeIn};
  animation-duration: 0.3s;
  &:hover{
    opacity: 1;
    
  }
`

const Icon = styled.i`
  color: #fff;
  font-size: 20px;

  
`

const GoToTop = (props) => (
  <Wrapper onClick={props.onClick}>
    <Icon className='fa fa-chevron-up' aria-hidden='true' />
  </Wrapper>
)

export default GoToTop
