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
        graphics: true,
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
          {
            name: 'Política de hospitalidad y viáticos',
            Si: 6.6,
            No: 93.4
          },
          {
            name: 'Política de donaciones y/o contribuciones sociales',
            Si: 12.6,
            No: 87.4
          },
          {
            name: 'Políticas específicas para prevenir fraudes internos',
            Si: 19.8,
            No: 80.2
          },
          {
            name: 'Políticas específicas para prevenir lavado de dinero',
            Si: 20.6,
            No: 79.4
          },
          {
            name: 'Declaración o compromiso anticorrupción / cero tolerancia a la corrupción',
            Si: 27.6,
            No: 72.4
          },
          {
            name: 'Política de donaciones y/o contribuciones políticas',
            Si: 28.4,
            No: 71.6
          },
          { name: 'Política anticorrupción / integridad',
            Si: 43.8,
            No: 56.2 },
          {
            name: 'Prohibición explícita de sobornos y pagos facilitadores',
            Si: 47.2,
            No: 52.8
          },
          {
            name: 'Política de regalos y agradecimientos',
            Si: 51,
            No: 49
          },
          {
            name: 'Código de ética o de conducta para empleados',
            Si: 59.6,
            No: 40.4
          }
        ].reverse(),
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
          { name: 'Contribuciones sociales', 'Si': 63, 'No': 437 },
          {name: 'Compromiso con la legalidad y el respeto a las leyes nacionales e internacionales', 'Si': 190, 'Únicamente respecto a la Ley de Protección de Datos Personales /Derechos ARCO': 255, 'No': 55}
        ],
        '05': [
          {name: 'Si', value: 38, fill: '#3A8D91'},
          {name: 'No', value: 62, fill: '#CFCECE'}
        ],
        '06': [
          {name: 'Información no disponible', value: 40, fill: '#E18442'},
          {name: 'Empleados', value: 28, fill: '#6FAD47'},
          {name: 'Empleados y Directivos', value: 32, fill: '#957319'}
        ],
        '07': [
          {name: 'Si', value: 19, fill: '#F8BF32'},
          {name: 'No', value: 81, fill: '#6FAD47'}
        ],
        '08': [
          {name: 'Información no disponible', value: 77, fill: '#B78C22'},
          {name: 'No, pero los socios comerciales están sujetos al programa anticorrupción de la empresa', value: 11, fill: '#ECB62F'},
          {name: 'Hay un programa específico para socios comerciales', value: 12, fill: '#FAD599'}
        ],
        '09': {
          left: [
            {name: 'Si', value: 43, fill: '#3A8D91'},
            {name: 'No', value: 57, fill: '#CFCECE'}
          ],
          right: [
            {name: 'Si', value: 14, fill: '#3A8D91'},
            {name: 'No', value: 86, fill: '#CFCECE'}
          ]
        },
        '10': [
          {name: 'Si', value: 13, fill: '#7EA548'},
          {name: 'No', value: 87, fill: '#E28542'}
        ],
        '11': [
          {name: 'Información no disponible', value: 92, fill: '#BB8B23'},
          {name: 'Empleados', value: 7, fill: '#F3B730'},
          {name: 'Empleados y Directivos', value: 1, fill: '#FAD594'}
        ],
        '12': [
          {
            name: '¿Existe un sistema de denuncia?',
            Si: 55,
            No: 45
          },
          {
            name: '¿Existe un correo electrónico para hacer una denuncia?',
            Si: 34,
            No: 66
          },
          {
            name: '¿Existe un número telefónico para hacer una denuncia?',
            Si: 34,
            No: 66
          },
          {
            name: '¿En esta línea de denuncia ¿Se mantiene la confidencialidad o anonimidad del denunciante?',
            Si: 47,
            No: 53
          },
          {
            name: '¿Se prohiben expresamente las represalias a los denunciantes?',
            Si: 34,
            No: 66
          },
          {
            name: '¿Existen sanciones o penalizaciones por incumplimiento al código de ética, código de conducta o cualquiera de los componentes de la política anticorrupción?',
            'No se mencionan sanciones': 49,
            'Se menciona que existen sanciones pero no se especifica de qué tipo': 35,
            'Sí, existen sanciones claras y detalladas': 16
          }
        ],
        '13': [
          {name: 'Más de 5 (o información encontrada con un buscador)', value: 35, fill: '#BB8B23'},
          {name: 'Información no disponible', value: 9, fill: '#F3B730'},
          {name: '4 o 5', value: 29, fill: '#FAD594'},
          {name: '3 o menos', value: 27, fill: '#999A99'}
        ],
        '14': [
          {name: 'En otro idioma en sitio global ', value: 17, fill: '#D5DCE5'},
          {name: 'En español en sitio global ', value: 11, fill: '#D9E2F3'},
          {name: 'En otro idioma en sitio para México', value: 3, fill: '#8EA9DB'},
          {name: 'En español en sitio para México', value: 69, fill: '#2F5496'}
        ],
        '15': [
          {name: 'Singapur', 'Puntaje promedio': 90.2},
          {name: 'Colombia', 'Puntaje promedio': 88.2},
          {name: 'Irlanda', 'Puntaje promedio': 67.6},
          {name: 'Austria', 'Puntaje promedio': 66.7},
          {name: 'Estados Unidos / Reino Unido', 'Puntaje promedio': 66.7},
          {name: 'Reino Unido / Holanda', 'Puntaje promedio': 66.7},
          {name: 'Holanda', 'Puntaje promedio': 62.7},
          {name: 'Suiza / Suecia', 'Puntaje promedio': 60.8},
          {name: 'Reino Unido', 'Puntaje promedio': 57.2},
          {name: 'España', 'Puntaje promedio': 57},
          {name: 'Chile', 'Puntaje promedio': 55.9},
          {name: 'Canadá', 'Puntaje promedio': 55.6},
          {name: 'Suecia', 'Puntaje promedio': 53.7},
          {name: 'México / Brasil', 'Puntaje promedio': 51},
          {name: 'Francia', 'Puntaje promedio': 49.8},
          {name: 'Bélgica', 'Puntaje promedio': 47.7},
          {name: 'Estados Unidos', 'Puntaje promedio': 45.8},
          {name: 'Italia / Argentina', 'Puntaje promedio': 44.4},
          {name: 'Brasil', 'Puntaje promedio': 43.1},
          {name: 'Alemania', 'Puntaje promedio': 43.1},
          {name: 'Siuiza', 'Puntaje promedio': 42.2},
          {name: 'Promedio 500 empresas', 'Puntaje promedio': 37, fill: '#C13724'},
          {name: 'Argentina', 'Puntaje promedio': 31.4},
          {name: 'Italia / España', 'Puntaje promedio': 31.4},
          {name: 'México', 'Puntaje promedio': 30, fill: '#F7BF32'},
          {name: 'Italia', 'Puntaje promedio': 29.4},
          {name: 'Corea', 'Puntaje promedio': 25.1},
          {name: 'México / Estados Unidos', 'Puntaje promedio': 25},
          {name: 'China', 'Puntaje promedio': 21.6},
          {name: 'Finlandia', 'Puntaje promedio': 17.6},
          {name: 'Rusia', 'Puntaje promedio': 15.7},
          {name: 'Luxemburgo', 'Puntaje promedio': 14.7},
          {name: 'Japón', 'Puntaje promedio': 14.5},
          {name: 'Portugal', 'Puntaje promedio': 9.8},
          {name: 'Taiwan', 'Puntaje promedio': 9.8},
          {name: 'China / Francia', 'Puntaje promedio': 7.8},
          {name: 'India', 'Puntaje promedio': 5.9}
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
      slidesToScroll: 1,
      initialSlide: 16
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
                  {/* Tabla 2 */}
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
                  {/* GRAFICA 3 */}
                  <View click={this.state.View.click} slide={this.clickView} textUp='El sector aeroespacial es el mejor evaluado, está conformado únicamente por dos empresas...' textDown='Para evaluar a las 500 empresas, se diseñó un cuestionario basado en el componente de la existencia, calidad y publicidad de las políticas anticorrupción del estudio Transparencia de la Información Corporativa (TRAC). La valoración de la empresa se hizo a partir de la información disponible en el portal de internet de cada empresa y se clasificó en cuatro ejes: Publicidad de los elementos básicos de una política anticorrupción integral. Alcance y socialización de la política anticorrupción de la empresa, tanto al interior como al exterior. Sistema de monitoreo, denuncia y sanciones. Accesibilidad de la información. La escala de puntuación es de 0 a 100. El puntaje más alto posible es de 100, pero ninguna empresa obtuvo esa calificación.' />
                  <BarChart
                    width={800}
                    height={600}
                    data={charts['02']}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    layout='vertical'
                  >
                    <XAxis type='number' ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} tickCount={11} domain={[0, 100]} tickFormatter={val => val.toString() + '%'} />
                    <YAxis type='category' dataKey='name' width={200} />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip formatter={val => val.toString() + '%'} />
                    <Legend />
                    <Bar dataKey='Puntaje promedio' fill='#ED7D31' />
                  </BarChart>
                </Col>
                <Col>
                  {/* Figura 2 */}
                  <View click={this.state.View.click} slide={this.clickView} textUp='Elementos de evaluación de una política anticorrupción...' textDown='El sector mejor evaluado es el aeroespacial (79.4%), conformado únicamente por dos empresas. El segundo sitio es ocupado por el sector de servicios educativos (70.6%) representado por una sola empresa. Los ocho sectores con un puntaje por encima de los 60 puntos del ranking suman 36 empresas (7.2%)' />
                  <img src='assets/img/figura2.png' alt='Figura 2' width='35%' />
                </Col>
                <Col>
                  {/* Grafica 4 */}
                  <View isMore click={this.state.View.click} slide={this.clickView} textUp='La publicidad de una política anticorrupción es uno de los cuatro ejes —además del alcance y socialización de dicha política, del sistema de monitoreo, denuncia y sanción, así como de la accesibilidad de la información— considerados en IC500...' textDown='IC500 encontró que 3 de cada 5 empresas tienen publicado un código de ética, conducta o integridad en su página de internet, pero sólo la mitad de las 500 empresas cuenta con una política de regalos y agradecimientos, y en apenas una de cada 5 empresas se encontró una política específica para prevenir el lavado de dinero en el sitio web. La principal oportunidad de mejora de las empresas se encuentra en la posibilidad de publicitar su política de integridad.' />
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
                  {/* Grafica 5 */}
                  <View isMore click={this.state.View.click} slide={this.clickView} textUp='Para que el sector privado haga efectivo su compromiso en la lucha contra la corrupción este tiene que ser público y accesible para su consulta...' textDown='De acuerdo con IC500, 298 de las 500 empresas publicaron un código de ética o un código de conducta en su página web; éste fue el documento publicado con mayor frecuencia por las empresas. En segundo lugar, poco más de la mitad de las empresas (255) publicaron también una política de regalos y agradecimientos. El tercer documento publicado con mayor frecuencia es la prohibición explícita de sobornos y pagos facilitadores (236 empresas, 47.2% de las 500). Los documentos que fueron encontrados con menor frecuencia en los portales de internet de las 500 empresas fueron la política de hospitalidad y viáticos (33 empresas, 6.6%) y la política de donaciones o contribuciones sociales (63 empresas, 12.6%). Si bien sólo 190 empresas hacen explícito su compromiso con la legalidad y 55 empresas NO expresan públicamente un compromiso con la legalidad, 255 confirman únicamente la protección de datos personales (medida intermedia entre los dos primeros grupos).' />
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
                    <Bar dataKey='Únicamente respecto a la Ley de Protección de Datos Personales /Derechos ARCO' fill='#FDE391' stackId='a' barSize={40} />
                    <Bar dataKey='No' fill='#DDDDDD' stackId='a' barSize={40} />
                  </BarChart>
                </Col>
                <Col>
                  {/* Grafica 6 */}
                  <View isMore click={this.state.View.click} slide={this.clickView} textUp='Los directivos marcan la pauta para sus empleados, socios, proveedores y clientes; por eso es esencial que respalden de manera activa las políticas anticorrupción o de integridad...' textDown='Por ello es crucial que los líderes de las empresas demuestren su respaldo a la política y transmitan su importancia al resto de los empleados. De acuerdo con el Ranking IC500, 188 empresas (32%) publicaron mensajes que expresan el nivel de prioridad y compromiso de este tipo de acciones dentro de la empresa por parte de sus líderes o directores.' />
                  <PieChart width={800} height={600}>
                    <Pie data={charts['05']} cx='50%' cy='50%' outerRadius={150} label />
                    <Tooltip />
                  </PieChart>
                </Col>
                <Col>
                  {/* Grafica 7 */}
                  <View isMore title={'Grafica 7'} click={this.state.View.click} slide={this.clickView} textUp='Es importante que la política anticorrupción indique expresamente que los directivos son sujetos de cumplimiento porque demuestra que nadie queda al margen de las sanciones asociadas a las prácticas anticorrupción...' textDown='Además, al no ser selectiva, ofrece certeza ante denuncias por violaciones al código de ética por parte de empleados, socios y proveedores, y permite a la empresa demostrar que ha tomado medidas anticorrupción comprehensivas ante una investigación de la autoridad. El análisis del segundo eje de IC500 “Alcance y socialización de la política anticorrupción” arroja que sólo una tercera parte de las empresas especifican públicamente que su política anticorrupción abarca tanto a los directivos como a los empleados. Estas proporciones se explican como sigue: en dos de cada cinco empresas (202 de 500) no fue posible determinar quién está sujeto a la política de la integridad debido a que no cuentan con ésta o con un código de ética o conducta. De las empresas que sí publicaron ya sea una política anticorrupción o un código de ética o conducta, poco más de la mitad (159) consideraron que empleados y directivos son sujetos de este documento. Es decir, prácticamente sólo una tercera parte de las empresas está enviando la señal de que la política anticorrupción no es selectiva y aplica para todos.' />
                  <PieChart width={800} height={600}>
                    <Pie data={charts['06']} cx='50%' cy='50%' outerRadius={200} label />
                    <Tooltip />
                  </PieChart>
                </Col>
                <Col>
                  {/* Grafica 8 */}
                  <View isMore title={'Grafica 8'} click={this.state.View.click} slide={this.clickView} textUp='Los empleados, agentes y otros intermediarios que actúan en nombre de las empresas suelen ser un vehículo a través del cual...' textDown='Los empleados, agentes y otros intermediarios que actúan en nombre de las empresas suelen ser un vehículo a través del cual se concretan las prácticas anticorrupción y, en este sentido, es sumamente importante que estén sujetos a dichas políticas. Las empresas deben asegurarse de que los empleados y otros intermediarios que actúan en representación suya estén sujetos a las políticas anticorrupción, y de que reciban el asesoramiento y la capacitación adecuados.' />
                  <PieChart width={800} height={600}>
                    <Pie data={charts['07']} cx='50%' cy='50%' outerRadius={200} label />
                    <Tooltip />
                  </PieChart>
                </Col>
                <Col>
                  {/* Grafica 9 */}
                  <View isMore title={'Grafica 9'} click={this.state.View.click} slide={this.clickView} textUp='Dado que las 500 empresas más grandes de México son líderes en sus respectivos sectores tienen el potencial de influir directamente en las prácticas de integridad de sus socios comerciales...' textDown='Es por ello que los resultados que IC500 arroja sobre una mención expresa acerca de los socios comerciales en la política de integridad de la empresa son particularmente relevantes, pues entre las 500 empresas más grandes en México solamente 2 de cada 10 (115 de 500 empresas) incorporan menciones a sus socios comerciales -proveedores y contratistas, por ejemplo-. De éstas, una de cada 10 (59 de 500 empresas) publica una política específica para socios, mientras que la otra mitad (56) alude a sus socios como sujetos de su política general.' />
                  <PieChart width={800} height={600}>
                    <Pie data={charts['08']} cx='50%' cy='50%' outerRadius={200} label />
                    <Tooltip />
                  </PieChart>
                </Col>
                <Col>
                  {/* Grafica 10 */}
                  <View isMore title={'Grafica 10'} click={this.state.View.click} slide={this.clickView} textUp='Es sumamente importante que las políticas anticorrupción sean claras y precisas para que sean aplicables y tengan un mayor impacto...' textDown='De acuerdo con la información en sus páginas de internet, dos de cada cinco empresas (218 de 500 empresas) divulgan una definición de conflicto de interés; mientras que 14% (69 de 500 empresas) incluyen otras definiciones como soborno, pago facilitador o tráfico de influencia. De las 69 empresas que consideran otras definiciones de actos de corrupción, 61 definen el concepto de conflicto de intereses.' />
                  <PieChart width={800} height={600}>
                    <Pie data={charts['09'].left} cx='25%' cy='50%' outerRadius={120} label />
                    <Pie data={charts['09'].right} cx='75%' cy='50%' outerRadius={120} label />
                    <Tooltip />
                  </PieChart>
                </Col>
                <Col>
                  {/* Grafica 11 */}
                  <View isMore title={'Grafica 11'} click={this.state.View.click} slide={this.clickView} textUp='Capacitar a sus empleados y directivos, así como adoptar prácticas comerciales éticas que contribuyan a detectar y prevenir la corrupción, permite a las 500 compañías más grandes en México sumarse a la lucha anticorrupción...' textDown='Debido a su alcance, conexiones y poder económico, éstas pueden actuar como agentes de cambio positivo, y desempeñar una función central en la lucha contra la corrupción. Sin embargo, únicamente 64 de 500 empresas publican en sus páginas web que cuentan con un programa de capacitación, lo cual indica que hay mucho trabajo por hacer en la socialización y entrenamiento de integridad.' />
                  <PieChart width={800} height={600}>
                    <Pie data={charts['10']} cx='50%' cy='50%' outerRadius={200} label />
                  </PieChart>
                </Col>
                <Col>
                  {/* Grafica 12 */}
                  <View isMore title={'Grafica 12'} click={this.state.View.click} slide={this.clickView} textUp='Es importante que la política anticorrupción indique expresamente que los directivos son sujetos de cumplimiento porque muestra nadie queda al margen de las sanciones asociadas a las prácticas anticorrupción...' textDown='Para que directivos y empleados puedan dar cumplimiento a la política de integridad, deben recibir igualmente entrenamiento. IC500 arroja que, a pesar de los beneficios que conlleva la capacitación, el entrenamiento anticorrupción únicamente se menciona en 8% de los casos, de los cuales únicamente un punto porcentual corresponde a la mención de que el entrenamiento incluye a los directivos.' />
                  <PieChart width={800} height={600}>
                    <Pie data={charts['11']} cx='50%' cy='50%' outerRadius={200} label />
                  </PieChart>
                </Col>
                <Col>
                  {/* Grafica 13 */}
                  <View isMore click={this.state.View.click} slide={this.clickView} textUp='Para que el sector privado haga efectivo su compromiso en la lucha contra la corrupción este tiene que ser público y accesible para su consulta...' textDown='De acuerdo con IC500, 298 de las 500 empresas publicaron un código de ética o un código de conducta en su página web; éste fue el documento publicado con mayor frecuencia por las empresas. En segundo lugar, poco más de la mitad de las empresas (255) publicaron también una política de regalos y agradecimientos. El tercer documento publicado con mayor frecuencia es la prohibición explícita de sobornos y pagos facilitadores (236 empresas, 47.2% de las 500). Los documentos que fueron encontrados con menor frecuencia en los portales de internet de las 500 empresas fueron la política de hospitalidad y viáticos (33 empresas, 6.6%) y la política de donaciones o contribuciones sociales (63 empresas, 12.6%). Si bien sólo 190 empresas hacen explícito su compromiso con la legalidad y 55 empresas NO expresan públicamente un compromiso con la legalidad, 255 confirman únicamente la protección de datos personales (medida intermedia entre los dos primeros grupos).' />
                  <BarChart
                    width={800}
                    height={600}
                    data={charts['12']}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    layout='vertical'
                  >
                    <XAxis type='number' ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} tickCount={11} domain={[0, 100]} tickFormatter={val => val.toString() + '%'} />
                    <YAxis type='category' dataKey='name' width={250} />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='Si' fill='#91CF4F' stackId='a' barSize={40} formatter={val => val.toString() + '%'} />
                    <Bar dataKey='No' fill='#ED7D31' stackId='a' barSize={40} formatter={val => val.toString() + '%'} />
                    <Bar dataKey='Sí, existen sanciones claras y detalladas' fill='#558336' stackId='a' barSize={40} formatter={val => val.toString() + '%'} />
                    <Bar dataKey='Se menciona que existen sanciones pero no se especifica de qué tipo' fill='#F8C032' stackId='a' barSize={40} formatter={val => val.toString() + ' %'} />
                    <Bar dataKey='No se mencionan sanciones' fill='#BE652B' stackId='a' barSize={40} formatter={val => val.toString() + '%'} />
                  </BarChart>
                </Col>
                <Col>
                  {/* Grafica 14 */}
                  <h1>Grafica 14</h1>
                  <View click={this.state.View.click} slide={this.clickView} textUp='La efectividad de la política anticorrupción o de integridad depende de que sea fácil acceder a ella...' textDown='Cuando la información de integridad se encuentra muy resguardada en la arquitectura de un sitio de internet, su impacto es similar a la de las empresas que no la publicitan pues es difícil conocer su contenido. Es decir, si es difícil acceder a la información, prácticamente se está mermando su publicidad y alcance y, por tanto, su efectividad. IC500 utilizó el número de clics necesarios para acceder a la información anticorrupción como una medida de accesibilidad, con los siguientes resultados: En una cuarta parte de los casos (134 de 500) la información anticorrupción o de integridad es de fácil acceso, pues se necesitan tres clics o menos para llegar a ella. En casi una tercera parte de las empresas (145 de 500 empresas) son necesarios entre 4 o 5 clics para encontrar la información, lo cual implica que la información está poco disponible pues requiere tiempo y esfuerzo por parte del usuario. Llama la atención que en 9% de las veces (45 de 500 empresas) la política anticorrupción está disponible a más de 5 clics o fue encontrada usando un buscador (no directamente en la página); adicionalmente, en 35% de las empresas (176 de 500 empresas) no es posible encontrar códigos de conducta en sus sitios de internet, ni siquiera usando un buscador. Por lo que podemos asegurar que en casi 9 de cada 20 empresas (44%) la información está tan poco accesible que es como si no estuviera pública. La suma de estos dos rubros indica que en 44% de las empresas la información está poco accesible dentro del sitio de la compañía, ya sea porque requiere 5 clics o más para encontrarla, porque no está en el sitio y fue necesario usar un buscador o porque no cuentan con ésta (221 de 500 empresas).' />
                  <PieChart width={800} height={600}>
                    <Pie data={charts['13']} cx='50%' cy='50%' outerRadius={200} label />
                  </PieChart>
                </Col>
                <Col>
                  {/* Grafica 15 */}
                  <View isMore title={'Grafica 15'} click={this.state.View.click} slide={this.clickView} textUp='El compromiso público de las empresas contra la corrupción y la divulgación de políticas relevantes refuerzan la integridad entre los empleados y...' textDown='El compromiso público de las empresas contra la corrupción y la divulgación de políticas relevantes refuerzan la integridad entre los empleados y los socios comerciales, fomentan tendencias positivas y marcan el ejemplo en las sociedades en las cuales tienen presencia Para que las políticas de integridad empresarial y anticorrupción tengan todos los efectos deseados, estas tienen que ser públicas, accesibles y explicitamente para México. Es por esto que, en la metodología se toma en cuenta el idioma de la información y la ubicación de la información en conjunto. Al considerar a las 500 empresas, se observa que el 68% publica, en efecto, en un sitio para México y en español. Otro 11% tiene disponible su información en español pero en un sitio global o para Latinoamérica, 3% de las empresas tiene su información en un sitio para México pero esta se encuentra al menos parcialmente en otro idioma, y finalmente,  17% publica parte o toda su información en un idioma distinto al español y en un sitio global. ' />
                  <PieChart width={800} height={600}>
                    <Pie data={charts['14']} cx='50%' cy='50%' outerRadius={200} label />
                  </PieChart>
                </Col>
                <Col>
                  {/* GRAFICA 16 */}
                  <View click={this.state.View.click} slide={this.clickView} textUp='El sector aeroespacial es el mejor evaluado, está conformado únicamente por dos empresas...' textDown='Para evaluar a las 500 empresas, se diseñó un cuestionario basado en el componente de la existencia, calidad y publicidad de las políticas anticorrupción del estudio Transparencia de la Información Corporativa (TRAC). La valoración de la empresa se hizo a partir de la información disponible en el portal de internet de cada empresa y se clasificó en cuatro ejes: Publicidad de los elementos básicos de una política anticorrupción integral. Alcance y socialización de la política anticorrupción de la empresa, tanto al interior como al exterior. Sistema de monitoreo, denuncia y sanciones. Accesibilidad de la información. La escala de puntuación es de 0 a 100. El puntaje más alto posible es de 100, pero ninguna empresa obtuvo esa calificación.' />
                  <BarChart
                    width={800}
                    height={600}
                    data={charts['15']}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    layout='vertical'
                  >
                    <XAxis type='number' ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} tickCount={11} domain={[0, 100]} tickFormatter={val => val.toString() + '%'} />
                    <YAxis type='category' dataKey='name' width={200} />
                    <CartesianGrid strokeDasharray='3 3' />
                    <Tooltip formatter={val => val.toString() + '%'} />
                    <Legend />
                    <Bar dataKey='Puntaje promedio' fill='#4271C4' />
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
    if (i > 18) {
      i = 0
      this.setState({sliderIndex: i})
      this.refs.slider.slickGoTo(i)
    }
    if (i < 0) {
      i = 18
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
