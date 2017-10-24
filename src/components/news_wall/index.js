import React from 'react'
import styled from 'styled-components'
import {
  Row
} from '../index'

const Wrapper = styled.div`
  display: flex;
`

const VideoContainer = styled.div`
  position: relative;
  margin-right: 10px;
`

const Description = styled.div`
  position: absolute;
  background: rgba(116, 30, 17, 0.5);
  color: #FFF;
  width: 100%;
  padding: 20px 10px;
  box-sizing: border-box;
  bottom: 2px;
`

const Image = styled.img`
  position: relative;
  width: 100%;
`

const CalendarEvents = styled.div`
  width: 100%;
  height: 100px;
  background: red;
  color: #FFF;
  text-transform: uppercase;
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
        `
      )
    }
  }}
`

const NewsWall = (props) => (
  <Wrapper>
    <Row noMargin flexStart>
      <Col>
        <VideoContainer>
          {props.data.video.tag}
          {/* <Description>
            Esta es la descripcion
          </Description> */}
        </VideoContainer>
      </Col>
      <Col>
        <Row noMargin>
          <Col Ext>
            <Image src={props.data.articles[0].image} />
          </Col>
          <Col Ext>
            <Image src={props.data.articles[1].image} />
          </Col>
        </Row>
        <Row noMargin width='100%'>
          <CalendarEvents>
            Calendario de Publicaciones y eventos
          </CalendarEvents>
        </Row>
      </Col>
    </Row>
  </Wrapper>
)

export default NewsWall
