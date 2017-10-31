import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  width: 100%;
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
  padding: 15px 15px 15px 0px;
`
const Vless = styled.a`
  color: #F24437;
  font-weight: bolder;
  display: ${props => props.click ? 'initial' : 'none'};
  text-decoration: underline;
  cursor: pointer;
  padding: 15px 15px 15px 0px;
`
const TextUp = styled.p`
  color: black;
  font-weight: 800;
  text-decoration: none !important;
  text-align: left;
  padding: 15px;
`
const TextDown = styled.p`
  text-decoration: none !important;
  letter-spacing: 1px;
  text-align: left;
  padding: 15px;
`
const ContainerUp = styled.div`
  width: 100%;
  height: auto;
  display: ${props => props.click ? 'none' : 'flex'};
  flex-direction: ${props => props.isMore ? 'column' : 'row'};
  padding: 15px;
  justify-content: end;
`
const ContainerDown = styled.div`
  width:100%;
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
      <Title>{props.title}</Title>
      <ContainerUp isMore={props.isMore} click={props.click} >
        <TextUp> {props.textUp}<Vmore onClick={props.slide} click={props.click}> Ver mas </Vmore></TextUp>
      </ContainerUp>
      <ContainerDown click={props.click}>
        <TextDown > {props.textDown}<Vless onClick={props.slide} click={props.click}>Ver menos</Vless></TextDown>
      </ContainerDown>
    </Container>
  )
}

export default View
