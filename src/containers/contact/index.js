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
        <ContactForm sendMail={this.sendMail}/>
        <Footer />
      </div>
    )
  }
  sendMail (e) {
    e.preventDefault()
    let name = e.target.name.value
    let email = e.target.email.value
    let message = e.target.message.value
    
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('message', message)

    const headers = new Headers()
    // headers.append('Accept', 'application/json')
    headers.append('Accept', 'text/html')
    headers.append('X-Requested-With', 'XMLHttpRequest')
    headers.append('Content-Type', 'application/json')

    const fetchOptions = {
      method: 'GET',
      // body: formData,
      mode: 'no-cors',
      headers: headers
    }
    fetch('https://guarded-cove-20930.herokuapp.com/send-mail/', fetchOptions)
    .then(res => res.text())
    .then(res => console.log(res))
    .catch(err => console.error(err))
  }
}

export default Contact
