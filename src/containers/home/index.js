import React, {Component} from 'react'
import {
  MainBanner,
  Title,
  Button,
  Row,
  Banner500,
  CollapseBox,
  Col,
  Section,
  Footer,
  Dialog,
  GoToTop,
  TabsShowBy,
  GraphicDescription,
  Disclaimer,
  NewsWall,
  CustomizedAxisTick
} from '../../components'
import {
  BarChart,
  XAxis,
  YAxis,
  Bar
} from 'recharts'
import SliderGraphics from '../slider'
import './styles.css'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataActualizada: [
        {name: 'aeroe', uv: 10, pv: 100, amt: 100},
        {name: 'B', uv: 10, pv: 95, amt: 95},
        {name: 'C', uv: 10, pv: 90, amt: 90},
        {name: 'D', uv: 10, pv: 80, amt: 80},
        {name: 'E', uv: 10, pv: 85, amt: 85},
        {name: 'F', uv: 10, pv: 80, amt: 80},
        {name: 'A', uv: 10, pv: 75, amt: 75},
        {name: 'B', uv: 10, pv: 70, amt: 70},
        {name: 'C', uv: 10, pv: 65, amt: 65},
        {name: 'D', uv: 10, pv: 60, amt: 60},
        {name: 'E', uv: 10, pv: 55, amt: 55},
        {name: 'F', uv: 10, pv: 50, amt: 50},
        {name: 'A', uv: 10, pv: 45, amt: 45},
        {name: 'B', uv: 10, pv: 40, amt: 40},
        {name: 'C', uv: 10, pv: 35, amt: 35},
        {name: 'D', uv: 10, pv: 30, amt: 30},
        {name: 'E', uv: 10, pv: 25, amt: 25},
        {name: 'B', uv: 10, pv: 70, amt: 70},
        {name: 'C', uv: 10, pv: 65, amt: 65},
        {name: 'D', uv: 10, pv: 60, amt: 60},
        {name: 'E', uv: 10, pv: 55, amt: 55},
        {name: 'F', uv: 10, pv: 50, amt: 50},
        {name: 'A', uv: 10, pv: 45, amt: 45},
        {name: 'B', uv: 10, pv: 40, amt: 40},
        {name: 'C', uv: 10, pv: 35, amt: 35},
        {name: 'D', uv: 10, pv: 30, amt: 30},
        {name: 'E', uv: 10, pv: 25, amt: 25},
        {name: 'F', uv: 10, pv: 20, amt: 20},
        {name: 'A', uv: 10, pv: 50, amt: 10},
        {name: 'B', uv: 10, pv: 60, amt: 10},
        {name: 'C', uv: 10, pv: 30, amt: 10},
        {name: 'D', uv: 10, pv: 80, amt: 10},
        {name: 'E', uv: 10, pv: 90, amt: 10},
        {name: 'F', uv: 10, pv: 40, amt: 10},
        {name: 'G', uv: 10, pv: 65, amt: 10}
      ],
      isOpen: {
        graphics: true,
        data: false,
        newsWall: true
      },
      rotate: {
        graphics: 'rotateUp',
        data: '',
        newsWall: 'rotateUp'
      },
      modalOpen: true,
      goTo: null,
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
      View: {
        click: false
      },
      isPlaying: false,
      chartsSize: {
        barLarge: {
          width: 700,
          height: 500
        },
        barMedium: {
          width: 600,
          height: 400
        },
        barSmal: {
          width: 400,
          height: 300
        }
      }
    }

    this.openBox = this.openBox.bind(this)
    this.changeSlider = this.changeSlider.bind(this)
    this.changeGraphics = this.changeGraphics.bind(this)
    this.clickView = this.clickView.bind(this)
    this.onPlayPauseVideo = this.onPlayPauseVideo.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.scrollTo = this.scrollTo.bind(this)
  }
  componentWillMount () {
    window.addEventListener('scroll', this.scrollTo)
    let body = document.getElementsByTagName('body')[0]
    body.style.overflow = 'hidden'
    var width = window.innerWidth

    if (width < 1024) {
      const chartsSize = this.state.chartsSize
      chartsSize.barLarge.width = 500
      chartsSize.barLarge.height = 300
      this.setState({chartsSize})
    }
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollTo)
  }
  render () {
    const {
      isOpen,
      rotate,
      modalOpen,
      goTo,
      dataNewsWall,
      isPlaying,
    } = this.state
    return (
      <div style={{overflow: 'hidden'}}>
        <header>
          <MainBanner />
        </header>
        <section className='download'>
          <Row>
            <Title onClick={()=> window.location = 'assets/docs/EXP-1222-RANKING.zip'} className='title'>EDICIÓN 2017</Title>
          </Row>
          <Row>
            <Button onClick={()=> window.location = 'assets/docs/500 Frente a la Corrupción. Integridad Corporativa. 1nov2017.zip'}><i className='fa fa-download' aria-hidden='true'/>&nbsp;DESCARGA EL INFORME</Button>
            <Button onClick={()=> window.location = 'assets/docs/base IC500.zip'}><i className='fa fa-download' aria-hidden='true'/>&nbsp;DESCARGA LA BASE DE DATOS</Button>
          </Row>
        </section>
        <section>
          <Banner500 />
        </section>
        <Section>
          <Title color={(isOpen.graphics) && '#ED4630'}>GRÁFICAS</Title>
          <Col>
            <CollapseBox isGraphics noMargin isOpen={isOpen.graphics}>
              <SliderGraphics />
            </CollapseBox>
            <i className={`fa fa-caret-down fa-4x ${rotate.graphics} icon`} aria-hidden='true' onClick={() => this.openBox('graphics')} />
          </Col>
        </Section>
        <Section background='#F2F2F2'>
          <Title color={(isOpen.data) ? '#ED4630' : ''}>INFORMACIÓN ACTUALIZADA</Title>
          <Col>
            <CollapseBox height='1050px' isOpen={isOpen.data} >
              <Row noMargin>
                <TabsShowBy Graphics={this.changeGraphics} />
              </Row>
              <Row>
                <BarChart width={1200} height={600} data={this.state.dataActualizada}>
                  <XAxis dataKey='name' height={50} tick={<CustomizedAxisTick />} />
                  <YAxis />
                  <Bar dataKey='pv' barSize={20} fill='#ED462F' />
                </BarChart>
              </Row>
              <Row>
                <GraphicDescription>500 Frente a la Corrupción, Integridad Corporaiva, permite analizar patrones y diferencias relevantes entre empresas de didstintos sectores.
                 Bajo esta óptica, destacan algunos casos positivos como el caso de la minería, un sector en el que, a pesar  de estar expuesto a altos riesgos de corrupción,
                 las 13 empresas evaluadas obtienen un puntaje promedio de 60.6, destacando Pan Amarican Silver  Corp con 82.4 puntos.
                  Otros ejemplos positivo es el de las dos empresas de la endustria aeroespacial, Honeywell Aerospace de México y Bombardier,
                   ambas con altas calificaciones que les permiten obtener casi 80 puntos en promedio.</GraphicDescription>
              </Row>
              <Row background='#E1E1E1' style={{width: '131%', position: 'relative', left: '-15.8%'}}>
                <Disclaimer />
              </Row>
            </CollapseBox>
            <i className={`fa fa-caret-down fa-4x ${rotate.data} icon`} aria-hidden='true' />
            {/* <i c§lassName={`fa fa-caret-down fa-4x ${rotate.data} icon`} aria-hidden='true' onClick={() => this.openBox('data')} /> */}
          </Col>
        </Section>
        <Section>
          <Title color={(isOpen.newsWall) ? '#ED4630' : ''}>MURO DE NOTICIAS</Title>
          <Col>
            <CollapseBox isOpen={isOpen.newsWall} height='600px'>
              <NewsWall data={dataNewsWall} onPlayPauseVideo={this.onPlayPauseVideo} isPlaying={isPlaying} />
            </CollapseBox>
            <i className={`fa fa-caret-down fa-4x ${rotate.newsWall} icon`} aria-hidden='true' onClick={() => this.openBox('newsWall')} />
          </Col>
        </Section>
        <Footer />
        {goTo}
        <Dialog isVisible={modalOpen} animate={true} onClickClose={this.closeModal} title='¡ADVERTENCIA!'>
          500 Frente a la Corrupción: Integridad Corporativa (IC500) no es un índice sobre la corrupción en las empresas. Es una evaluación de los compromisos públicos de las empresas más importantes del país en favor de las políticas de  integridad, NO de su cumplimiento.
        </Dialog>
      </div>
    )
  }
  closeModal () {
    const {
      modalOpen
    } = this.state

    this.setState({modalOpen: !modalOpen})
    let body = document.getElementsByTagName('body')[0]
    body.style.overflow = 'auto'
  }
  openBox (box) {
    const {
      isOpen,
      rotate
    } = this.state

    if (box === 'graphics') {
      if (isOpen.graphics) {
        isOpen.graphics = false
        rotate.graphics = 'rotateDown'
      } else {
        isOpen.graphics = true
        rotate.graphics = 'rotateUp'
      }
      this.setState({isOpen, rotate})
    } else if (box === 'data') {
      if (isOpen.data) {
        isOpen.data = false
        rotate.data = 'rotateDown'
      } else {
        isOpen.data = true
        rotate.data = 'rotateUp'
      }
      this.setState({isOpen, rotate})
    } else {
      if (isOpen.newsWall) {
        isOpen.newsWall = false
        rotate.newsWall = 'rotateDown'
      } else {
        isOpen.newsWall = true
        rotate.newsWall = 'rotateUp'
      }
      this.setState({isOpen, rotate})
    }
  }
  changeSlider (button) {
    if (button === 'next') {
      this.refs.slider.slickNext()
    } else {
      this.refs.slider.slickPrev()
    }
  }
  clickView () {
    var state = this.state.View
    if (state.click) {
      state.click = false
    } else {
      state.click = true
    }
    this.setState(state)
  }
  changeGraphics (n) {
    if (n === '1') {
      this.setState({
        dataActualizada: [
          {name: 'A', uv: 10, pv: 100, amt: 100},
          {name: 'B', uv: 10, pv: 95, amt: 95},
          {name: 'C', uv: 10, pv: 90, amt: 90},
          {name: 'D', uv: 10, pv: 80, amt: 80},
          {name: 'E', uv: 10, pv: 85, amt: 85},
          {name: 'F', uv: 10, pv: 80, amt: 80},
          {name: 'A', uv: 10, pv: 75, amt: 75},
          {name: 'B', uv: 10, pv: 70, amt: 70},
          {name: 'C', uv: 10, pv: 65, amt: 65},
          {name: 'D', uv: 10, pv: 60, amt: 60},
          {name: 'E', uv: 10, pv: 55, amt: 55},
          {name: 'F', uv: 10, pv: 50, amt: 50},
          {name: 'A', uv: 10, pv: 45, amt: 45},
          {name: 'B', uv: 10, pv: 40, amt: 40},
          {name: 'C', uv: 10, pv: 35, amt: 35},
          {name: 'D', uv: 10, pv: 30, amt: 30},
          {name: 'E', uv: 10, pv: 25, amt: 25},
          {name: 'B', uv: 10, pv: 70, amt: 70},
          {name: 'C', uv: 10, pv: 65, amt: 65},
          {name: 'D', uv: 10, pv: 60, amt: 60},
          {name: 'E', uv: 10, pv: 55, amt: 55},
          {name: 'F', uv: 10, pv: 50, amt: 50},
          {name: 'A', uv: 10, pv: 45, amt: 45},
          {name: 'B', uv: 10, pv: 40, amt: 40},
          {name: 'C', uv: 10, pv: 35, amt: 35},
          {name: 'D', uv: 10, pv: 30, amt: 30},
          {name: 'E', uv: 10, pv: 25, amt: 25},
          {name: 'F', uv: 10, pv: 20, amt: 20},
          {name: 'A', uv: 10, pv: 50, amt: 10},
          {name: 'B', uv: 10, pv: 60, amt: 10},
          {name: 'C', uv: 10, pv: 30, amt: 10},
          {name: 'D', uv: 10, pv: 80, amt: 10},
          {name: 'E', uv: 10, pv: 90, amt: 10},
          {name: 'F', uv: 10, pv: 40, amt: 10},
          {name: 'G', uv: 10, pv: 65, amt: 10}
        ]
      })
    } else if (n === '2') {
      this.setState({
        dataActualizada: [
          {name: 'A', uv: 10, pv: 100, amt: 100},
          {name: 'B', uv: 10, pv: 95, amt: 95},
          {name: 'C', uv: 10, pv: 90, amt: 90},
          {name: 'D', uv: 10, pv: 80, amt: 80},
          {name: 'E', uv: 10, pv: 85, amt: 85},
          {name: 'F', uv: 10, pv: 80, amt: 80},
          {name: 'A', uv: 10, pv: 75, amt: 75},
          {name: 'B', uv: 10, pv: 70, amt: 70},
          {name: 'C', uv: 10, pv: 65, amt: 65},
          {name: 'D', uv: 10, pv: 60, amt: 60},
          {name: 'E', uv: 10, pv: 55, amt: 55},
          {name: 'F', uv: 10, pv: 50, amt: 50},
          {name: 'A', uv: 10, pv: 45, amt: 45},
          {name: 'B', uv: 10, pv: 40, amt: 40},
          {name: 'C', uv: 10, pv: 35, amt: 35},
          {name: 'D', uv: 10, pv: 30, amt: 30},
          {name: 'E', uv: 10, pv: 25, amt: 25}
        ]
      })
    } else if (n === '3') {
      this.setState({
        dataActualizada: [
          {name: 'A', uv: 10, pv: 100, amt: 100},
          {name: 'B', uv: 10, pv: 95, amt: 95},
          {name: 'C', uv: 10, pv: 90, amt: 90},
          {name: 'D', uv: 10, pv: 80, amt: 80},
          {name: 'E', uv: 10, pv: 85, amt: 85},
          {name: 'F', uv: 10, pv: 80, amt: 80},
          {name: 'A', uv: 10, pv: 75, amt: 75},
          {name: 'B', uv: 10, pv: 70, amt: 70}
        ]
      })
    } else if (n === '4') {
      this.setState({
        dataActualizada: [
          {name: 'A', uv: 10, pv: 100, amt: 100},
          {name: 'B', uv: 10, pv: 95, amt: 95},
          {name: 'C', uv: 10, pv: 90, amt: 90},
          {name: 'D', uv: 10, pv: 80, amt: 80},
          {name: 'A', uv: 10, pv: 75, amt: 75},
          {name: 'B', uv: 10, pv: 70, amt: 70},
          {name: 'A', uv: 10, pv: 100, amt: 100},
          {name: 'B', uv: 10, pv: 95, amt: 95},
          {name: 'C', uv: 10, pv: 90, amt: 90}
        ]
      })
    }
  }
  onPlayPauseVideo (event) {
    console.log(event)
    const {
      isPlaying
    } = this.state
    if (event.data === 1) {
      this.setState({isPlaying: !isPlaying})
    }
    if (event.data === 2) {
      this.setState({isPlaying: !isPlaying})
    }
  }
  scrollTo (e) {
    if (window.scrollY >= 1000) {
      this.setState({goTo: <GoToTop onClick={e => window.scrollTo(0, 0)} />})
    } else {
      this.setState({goTo: null})
    }
  }
}

export default Home
