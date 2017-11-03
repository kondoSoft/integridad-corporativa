import React, { Component } from 'react'
import {
    MainBanner,
    SectionBanner,
    Main,
    Route,
    Edition,
    Topic,
    Footer,
    Sources,
    News,
    Container
} from '../../components'
import {data, dataSources} from '../../data'
import {httpRequest} from '../../helpers'

export default class Glossary extends Component {
  componentDidMount () {
    const options = {
      host: '127.0.0.1',
      port: 8000,
      path: '/fuentes/',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    httpRequest(options)
    .then(res => console.log(res))
  }
  render () {
    return (
      <div>
        <header>
          <SectionBanner image={'/assets/img/glosario_background.jpg'} title={'GLOSARIO'} subtitle={'500 FRENTE A LA CORRUPCIÓN'} withBar />
        </header>
        <Main>
          <Container >
            <Route>HOME > GLOSARIO</Route>
            <Edition>PRIMERA EDICIÓN NOVIEMBRE 2017</Edition>
            <Topic data={data} />
            <Sources data={dataSources} />
          </Container>
          <News disabled />
        </Main>
        <Footer />
      </div>
    )
  }
}
