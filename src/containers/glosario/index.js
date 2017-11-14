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
const ENDPOINT = '165.227.53.250'

export default class Glossary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sources: [],
      glossary: [],
      news: []
    }
  }
  componentWillMount () {
    const sourcesOptions = {
      host: ENDPOINT,
      port: 8000,
      path: '/fuentes/',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const glossaryOptions = {
      host: ENDPOINT,
      port: 8000,
      path: '/glosario/',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const newsOptions = {
      host: ENDPOINT,
      port: 8000,
      path: '/recientes/',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    httpRequest(sourcesOptions)
    .then(res => {
      console.log('res > ', res);
      if (typeof res === 'string') {
        try {
          const json = JSON.parse(res)

          this.setState({
            sources: json
          })
        }
        catch (err){
          console.log(err)
          return err
        }
      }
    })
    httpRequest(glossaryOptions)
    .then(res => {
      console.log('res > ', res);
      if (typeof res === 'string') {
        try {
          this.setState({
            glossary: JSON.parse(res)
          })
        }
        catch (err){
          console.log(err)
          return err
        }
      }
    })

    httpRequest(newsOptions)
    .then(res => {
      console.log('res > ', res);
      if (typeof res === 'string') {
        try {
          const json = JSON.parse(res)
          this.setState({
            news: json
          })
        }
        catch (err){
          console.log(err)
          return err
        }
      }
    })
  }
  render () {
    const {sources, glossary, news} = this.state
    return (
      <div style={{overflow: 'hidden'}}>
        <header>
          <SectionBanner image={'/assets/img/glosario_background.jpg'} title={'GLOSARIO'} subtitle={'500 FRENTE A LA CORRUPCIÓN'} withBar />
        </header>
        <Main>
          <Container isNews Phone isGlossary>
            <Route isResponsive>HOME > GLOSARIO</Route>
            <Edition>PRIMERA EDICIÓN NOVIEMBRE 2017</Edition>
            <Topic data={glossary} />
            <Sources data={sources} />
          </Container>
          <News isTablet data={news} />
        </Main>
        <Footer />
      </div>
    )
  }
}
