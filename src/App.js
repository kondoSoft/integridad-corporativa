import React, { Component } from 'react'
import './App.css'
import {
  Home,
  Glossary,
  Contact
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
        <Home />
      </div>
    )
  }
}

export default App
