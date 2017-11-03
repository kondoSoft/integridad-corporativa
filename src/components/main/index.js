import styled from 'styled-components'
import React from 'react'

export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
`
export const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column'};
    margin-top: 60px;
    margin-bottom: 60px;
    padding: 0px 30px 0px 30px;
    border-right: 2px solid lightgrey;
    width: 60%;
    ${props => {
      if (props.isNews) {
        return `@media screen and (max-width: 744px) {
          padding: 0px 30px 0px 30px;
          border-right: 0px;
        }`
      }
    }}
    ${props => {
      if (props.Phone) {
        return `@media screen and (max-width: 480px) {
          padding: 0px 10px 0px 10px;
          margin-bottom: 30px;  
        }`
      }
    }}
    ${props => {
      if (props.isGlossary) {
        return `@media screen and (max-width: 1030px) {
          width: 100%;
          border-right: 0px;
          padding: 0px 30px 0px 30px;
          margin-bottom: 30px;
          margin-top: 30px;
        }`
      }
    }}
    ${props => {
      if (props.events) {
        return `
          @media screen and (max-width: 380px){
            padding: 0px 10px 0px 10px;
          }
        `
      }
    }}
`
export const Route = styled.p`
    font-size: 16px;
    color: red;
    margin-bottom: 50px;
    font-weight: 200;
    ${props => {
      if (props.isResponsive) {
        return `@media screen and (max-width: 480px) {
          display: none;
        }`
      }
    }}
`
export const Edition = styled.p`
    font-size: 12px;
    color: lightgrey;
    margin-bottom: 40px;
`
export const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`
export const BoxTitle = styled.a`
    font-size: ${props => props.big ? '24px' : '18px'};
    font-weight: ${props => props.big ? 800 : 200};
    text-transform: ${props => props.big ? 'uppercase' : 'none'};
    margin-bottom: 15px;
    color: #72030e;
`
export const BoxDescription = styled.p`
    font-size: 15px;
    margin-bottom: 20px;
`
const SourceDetail = styled.div`
    display: flex;
    padding-top: 20px;
    flex-direction: column;
`
const BoldTitle = styled.b`
    display: flex;
    font-weight: 600;
    font-size: 14px;
    padding-left: 5px;
    width: 100%;
`
const SourceBook = styled.p`
    font-size: 14px;
    font-weight: 200;
    ${props => {
      if (props.Tablet) {
        return `@media screen and (max-width: 950px) {
          display: none;
        }`
      }
    }}
`
const SourceLink = styled.a`
    font-size: 14px;
    color: #ED4630;
    padding-left: 25px;
    width: 90%;
    text-decoration: none;
    transition: 0.3s;
    &:hover{
      color: #000;
    }
`
export const SourceBox = styled.div`
    width: 100%;
    border-top: 2px solid lightgrey;
    padding-top: 20px;
`
const HyperLikn = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: black;
`
export const Sources = (props) => {
  return (
    <SourceBox>
      <BoxTitle big >Fuentes y referencias generales</BoxTitle>
      {
        props.data.map((source, i) => {
          return (
            <SourceDetail>
              <BoldTitle>
                <i className='fa fa-chevron-right' aria-hidden='true' style={{color: 'orange', marginRight: 10}} />
                <HyperLikn href={source.url} target='_blank'>
                  {source.title}&nbsp;
                </HyperLikn>
                <SourceBook Tablet>{source.book}</SourceBook>
              </BoldTitle>
            </SourceDetail>
          )
        })
      }
    </SourceBox>
  )
}
const SideBar = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 40%;
    padding-top: 150px;
    padding-left: 20px;
    padding-right: 20px;
`
const SideBarContent = styled.div`
    padding-top: 10px;
    display: flex;
    margin-bottom: 10px;
    flex-direction: column;
    flex: ${props => props.isLittle ? '0.4' : '1'};
`
const SideBarTitle = styled.p`
    font-size: 20px;
    text-align: center;
    font-family: 'Druk Text Web';
