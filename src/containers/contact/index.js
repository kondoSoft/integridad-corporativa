import React, {Component} from 'react'
import {
  NavigationBar,
  SectionBanner,
  Footer,
  ContactForm
} from '../../components'

class Contact extends Component {
  render () {
    return (
      <div>
        <header>
          <NavigationBar />
          <SectionBanner title='CONTACTO' withBar/>
        </header>
        <ContactForm />
        <Footer />
      </div>
    )
  }
}

export default Contact
