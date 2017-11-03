import React, { Component } from 'react'
import {
  SectionBanner,
  Main,
  Route,
  Footer,
  Container,
  News,
  EventList
} from '../../components'
import {dataEvents} from '../../data'

export default class Events extends Component {
  render () {
    return (
      <div style={{overflow: 'hidden'}}>
        <header>
          <SectionBanner image={'/assets/img/calendario_background.jpg'} title={'Eventos'} subtitle={''} withBar />
        </header>
        <Main>
          <Container isGlossary events>
            <Route style={{fontSize: 26, fontFamily: 'Druk Text Web', letterSpacing: 1}}>PROXIMOS &nbsp;EVENTOS <i class='fa fa-chevron-down' aria-hidden='true' /></Route>
            <EventList isTablet data={dataEvents} />
          </Container>
          <News disabled isTablet />
        </Main>
        <Footer />
      </div>
    )
  }
}
