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
import {dataArticulo} from '../../data'

const Articulos = [
  {
    titulo: 'hello world'
  },
  {
    titulo: 'hello world'
  }
]

export default class Article extends Component {
  render () {
    return (
      <div>
        <header>
          <SectionBanner image={'assets/img/noticias_background.jpg'} title={'ARTICULO'} subtitle={''} withBar />
        </header>
        <Main>
          <Container style={{width: '70%'}}>
            <Route>HOME > NOTICIAS > EXPANSION INDICE 500</Route>
            <Articles data={dataArticulo} />
          </Container>
          <News />
        </Main>
        <Footer />
      </div>
    )
  }
}
