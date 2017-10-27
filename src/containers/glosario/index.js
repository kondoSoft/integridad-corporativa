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
  componentDidMount () {
    // fetch('http://127.0.0.1:8000/fuentes/', {
    //   method: 'GET',
    //   mode: 'no-cors',
    //   headers: new Headers({
    //     'Content-Type': 'text/html'
    //   })
    // })
    // .then((response) => {
    //   return response.text()
    // })
    // .then(text => {
    //   console.log(text)
    // })
  }
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
