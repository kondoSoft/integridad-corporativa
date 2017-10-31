import React, {Component} from 'react'
import {
  SectionBanner,
  Footer,
  ContactForm
} from '../../components'

class Contact extends Component {
  render () {
    return (
      <div>
        <header>
          <SectionBanner image={'/assets/img/contacto_background.jpg'} title='CONTACTO' withBar />
        </header>
        <ContactForm />
        <Footer />
      </div>
    )
  }
}

export default Contact
