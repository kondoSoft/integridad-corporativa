import React, {Component} from 'react'
import {
  NavigationBar,
  MainBanner
} from '../../components'
import './styles.css'

class Home extends Component {
  render () {
    return (
      <header>
        <NavigationBar />
        <MainBanner />
      </header>
    )
  }
}

export default Home
