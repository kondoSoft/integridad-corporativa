import React, { Component } from 'react'
import './App.css'
import {
  Home as HomePage,
  Glossary as GlossaryPage,
  Contact as ContactPage,
  Article as ArticlePage,
  Methodology as MethodologyPage,
  AboutUs as AboutUsPage,
  News as NewsPage
} from './containers'
import {
  NavigationBar
} from './components'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

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
          <Route path='/noticias' component={NewsPage} />
        </div>
      </Router>
    )
  }
}

export default App
