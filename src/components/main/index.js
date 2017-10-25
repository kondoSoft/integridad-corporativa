import styled from 'styled-components'
import React from 'react'

export const Main = styled.main`
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column'};
    margin-top: 60px;
    padding: 0px 90px;
    border-right: 2px solid lightgrey;
    width: 60%;
`
export const Route = styled.p`
    font-size: 20px;
    color: red;
    margin-bottom: 50px;
`
export const Edition = styled.p`
    font-size: 14px;
    color: lightgrey;
    margin-bottom: 40px;
`
const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const BoxTitle = styled.h3`
    font-size: 26px;
    margin-bottom: 15px;
`
const BoxDescription = styled.p`
    font-size: 16px;
    margin-bottom: 30px;
`
export const Topic = (props) => {
  return (
    <Box>
      <BoxTitle>Titulo de la caja</BoxTitle>
      <BoxDescription>
        Descripcion de la caja
      </BoxDescription>
    </Box>
  )
}
