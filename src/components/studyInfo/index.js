import React from 'react'
import styled from 'styled-components'
import {
  Row
} from '../index'

const Wrapper = styled.section`
  background: #EAEBEA;
  width: 100%;
  margin-top: 20px;
`

const Image = styled.img`
  width: 100%;
  position: relative;
  right: 0px;
`

const ImageContainer = styled.figure`
  max-width: 100%;
  max-height: 100%;
`

const Col = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:${props => (props.center) ? 'center' : 'space-around'};
  align-items:center;
`

const Paragraph = styled.p`
  max-width: 80%;
  line-height: 25px;
  font-size: 1.2em;
  margin: 20px;
  font-weight: lighter;
`

const List = styled.ul`
  max-width: 80%;
  list-style: none;  
`
const ListItem = styled.li`
  width: 95%;
  display: block;
  margin: 10px;
  line-height: 25px;
`

const Icon = styled.i`
  color: #ED462F;
`

const Span = styled.span`
  color: #ED462F;
  font-weight: bold;
  font-size: 1.2em;
`

const StudyInfo = props => (
  <Wrapper>
    <Row noMargin flexEnd noWrap>
      <Col>
        <Paragraph>
          Este estudio se basa en la revisión de información pública, principalmente en los sitios de internet de cada empresa, y para esta primera versión, fue realizada en dos etapas:
        </Paragraph>
        <List>
          <ListItem>
            <Icon className='fa fa-chevron-right' aria-hidden='true' /> <Span>Enero a Marzo de 2017,</Span> de acuerdo al ranking publicado en junio de 2016.
          </ListItem>
          <ListItem>
            <Icon className='fa fa-chevron-right' aria-hidden='true' /> <Span>Junio de 2017,</Span> en donde se evaluaron las empresas que se integraron al ranking publicado en junio de 2017.
          </ListItem>
        </List>
        <Paragraph>
          Es posible que las empresas hayan publicado nueva información después de las fechas de revisión descritas, sin embargo, estas actualizaciones no
          modificaron los resultados previamente recabados y por lo tanto no se reflejan en este informe.
        </Paragraph>
      </Col>
      <Col>
        <ImageContainer>
          <Image src='assets/img/metodologia_img.jpg' />
        </ImageContainer>
      </Col>
    </Row>
  </Wrapper>
)

export default StudyInfo
