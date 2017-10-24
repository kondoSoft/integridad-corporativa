import styled from 'styled-components';
import React from 'react'

const Container = styled.div`
  width:80%;
  height: ${props => props.click.click ? '250px': '20px'};
  overflow:hidden;
  margin: auto;
   text-align : justify;
  `
const text1 = styled.a`
  color:black;
  font-weight: bolder;
`
const Vmore = styled.a`
  color:black;
  font-weight: bolder;
  display: ${props => props.click.click ? 'none': 'display'};
`
const Vless = styled.a`
  color:black;
  font-weight: bolder;
  display: ${props => props.click.click ? 'display': 'none'};
`
const text2 = styled.p`
  display: none;
`

function View (props){
    return(
      <Container click={props.click}>
        <Vmore onClick={props.slide} click={props.click}>El sector privado es una pieza central en cualquier estrategia anticorrupción..... Ver mas</Vmore>
        <br/>
        <br/>
        <text2>El primer paso consiste en establecer e implementar políticas de integridad que muestren su compromiso anticorrupción, el cual sólo se hace efectivo al hacerlo público y accesible para su consulta, al capacitar a directivos y empleados para su implementación, y al socializarlo entre socios y clientes. La señal de que las empresas no admiten actos de corrupción a su interior ni en los tratos con los gobiernos o socios comerciales, y que facilitan y premian la denuncia, constituyen el primer eslabón en la lucha contra la corrupción.
Sin embargo, la distribución de las 500 empresas refleja el estado embrionario en la adopción de políticas de integridad en el sector privado en México. Ninguna empresa obtuvo 100 puntos y sólo 13 empresas obtuvieron más de 80 puntos. Además, El 61.8% de las organizaciones obtuvieron menos de 50 puntos y apenas 2 por encima de los 90 puntos (0.4%).
</text2>
<br/>
  <Vless onClick={props.slide} click={props.click}>Ver menos</Vless>

      </Container>
    );
}


export  default View
