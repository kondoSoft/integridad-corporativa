import React from 'react'
import styled from 'styled-components'
import {
  Row,
  Col
} from '../index'

const Wrapper = styled.section`

`
const Paragraph = styled.p`
  width: 75%;
  font-size: 1.2em;
  line-height: 30px;
  font-weight: lighter;
  text-align: center;
`
const Score = styled.p`
  padding: 20px;
  text-align: center;
  font-size: 1.3em;
  line-height: 30px;
  font-weight: lighter;
  margin-right: 30px;
  position: relative;
  &:after{
    content: '';
    position: absolute;
    border-bottom: 3px solid #ED462F;
    width: 140px;
    bottom: 0px;
    right: 28%;
  }
  `

const ScoreTot = styled.p`
  padding: 20px;
  text-align: center;
  font-size: 1.3em;
  line-height: 30px;
  font-weight: lighter;
  margin-right: 30px;
  position: relative;
  &:after{
    content: '';
    position: absolute;
    border-bottom: 3px solid #ED462F;
    width: 250px;
    bottom: 0px;
    right: 10%;
  }
  `

const Span = styled.span`
  color: #ED462F;
  font-weight: bold;
`

const ScoreInfo = props => (
  <Wrapper>
    <Row noWrap>
      <Col>
        <Paragraph>
          La mayoría de los reactivos fueron calificados de manera binaria (0 o 1), aunque en algunos caso, se admitieron respuestas
          parciales o subóptimas (Ver anexo 1). Los valores obtenidos por las empresas en cada variable se sumaron de manera lineal,
          sin ninguna ponderación adicional.
        </Paragraph>
      </Col>
      <Col width='80%'>
        <Score>
          El puntuaje máximo para una empresa es <br /><Span>25.5 puntos.</Span>
        </Score>
      </Col>
      <Col width='80%'>
        <ScoreTot>
          El valor obtenido fue normalizado para expresarse en una escala de <br /><Span>0 a 100,</Span> donde <Span>25.5=100.</Span>
        </ScoreTot>
      </Col>
    </Row>
  </Wrapper>
)

export default ScoreInfo
