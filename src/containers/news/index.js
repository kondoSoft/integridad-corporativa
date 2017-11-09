import React, {Component} from 'react'
import {
    MainBanner,
    SectionBanner,
    Main,
    Route,
    Edition,
    Topic,
    Footer,
    Sources,
    Container,
    Box,
    BoxTitle,
    BoxDescription,
    News as NewsSideBar,
    Articles,
    NewsContainer,
    NewsWall
} from '../../components'
import {dataArrayArticulo} from '../../data'
import {httpRequest} from '../../helpers'

export default class News extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dataNewsWall: {
        video: {
          id: 'PLfulSRq1bzxp84VTcylyeD-ZFqpw46grU',
          title: 'Videos',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        articles: [
          {
            title: 'integrity report',
            description: 'Enterate de los resultados del estudio de transparencia mexicana',
            image: 'assets/img/blog_example.jpeg'
          },
          {
            title: 'blog invitado',
            description: 'Expasión: índice 500 en 2017. Entre escándalos, publicidad y compliance',
            image: 'assets/img/blog2_example.jpg'
          }
        ]
      },
      news: []
    }
  }
  componentDidMount () {
    const newsOptions = {
      host: '127.0.0.1',
      port: 8000,
      path: '/recientes/',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    httpRequest(newsOptions)
    .then(res => {
      const news = []
      const data = JSON.parse(res)
      const newsRecently1 = data[data.length - 3]
      const newsRecently2 = data[data.length - 2]
      const newsRecently3 = data[data.length - 1]
      news.push(newsRecently1)
      news.push(newsRecently2)
      news.push(newsRecently3)
      this.setState({
        news
      })
    })
  }
  render () {
    const {dataNewsWall, news} = this.state
    return (
      <div style={{overflow: 'hidden'}}>
        <header>
          <SectionBanner image={'assets/img/noticias_background.jpg'} title={'NOTICIAS'} subtitle={''} withBar />
        </header>
        <Main>
          <Container style={{width: '100%'}} isNews Phone>
            <Route isResponsive>HOME > NOTICIAS</Route>
            <NewsWall disabled data={dataNewsWall} />
            <hr style={{borderColor: '#E4E5E4', width: '100%', marginTop: 20, marginBottom: 20}} />
            <div style={{display: 'flex'}}>
              <NewsContainer noPadding style={{width: '80%'}} data={dataArrayArticulo} disabled column expanded />
              <NewsSideBar data={news} isTablet withSearch noPadding />
            </div>
          </Container>
        </Main>
        <Footer />
      </div>
    )
  }
}
