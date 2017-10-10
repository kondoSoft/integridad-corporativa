import React, {Component} from 'react'
import {
  NavigationBar,
  MainBanner,
  Title,
  Button,
  Row,
  Banner500,
  CollapseBox,
  Col,
  Section,
  Subtitle
} from '../../components'
import './styles.css'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: {
        graphics: false,
        data: false,
        wallNews: false
      },
      rotate: {
        graphics: '',
        data: '',
        wallNews: ''
      }
    }

    this.openBox = this.openBox.bind(this)
  }
  render () {
    const {
      isOpen,
      rotate
    } = this.state
    return (
      <div>
        <header>
          <NavigationBar />
          <MainBanner />
        </header>
        <section className='download'>
          <Row>
            <Title className='title'>EDICIÓN 2017</Title>
          </Row>
          <Row>
            <Button><i className='fa fa-download' aria-hidden='true' />&nbsp;DESCARGA EL INFORME EJECUTIVO</Button>
            <Button><i className='fa fa-download' aria-hidden='true' />&nbsp;DESCARGA LA BASE DE DATOS</Button>
          </Row>
        </section>
        <section>
          <Banner500 />
        </section>
        <Section>
          <Title color={(isOpen.graphics) ? '#ED4630' : false}>GRÁFICAS</Title>
          <Col>
            <CollapseBox isOpen={isOpen.graphics} >
              <Row>
                <img src='http://via.placeholder.com/800x600' alt='' />
              </Row>
            </CollapseBox>
            <i className={`fa fa-caret-down fa-4x ${rotate.graphics} icon`} aria-hidden='true' onClick={() => this.openBox('graphics')} />
          </Col>
        </Section>
        <Section background='#F2F2F2'>
          <Title color={(isOpen.data) ? '#ED4630' : false}>INFORMACIÓN ACTUALIZADA</Title>
          <Subtitle>DE LAS 500 FRENTE A LA CORRUPCIÓN</Subtitle>
          <Col>
            <CollapseBox isOpen={isOpen.data} >
              <Row>
                <img src='http://via.placeholder.com/800x600' alt='' />
              </Row>
            </CollapseBox>
            <i className={`fa fa-caret-down fa-4x ${rotate.data} icon`} aria-hidden='true' onClick={() => this.openBox('data')} />
          </Col>
        </Section>
      </div>
    )
  }
  openBox (box) {
    const {
      isOpen,
      rotate
    } = this.state

    if (box === 'graphics') {
      if (isOpen.graphics) {
        isOpen.graphics = false
        rotate.graphics = 'rotateDown'
      } else {
        isOpen.graphics = true
        rotate.graphics = 'rotateUp'
      }
      this.setState({isOpen, rotate})
    } else if (box === 'data') {
      if (isOpen.data) {
        isOpen.data = false
        rotate.data = 'rotateDown'
      } else {
        isOpen.data = true
        rotate.data = 'rotateUp'
      }
      this.setState({isOpen, rotate})
    } else {
      if (isOpen.wallNews) {
        isOpen.wallNews = false
        rotate.wallNews = 'rotateDown'
      } else {
        isOpen.wallNews = true
        rotate.wallNews = 'rotateUp'
      }
      this.setState({isOpen, rotate})
    }
  }
}

export default Home
