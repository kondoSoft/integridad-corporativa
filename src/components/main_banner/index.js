import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  background-image: url('assets/img/header_background.jpg');
  background-size: cover;
  background-repeat:no-repeat;
  display:flex;
  flex-flow:column;
  justify-content:center;
  background-position-x: center;
`

const Logo = styled.img`
  height:350px;
  margin-top:30px;
`

const Row = styled.div`
  display:flex;
  justify-content:${props => (props.center) ? 'center' : 'space-around'};
  flex-wrap:wrap;
  align-items:center;
  &:nth-child(4){
    margin:10px 0px 40px 0px;
  }
`

const SubTitle = styled.p`
  color:#FFF;
  margin-top:30px;
  margin-bottom:20px;
  text-align:center;
  width:40%;
  font-size:18px;
  font-weight:lighter;
  line-height: 25px;
`

const Hr = styled.hr`
  width:85%;
  border-radius:10px;
`

const Image = styled.img`
  width:100%;
`

const Figure = styled.figure`
  width:10%;
  &:nth-child(2){
    margin:0px 160px;
  }
`

const MainBanner = (props) => {
  return (
    <Wrapper>
      <Row>
        <Logo src='assets/img/logo500.png' alt='logo 500' />
      </Row>
      <Row>
        <SubTitle>
          Compartir y replicar buenas prácticas anticorrupción refrenda el compromiso del sector privado en la lucha contra la corrupción y la impunidad, y mejora la rendición de cuentas hacia socios, accionistas y clientes. En alianza, Expansión, Transparencia Mexicana y Mexicanos Contra la Corrupción y la Impunidad, buscan sumar al sector privado a la lucha
        </SubTitle>
      </Row>
      <Hr />
      <Row center>
        <Figure>
          <a href='https://contralacorrupcion.mx/' target='_blank'>
            <Image src='assets/img/mcci_logo.png' alt='' />
          </a>
        </Figure>
        <Figure>
          <a href='http://expansion.mx/' target='_blank'>
            <Image src='assets/img/logo_expansion.jpg' alt='' />
          </a>
        </Figure>
        <Figure>
          <a href='https://www.tm.org.mx/' target='_blank'>
            <Image src='assets/img/transparencia_mexicana.png' alt='' />
          </a>
        </Figure>
      </Row>
    </Wrapper>
  )
}

export default MainBanner
