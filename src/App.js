import React, { Component } from 'react'
import './App.css'
import {
  Home as HomePage,
  Glossary as GlossaryPage,
  Contact as ContactPage,
  Article as ArticlePage,
  Methodology as MethodologyPage,
  AboutUs as AboutUsPage,
  News as NewsPage,
  Events as EventsPage
} from './containers'
import {
  NavigationBar
} from './components'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import ReactGA from 'react-ga'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Route exact path='/' component={HomePage} />
          <Route path='/glosario' component={GlossaryPage} />
          <Route path='/contacto' component={ContactPage} />
          <Route path='/articulo' component={ArticlePage} />
          <Route path='/metodologia' component={MethodologyPage} />
          <Route path='/quienes-somos' component={AboutUsPage} />
          <Route exact path='/noticias' component={NewsPage} />
          <Route path='/noticias/:articulo' component={ArticlePage} />
          <Route path='/eventos' component={EventsPage} />
        </div>
      </Router>
    )
  }
}

export default App
