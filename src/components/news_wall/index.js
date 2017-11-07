import React from 'react'
import YouTube from 'react-youtube'
import styled from 'styled-components'
import './style.css'
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
  width: 100%;
  @media screen and (max-width: 1177px) {
    
  }
  @media screen and (max-width: 630px) {

  }
`
const RowWrapper = styled.div`
  display: ${props => props.disabled ? 'none' : 'flex'};
  ${props => {
    if (props.flexEnd) {
      return 'justify-content: flex-end;'
    }
    if (props.flexStart) {
      return 'justify-content: flex-start;'
    }
    return 'justify-content: space-around;'
  }}
  align-items: ${props => props.flexStart ? 'flex-start' : 'center'};
  flex-wrap: ${props => props.noWrap ? 'nowrap' : 'wrap'};
  flex-direction: ${props => props.invert ? 'row-reverse' : 'row'};
  margin: ${props => props.noMargin ? '0px' : props.margin ? props.margin : '0px 0px'};
  background: ${props => props.background ? props.background : null};
  width: ${props => props.width ? props.width : '100%'};
  padding: ${props => props.padding ? props.padding : null};
  box-sizing: border-box;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const VideoContainer = styled.div`
  width: 100%;
  position: relative;
  @media screen and (max-width: 1177px) {
    margin-right: 0px;
  }
  @media screen and (max-width: 620px) {
    width: 100%;
  }
  @media screen and (max-width: 597px) {
    width: 100%;
  }
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
  width: 100%;
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
  @media screen and (max-width: 620px) {
    width: 90%;
  }
  @media screen and (max-width: 597px) {
    width: 95%;
  }
`
const RowNews = styled.div`
  display: ${props => props.disabled ? 'none' : 'flex'};
  ${props => {
    if (props.flexEnd) {
      return 'justify-content: flex-end;'
    }
    if (props.flexStart) {
      return 'justify-content: flex-start;'
    }
    return 'justify-content: space-around;'
  }}
  align-items: ${props => props.flexStart ? 'flex-start' : 'center'};
  flex-wrap: ${props => props.noWrap ? 'nowrap' : 'wrap'};
  flex-direction: ${props => props.invert ? 'row-reverse' : 'row'};
  margin: ${props => props.noMargin ? '0px' : props.margin ? props.margin : '40px 0px'};
  background: ${props => props.background ? props.background : null};
  width: ${props => props.width ? props.width : null};
  padding: ${props => props.padding ? props.padding : null};
  box-sizing: border-box;
  @media screen and (max-width: 620px) {
   display: none;

  }
`
const Paragraph = styled.p`
  width: ${props => props.width ? props.width : '80%'};
  font-size: ${props => props.fontSize ? props.fontSize : '18px'};
`
const RowEvents = styled.div`
  display: ${props => props.disabled ? 'none' : 'flex'};
  ${props => {
    if (props.flexEnd) {
      return 'justify-content: flex-end;'
    }
    if (props.flexStart) {
      return 'justify-content: flex-start;'
    }
    return 'justify-content: space-around;'
  }}
  align-items: ${props => props.flexStart ? 'flex-start' : 'center'};
  flex-wrap: ${props => props.noWrap ? 'nowrap' : 'wrap'};
  flex-direction: ${props => props.invert ? 'row-reverse' : 'row'};
  margin: ${props => props.noMargin ? '0px' : props.margin ? props.margin : '40px 0px'};
  background: ${props => props.background ? props.background : null};
  width: 100%;
  padding: ${props => props.padding ? props.padding : null};
  box-sizing: border-box;
  @media screen and (max-width: 1177px) {
    
  }
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
    // height: '380',
    // width: '600',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      listType: 'playlist',
      list: props.data.video.id
    }
  }
  return (
    <Wrapper>
      <RowWrapper noMargin flexStart>
        <Col>
          <VideoContainer>
            <YouTube
              className='youtubePlayer'
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
          <RowNews noMargin>
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
          </RowNews>
          <RowEvents noMargin padding='21px 4px 0px 4px'>
            <CalendarEvents href='/eventos'>
              <TextCalendar>
                <p>Calendario de Publicaciones </p> <br /><p> y eventos</p>
              </TextCalendar>
              <IconCalendar>
                <i className='fa fa-calendar fa-4x' aria-hidden='true' />
              </IconCalendar>
            </CalendarEvents>
          </RowEvents>
        </Col>
      </RowWrapper>
      <Row disabled={props.disabled}>
        <a href='/noticias'><Button invert>VER MÁS</Button></a>
      </Row>
    </Wrapper>
  )
}

export default NewsWall
