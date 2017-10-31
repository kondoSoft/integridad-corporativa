import React, {Component} from 'react'
import styled from 'styled-components'
import Col from '../col'
import {LogoLink} from '../'

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
  align-items: center;
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
const RowColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`
class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isHover: false,
      social: ''
    }
    this.isHover = this.isHover.bind(this)
    this.isLeave = this.isLeave.bind(this)
  }
  render () {
    return (
      <Wrapper>
        <Row>
          <Col>
            <Logo src='/assets/img/logofooter.png' alt='Logo 500' />
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
          <Row>
            <RowColumn>
              <Col style={{flexDirection: 'initial'}}>
                <Anchor onMouseEnter={() => this.isHover('fb')} onMouseLeave={this.isLeave} href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                  <i className='fa fa-facebook' aria-hidden='true' />
                </Anchor>
                <Anchor onMouseEnter={() => this.isHover('twt')} onMouseLeave={this.isLeave} href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                  <i className='fa fa-twitter' aria-hidden='true' />
                </Anchor>
                <Anchor href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                  <i className='fa fa-instagram' aria-hidden='true' />
                </Anchor>
                <Anchor href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
                  <i className='fa fa-youtube-play' aria-hidden='true' />
                </Anchor>
              </Col>
              {
                this.state.isHover
                  ? <div onMouseEnter={() => this.isHover(this.state.social)} onMouseLeave={this.isLeave} style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                    <a href={(this.state.social === 'fb') ? 'https://facebook.com/MXvsCORRUPCION' : 'https://twitter.com/MXvsCORRUPCION'} target='_blank' rel='noopener noreferrer' style={{fontSize: 14, margin: '10px 5px 8px 0px', textDecoration: 'none', color: 'black'}}>
                      @MXvsCORRUPCION
                    </a>
                    <a href={(this.state.social === 'fb') ? 'https://facebook.com/TransparenciaMexicana' : 'https://twitter.com/IntegridadMx'} target='_blank' rel='noopener noreferrer' style={{fontSize: 14, margin: '5px 5px 8px 0px', textDecoration: 'none', color: 'black'}}>
                      {
                        (this.state.social === 'fb') ? '@TransparenciaMexicana' : '@IntegridadMX'
                      }
                    </a>
                  </div>
                  : null
              }
            </RowColumn>
          </Row>
        </Row>
        <Hr />
        <Row>
          <Col>
            <LogoLink href='https://www.tm.org.mx/' target='blank'>
              <Image src='/assets/img/transparencia_mexicana_footer.png' alt='' />
            </LogoLink>
          </Col>
          <Col>
            <LogoLink href='http://expansion.mx/' target='blank'>
              <Image src='/assets/img/expansion_footer.png' alt='' />
            </LogoLink>
          </Col>
          <Col>
            <LogoLink href='https://contralacorrupcion.mx/' target='blank'>
              <Image src='/assets/img/mcci_footer.png' alt='' />
            </LogoLink>
          </Col>
        </Row>
        <SubFooter>
          <Row>
            <Copy>Copyright- 2017, All Right Reserved</Copy>
          </Row>
        </SubFooter>
      </Wrapper>
    )
  }
  isHover (social) {
    this.setState({
      isHover: true,
      social
    })
  }
  isLeave () {
    this.setState({
      isHover: false,
      social: ''
    })
  }
}
export default Footer
