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

const ENDPOINT = '165.227.53.250'

export default class Article extends Component {
  constructor (props) {
    super(props)
    this.state = {
      news: [],
      data: []
    }
  }
  componentDidMount () {
    this.getSlugArticle(this.props.match.params.articulo)
    const newsOptions = {
      host: ENDPOINT,
      port: 8000,
      path: '/recientes/',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    httpRequest(newsOptions)
    .then(res => {
      if (res) {
        return JSON.parse(res)
      }
    })
    .then(res => {
      const news = []
      const newsRecently1 = res[res.length - 3]
      const newsRecently2 = res[res.length - 2]
      const newsRecently3 = res[res.length - 1]
      news.push(newsRecently1)
      news.push(newsRecently2)
      news.push(newsRecently3)
      this.setState({
        news
      })
    })
  }
  render () {
    const {news, data} = this.state
    const slug = this.props.match.params.articulo
    const art = dataArrayArticulo.filter(articulo => articulo.slug === slug)
    return (
      <div style={{overflow: 'hidden'}}>
        <header>
          <SectionBanner image={'/assets/img/noticias_background.jpg'} title={'ARTICULO'} subtitle={''} withBar />
        </header>
        <Main>
          <Container style={{width: '70%'}}>
            <Route>{`HOME > NOTICIAS > ${(data.length !== 0) && data[0].fields.titulo}`}</Route>
            <Articles data={(data.length !== 0) && data[0].fields} />
          </Container>
          <News data={news} />
        </Main>
        <Footer />
      </div>
    )
  }
  getSlugArticle (slug) {
    const articleOptions = {
      host: ENDPOINT,
      port: 8000,
      path: `/articulo/${slug}/`,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    httpRequest(articleOptions)
    .then(res => {
      if (res) {
        return JSON.parse(res)
      }
    })
    .then(res => {
      this.setState({
        data: res
      })
    })
  }
}