`
const Thumbnail = styled.img`
    width: ${props => props.large ? '100%' : '46%'};
`
const ThumbnailDescription = styled.a`
    width: ${props => props.large ? '100%' : '47%'};
    text-align: ${props => props.large ? 'center' : 'none'};
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.large ? 'center' : 'flex-start'}; 
    background-color: ${props => props.large ? 'darkred' : 'red'};
    padding: 5px;
    padding-left: 15px;
    padding-top: 10px;
    cursor: pointer;
`
const ThumbnailLink = styled.a`
    width: ${props => props.large ? '100%' : '47%'};
    text-align: ${props => props.large ? 'center' : 'none'};
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: ${props => props.large ? 'center' : 'flex-start'}; 
    background-color: ${props => props.large ? 'darkred' : 'red'};
    padding: 5px;
    padding-left: 15px;
    padding-top: 10px;
    cursor: pointer;
`
const SideBarNews = styled.div`
    width: 100%;
    display: flex;
    flex: 0.3;
    flex-direction: column;
    justify-content: space-around;
`
const SideBarThumb = styled.div`
    width: 100%;
    display: flex;
    flex: ${props => props.outSide ? 0.1 : 1};
    margin: ${props => props.middle ? '20px 0px' : '0px'};
`
const Text = styled.p`
    font-size: ${props => props.date ? '12px' : '14px'};
    color: ${props => props.date ? 'lightgrey' : 'black'};
    padding-bottom: ${props => props.date ? '5px' : '0px'};
`
export const News = (props) => {
  return (
    <SideBar>
      <SideBarTitle>ENTRADAS RECIENTES</SideBarTitle>
      <hr style={{borderColor: 'red', width: '100%'}} />
      <SideBarContent isLittle={props.isLittle}>
        <SideBarNews>
          <SideBarThumb>
            <Thumbnail src={'http://via.placeholder.com/80x80'} />
            <ThumbnailDescription>
              <Text date>fecha</Text>
              <Text>datos</Text>
            </ThumbnailDescription>
          </SideBarThumb>
          <hr style={{borderColor: 'lightgrey', width: '90%'}} />
          <SideBarThumb>
            <Thumbnail src={'http://via.placeholder.com/80x80'} />
            <ThumbnailDescription>
              <Text date>fecha</Text>
              <Text>datos</Text>
            </ThumbnailDescription>
          </SideBarThumb>
          <hr style={{borderColor: 'lightgrey', width: '90%'}} />
          <SideBarThumb>
            <Thumbnail src={'http://via.placeholder.com/80x80'} />
            <ThumbnailDescription>
              <Text date>fecha</Text>
              <Text>datos</Text>
            </ThumbnailDescription>
          </SideBarThumb>
        </SideBarNews>
        <hr style={{borderColor: 'lightgrey', width: '90%'}} />
        <SideBarThumb outSide middle>
          <ThumbnailLink large>
            <i className='fa fa-calendar' aria-hidden='true' style={{color: '#FFF', padding: 5, fontSize: 40 }} />
            <p style={{width: '100%', fontSize: 22, color: '#FFF'}}>Calendario de actividades y eventos</p>
          </ThumbnailLink>
        </SideBarThumb>
        <hr style={{borderColor: 'lightgrey', width: '90%'}} />
        <SideBarThumb outSide middle>
          <Thumbnail height={70} large src={'assets/img/logo_expansion.jpg'} />
        </SideBarThumb>
        <SideBarThumb outSide middle>
          <Thumbnail height={70} large src={'http://via.placeholder.com/80x80'} />
        </SideBarThumb>
        <SideBarThumb outSide middle>
          <Thumbnail height={70} large src={'assets/img/transparencia_mexicana.png'} />
        </SideBarThumb>
      </SideBarContent>
    </SideBar>
  )
}
export const Topic = (props) => {
  return (
    props.data.map((topic, i) => {
      return (
        <Box>
          <BoxTitle>{topic.title}</BoxTitle>
          <BoxDescription>
            {topic.description}
          </BoxDescription>
        </Box>
      )
    })
  )
}
