import React, { Component } from 'react'
import './App.css'
import {
  Home,
  Glossary,
  AboutUs
} from './containers'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const HomePage = <Home />

class App extends Component {
  render () {
    return (
      <div>
        <AboutUs />
      </div>
    )
  }
}

export default App
