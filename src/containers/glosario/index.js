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

export default class Glossary extends Component {
  render () {
    return (
      <div>
        <header>
          <SectionBanner image={'assets/img/glosario_background.jpg'} title={'GLOSARIO'} subtitle={'500 FRENTE A LA CORRUPCIÓN'} withBar />
        </header>
        <Main>
          <Container >
            <Route>HOME > GLOSARIO</Route>
            <Edition>PRIMERA EDICIÓN NOVIEMBRE 2017</Edition>
            <Topic data={data} />
            <Sources data={dataSources} />
          </Container>
          <News />
        </Main>
        <Footer />
      </div>
    )
  }
}
