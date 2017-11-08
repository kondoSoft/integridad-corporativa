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
  constructor (props) {
    super(props)
    this.state = {
      sources: [],
      glossary: [],
      news: []
    }
  }
  componentDidMount () {
    const sourcesOptions = {
      host: '127.0.0.1',
      port: 8000,
      path: '/fuentes/',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    const glossaryOptions = {
      host: '127.0.0.1',
      port: 8000,
      path: '/glosario/',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    const newsOptions = {
      host: '127.0.0.1',
      port: 8000,
      path: '/recientes/',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    httpRequest(sourcesOptions)
    .then(res => {
      this.setState({
        sources: JSON.parse(res)
      })
    })
    httpRequest(glossaryOptions)
    .then(res => {
      this.setState({
        glossary: JSON.parse(res)
      })
    })
    httpRequest(newsOptions)
    .then(res => {
      const news = []
      const data = JSON.parse(res)
      if (data.length !== 0) {
        const newsRecently1 = data[data.length - 3]
        const newsRecently2 = data[data.length - 2]
        const newsRecently3 = data[data.length - 1]
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
