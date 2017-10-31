import React from 'react'
import YouTube from 'react-youtube'
import styled from 'styled-components'
import {
  Row,
  Button
} from '../index'
import {
  Link
} from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const VideoContainer = styled.div`
  position: relative;
  margin-right: 10px;
`

const Description = styled.div`
  display: ${props => props.isPlaying ? 'none' : 'block'};
  position: absolute;
  background: rgba(116, 30, 17, 0.5);
  color: #FFF;
  width: ${props => props.width ? props.width : '100%'};
  padding: 20px 10px;
  box-sizing: border-box;
  bottom: 2px;
  z-index: 100;
`

const Image = styled.img`
  position: relative;
  width: 100%;
`

const CalendarEvents = styled.a`
  width: 100%;
  height: 100px;
  background: #741E11;
  color: #FFF;
  text-transform: uppercase;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
`
const TextCalendar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`
const IconCalendar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

const Col = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:${props => (props.center) ? 'center' : 'space-around'};
  align-items:center;
  flex: 1;
  ${props => {
    if (props.Ext) {
      return (
        ` overflow: hidden;
          max-height: 250px;
          max-width: 250px;
          margin: 0px 0px 0px 0px;
          box-sizing: border-box;
          padding: 0  2.5px;
          position: relative;
        `
      )
    }
  }}
`

const Paragraph = styled.p`
  width: ${props => props.width ? props.width : '80%'};
  font-size: ${props => props.fontSize ? props.fontSize : '18px'};
`

const Title = styled.h4`
  position: relative;
  bottom: 10px;
  font-weight: 200;
  text-transform: uppercase;
  ${props => props.small && 'font-size: 10px;'}
`

const NewsWall = (props) => {
  const options = {
    height: '380',
    width: '600',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      listType: 'playlist',
      list: props.data.video.id
    }
  }
  return (
    <Wrapper>
      <Row noMargin flexStart>
        <Col>
          <VideoContainer>
            <YouTube
              opts={options}
              onPlay={props.onPlayPauseVideo}
              onPause={props.onPlayPauseVideo}
            />
            <Description isPlaying={props.isPlaying}>
              <Paragraph>¿Por qué las empresas deben tener códigos de conducta?</Paragraph>
            </Description>
          </VideoContainer>
        </Col>
        <Col>
          <Row noMargin>
            <Col Ext>
              <Link to='/noticias/trac-2014'>
                <Image src={props.data.articles[0].image} />
                <Description width='98%'>
                  <Title small>TRAC 2014</Title>
                  <Paragraph fontSize='12px' width='100%'>¿Qué tan transparentes son las multinacionales?</Paragraph>
                </Description>
              </Link>
            </Col>
            <Col Ext>
              <Link to='/noticias/trans-ant'>
                <Image src={props.data.articles[1].image} />
                <Description width='98%'>
                  <Title small>TRAC 2016</Title>
                  <Paragraph fontSize='12px' width='100%'>Transparencia y anticorrupción en 100 multinacionales de economías emergentes: informe TRAC.</Paragraph>
                </Description>
              </Link>
            </Col>
          </Row>
          <Row noMargin width='100%' padding='10px'>
            <CalendarEvents href='/eventos'>
              <TextCalendar>
                <p>Calendario de Publicaciones </p> <br /><p> y eventos</p>
              </TextCalendar>
              <IconCalendar>
                <i className='fa fa-calendar fa-4x' aria-hidden='true' />
              </IconCalendar>
            </CalendarEvents>
          </Row>
        </Col>
      </Row>
      <Row disabled={props.disabled}>
        <a href='/noticias'><Button invert>VER MÁS</Button></a>
      </Row>
    </Wrapper>
  )
}

export default NewsWall
