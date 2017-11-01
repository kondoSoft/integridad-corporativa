import React from 'react'
import styled from 'styled-components'
import {LogoLink} from '../'

const Wrapper = styled.section`
  background-image: url('assets/img/bg_home.jpg');
  background-size: cover;
  background-repeat:no-repeat;
  display:flex;
  flex-flow:column;
  justify-content:center;
  background-position-x: center;
`

const Logo = styled.img`
  height: auto;
  margin-top:30px;
  width: 50%;
  @media screen and (max-width: 945px) {
    width: 50%;
  }
  @media screen and (max-width: 731px) { 
    width: 80%;
  }
  @media screen and (max-width: 440px) { 
    width: 80%;
    margin-bottom: 30px;
  }
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
const RowSponsors = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  @media screen and (max-width: 945px) {

  }
  @media screen and (max-width: 731px) { 

  }
  @media screen and (max-width: 440px) {
    display: none; 
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
  @media screen and (max-width: 945px) {
    width: 70%;
  }
  @media screen and (max-width: 731px) { 
    width: 90%;
    font-size:16px;
    padding: 15px 0px 15px 0px;
  }
  @media screen and (max-width: 440px) {
    display: none; 
  }
`
const Hr = styled.hr`
  width:85%;
  border-radius:10px;
  @media screen and (max-width: 440px) {
    display: none; 
  }
`
const Image = styled.img`
  width:100%;
`
const Figure = styled.figure`
  width: 15%;
  height: auto;
  @media screen and (max-width: 945px) {
    width: 25%;
  }
  @media screen and (max-width: 731px) { 
    width: 30%;
  }
`
const MainBanner = (props) => {
  return (
    <Wrapper>
      <Row>
        <Logo src='assets/img/newLogo.png' alt='logo 500' />
      </Row>
      <Row>
        <SubTitle>
          Compartir y replicar buenas prácticas anticorrupción refrenda el compromiso del sector privado en la lucha contra la corrupción y la impunidad, y mejora la rendición de cuentas hacia socios, accionistas y clientes. En alianza, Expansión, Transparencia Mexicana y Mexicanos Contra la Corrupción y la Impunidad, buscan sumar al sector privado.
        </SubTitle>
      </Row>
      <Hr />
      <RowSponsors center>
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
      </RowSponsors>
    </Wrapper>
  )
}

export default MainBanner
