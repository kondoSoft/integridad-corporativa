import React, {Component} from 'react'
import {
  NavigationBar,
  MainBanner,
  Title,
  Button,
  Row,
  Banner500,
  CollapseBox,
  Col,
  Section,
  Subtitle,
  Footer,
  Dialog,
  SliderPrev,
  SliderNext,
  GoToTop,
  TabsShowBy,
  GraphicDescription,
  Disclaimer
} from '../../components'
import './styles.css'
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie
} from 'recharts'
import Slider from 'react-slick'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: {
        graphics: false,
        data: false,
        newsWall: false
      },
      rotate: {
        graphics: '',
        data: '',
        newsWall: ''
      },
      modalOpen: true,
      sliderIndex: 0,
      goTo: null
    }

    this.openBox = this.openBox.bind(this)
    this.changeSlider = this.changeSlider.bind(this)
  }
  componentWillMount () {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY >= 1000) {
        this.setState({goTo: <GoToTop onClick={e => window.scrollTo(0, 0)} />})
      } else {
        this.setState({goTo: null})
      }
    })
  }
  render () {
    const {
      isOpen,
      rotate,
      modalOpen,
      sliderIndex,
      goTo
    } = this.state
    const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
    ]
    const data01 = [
      {name: 'Group A', value: 400}, {name: 'Group B', value: 300},
      {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
      {name: 'Group E', value: 278}, {name: 'Group F', value: 189}
    ]
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div>
        <header>
          <NavigationBar />
          <MainBanner />
        </header>
        <section className='download'>
          <Row>
            <Title className='title'>EDICIÓN 2017</Title>
          </Row>
          <Row>
            <Button><i className='fa fa-download' aria-hidden='true' />&nbsp;DESCARGA EL INFORME EJECUTIVO</Button>
            <Button><i className='fa fa-download' aria-hidden='true' />&nbsp;DESCARGA LA BASE DE DATOS</Button>
          </Row>
        </section>
        <section>
          <Banner500 />
        </section>
        <Section>
          <Title color={(isOpen.graphics) ? '#ED4630' : ''}>GRÁFICAS</Title>
          <Col>
            <CollapseBox isOpen={isOpen.graphics} height='800px'>
              <Slider {...settings} ref='slider'>
                <Row>
                  <BarChart
                    width={800}
                    height={600}
                    data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                  >
                    <XAxis dataKey='name' />
                    <YAxis />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='pv' fill='#8884d8' />
                    <Bar dataKey='uv' fill='#427df4' />
                  </BarChart>
                </Row>
                <Row>
                  <BarChart
                    width={800}
                    height={600}
                    data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                  >
                    <XAxis dataKey='name' />
                    <YAxis />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='pv' fill='#8884d8' />
                    <Bar dataKey='uv' fill='#82ca9d' />
                  </BarChart>
                </Row>
                <Row>
                  <PieChart width={800} height={600}>
                    <Pie isAnimationActive={false} data={data01} cx={300} cy={300} outerRadius={80} fill='#8884d8' label />
                    <Tooltip />
                  </PieChart>
                </Row>
              </Slider>
              <SliderPrev onClick={() => this.changeSlider(sliderIndex-1)}><i className="fa fa-chevron-left" aria-hidden="true"></i></SliderPrev>
              <SliderNext onClick={() => this.changeSlider(sliderIndex+1)}><i className="fa fa-chevron-right" aria-hidden="true"></i></SliderNext>
            </CollapseBox>
            <i className={`fa fa-caret-down fa-4x ${rotate.graphics} icon`} aria-hidden='true' onClick={() => this.openBox('graphics')} />
          </Col>
        </Section>
        <Section background='#F2F2F2'>
          <Title color={(isOpen.data) ? '#ED4630' : ''}>INFORMACIÓN ACTUALIZADA</Title>
          <Subtitle>DE LAS 500 FRENTE A LA CORRUPCIÓN</Subtitle>
          <Col>
            <CollapseBox isOpen={isOpen.data} height='1050px'>
              <Row noMargin>
                <TabsShowBy />
              </Row>
              <Row>
                <BarChart width={800} height={600} data={data}>
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Bar dataKey='pv' fill='#000' barSize={10} />
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
                <Disclaimer></Disclaimer>
              </Row>
            </CollapseBox>
            <i className={`fa fa-caret-down fa-4x ${rotate.data} icon`} aria-hidden='true' onClick={() => this.openBox('data')} />
          </Col>
        </Section>
        <Section>
          <Title color={(isOpen.newsWall) ? '#ED4630' : ''}>MURO DE NOTICIAS</Title>
          <Col>
            <CollapseBox isOpen={isOpen.newsWall} height='800px'>
              <Row>
                <img src='http://via.placeholder.com/800x600' alt='' />
              </Row>
            </CollapseBox>
            <i className={`fa fa-caret-down fa-4x ${rotate.newsWall} icon`} aria-hidden='true' onClick={() => this.openBox('newsWall')} />
          </Col>
        </Section>
        <Footer />
        {goTo}
        <Dialog isVisible={modalOpen} onClickClose={() => this.setState({modalOpen: !modalOpen})} />
      </div>
    )
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
  changeSlider (index) {
    var i = index
    if (i > 2) {
      i = 0
      this.setState({sliderIndex: i})
      this.refs.slider.slickGoTo(i)
    }
    if (i < 0) {
      i = 2
      this.setState({sliderIndex: i})
      this.refs.slider.slickGoTo(i)
    }
    this.setState({sliderIndex: i})
    this.refs.slider.slickGoTo(i)
  }
}

export default Home
