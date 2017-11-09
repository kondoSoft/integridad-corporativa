import styled from 'styled-components'
import React, { Component } from 'react'
import {
    SectionBanner,
    Main,
    Route,
    Footer,
    Container,
    News,
    Articles
} from '../../components'
import {dataArrayArticulo} from '../../data'
import {httpRequest} from '../../helpers'

export default class Article extends Component {
  constructor (props) {
    super(props)
    this.state = {
      news: []
    }
  }
  componentDidMount () {
    const newsOptions = {
      host: '127.0.0.1',
      port: 8000,
      path: '/recientes/',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    httpRequest(newsOptions)
    .then(res => {
      const news = []
      const data = JSON.parse(res)
      const newsRecently1 = data[data.length - 3]
      const newsRecently2 = data[data.length - 2]
      const newsRecently3 = data[data.length - 1]
      news.push(newsRecently1)
      news.push(newsRecently2)
      news.push(newsRecently3)
      this.setState({
        news
      })
    })
  }
  render () {
    const {news} = this.state
    const slug = this.props.match.params.articulo
    const art = dataArrayArticulo.filter(articulo => articulo.slug === slug)
    return (
      <div style={{overflow: 'hidden'}}>
        <header>
          <SectionBanner image={'/assets/img/noticias_background.jpg'} title={'ARTICULO'} subtitle={''} withBar />
        </header>
        <Main>
          <Container style={{width: '70%'}}>
            <Route>HOME > NOTICIAS > EXPANSION INDICE 500</Route>

            <Articles data={art[0]} />
          </Container>
          <News data={news} />
        </Main>
        <Footer />
      </div>
    )
  }
}
