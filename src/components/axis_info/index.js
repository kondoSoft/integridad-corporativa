import React from 'react'
import styled from 'styled-components'
import {
  Row
} from '../index'

const Wrapper = styled.section`
  background-image: ${props => props.backgroundImage ? `url('${props.backgroundImage}')` : "url('')"};
  background-repeat: no-repeat;
  background-size: cover;
  color: #FFF;
  margin-top:40px;
`

const Paragraph = styled.p`
  text-align: center;
  width: 72%;
  font-size: 1.5em;
  line-height: 40px;
  padding: 20px;
  box-sizing: border-box;
  font-weight: lighter;
`

const List = styled.ul`
  list-style: none;
`

const ListItem = styled.li`
  position: relative;
  display: inline-block;
  padding: 20px;
  width: 260px;
  text-align: center;
  font-size: 1.3em;
  line-height: 30px;
  vertical-align: middle;
  &:after{
    content: '';
    border-right: 3px solid #FFF;
    position: absolute;
    left: 305px;
    bottom: 20px;
    height: 80px;
  }
  &:nth-child(4){
    &:after{
      content: '';
      border-right: none;
    }
  }
  &:nth-child(2){
    &:after{
      content: '';
      bottom: 10px;
    }
  }
  &:nth-child(3){
    &:after{
      content: '';
      bottom: 10px;
    }
  }
`

const Anchor = styled.a`
  text-decoration: none;
  color: #FFF;
  transition: 0.3s;
  &:hover{
    color: #ED4630;
  }
`

const AxisInfo = props => (
  <Wrapper backgroundImage={props.backgroundImage}>
    <Row>
      <Paragraph>
        Se diseñó un cuestionario basado en el componente de publicidad de las políticas
        anticorrupción del estudio <Anchor href='https://www.tm.org.mx/informetrac2016/' target='_blank'>TRAC</Anchor> de Transparencia Internacional. Las preguntas a
        evaluar se agrupan en los siguientes cuatro ejes:
      </Paragraph>
    </Row>
    <Row>
      <List>
        <ListItem>
          Publicidad de los elementos de una política
          anticorrupción integral
        </ListItem>
        <ListItem>
          Alcance y socialización de la política anticorrupción
        </ListItem>
        <ListItem>
          Sistema de monitoreo, denuncia y sanciones.
        </ListItem>
        <ListItem>
          Accesibilidad de la información
        </ListItem>
      </List>
    </Row>
  </Wrapper>
)

export default AxisInfo
