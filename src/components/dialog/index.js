import React from 'react'
import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
  from {
    background: rgba(0,0,0,0);
    visibility: hidden;
  }
  to {
    background: rgba(0,0,0,0.5);
    visibility: initial;
  }
`

const fadeOut = keyframes`
  from {
    background: rgba(0,0,0,0.5);
    visibility: initial;
  }
  to {
    background: rgba(0,0,0,0);
    visibility: hidden;
  }
`

const slideIn = keyframes`
  from {
    top: -200px;
  }
  to {
    top: 200px;
  }
`

const slideOut = keyframes`
  from {
    top: 200px;
  }
  to {
    top: -200px;
  }
`

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  background: ${props => props.isVisible ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)'};
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  animation-name: ${props => props.isVisible ? fadeIn : fadeOut};
  animation-duration:1s;
  visibility: ${props => props.isVisible ? 'initial' : 'hidden'};
  @media screen and (max-width: 597px) {
    align-items: center;
    justify-content: center;
  }
`

const Card = styled.div`
  z-index:15;
  background: #FAFAFA;
  position: absolute;
  box-shadow: 1px 10px 40px 0px rgba(0,0,0,0.3);
  box-sizing: border-box;
  border-radius:10px;
  width: 40%;
  top: ${props => props.isVisible ? '200px' : '-200px'};
  left: 30%;
  text-align: justify;
  padding: 20px;
  animation-name: ${props => props.isVisible ? slideIn : slideOut};
  animation-duration: 1s;
  @media screen and (max-width: 597px) {
    width: 90%;
    top: 50;
    left: 5%;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
    top: 50;
    left: 5%;
  }
  @media screen and (max-width: 968px) and (min-width: 701px) {
    width: 70%;
    top: 50;
    left: 15%;
  }
`

const Icon = styled.i`
  position: relative;
  left: 98.5%;
  top: -10px;
  font-size:18px;
  cursor:pointer;
  color: #AEAEAE;
  transition:0.3s;
  &:hover{
    color: #7A7A7A;
  }
`

const Title = styled.h3`
  font-weight:bold;
  margin-bottom:10px;
  text-align:center;
  font-size:24px;
  color: #F00;
`

const P = styled.p`
  color: #616161;
  padding:15px;
  text-align: ${props => props.textCenter ? 'center' : 'left'};

`

const Dialog = (props) => (
  <Wrapper isVisible={props.isVisible}>
    <Card isVisible={props.isVisible} >
      <Icon className='fa fa-times' aria-hidden='true' onClick={props.onClickClose} />
      <Title>{props.title}</Title>
      <P textCenter={props.textCenter}>{props.children}</P>
    </Card>
  </Wrapper>
)

export default Dialog
