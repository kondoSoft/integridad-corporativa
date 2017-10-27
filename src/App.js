import React, { Component } from 'react'
import './App.css'
import {
  Home as HomePage,
  Glossary as GlossaryPage,
  Contact as ContactPage,
  Methodology as MethodologyPage,
  AboutUs as AboutUsPage
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
          <Route path='/metodologia' component={MethodologyPage} />
          <Route path='/quienes-somos' component={AboutUsPage} />
        </div>
      </Router>
    )
  }
}

export default App
