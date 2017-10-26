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
  NewsWall,
  CustomizedAxisTick,
  View
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
  Line,
  ComposedChart
} from 'recharts'
import Slider from 'react-slick'

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
      isPlaying: false
    }

    this.openBox = this.openBox.bind(this)
    this.changeSlider = this.changeSlider.bind(this)
    this.changeGraphics = this.changeGraphics.bind(this)
    this.clickView = this.clickView.bind(this)
    this.onPlayPauseVideo = this.onPlayPauseVideo.bind(this)
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
      goTo,
      dataNewsWall,
      isPlaying
    } = this.state
    const data = [
      {name: 'A', uv: 10, pv: 40, amt: 50},
      {name: 'B', uv: 10, pv: 40, amt: 50},
      {name: 'C', uv: 10, pv: 40, amt: 50},
      {name: 'D', uv: 10, pv: 40, amt: 50},
      {name: 'E', uv: 10, pv: 40, amt: 50},
      {name: 'F', uv: 10, pv: 40, amt: 50},
      {name: 'G', uv: 10, pv: 40, amt: 50}
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
                <Col center='center'>
                  <View click={this.state.View.click} slide={this.clickView} textUp='El sector privado es una pieza central en cualquier estrategia anticorrupción.....' textDown='El primer paso consiste en establecer e implementar políticas de integridad que muestren su compromiso anticorrupción, el cual sólo se hace efectivo al hacerlo público y accesible para su consulta, al capacitar a directivos y empleados para su implementación, y al socializarlo entre socios y clientes. La señal de que las empresas no admiten actos de corrupción a su interior ni en los tratos con los gobiernos o socios comerciales, y que facilitan y premian la denuncia, constituyen el primer eslabón en la lucha contra la corrupción. Sin embargo, la distribución de las 500 empresas refleja el estado embrionario en la adopción de políticas de integridad en el sector privado en México. Ninguna empresa obtuvo 100 puntos y sólo 13 empresas obtuvieron más de 80 puntos. Además, El 61.8% de las organizaciones obtuvieron menos de 50 puntos y apenas 2 por encima de los 90 puntos (0.4%). '/>
                  <ComposedChart width={800} height={600} data={data}>
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke='#f5f5f5' />
                    <Bar dataKey='pv' barSize={20} fill='#413ea0' />
                    <View click={this.state.View} slide={this.clickView}/>
                    <Line type='monotone' dataKey='uv' stroke='#ff7300' />
                  </ComposedChart>
                </Col>
                <Col>
                  <View click={this.state.View.click} slide={this.clickView} textUp='Existen amplias oportunidades para generar mayor compromiso entre las 500 empresas.....' textDown='La calificación promedio en IC500 es de 37 sobre 100. Apenas 13 empresas obtuvieron un puntaje igual o mayor a 80 puntos y sólo 4 de cada 10 empresas se colocaron por encima de los 50 puntos. Además, la mitad de las empresas (265 de 500) alcanzaron apenas 40 puntos o menos; y una de cada tres (168 de 500) obtuvo 10 puntos o menos.En la distribución general de empresas por puntaje, destacan dos grupos: el primero son 178 empresas (36% de las 500) con resultados relativamente satisfactorios (entre 60 y 80 puntos de 100); el segundo grupo tiene muchas oportunidades de mejorar pues 168 empresas  (34% de las 500) tienen menos de 10 puntos. '/>
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
                  <View click={this.state.View.click} slide={this.clickView} textUp='Predicar con el ejemplo y mandar la señal de que las empresas no admiten actos de corrupción a su interior ni en los tratos con los gobiernos o socios comerciales, así como que facilitan y premian la denuncia, son elementos iniciales en la lucha contra la corrupción.....' textDown='De acuerdo con el IC500, 13 empresas obtuvieron más de 80 puntos. Entre las cinco empresas mejor evaluadas destaca, en primer lugar, Honeywell Aerospace de México, representando a la industria aeroespacial, seguida por Flextronics Manufacturing Mexico, de la industria electrónica; Grupo Sura (en dos posiciones) en la esfera de las Afores, y Autoliv México, de la industria automotriz. Importante destacar que ninguna de estas cinco tiene su matriz en México. En total, de las empresas que alcanzaron 80 puntos o más hay 3 de origen nacional: IEnova (Sempra), Bio PAPPEL y Grupo Bimbo. En tanto, dentro de las 13 empresas más de 80 puntos en IC500, cuatro cuentan con capital estadounidense; tres, mexicano y dos, colombiano.'/>
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
                  <View click={this.state.View.click} slide={this.clickView} textUp='Las 500 empresas más importantes en México son las que determinan el estándar anticorrupción dentro de sus sectores y, con ello, tienen la capacidad de inducir cambios en su cadena de producción, así como en las prácticas de sus socios comerciales, proveedores y distribuidores......' textDown='IC500 muestra que los servicios financieros concentran la mayor parte de las 191 empresas con 50 puntos o más (9.4%), seguido por el sector automotriz y autopartes (7.3%), química y petroquímica (6.3%), los sectores de alimentos, minería y seguros y fianzas (cada uno con 5.8%). Estos seis sectores (de 15 considerados) concentran al 40% de las 191 empresas mejor evaluadas. Los sectores que tienen una mejor representación entre las 191 empresas mejor evaluadas son aquellos en los que la barra naranja es mayor que la barra azul (que indica la representación del sector en el universo de las 500 empresas más grandes en México). Tal es el caso del sector de química farmacéutica, bebidas y cervezas, productos de consumo, minería química y petroquímica, además del automotriz y autopartes, química y petroquímica, alimentos y minería.'/>
                  <PieChart width={800} height={600}>
                    <Pie isAnimationActive={false} data={data01} cx='50%' cy='50%' outerRadius={200} fill='#8884d8' label />
                    <Tooltip />
                  </PieChart>
                </Col>
                <Col>
                  <View click={this.state.View.click} slide={this.clickView} textUp='El sector aeroespacial es el mejor evaluado, está conformado únicamente por dos empresas......' text2='El sector mejor evaluado es el aeroespacial (79.4%), conformado únicamente por dos empresas. El segundo sitio es ocupado por el sector de servicios educativos (70.6%) representado por una sola empresa. Los ocho sectores con un puntaje por encima de los 60 puntos del ranking suman 36 empresas (7.2%)'/>
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
                  <View click={this.state.View.click} slide={this.clickView} textUp='Elementos de evaluación de una política anticorrupción…' textDown='Para evaluar a las 500 empresas, se diseñó un cuestionario basado en el componente de la existencia, calidad y publicidad de las políticas anticorrupción del estudio Transparencia de la Información Corporativa (TRAC). La valoración de la empresa se hizo a partir de la información disponible en el portal de internet de cada empresa y se clasificó en cuatro ejes:Publicidad de los elementos básicos de una política anticorrupción integral.Alcance y socialización de la política anticorrupción de la empresa, tanto al interior como al exterior.Sistema de monitoreo, denuncia y sanciones.Accesibilidad de la información.La escala de puntuación es de 0 a 100. El puntaje más alto posible es de 100, pero ninguna empresa obtuvo esa calificación.' />
                  <PieChart width={800} height={600}>
                    <Pie isAnimationActive={false} data={data01} cx='50%' cy='50%' outerRadius={200} fill='#A58638' label />
                    <Tooltip />
                  </PieChart>
                </Col>
                <Col>
                  <View click={this.state.View.click} slide={this.clickView} textUp='Elementos de evaluación de una política anticorrupción…' textDown='Para evaluar a las 500 empresas, se diseñó un cuestionario basado en el componente de la existencia, calidad y publicidad de las políticas anticorrupción del estudio Transparencia de la Información Corporativa (TRAC). La valoración de la empresa se hizo a partir de la información disponible en el portal de internet de cada empresa y se clasificó en cuatro ejes:Publicidad de los elementos básicos de una política anticorrupción integral.Alcance y socialización de la política anticorrupción de la empresa, tanto al interior como al exterior.Sistema de monitoreo, denuncia y sanciones.Accesibilidad de la información.La escala de puntuación es de 0 a 100. El puntaje más alto posible es de 100, pero ninguna empresa obtuvo esa calificación.' />
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
                  <View click={this.state.View.click} slide={this.clickView} text1='Eje 1: Publicidad de los elementos básicos de una política anticorrupción integral.La publicidad de una política anticorrupción es uno de los cuatro ejes —además del alcance y socialización de dicha política, del sistema de monitoreo, denuncia y sanción, así como de la accesibilidad de la información— considerados en IC500....' textDown='IC500 encontró que 3 de cada 5 empresas tienen publicado un código de ética, conducta o integridad en su página de internet, pero sólo la mitad de las 500 empresas cuenta con una política de regalos y agradecimientos, y en apenas una de cada 5 empresas se encontró una política específica para prevenir el lavado de dinero en el sitio web.La principal oportunidad de mejora de las empresas se encuentra en la posibilidad de publicitar su política de integridad.' />
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
                  <View click={this.state.View.click} slide={this.clickView} textUp='Eje 1: Publicidad de los elementos básicos de una política anticorrupción integral.Para que el sector privado haga efectivo su compromiso en la lucha contra la corrupción este tiene que ser público y accesible para su consulta....' textDown='De acuerdo con IC500, 298 de las 500 empresas publicaron un código de ética o un código de conducta en su página web; éste fue el documento publicado con mayor frecuencia por las empresas. En segundo lugar, poco más de la mitad de las empresas (255) publicaron también una política de regalos y agradecimientos. El tercer documento publicado con mayor frecuencia es la prohibición explícita de sobornos y pagos facilitadores (236 empresas, 47.2% de las 500).Los documentos que fueron encontrados con menor frecuencia en los portales de internet de las 500 empresas fueron la política de hospitalidad y viáticos (33 empresas, 6.6%) y la política de donaciones o contribuciones sociales (63 empresas, 12.6%).Si bien sólo 190 empresas hacen explícito su compromiso con la legalidad y 55 empresas NO expresan públicamente un compromiso con la legalidad, 255 confirman únicamente la protección de datos personales (medida intermedia entre los dos primeros grupos).'/>
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
              <SliderPrev onClick={() => this.changeSlider(sliderIndex - 1)}><i className='fa fa-chevron-left' aria-hidden='true' /></SliderPrev>
              <SliderNext onClick={() => this.changeSlider(sliderIndex + 1)}><i className='fa fa-chevron-right' aria-hidden='true' /></SliderNext>
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
                <TabsShowBy Graphics={this.changeGraphics} />
              </Row>
              <Row>
                <BarChart width={1200} height={600} data={this.state.dataActualizada}>
                  <XAxis dataKey='name' height={50} tick={<CustomizedAxisTick />} />
                  <YAxis />
                  <Bar dataKey='pv' barSize={20} />
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
            <i className={`fa fa-caret-down fa-4x ${rotate.data} icon`} aria-hidden='true' onClick={() => this.openBox('data')} />
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
    this.clickView()
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
}

export default Home
