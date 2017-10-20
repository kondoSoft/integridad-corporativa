import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:20px 0px;
`
const SubTitle = styled.h4`
  color: #ED4630;
  font-weight: 200;
`
const Line = styled.hr`
  border: 1px solid #898989;
  width: 230px;
`
const Icon = styled.i`
  color: #898989;
  margin: -20px auto 0px auto;
  padding: 0px:
`
const Paragraph = styled.p`
  color: #898989;
  text-align: center;
  width: 60%;
  font-size: 12px;
`

const Disclaimer = (props) => (
  <Wrapper>
    <SubTitle>DESCARGO DE RESPONSABILIDAD</SubTitle>
    <Line />
    <Icon className='fa fa-caret-down fa-2x' aria-hidden='true' />
    <Paragraph>La información se actualiza con una periodicidad bimestral. Una vez acualizada por usuario,
    se refleja cambios en los días del mes calendario.</Paragraph>
  </Wrapper>
)

export default Disclaimer
