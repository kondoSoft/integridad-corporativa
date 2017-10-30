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
      <div>
        <header>
          <SectionBanner image={'assets/img/calendario_background.jpg'} title={'Eventos'} subtitle={''} withBar />
        </header>
        <Main>
          <Container style={{width: '70%'}}>
            <Route style={{fontSize: 26, fontFamily: 'Druk Text Web', letterSpacing: 1}}>PROXIMOS &nbsp;EVENTOS <i class='fa fa-chevron-down' aria-hidden='true' /></Route>
            <EventList data={dataEvents} />
          </Container>
          <News disabled />
        </Main>
        <Footer />
      </div>
    )
  }
}
