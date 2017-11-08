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
import {httpRequest} from '../../helpers'

export default class Events extends Component {
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
          <News disabled isTablet data={news} />
        </Main>
        <Footer />
      </div>
    )
  }
}
