import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  width: 80%;
  overflow: hidden;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  `
const Vmore = styled.a`
  color: #F24437;
  font-weight: bolder;
  display: ${props => props.click ? 'none' : 'initial'};
  text-decoration: underline;
  margin-left: 5px;
  cursor: pointer;
`
const Vless = styled.a`
  color: #F24437;
  font-weight: bolder;
  display: ${props => props.click ? 'initial' : 'none'};
  text-decoration: underline;
  cursor: pointer;
`
const TextUp = styled.p`
  color: black;
  font-weight: 800;
  text-decoration: none !important;
`
const TextDown = styled.p`
  text-decoration: none !important;
  letter-spacing: 1px;
`
const ContainerUp = styled.div`
  width: 100%;
  height: auto;
  display: ${props => props.click ? 'none' : 'flex'};
  flex-direction: ${props => props.isMore ? 'column' : 'row'};
  padding: 15px;
  justify-content: center;
`
const ContainerDown = styled.div`
  width:100%;
  height: auto;
  display: ${props => props.click ? 'flex' : 'none'};
  flex-direction: column;
  padding: 15px 0px;
  justify-content: center;
`
const Title = styled.p`
  font-size: 20px;
  color: #73030E;
`
function View (props) {
  return (
    <Container style={props.style}>
      <Title>{props.title}</Title>
      <ContainerUp isMore={props.isMore} click={props.click} >
        <TextUp> {props.textUp} </TextUp>
        <Vmore onClick={props.slide} click={props.click}> Ver mas </Vmore>
      </ContainerUp>
      <ContainerDown click={props.click}>
        <TextDown > {props.textDown} </TextDown>
        <br />
        <Vless onClick={props.slide} click={props.click}>Ver menos</Vless>
      </ContainerDown>
    </Container>
  )
}

export default View
