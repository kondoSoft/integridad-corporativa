import React from 'react'
import styled from 'styled-components'
import {
  Title
} from '../index'

const Wrapper = styled.section`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${props => {
    if (props.Tablet) {
      return `@media screen and (max-width: 923px) {
          width: 90%;
        }`
    }
  }}
`

const RakingDescription = styled.p`
  max-width: 72%;
  text-align: center;
  margin-top: 40px;
  font-size: 18px;
  line-height: 25px;
  ${props => {
    if (props.Tablet) {
      return `@media screen and (max-width: 923px) {
          font-size: 16px;
          line-height: 20px;
          margin-top: 20px;
          max-width: 100%;
        }`
    }
  }}
`

const RankingInfo = props => (
  <Wrapper Tablet>
    <Title Tablet lighter fontSize='2.5em' color='#721D11'>500 Frente a la Corrupción evalúa a las 500 empresas más importantes de México de acuerdo al ranking publicado por Expansión cada año.</Title>
    <RakingDescription Tablet>
      Estas empresas representan más de 15 billones de pesos en ventas anuales y emplean de manera directa a 4.7 millones de personas. Por ello, la adopción de buenas prácticas anticorrupción
      a su anterior, es clave, pues tiene el potencial de impactar positivamente a toda su cadena de producción, sus socios comerciales, proveedores y distribuidores. Son éstas las empresas
      que pueden determinar el estándar en materia anticorrupción y convertirse en líderes sectoriales o regionales capaces de inducir cambios en la forma de hacer negocios en México.
    </RakingDescription>
  </Wrapper>
)

export default RankingInfo
