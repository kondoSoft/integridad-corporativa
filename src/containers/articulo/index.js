import React, { Component } from 'react'
import {
    SectionBanner,
    Main,
    Route,
    Footer,
    Container,
    News,
    Articles
} from '../../components'
import {httpRequest} from '../../helpers'

const ENDPOINT = '165.227.53.250'

export default class Article extends Component {
  constructor (props) {
    super(props)
    this.state = {
      news: [],
      data: []
    }
  }
  componentDidMount () {
    this.getSlugArticle(this.props.match.params.articulo)
    const newsOptions = {
      host: ENDPOINT,
      port: 8000,
      path: '/recientes/',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    httpRequest(newsOptions)
    .then(res => {
      if (res) {
        try {
          const json = JSON.parse(res)

          this.setState({
            news: json
          })
        } catch (err) {
          console.log(err)
          return err
        }
      }
    })

  }
  render () {
    const {news, data} = this.state
    return (
      <div style={{overflow: 'hidden'}}>
        <header>
          <SectionBanner image={'/assets/img/noticias_background.jpg'} title={'ARTICULO'} subtitle={''} withBar />
        </header>
        <Main>
          <Container isTablet>
            <Route>{`HOME > NOTICIAS > ${(data.length !== 0) && data[0].fields.titulo}`}</Route>
            <Articles data={(data.length !== 0) && data[0].fields} />
          </Container>
          <News data={news} isTablet />
        </Main>
        <Footer />
      </div>
    )
  }
  getSlugArticle (slug) {
    const articleOptions = {
      host: ENDPOINT,
      port: 8000,
      path: `/articulo/${slug}/`,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    httpRequest(articleOptions)
    .then(res => {
      if (res) {
         try {
          const json = JSON.parse(res)

          this.setState({
            data: json
          })
        }
        catch (err){
          console.log(err)
          return err
        }
      }
    })
  }
}
