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
      if (typeof res === 'string') {
        const json = JSON.parse(res)
        return json
      }
    })
    .then(res => {
      this.setState({
        sources: res
      })
    })
    httpRequest(glossaryOptions)
    .then(res => {
      if (typeof res === 'string') {
        const json = JSON.parse(res)
        return json
      }
    })
    .then(res => {
      this.setState({
        glossary: res
      })
    })
    httpRequest(newsOptions)
    .then(res => {
      if (typeof res === 'string') {
        const json = JSON.parse(res)
        return json
      }
    })
    .then(res => {
      const news = []
      if (res.length !== 0) {
        const newsRecently1 = res[res.length - 3]
        const newsRecently2 = res[res.length - 2]
        const newsRecently3 = res[res.length - 1]
        news.push(newsRecently1)
        news.push(newsRecently2)
        news.push(newsRecently3)
        this.setState({
          news
        })
      } else {
        this.setState({
          news: []
        })
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
