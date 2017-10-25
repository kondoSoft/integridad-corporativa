import styled from 'styled-components';
import React from 'react'

const Container = styled.div`
  width: 80%;
  overflow: hidden;
  margin: auto;
  text-align : justify;
  `
const Vmore = styled.a`
  color: black;
  font-weight: bolder;
  display: ${props => props.click ? 'none': 'display'};
  text-decoration: underline;
`
const Vless = styled.a`
  color: black;
  font-weight: bolder;
  display: ${props => props.click ? 'display': 'none'};
  text-decoration: underline;
`
const TextUp = styled.p`
  color: black;
  text-decoration: none !important;
`
const TextDown = styled.p`
  display: none;
`
const ContainerUp = styled.div`
  width: 100%;
  height: auto;
  display: ${props => props.click ? 'none': 'initial'};
`
const ContainerDown = styled.div`
  width:100%;
  height: auto;
  display: ${props => props.click ? 'initial': 'none'};
`
function View (props){
    return(
      <Container>
        <ContainerUp click={props.click} >
          <TextUp> {props.textUp} </TextUp>
          <Vmore onClick={props.slide} click={props.click}> Ver mas </Vmore>
        </ContainerUp>
        <br/>
        <br/>
        <ContainerDown click={props.click}>
          <TextDown > {props.textDown} </TextDown>
          <br/>
          <Vless onClick={props.slide} click={props.click}>Ver menos</Vless>
        </ContainerDown>
      </Container>
    );
}


export  default View
