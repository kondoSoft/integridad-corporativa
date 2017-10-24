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
  position: absolute;
  background: ${props => props.isVisible ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)'};
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  animation-name: ${props => props.isVisible ? fadeIn : fadeOut};
  animation-duration:1s;
  visibility: ${props => props.isVisible ? 'initial' : 'hidden'};
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
`

const Dialog = (props) => (
  <Wrapper isVisible={props.isVisible}>
    <Card isVisible={props.isVisible} >
      <Icon className='fa fa-times' aria-hidden='true' onClick={props.onClickClose} />
      <Title>¡ADVERTENCIA!</Title>
      <P>500 Frente a la Corrupción: Integridad Corporativa (IC500) no es un índice sobre la corrupción en las empresas. Es una evaluación de los compromisos públicos de las empresas más importantes del país en favor de las políticas de  integridad, NO de su cumplimiento.</P>
    </Card>
  </Wrapper>
)

export default Dialog
