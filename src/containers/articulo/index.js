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

export default class Article extends Component {
  render () {
    const slug = this.props.match.params.articulo
    const art = dataArrayArticulo.filter(articulo => articulo.slug === slug)
    console.log(art[0])
    return (
      <div>
        <header>
          <SectionBanner image={'assets/img/noticias_background.jpg'} title={'ARTICULO'} subtitle={''} withBar />
        </header>
        <Main>
          <Container style={{width: '70%'}}>
            <Route>HOME > NOTICIAS > EXPANSION INDICE 500</Route>
          
            <Articles data={art[0]} />
          </Container>
          <News />
        </Main>
        <Footer />
      </div>
    )
  }
}
