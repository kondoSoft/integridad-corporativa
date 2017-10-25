import React, { Component } from 'react'
import {
    NavigationBar,
    MainBanner,
    SectionBanner,
    Main,
    Route,
    Edition,
    Topic
} from '../../components'

export default class Glossary extends Component {
  render () {
    return (
      <div>
        <header>
          <NavigationBar />
          <SectionBanner image={'assets/img/glosario_background.jpg'} title={'GLOSARIO'} subtitle={'500 FRENTE A LA CORRUPCIÓN'} withBar />
        </header>
        <Main>
          <Route>HOME > GLOSARIO</Route>
          <Edition>PRIMERA EDICIÓN NOVIEMBRE 2017</Edition>
          <Topic />
        </Main>
      </div>
    )
  }
}
