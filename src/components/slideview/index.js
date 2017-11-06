import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  `
export const Vmore = styled.a`
  color: #ED4630;
  font-weight: bolder;
  display: ${props => props.click ? 'none' : 'initial'};
  text-decoration: none;
  margin-left: 5px;
  cursor: pointer;
  padding: 15px 15px 15px 0px;
  transition: 0.3s;
  z-index: 2;
  &:hover{
    color: #000;
  }
`
export const Vless = styled.a`
  color: #F24437;
  font-weight: bolder;
  display: ${props => props.click ? 'initial' : 'none'};
  text-decoration: underline;
  cursor: pointer;
  padding: 15px 15px 15px 0px;
`
export const TextUp = styled.p`
  color: black;
  font-weight: 800;
  text-decoration: none !important;
  text-align: left;
  padding: 15px;
  font-size: 18px;
`
export const TextDown = styled.p`
  text-decoration: none !important;
  letter-spacing: 1px;
  text-align: left;
  padding: 15px;
  font-size: 18px;
`
export const ContainerUp = styled.div`
  width: 100%;
  height: auto;
  display: ${props => props.click ? 'none' : 'flex'};
  flex-direction: ${props => props.isMore ? 'column' : 'row'};
  padding: 15px;
  justify-content: end;
`
export const ContainerDown = styled.div`
  width: 90%;
  height: auto;
  display: ${props => props.click ? 'flex' : 'none'};
  flex-direction: column;
  padding: 15px 0px;
  justify-content: end;
  font-size: 14px;
`
const Title = styled.p`
  font-size: 20px;
  color: #73030E;
`
function View (props) {
  return (
    <Container style={props.style}>
      {
        (props.title) && <Title>{props.title}</Title>
      }
      {
        props.children
      }
      {/* <Title>{props.title}</Title>
      <ContainerUp isMore={props.isMore} click={props.click} >
        <TextUp> {props.textUp}<Vmore onClick={props.slide} click={props.click}>Ver Más</Vmore></TextUp>
      </ContainerUp>
      <ContainerDown click={props.click}>
        <TextDown> {props.textDown}<Vless onClick={props.slide} click={props.click}>Ver menos</Vless></TextDown>
      </ContainerDown> */}
    </Container>
  )
}

export default View
