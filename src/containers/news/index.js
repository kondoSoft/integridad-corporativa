import React, {Component} from 'react'
import {
    SectionBanner,
    Main,
    Route,
    Footer,
    Container,
    News as NewsSideBar,
    NewsContainer,
    NewsWall
} from '../../components'
import {httpRequest} from '../../helpers'

const ENDPOINT = '165.227.53.250'

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
      news: [],
      data: []
    }
  }
  componentDidMount () {
    const newsOptions = {
      host: ENDPOINT,
      port: 8000,
      path: '/recientes/',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const articleOptions = {
      host: ENDPOINT,
      port: 8000,
      path: '/articulos/',
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
        }
        catch (err){
          console.log(err)
          return err
        }
      }
    })

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
  render () {
    const {dataNewsWall, news, data} = this.state
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
              <NewsContainer noPadding style={{width: '80%'}} data={data} disabled column expanded />
              <NewsSideBar data={news} isTablet withSearch noPadding />
            </div>
          </Container>
        </Main>
        <Footer />
      </div>
    )
  }
}
