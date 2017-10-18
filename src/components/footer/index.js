import React from 'react'
import styled from 'styled-components'
import Col from '../col'

const Wrapper = styled.footer`
  background: #7D7D7D;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 0px 0px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
`

const Logo = styled.img`
  width: 100%;
  margin-left: 100px;
`
const Paragraph = styled.p`
  width: 66%;
  font-size: 18px;
  color: #FFF;
  font-weight: 200;
  margin-left: 50px;
`
const Anchor = styled.a`
  color: #FFF;
  font-size: 2em;
  margin: 0px 10px;
  &:nth-child(4){
    margin-right:40px;
  }
`

const Hr = styled.hr`
  border: 2px solid #ED4630;
  border-radius: 5px;
  width: 80%;
`
const SubFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7A2014;
  height: 80px;
  width: 100%;
`

const Copy = styled.div`
  color: #FFF;
  font-weight: 200;
`

const Image = styled.img`
  width: 50%;
  margin: 20px 0px;
`

const Footer = props => (
  <Wrapper>
    <Row>
      <Col>
        <Logo src='assets/img/logo500_footer.png' alt='Logo 500' />
      </Col>
      <Col>
        <Paragraph>
          Transparencia Mexicana y Mexicanos contra la Corrupción y la
          impunidad, en alianza con la Revista Expansión, presentan "500
          Frente a la Corrupción. Integridad Corporativa", el primer diagnóstico
          sobre politicas anticorrupción o de integridad de las 500 empresas
          mas importantes de México.
        </Paragraph>
      </Col>
      <Col>
        <Row>
          <Anchor href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-facebook' aria-hidden='true' />
          </Anchor>
          <Anchor href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-twitter' aria-hidden='true' />
          </Anchor>
          <Anchor href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-instagram' aria-hidden='true' />
          </Anchor>
          <Anchor href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-youtube-play' aria-hidden='true' />
          </Anchor>
        </Row>
      </Col>
    </Row>
    <Hr />
    <Row>
      <Col><Image src='assets/img/transparencia_mexicana_footer.png' alt='' /></Col>
      <Col><Image src='assets/img/expansion_footer.png' alt='' /></Col>
      <Col><Image src='assets/img/mcci_footer.png' alt='' /></Col>
    </Row>
    <SubFooter>
      <Row>
        <Copy>Copyright- 2017, All Right Reserved</Copy>
      </Row>
    </SubFooter>
  </Wrapper>
)

export default Footer
