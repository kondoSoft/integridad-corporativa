import React, {Component} from 'react'
import {
  SectionBanner,
  Footer,
  ContactForm,
  Dialog
} from '../../components'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isVisible: false,
      animate: false
    }
    this.closeModal = this.closeModal.bind(this)
    this.sendMail = this.sendMail.bind(this)
  }
  render () {
    const {
      isVisible,
      animate
    } = this.state
    return (
      <div style={{overflow: 'hidden'}}>
        <header>
          <SectionBanner image={'/assets/img/contacto_background.jpg'} title='CONTACTO' withBar />
        </header>
        <ContactForm sendMail={this.sendMail} />
        <Dialog isVisible={isVisible} animate={animate} textCenter title='Aviso' onClickClose={this.closeModal}>
          Su mensaje fue enviado exitosamente
        </Dialog>
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
    headers.append('Accept', 'application/json')
    // headers.append('Accept', 'text/html')
    headers.append('X-Requested-With', 'XMLHttpRequest')
    headers.append('Content-Type', 'application/json')

    const fetchOptions = {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
      headers: headers
    }
    fetch('http://165.227.53.250:8000/send-mail/', fetchOptions)
    .then(res => res.text())
    .then(res => {
      this.setState({isVisible: true, animate:true})
      setTimeout(function () { window.location.reload() }, 1000)
    })
    .catch(err => console.error(err))
  }
  closeModal () {
    const {
      isVisible
    } = this.state
    this.setState({isVisible: !isVisible})
  }
}

export default Contact
