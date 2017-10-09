import React, {Component} from 'react'
import {
  NavigationBar,
  MainBanner,
  Title,
  Button,
  Row,
  Banner500
} from '../../components'
import './styles.css'

class Home extends Component {
  render () {
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
      </div>
    )
  }
}

export default Home
