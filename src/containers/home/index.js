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
  Disclaimer,
  NewsWall
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
  Pie,
  Area,
  Line,
  ComposedChart
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
      goTo: null,
      data: {
        video: {
          tag: <iframe width='560' height='315' src='https://www.youtube.com/embed/xcJtL7QggTI?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>,
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
      {name: 'Page A', uv: 10, pv: 40, amt: 50},
      {name: 'Page B', uv: 10, pv: 40, amt: 50},
      {name: 'Page C', uv: 10, pv: 40, amt: 50},
      {name: 'Page D', uv: 10, pv: 40, amt: 50},
      {name: 'Page E', uv: 10, pv: 40, amt: 50},
      {name: 'Page F', uv: 10, pv: 40, amt: 50},
      {name: 'Page G', uv: 10, pv: 40, amt: 50}
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
                <Col>
                  <h1>Grafica 1</h1>
                  <ComposedChart width={800} height={600} data={data}>
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke='#f5f5f5' />
                    {/* <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8' /> */}
                    <Bar dataKey='pv' barSize={20} fill='#413ea0' />
                    <Line type='monotone' dataKey='uv' stroke='#ff7300' />
                  </ComposedChart>
                </Col>
                <Col>
                  <h1>Grafica 2</h1>
                  <BarChart
                    width={800}
                    height={600}
                    data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    layout='vertical'
                  >
                    <XAxis type='number' />
                    <YAxis type='category' dataKey='name' />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='pv' fill='#55c153' stackId='a' />
                    <Bar dataKey='uv' fill='#427df4' stackId='a' />
                  </BarChart>
                </Col>
                <Col>
                  <h1>Grafica 3</h1>
                  <PieChart width={800} height={600}>
                    <Pie isAnimationActive={false} data={data01} cx='50%' cy='50%' outerRadius={200} fill='#55C153' label />
                    <Tooltip />
                  </PieChart>
                  {/* <BarChart
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
                  </BarChart> */}
                </Col>
                <Col>
                  <h1>Grafica 4</h1>
                  <PieChart width={800} height={600}>
                    <Pie isAnimationActive={false} data={data01} cx='50%' cy='50%' outerRadius={200} fill='#8884d8' label />
                    <Tooltip />
                  </PieChart>
                </Col>
                <Col>
                  <h1>Grafica 5</h1>
                  <BarChart
                    width={800}
                    height={600}
                    data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    layout='vertical'
                  >
                    <XAxis type='number' />
                    <YAxis type='category' dataKey='name' />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='pv' fill='#55c153' stackId='a' />
                    <Bar dataKey='uv' fill='#427df4' stackId='a' />
                  </BarChart>
                </Col>
                <Col>
                  <h1>Grafica 6</h1>
                  <PieChart width={800} height={600}>
                    <Pie isAnimationActive={false} data={data01} cx='50%' cy='50%' outerRadius={200} fill='#A58638' label />
                    <Tooltip />
                  </PieChart>
                </Col>
                <Col>
                  <h1>Grafica 7</h1>
                  <BarChart
                    width={800}
                    height={600}
                    data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    layout='vertical'
                  >
                    <XAxis type='number' />
                    <YAxis type='category' dataKey='name' />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='pv' fill='#5cd15c' barSize={30} />
                    <Bar dataKey='uv' fill='#ff7200' barSize={30} />
                  </BarChart>
                </Col>
                <Col>
                  <h1>Grafica 8</h1>
                  <BarChart
                    width={800}
                    height={600}
                    data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    layout='vertical'
                  >
                    <XAxis type='number' />
                    <YAxis type='category' dataKey='name' />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='pv' fill='#55c153' stackId='a' />
                    <Bar dataKey='uv' fill='#427df4' stackId='a' />
                  </BarChart>
                </Col>
                <Col>
                  <h1>Agrupacion de graficas Pie</h1>
                  <BarChart
                    width={800}
                    height={600}
                    data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    layout='vertical'
                  >
                    <XAxis type='number' />
                    <YAxis type='category' dataKey='name' />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='pv' fill='#1f8469' stackId='a' />
                    <Bar dataKey='uv' fill='#1f6b84' stackId='a' />
                    <Bar dataKey='amt' fill='#38bc99' stackId='a' />
                  </BarChart>
                </Col>
              </Slider>
              <SliderPrev onClick={() => this.changeSlider(sliderIndex-1)}><i className='fa fa-chevron-left' aria-hidden='true'></i></SliderPrev>
              <SliderNext onClick={() => this.changeSlider(sliderIndex+1)}><i className='fa fa-chevron-right' aria-hidden='true'></i></SliderNext>
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
            <CollapseBox isOpen={isOpen.newsWall} height='600px'>
              <NewsWall data={this.state.data} />
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
    if (i > 8) {
      i = 0
      this.setState({sliderIndex: i})
      this.refs.slider.slickGoTo(i)
    }
    if (i < 0) {
      i = 8
      this.setState({sliderIndex: i})
      this.refs.slider.slickGoTo(i)
    }
    this.setState({sliderIndex: i})
    this.refs.slider.slickGoTo(i)
  }
}

export default Home
