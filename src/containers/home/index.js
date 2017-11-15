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
  View,
  Vless,
  Vmore,
  TextUp,
  TextDown,
  ContainerUp,
  ContainerDown
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
  ComposedChart,
  ResponsiveContainer
} from 'recharts'
import Slider from 'react-slick'
import SliderGraphics from '../slider'
import './styles.css'

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

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
          {name: 'Si', value: 38, fill: '#4CAF50'},
          {name: 'No', value: 62, fill: '#F44336'}
        ],
        '06': [
          {name: 'Información no disponible', value: 40, fill: '#9E9E9E'},
          {name: 'Empleados', value: 28, fill: '#3498db'},
          {name: 'Empleados y Directivos', value: 32, fill: '#3F51B5'}
        ],
        '07': [
          {name: 'Si', value: 19, fill: '#4CAF50'},
          {name: 'No', value: 81, fill: '#F44336'}
        ],
        '08': [
          {name: 'Información no disponible', value: 77, fill: '#9E9E9E'},
          {name: 'No, pero los socios comerciales están sujetos al programa anticorrupción de la empresa', value: 11, fill: '#3498db'},
          {name: 'Hay un programa específico para socios comerciales', value: 12, fill: '#3F51B5'}
        ],
        '09': {
          left: [
            {name: 'Si', value: 43, fill: '#4CAF50'},
            {name: 'No', value: 57, fill: '#F44336'}
          ],
          right: [
            {name: 'Si', value: 14, fill: '#4CAF50'},
            {name: 'No', value: 86, fill: '#F44336'}
          ]
        },
        '10': [
          {name: 'Si', value: 13, fill: '#4CAF50'},
          {name: 'No', value: 87, fill: '#F44336'}
        ],
        '11': [
          {name: 'Información no disponible', value: 92, fill: '#9E9E9E'},
          {name: 'Empleados', value: 7, fill: '#3498db'},
          {name: 'Empleados y Directivos', value: 1, fill: '#3F51B5'}
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
          {name: 'Más de 5 (o información encontrada con un buscador)', value: 35, fill: '#3F51B5'},
          {name: 'Información no disponible', value: 9, fill: '#9E9E9E'},
          {name: '4 o 5', value: 29, fill: '#2196F3'},
          {name: '3 o menos', value: 27, fill: '#00BCD4'}
        ],
        '14': [
          {name: 'En otro idioma en sitio global ', value: 17, fill: '#607D8B'},
          {name: 'En español en sitio global ', value: 11, fill: '#9E9E9E'},
          {name: 'En otro idioma en sitio para México', value: 3, fill: '#2196F3'},
          {name: 'En español en sitio para México', value: 69, fill: '#3F51B5'}
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
        ],
        '16': {
          europa: [
            { name: 'Irlanda', 'Puntaje promedio': 67.6 },
            { name: 'Austria', 'Puntaje promedio': 66.7 },
            { name: 'Reino Unido / Holanda', 'Puntaje promedio': 66.7 },
            { name: 'Holanda', 'Puntaje promedio': 62.7 },
            { name: 'Suiza / Suecia', 'Puntaje promedio': 60.8 },
            { name: 'Reino Unido', 'Puntaje promedio': 57.2 },
            { name: 'España', 'Puntaje promedio': 57 },
            { name: 'Suecia', 'Puntaje promedio': 53.7 },
            { name: 'Francia', 'Puntaje promedio': 49.8 },
            { name: 'Bélgica', 'Puntaje promedio': 47.7 },
            { name: 'Italia / Argentina', 'Puntaje promedio': 44.4 },
            { name: 'Alemania', 'Puntaje promedio': 43.1 },
            { name: 'Siuiza', 'Puntaje promedio': 42.2 },
            { name: 'Italia / España', 'Puntaje promedio': 31.4 },
            { name: 'Italia', 'Puntaje promedio': 29.4 },
            { name: 'Finlandia', 'Puntaje promedio': 17.6 },
            { name: 'Rusia', 'Puntaje promedio': 15.7 },
            { name: 'Luxemburgo', 'Puntaje promedio': 14.7 },
            { name: 'Portugal', 'Puntaje promedio': 9.8 },
            { name: 'China / Francia', 'Puntaje promedio': 7.8 }
          ],
          latinoamerica: [
            { name: 'Colombia', 'Puntaje promedio': 88.2 },
            { name: 'Chile', 'Puntaje promedio': 55.9 },
            { name: 'México / Brasil', 'Puntaje promedio': 51 },
            { name: 'Brasil', 'Puntaje promedio': 43.1 },
            { name: 'Argentina', 'Puntaje promedio': 31.4 },
            { name: 'México', 'Puntaje promedio': 30 }
          ],
          norteamerica: [
            { name: 'Estados Unidos / Reino Unido', 'Puntaje promedio': 66.7 },
            { name: 'Canadá', 'Puntaje promedio': 55.6 },
            { name: 'Estados Unidos', 'Puntaje promedio': 45.8 },
            { name: 'México / Estados Unidos', 'Puntaje promedio': 25 }
          ],
          asia: [
            { name: 'Singapur', 'Puntaje promedio': 90.2 },
            { name: 'Corea', 'Puntaje promedio': 25.1 },
            { name: 'China', 'Puntaje promedio': 21.6 },
            { name: 'Japón', 'Puntaje promedio': 14.5 },
            { name: 'Taiwan', 'Puntaje promedio': 9.8 },
            { name: 'India', 'Puntaje promedio': 5.9 }
          ]
        },
        '17': [
          { name: 'Petróleos Mexicanos', 'Calificacion': 78.4 },
          { name: 'Comisión Federal de Electricidad', 'Calificacion': 66.7 },
          { name: 'Banobras', 'Calificacion': 62.7 },
          { name: 'Pronósticos para la Asistencia Pública', 'Calificacion': 56.9 },
          { name: 'Bancomext', 'Calificacion': 52.9 },
          { name: 'Bansefi', 'Calificacion': 47.1 },
          { name: 'Caminos y Puentes Federales (Capufe)', 'Calificacion': 47.1 },
          { name: 'Lotería Nacional para la Asistencia Pública', 'Calificacion': 45.1 },
          { name: 'Financiera Rural', 'Calificacion': 41.2 },
          { name: 'Agroasemex', 'Calificacion': 37.3 },
          { name: 'Grupo Aeroportuario de la Cd. de México', 'Calificacion': 35.3 },
          { name: 'Correos de México', 'Calificacion': 35.3 },
          { name: 'Fonacot', 'Calificacion': 33.3 },
          { name: 'Sociedad Hipotecaria Federal', 'Calificacion': 33.3 },
          { name: 'Infonavit', 'Calificacion': 33.3 },
          { name: 'Liconsa', 'Calificacion': 31.4 },
          { name: 'Banjército ', 'Calificacion': 27.5 },
          { name: 'Diconsa', 'Calificacion': 25.5 },
          { name: 'Nafin', 'Calificacion': 19.6 },
          { name: 'Fovissste', 'Calificacion': 15.7 },
          { name: 'Aeropuertos y Servicios Auxiliares', 'Calificacion': 9.8 },
          { name: 'Sistema de Transporte Colectivo', 'Calificacion': 7.8 }
        ],
        '18': [
          { name: 'Servicios financieros',
            '191 Empresas mejor calificadas (50 ptos. o más)': 9.4,
            '500 empresas': 13 },
          { name: 'Automotriz y autopartes',
            '191 Empresas mejor calificadas (50 ptos. o más)': 7.3,
            '500 empresas': 6 },
          { name: 'Química y petroquímica',
            '191 Empresas mejor calificadas (50 ptos. o más)': 6.3,
            '500 empresas': 4 },
          { name: 'Alimentos',
            '191 Empresas mejor calificadas (50 ptos. o más)': 5.8,
            '500 empresas': 5.2 },
          { name: 'Minería',
            '191 Empresas mejor calificadas (50 ptos. o más)': 5.8,
            '500 empresas': 2.6 },
          { name: 'Seguros y fianzas',
            '191 Empresas mejor calificadas (50 ptos. o más)': 5.8,
            '500 empresas': 6.8 },
          { name: 'Química farmacéutica',
            '191 Empresas mejor calificadas (50 ptos. o más)': 4.7,
            '500 empresas': 2.8 },
          { name: 'Bebidas y cervezas',
            '191 Empresas mejor calificadas (50 ptos. o más)': 4.2,
            '500 empresas': 2.4 },
          { name: 'Productos de consumo',
            '191 Empresas mejor calificadas (50 ptos. o más)': 3.1,
            '500 empresas': 1.2 },
          { name: 'Construcción',
            '191 Empresas mejor calificadas (50 ptos. o más)': 2.6,
            '500 empresas': 3.8 },
          { name: 'Telecomunicaciones',
            '191 Empresas mejor calificadas (50 ptos. o más)': 2.6,
            '500 empresas': 3.4 },
          { name: 'Holding',
            '191 Empresas mejor calificadas (50 ptos. o más)': 2.6,
            '500 empresas': 3.8 },
          { name: 'Maquinaria y equipo',
            '191 Empresas mejor calificadas (50 ptos. o más)': 2.1,
            '500 empresas': 1.8 },
          { name: 'Agroindustria',
            '191 Empresas mejor calificadas (50 ptos. o más)': 2.1,
            '500 empresas': 1.2 },
          { name: 'Cemento y materiales',
            '191 Empresas mejor calificadas (50 ptos. o más)': 2.1,
            '500 empresas': 1.2 },
          { name: 'Electricidad',
            '191 Empresas mejor calificadas (50 ptos. o más)': 2.1,
            '500 empresas': undefined },
          { name: 'Petróleo y gas',
            '191 Empresas mejor calificadas (50 ptos. o más)': 2.1,
            '500 empresas': undefined },
          { name: 'Electrónica',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1.6,
            '500 empresas': undefined },
          { name: 'Equipo eléctrico ',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1.6,
            '500 empresas': undefined },
          { name: 'Computación y servicios',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1.6,
            '500 empresas': undefined },
          { name: 'Afore',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1.6,
            '500 empresas': undefined },
          { name: 'Comercio Autoservicio',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1.6,
            '500 empresas': undefined },
          { name: 'Armadora',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1,
            '500 empresas': undefined },
          { name: 'Siderurgia y metalurgia',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1,
            '500 empresas': undefined },
          { name: 'Cuidado personal',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1,
            '500 empresas': undefined },
          { name: 'Desarrolladora de vivienda',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1,
            '500 empresas': undefined },
          { name: 'Tecnología diversificada',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1,
            '500 empresas': undefined },
          { name: 'Productos cerámicos',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1,
            '500 empresas': undefined },
          { name: 'Servicios aeroportuarios',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1,
            '500 empresas': undefined },
          { name: 'Logística y transporte',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1,
            '500 empresas': undefined },
          { name: 'Servicios profesionales',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1,
            '500 empresas': undefined },
          { name: 'Electrónica de consumo',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1,
            '500 empresas': undefined },
          { name: 'Tabaco',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1,
            '500 empresas': undefined },
          { name: 'Juegos y sorteos',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1,
            '500 empresas': undefined },
          { name: 'Papel y cartón',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1,
            '500 empresas': undefined },
          { name: 'Restaurantes',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1,
            '500 empresas': undefined },
          { name: 'Aeroespacial',
            '191 Empresas mejor calificadas (50 ptos. o más)': 1,
            '500 empresas': undefined },
          { name: 'Comercio departamental',
            '191 Empresas mejor calificadas (50 ptos. o más)': 0.5,
            '500 empresas': undefined },
          { name: 'Infraestructura de Transportes',
            '191 Empresas mejor calificadas (50 ptos. o más)': 0.5,
            '500 empresas': undefined },
          { name: 'Materiales para la construcción',
            '191 Empresas mejor calificadas (50 ptos. o más)': 0.5,
            '500 empresas': undefined },
          { name: 'Confitería y chocolates',
            '191 Empresas mejor calificadas (50 ptos. o más)': 0.5,
            '500 empresas': undefined },
          { name: 'Comercio de medicamentos',
            '191 Empresas mejor calificadas (50 ptos. o más)': 0.5,
            '500 empresas': undefined },
          { name: 'Servicios educativos',
            '191 Empresas mejor calificadas (50 ptos. o más)': 0.5,
            '500 empresas': undefined },
          { name: 'Entretenimiento',
            '191 Empresas mejor calificadas (50 ptos. o más)': 0.5,
            '500 empresas': undefined },
          { name: 'Vidrio y envases',
            '191 Empresas mejor calificadas (50 ptos. o más)': 0.5,
            '500 empresas': undefined },
          { name: 'Aerolíneas',
            '191 Empresas mejor calificadas (50 ptos. o más)': 0.5,
            '500 empresas': undefined },
          { name: 'Servicios inmobiliarios',
            '191 Empresas mejor calificadas (50 ptos. o más)': 0.5,
            '500 empresas': undefined },
          { name: 'Hotelería y turismo',
            '191 Empresas mejor calificadas (50 ptos. o más)': 0.5,
            '500 empresas': undefined }
        ]
      },
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
      charts,
      chartsSize
    } = this.state
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      // initialSlide: 12
    }
    return (
      <div style={{overflow: 'hidden'}}>
        <header>
          <MainBanner />
        </header>
        <section className='download'>
          <Row>
            <Title className='title'>EDICIÓN 2017</Title>
          </Row>
          <Row style={{display: 'flex', flexDirection: 'column', margin: 0, flexWrap: 'initial', alignItems: 'initial', justifyContent: 'initial', padding: 20}}>
            <Title style={{marginTop: 0, paddingTop: 10}} color='#ED4630'>Aviso</Title>
            <p className='aviso' style={{textAlign: 'center'}}>Disponible a partir del 15 de noviembre.</p>
          </Row>
          <Row>
            <Button><i className='fa fa-download' aria-hidden='true' />&nbsp;DESCARGA EL INFORME</Button>
            <Button><i className='fa fa-download' aria-hidden='true' />&nbsp;DESCARGA LA BASE DE DATOS</Button>
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
          <Subtitle>A PARTIR DEL 15 DE NOVIEMBRE</Subtitle>
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
