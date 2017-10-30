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
      isPlaying: false,
      charts: {
        '01': [
          {
            name: '0-10',
            'Número de empresas dentro del rango': 168,
            'Porcentaje del total (sobre 500 empresas)': 34
          },
          {
            name: '10-20',
            'Número de empresas dentro del rango': 32,
            'Porcentaje del total (sobre 500 empresas)': 6
          },
          {
            name: '20-30',
            'Número de empresas dentro del rango': 30,
            'Porcentaje del total (sobre 500 empresas)': 6
          },
          {
            name: '30-40',
            'Número de empresas dentro del rango': 35,
            'Porcentaje del total (sobre 500 empresas)': 7
          },
          {
            name: '40-50',
            'Número de empresas dentro del rango': 44,
            'Porcentaje del total (sobre 500 empresas)': 9
          },
          {
            name: '50-60',
            'Número de empresas dentro del rango': 66,
            'Porcentaje del total (sobre 500 empresas)': 13
          },
          {
            name: '60-70',
            'Número de empresas dentro del rango': 80,
            'Porcentaje del total (sobre 500 empresas)': 16
          },
          {
            name: '70-80',
            'Número de empresas dentro del rango': 32,
            'Porcentaje del total (sobre 500 empresas)': 6
          },
          {
            name: '80-90',
            'Número de empresas dentro del rango': 11,
            'Porcentaje del total (sobre 500 empresas)': 2
          },
          {
            name: '90-100',
            'Número de empresas dentro del rango': 2,
            'Porcentaje del total (sobre 500 empresas)': 0
          },
          {
            name: '100',
            'Número de empresas dentro del rango': 0,
            'Porcentaje del total (sobre 500 empresas)': 0
          }
        ].reverse(),
        '02': [
          { name: 'Aeroespacial', 'Puntaje promedio': 79.4 },
          { name: 'Servicios educativos', 'Puntaje promedio': 70.6 },
          { name: 'Tabaco', 'Puntaje promedio': 66.7 },
          { name: 'Afore', 'Puntaje promedio': 63.2 },
          { name: 'Electricidad', 'Puntaje promedio': 63.2 },
          { name: 'Electrónica', 'Puntaje promedio': 62.7 },
          { name: 'Minería', 'Puntaje promedio': 60.6 },
          { name: 'Productos de consumo', 'Puntaje promedio': 60.1 },
          { name: 'Papel y cartón', 'Puntaje promedio': 56.2 },
          { name: 'Productos cerámicos', 'Puntaje promedio': 55.6 },
          { name: 'Tecnología diversificada', 'Puntaje promedio': 53.9 },
          { name: 'Infraestructura de Transportes', 'Puntaje promedio': 52.9 },
          { name: 'Bebidas y cervezas', 'Puntaje promedio': 52.3 },
          { name: 'Cemento y materiales', 'Puntaje promedio': 51.6 },
          { name: 'Juegos y sorteos', 'Puntaje promedio': 51.6 },
          { name: 'Química y petroquímica', 'Puntaje promedio': 51.3 },
          { name: 'Materiales para la construcción', 'Puntaje promedio': 50.3 },
          { name: 'Química farmacéutica', 'Puntaje promedio': 49.3 },
          { name: 'Petróleo y gas', 'Puntaje promedio': 46.8 },
          { name: 'Agroindustria', 'Puntaje promedio': 42.8 },
          { name: 'Automotriz y autopartes', 'Puntaje promedio': 40.3 },
          { name: 'Servicios aeroportuarios', 'Puntaje promedio': 39.2 },
          { name: 'Vidrio y envases', 'Puntaje promedio': 39.2 },
          { name: 'Servicios profesionales', 'Puntaje promedio': 37.6 },
          { name: 'Computación y servicios', 'Puntaje promedio': 37.5 },
          { name: 'Comercio Autoservicio', 'Puntaje promedio': 35.8 },
          { name: 'Cuidado personal', 'Puntaje promedio': 35.8 },
          { name: 'Seguros y fianzas', 'Puntaje promedio': 35.7 },
          { name: 'Aerolíneas', 'Puntaje promedio': 35.3 },
          { name: 'Alimentos', 'Puntaje promedio': 35.1 },
          { name: 'Logística y transporte', 'Puntaje promedio': 34.6 },
          { name: 'Equipo eléctrico', 'Puntaje promedio': 34.2 },
          { name: 'Electrónica de consumo', 'Puntaje promedio': 33.3 },
          { name: 'Restaurantes', 'Puntaje promedio': 33.3 },
          { name: 'Servicios financieros', 'Puntaje promedio': 32.2 },
          { name: 'Maquinaria y equipo', 'Puntaje promedio': 31.2 },
          { name: 'Telecomunicaciones', 'Puntaje promedio': 30.3 },
          { name: 'Construcción', 'Puntaje promedio': 29.9 },
          { name: 'Entretenimiento', 'Puntaje promedio': 28.8 },
          { name: 'Desarrolladora de vivienda', 'Puntaje promedio': 27.5 },
          { name: 'Holding', 'Puntaje promedio': 27.1 },
          { name: 'Siderurgia y metalurgia', 'Puntaje promedio': 26.9 },
          { name: 'Comercio departamental', 'Puntaje promedio': 26.4 },
          { name: 'Suplementos alimenticios', 'Puntaje promedio': 25.5 },
          { name: 'Confitería y chocolates', 'Puntaje promedio': 24.2 },
          { name: 'Servicios inmobiliarios', 'Puntaje promedio': 24.1 },
          { name: 'Armadora', 'Puntaje promedio': 21 },
          { name: 'Comercio de medicamentos', 'Puntaje promedio': 20.4 },
          { name: 'Servicios de salud', 'Puntaje promedio': 19.6 },
          { name: 'Hotelería y turismo', 'Puntaje promedio': 13.5 },
          { name: 'Comercio especializado', 'Puntaje promedio': 12.4 },
          { name: 'Accesorios para baños', 'Puntaje promedio': 9.8 },
          { name: 'Envases para la industria', 'Puntaje promedio': 9.8 },
          { name: 'Servicios básicos', 'Puntaje promedio': 9.8 }
        ],
        '03': [
          { name: 'Código de etica', Si: 59.6, No: 40.4 },
          { name: 'Politica de regalos', Si: 51, No: 49 },
          { name: 'Prohibición sobornos', Si: 47.2, No: 52.8 },
          { name: 'Política anticorrupción', Si: 43.8, No: 56.2 },
          { name: 'Política de donaciones', Si: 28.4, No: 71.6 },
          { name: 'compromiso anticorrupción', Si: 27.6, No: 72.4 },
          { name: 'Prevención lavado de dinero', Si: 20.6, No: 79.4 },
          { name: 'Prevención fraudes', Si: 19.8, No: 80.2 },
          { name: 'Contribuciones sociales', Si: 12.6, No: 87.4 },
          { name: 'Política de viáticos', Si: 6.6, No: 93.4 }
        ],
        '04': [
          { name: 'Política anticorrupción', 'Si': 219, 'No': 281 },
          { name: 'Código de ética', 'Si': 298, 'No': 202 },
          { name: 'compromiso anticorrupción', 'Si': 138, 'No': 362 },
          { name: 'Prohibición sobornos', 'Si': 236, 'No': 264 },
          { name: 'Política de viáticos', 'Si': 33, 'No': 467 },
          { name: 'Política de regalos', 'Si': 255, 'No': 245 },
          { name: 'Prevención fraudes', 'Si': 99, 'No': 401 },
          { name: 'Prevención lavado de dinero', 'Si': 103, 'No': 397 },
          { name: 'Contribuciones políticas', 'Si': 142, 'No': 358 },
          { name: 'Contribuciones sociales', 'Si': 63, 'No': 437 }
        ]
      }
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
      isPlaying,
      charts
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
          <MainBanner />
        </header>
        <section className='download'>
          <Row>
            <Title className='title'>EDICIÓN 2017</Title>
          </Row>
          <Row>
            <Title color='#ED4630'>Aviso</Title>
          </Row>
          <Row noMargin>
            <p className='aviso'>Disponible hasta el 15 de noviembre.</p>
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
            <CollapseBox isOpen={isOpen.graphics}>
              <Slider {...settings} ref='slider'>
                <Col style={{backgroundColor: '#FFF', alignItems: 'center', justifyConten: 'center'}}>
                  <View click={this.state.View.click} slide={this.clickView} textUp='El sector privado es una pieza central en cualquier estrategia anticorrupción...' textDown='El primer paso consiste en establecer e implementar políticas de integridad que muestren su compromiso anticorrupción, el cual sólo se hace efectivo al hacerlo público y accesible para su consulta, al capacitar a directivos y empleados para su implementación, y al socializarlo entre socios y clientes. La señal de que las empresas no admiten actos de corrupción a su interior ni en los tratos con los gobiernos o socios comerciales, y que facilitan y premian la denuncia, constituyen el primer eslabón en la lucha contra la corrupción. Sin embargo, la distribución de las 500 empresas refleja el estado embrionario en la adopción de políticas de integridad en el sector privado en México. Ninguna empresa obtuvo 100 puntos y sólo 13 empresas obtuvieron más de 80 puntos. Además, El 61.8% de las organizaciones obtuvieron menos de 50 puntos y apenas 2 por encima de los 90 puntos (0.4%).' />
                  <table style={{marginTop: 30}}>
                    <thead className='tHead'>
                      <tr>
                        <th className='thHead'>Rango de puntos</th>
                        <th className='thHead'>Número de empresas dentro del rango</th>
                        <th className='thHead'>Acumulado de empresas (del límite inferior del rango a 100 puntos)</th>
                        <th style={{padding: 15, color: '#FFF'}}>Porcentaje acumulado (sobre 500 empresas)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='trWhite'>100</td>
                        <td className='trWhite'>0</td>
                        <td className='trWhite'>0</td>
                        <td className='trWhite'>0%</td>
                      </tr>
                      <tr>
                        <td className='trGrey'>90-100</td>
                        <td className='trGrey'>2</td>
                        <td className='trGrey'>2</td>
                        <td className='trGrey'>0.4%</td>
                      </tr>
                      <tr>
                        <td className='trWhite'>80-90</td>
                        <td className='trWhite'>11</td>
                        <td className='trWhite'>13</td>
                        <td className='trWhite'>2.2%</td>
                      </tr>
                      <tr>
                        <td className='trGrey'>70-80</td>
                        <td className='trGrey'>32</td>
                        <td className='trGrey'>45</td>
                        <td className='trGrey'>6.4%</td>
                      </tr>
                      <tr>
                        <td className='trWhite'>60-70</td>
                        <td className='trWhite'>80</td>
                        <td className='trWhite'>125</td>
                        <td className='trWhite'>16.0%</td>
                      </tr>
                      <tr>
                        <td className='trGrey'>50-60</td>
                        <td className='trGrey'>66</td>
                        <td className='trGrey'>191</td>
                        <td className='trGrey'>13.2%</td>
                      </tr>
                      <tr>
                        <td className='trWhite'>Menos de 50</td>
                        <td className='trWhite'>309</td>
                        <td className='trWhite'>500</td>
                        <td className='trWhite'>61.8%</td>
                      </tr>
                      <tr>
                        <td style={{padding: 15, textAlign: 'center', color: 'red', backgroundColor: '#EBEBEB'}}>TOTAL</td>
                        <td style={{padding: 15, textAlign: 'center', color: 'red', backgroundColor: '#EBEBEB'}}>500</td>
                        <td style={{padding: 15, textAlign: 'center', color: 'red', backgroundColor: '#EBEBEB'}}>500</td>
                        <td style={{padding: 15, textAlign: 'center', color: 'red', backgroundColor: '#EBEBEB'}}>100%</td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
                <Col center='center'>
                  <View click={this.state.View.click} slide={this.clickView} textUp='Existen amplias oportunidades para generar mayor compromiso entre las 500 empresas...' textDown='La calificación promedio en IC500 es de 37 sobre 100. Apenas 13 empresas obtuvieron un puntaje igual o mayor a 80 puntos y sólo 4 de cada 10 empresas se colocaron por encima de los 50 puntos. Además, la mitad de las empresas (265 de 500) alcanzaron apenas 40 puntos o menos; y una de cada tres (168 de 500) obtuvo 10 puntos o menos. En la distribución general de empresas por puntaje, destacan dos grupos: el primero son 191 empresas (38% de las 500) con resultados satisfactorios (entre 50 y 100 puntos); el segundo grupo tiene muchas oportunidades de mejorar pues 309 empresas (62% de las 500) tienen menos de 50 puntos. Incluso el grupo peor evaluado lo conforman las 168 empresas (34% de las 500) que tienen menos de 10 puntos.' />
                  <ComposedChart width={800} height={600} data={charts['01']}>
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke='#f5f5f5' />
                    <Bar dataKey='Número de empresas dentro del rango' barSize={20} fill='#413ea0' />
                    <View click={this.state.View} slide={this.clickView} />
                    <Line type='monotone' dataKey='Porcentaje del total (sobre 500 empresas)' stroke='#ff7300' />
                  </ComposedChart>
                </Col>
                <Col>
                  <View isMore click={this.state.View.click} slide={this.clickView} textUp='Predicar con el ejemplo y mandar la señal de que las empresas no admiten actos de corrupción a su interior ni en los tratos con los gobiernos o socios comerciales, así como que facilitan y premian la denuncia, son elementos iniciales en la lucha contra la corrupción...' textDown='De acuerdo con el IC500, 13 empresas obtuvieron más de 80 puntos. Entre las cinco empresas mejor evaluadas destaca, en primer lugar, Honeywell Aerospace de México, representando a la industria aeroespacial, seguida por Flextronics Manufacturing Mexico, de la industria electrónica; Grupo Sura (en dos posiciones) en la esfera de las Afores, y Autoliv México, de la industria automotriz. Importante destacar que ninguna de estas cinco tiene su matriz en México. En total, de las empresas que alcanzaron 80 puntos o más hay 3 de origen nacional: IEnova (Sempra), Bio PAPPEL y Grupo Bimbo. En tanto, dentro de las 13 empresas más de 80 puntos en IC500, cuatro cuentan con capital estadounidense; tres, mexicano y dos, colombiano.' />
                  <table style={{marginTop: 30}}>
                    <thead className='tHead'>
                      <tr>
                        <th className='thHead'>Posición respecto a IC500</th>
                        <th className='thHead'>Empresa</th>
                        <th className='thHead'>Puntaje IC500</th>
                        <th className='thHead'>Sector</th>
                        <th className='thHead'>País sede</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='trWhite'>1</td>
                        <td className='trWhite'>Honeywell Aerospace de México</td>
                        <td className='trWhite'>92.2</td>
                        <td className='trWhite'>Aeroespacial</td>
                        <td className='trWhite'>EUA</td>
                      </tr>
                      <tr>
                        <td className='trGrey'>2</td>
                        <td className='trGrey'>Flextronics Manufacturing Mexico</td>
                        <td className='trGrey'>90.2</td>
                        <td className='trGrey'>Electrónica</td>
                        <td className='trGrey'>Singapur</td>
                      </tr>
                      <tr>
                        <td className='trWhite'>3</td>
                        <td className='trWhite'>Afore Sura (Grupo Sura)</td>
                        <td className='trWhite'>88.2</td>
                        <td className='trWhite'>Afore</td>
                        <td className='trWhite'>Colombia</td>
                      </tr>
                      <tr>
                        <td className='trGrey'>3</td>
                        <td className='trGrey'>Seguros Sura (Grupo Sura)</td>
                        <td className='trGrey'>88.2</td>
                        <td className='trGrey'>Afore</td>
                        <td className='trGrey'>Colombia</td>
                      </tr>
                      <tr>
                        <td className='trWhite'>5</td>
                        <td className='trWhite'>Autoliv México</td>
                        <td className='trWhite'>86.3</td>
                        <td className='trWhite'>Automotriz y autopartes</td>
                        <td className='trWhite'>Suecia</td>
                      </tr>
                      <tr>
                        <td className='trGrey'>5</td>
                        <td className='trGrey'>Grupo Peñafiel</td>
                        <td className='trGrey'>84.3</td>
                        <td className='trGrey'>Bebidas y ceverzas</td>
                        <td className='trGrey'>EUA</td>
                      </tr>
                      <tr>
                        <td className='trWhite' >7</td>
                        <td className='trWhite' >Praxair México</td>
                        <td className='trWhite' >84.3</td>
                        <td className='trWhite' >Quimica y petroquimica</td>
                        <td className='trWhite' >EUA</td>
                      </tr>
                      <tr>
                        <td className='trGrey'>7</td>
                        <td className='trGrey'>Ryder de México</td>
                        <td className='trGrey'>84.3</td>
                        <td className='trGrey'>Logistica y transporte</td>
                        <td className='trGrey'>EUA</td>
                      </tr>
                      <tr>
                        <td className='trWhite'>9</td>
                        <td className='trWhite'>Grupo Modelo</td>
                        <td className='trWhite'>82.4</td>
                        <td className='trWhite'>Bebidas y cervezas</td>
                        <td className='trWhite'>Bélgica</td>
                      </tr>
                      <tr>
                        <td className='trGrey'>9</td>
                        <td className='trGrey'>IEnova (Sempra)</td>
                        <td className='trGrey'>82.4</td>
                        <td className='trGrey'>Petróleo y gas</td>
                        <td className='trGrey'>México</td>
                      </tr>
                      <tr>
                        <td className='trWhite'>9</td>
                        <td className='trWhite'>Pan American Silver Corp.</td>
                        <td className='trWhite'>82.4</td>
                        <td className='trWhite'>Minería</td>
                        <td className='trWhite'>Canadá</td>
                      </tr>
                      <tr>
                        <td className='trGrey'>12</td>
                        <td className='trGrey'>Bio PAPPEL</td>
                        <td className='trGrey'>80.4</td>
                        <td className='trGrey'>Papel y cartón</td>
                        <td className='trGrey'>México</td>
                      </tr>
                      <tr>
                        <td className='trWhite'>12</td>
                        <td className='trWhite'>Grupo Bimbo</td>
                        <td className='trWhite'>80.4</td>
                        <td className='trWhite'>Alimentos</td>
                        <td className='trWhite'>México</td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
                <Col>
                  <View click={this.state.View.click} slide={this.clickView} textUp='Existen amplias oportunidades para generar mayor compromiso entre las 500 empresas.....' textDown='La calificación promedio en IC500 es de 37 sobre 100. Apenas 13 empresas obtuvieron un puntaje igual o mayor a 80 puntos y sólo 4 de cada 10 empresas se colocaron por encima de los 50 puntos. Además, la mitad de las empresas (265 de 500) alcanzaron apenas 40 puntos o menos; y una de cada tres (168 de 500) obtuvo 10 puntos o menos.En la distribución general de empresas por puntaje, destacan dos grupos: el primero son 178 empresas (36% de las 500) con resultados relativamente satisfactorios (entre 60 y 80 puntos de 100); el segundo grupo tiene muchas oportunidades de mejorar pues 168 empresas  (34% de las 500) tienen menos de 10 puntos. ' />
                  <BarChart
                    width={800}
                    height={600}
                    data={charts['02']}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    layout='vertical'
                  >
                    <XAxis type='number' />
                    <YAxis type='category' dataKey='name' />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='Puntaje promedio' fill='#ED7D31' />
                  </BarChart>
                </Col>
                <Col>
                  <View isMore click={this.state.View.click} slide={this.clickView} textUp='Predicar con el ejemplo y mandar la señal de que las empresas no admiten actos de corrupción a su interior ni en los tratos con los gobiernos o socios comerciales, así como que facilitan y premian la denuncia, son elementos iniciales en la lucha contra la corrupción.....' textDown='De acuerdo con el IC500, 13 empresas obtuvieron más de 80 puntos. Entre las cinco empresas mejor evaluadas destaca, en primer lugar, Honeywell Aerospace de México, representando a la industria aeroespacial, seguida por Flextronics Manufacturing Mexico, de la industria electrónica; Grupo Sura (en dos posiciones) en la esfera de las Afores, y Autoliv México, de la industria automotriz. Importante destacar que ninguna de estas cinco tiene su matriz en México. En total, de las empresas que alcanzaron 80 puntos o más hay 3 de origen nacional: IEnova (Sempra), Bio PAPPEL y Grupo Bimbo. En tanto, dentro de las 13 empresas más de 80 puntos en IC500, cuatro cuentan con capital estadounidense; tres, mexicano y dos, colombiano.' />
                  <BarChart
                    width={800}
                    height={600}
                    data={charts['03']}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    layout='vertical'
                  >
                    <XAxis type='number' />
                    <YAxis type='category' dataKey='name' />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='Si' fill='#ED7D31' stackId='a' barSize={50} />
                    <Bar dataKey='No' fill='#92CF4F' stackId='a' barSize={50} />
                  </BarChart>
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
                  <View isMore click={this.state.View.click} slide={this.clickView} textUp='Las 500 empresas más importantes en México son las que determinan el estándar anticorrupción dentro de sus sectores y, con ello, tienen la capacidad de inducir cambios en su cadena de producción, así como en las prácticas de sus socios comerciales, proveedores y distribuidores......' textDown='IC500 muestra que los servicios financieros concentran la mayor parte de las 191 empresas con 50 puntos o más (9.4%), seguido por el sector automotriz y autopartes (7.3%), química y petroquímica (6.3%), los sectores de alimentos, minería y seguros y fianzas (cada uno con 5.8%). Estos seis sectores (de 15 considerados) concentran al 40% de las 191 empresas mejor evaluadas. Los sectores que tienen una mejor representación entre las 191 empresas mejor evaluadas son aquellos en los que la barra naranja es mayor que la barra azul (que indica la representación del sector en el universo de las 500 empresas más grandes en México). Tal es el caso del sector de química farmacéutica, bebidas y cervezas, productos de consumo, minería química y petroquímica, además del automotriz y autopartes, química y petroquímica, alimentos y minería.' />
                  <BarChart
                    width={800}
                    height={600}
                    data={charts['04']}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    layout='vertical'
                  >
                    <XAxis type='number' />
                    <YAxis type='category' dataKey='name' />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='Si' fill='#64ADB1' stackId='a' barSize={40} />
                    <Bar dataKey='No' fill='#DDDDDD' stackId='a' barSize={40} />
                  </BarChart>
                </Col>
                <Col>
                  <View click={this.state.View.click} slide={this.clickView} textUp='El sector aeroespacial es el mejor evaluado, está conformado únicamente por dos empresas......' text2='El sector mejor evaluado es el aeroespacial (79.4%), conformado únicamente por dos empresas. El segundo sitio es ocupado por el sector de servicios educativos (70.6%) representado por una sola empresa. Los ocho sectores con un puntaje por encima de los 60 puntos del ranking suman 36 empresas (7.2%)' />
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
                  <View click={this.state.View.click} slide={this.clickView} textUp='Eje 1: Publicidad de los elementos básicos de una política anticorrupción integral.Para que el sector privado haga efectivo su compromiso en la lucha contra la corrupción este tiene que ser público y accesible para su consulta....' textDown='De acuerdo con IC500, 298 de las 500 empresas publicaron un código de ética o un código de conducta en su página web; éste fue el documento publicado con mayor frecuencia por las empresas. En segundo lugar, poco más de la mitad de las empresas (255) publicaron también una política de regalos y agradecimientos. El tercer documento publicado con mayor frecuencia es la prohibición explícita de sobornos y pagos facilitadores (236 empresas, 47.2% de las 500).Los documentos que fueron encontrados con menor frecuencia en los portales de internet de las 500 empresas fueron la política de hospitalidad y viáticos (33 empresas, 6.6%) y la política de donaciones o contribuciones sociales (63 empresas, 12.6%).Si bien sólo 190 empresas hacen explícito su compromiso con la legalidad y 55 empresas NO expresan públicamente un compromiso con la legalidad, 255 confirman únicamente la protección de datos personales (medida intermedia entre los dos primeros grupos).' />
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
}

export default Home
