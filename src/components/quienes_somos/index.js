import styled from 'styled-components'
import React from 'react'
import {
  Row,
  Col
} from '../index'
import {LogoLink} from '../'

export const MainSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  padding: ${props => props.isBig ? '90px 100px' : '0px'};
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  background-color: ${props => props.isGrey ? 'lightgrey' : '#FFF'};
  align-items: ${props => props.center ? 'center' : 'flex-start'};
  text-align: center;
`
export const ContentText = styled.p`
  font-size: ${props => props.isBig ? '2.5em' : props.normal ? '18px' : '22px'};
  color: ${props => props.isBig ? '#7A1F14' : '#000'};
  padding: ${props => props.isBig ? '15px 0px' : '0px'};
  font-weight: 200;
  font-family: ${props => props.normal ? 'sans-serif' : "'Druk Text Web'"};
  margin: 3px 0px;
`

const Image = styled.img`
  width: ${props => props.width ? props.width : '100%'};
`

const Title = styled.h3`
  text-transform: ${props => props.red ? 'none' : 'uppercase'};
  font-family: ${props => props.normal ? 'sans-serif' : "'Druk Text Web'"};
  font-size: ${props => props.red ? '1.5em' : '2em'}; 
  margin-bottom: 10px; 
  color: ${props => props.red ? '#ED462F' : '#000'};
`

export const MiddleBanner = props => (
  <div>
    <Row>
      <Col width='50%' >
        <Image src='assets/img/quienessomos_banner.png' />
      </Col>
      <Col width='50%' >
        <Title>Apartir del 15º de noviembre 2017,</Title>
        <ContentText normal>las empresas podrán actualizar la información sobre sus políticas</ContentText>
        <ContentText normal>anticorrupción a través de este sitio para futuras evaluaciones de</ContentText>
        <ContentText normal>las 500 Frente a la Corrupción.</ContentText>
        <br />
        <br />
        <br />
        <ContentText normal>Los cortes de información se realizarán dos veces al año;</ContentText>
        <ContentText normal>uno el <b>31 de diciembre</b> y otro el <b>31 de julio</b>,</ContentText>
        <ContentText normal>con miras a la publicación del índice 500 de Expasión en junio y</ContentText>
        <ContentText normal>para el reporte anual de IC500 en noviembre</ContentText>
      </Col>
    </Row>
    <Row padding='0px 100px' margin='100px 0px'>
      <Col width='50%' >
        <LogoLink href='https://contralacorrupcion.mx/' target='blank' style={{width: '100%'}}>
          <Image src='assets/img/mcci.png' width='50%' />
        </LogoLink>
      </Col>
      <Col width='50%' background='#F1F2F1' padding='30px 0px'>
        <Title red>Sobre Mexicanos Contra la Corrupción y la Impunidad</Title>
        <ContentText normal>Asociación civil sin fines de lucro comprometida con la</ContentText>
        <ContentText normal>consolidación del Estado de Derecho en México, a través de una</ContentText>
        <ContentText normal>agenda integral dedicada a prevenir, denunciar y contribuir a</ContentText>
        <ContentText normal>erradicar la corrupción e impunidad que prevalecen en los</ContentText>
        <ContentText normal>sistemas público y privado de nuestro país. Busca arrojar luz</ContentText>
        <ContentText normal>sobre los actos y redes de corrupción a través de la investigación</ContentText>
        <ContentText normal>aplicada, el periodismo de investigación, el litigio estratégico y la</ContentText>
        <ContentText normal>movilización ciudadana.</ContentText>
      </Col>
    </Row>
    <Row padding='0px 100px' margin='50px 0px' invert>
      <Col width='50%' >
        <LogoLink href='https://www.tm.org.mx/' target='blank'>
          <Image src='assets/img/quienessomos_tranparencia.jpg' width='80%' />
        </LogoLink>
      </Col>
      <Col width='50%' background='#F1F2F1' padding='30px 0px'>
        <Title red>Sobre Transparencia Mexicana</Title>
        <ContentText normal>Transparencia Mexicana es una organización de la sociedad civil</ContentText>
        <ContentText normal>dedicada a lucha contra la corrupción en México. Bajo un</ContentText>
        <ContentText normal>enfoque de derechos humanos, generamos propuestas concretas</ContentText>
        <ContentText normal>para reducir riesgos de corrupción y fortalecer las capacidades,</ContentText>
        <ContentText normal>tanto el sector público como privado, con el objetivo de</ContentText>
        <ContentText normal>atender las causas y efectos de este problema. Nuestra</ContentText>
        <ContentText normal>experiencia abarca desde la medición del impacto de la</ContentText>
        <ContentText normal>corrupción en trámites y servicios públicos hasta el análisis</ContentText>
        <ContentText normal>específico de riesgos de corrupción en sectores como el de las</ContentText>
        <ContentText normal>contrataciones públicas o el sector energético. Somos el capítulo</ContentText>
        <ContentText normal>México de Transparencia Internacional.</ContentText>
      </Col>
    </Row>
    <Row padding='0px 100px' margin='50px 0px'>
      <Col width='50%' >
        <LogoLink href='http://expansion.mx/' target='blank'>
          <Image src='assets/img/logo_expansion.jpg' width='60%' />
        </LogoLink>
      </Col>
      <Col width='50%' background='#F1F2F1' padding='30px 0px'>
        <Title red>Sobre Expasión</Title>
        <ContentText normal>Expasión es el medio de comunicación líder en periodismo de</ContentText>
        <ContentText normal>negocios en México. Con cerca de cinco décadas de trayectoria</ContentText>
        <ContentText normal>dando a conocer la actualidad económica, empresarial y política</ContentText>
        <ContentText normal>del país, esta marca se ha convertido en un referente para</ContentText>
        <ContentText normal>empresarios, directivos de empresas, emprendedores, e</ContentText>
        <ContentText normal>inversionistas de habla hispana. Con el paso de los años,</ContentText>
        <ContentText normal>Expasión se ha convertido en una plataforma multimedia que</ContentText>
        <ContentText normal>llega a más de 50 millones de lectores al año.</ContentText>
      </Col>
    </Row>
  </div>
)
