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
      }
    }
  }
  render () {
    const {dataNewsWall} = this.state
    return (
      <div>
        <header>
          <SectionBanner image={'assets/img/noticias_background.jpg'} title={'NOTICIAS'} subtitle={''} withBar />
        </header>
        <Main>
          <Container style={{width: '100%'}}>
            <Route>HOME > NOTICIAS</Route>
            <NewsWall disabled data={dataNewsWall} />
            <hr style={{borderColor: '#E4E5E4', width: '100%', marginTop: 20, marginBottom: 20}} />
            <div style={{display: 'flex'}}>
              <NewsContainer noPadding style={{width: '80%'}} data={dataArrayArticulo} disabled column expanded />
              <NewsSideBar disabled withSearch noPadding />
            </div>
          </Container>
        </Main>
        <Footer />
      </div>
    )
  }
}
