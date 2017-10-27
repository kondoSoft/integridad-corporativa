import styled from 'styled-components'
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
    Container,
    Box,
    BoxTitle,
    BoxDescription,
    News,
    Articles
} from '../../components'
import {dataArticulo} from '../../data'

export default class Article extends Component {
  render () {
    return (
      <div>
        <header>
          <SectionBanner image={'assets/img/glosario_background.jpg'} title={'NOTICIAS'} subtitle={''} withBar />
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
