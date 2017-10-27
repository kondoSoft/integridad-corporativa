import styled from 'styled-components'
import React from 'react'

const ArticleBox = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: steelblue;
  padding: 15px;
  align-items: center;
`
const ArticleContainer = styled.div`
  width: 100%;
  background-color: #FFF;
`
const ShareBox = styled.div`
  width: 100%;
  background-color: #EBEBEB; 
`
const OtherArticles = styled.div`
  width: 100%;
  background-color: orange; 
`
const NewsWrapper = styled.div`
    padding-right: 60px;
    width: 30%;
    display: flex;
    flex-direction: column;
    height: 1400px;
    margin-top: 60px;
`
const Container = styled.div`
    flex: ${props => props.bottom ? 1 : 4};
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    width: 100%;
`
const NewsContainer = styled.div`
    flex: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 15px 0px;
`
const NewsEvents = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const NewsSponsors = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    flex-direction: column;
`
const Sponsors = styled.img`
    background-color: #FFF;
    width: 90%;
    height: 80px;
`
const NewEntries = styled.p`
    font-size: 20px;
    text-align: center;
    font-family: 'Druk Text Web';
`
const NewsBlogArticle = styled.div`
    flex: 1;
    background-color: #EBEBEB;
    width: 90%;
    margin: 5px;
    display: flex;
`
const Img = styled.img`
    flex: 1;
    width: 50%;
`
const ArticleData = styled.div`
    flex: 1;
    width: 50%;
    padding: 8px;
    display: flex;
    flex-direction: column;
`
const ArticleDate = styled.p`
    width: 100%;
    color: '#E4E5E4';
    font-size: 12px;
    padding-top: 5px;
    padding-bottom: 5px;
`
const ArticleTitle = styled.p`
    width: 100%;
    font-size: 12px;
`
const Events = styled.a`
    width: 90%;
    height: 80px;
    background-color: darkred;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const EventsTitle = styled.p`
    width: 90%;
    font-size: 16px;
    color: #FFF;
`
const ArticleImg = styled.div`
  width: 100%;
  background-color: red;
`
const ArticleInformation = styled.div`
  width: 100%;
  background-color: orange;
`
const ArticleDescription = styled.div`
  width: 100%;
  background-color: #FFF;
`
const Article = (props) => {
  return (
    <ArticleContainer>
      <ArticleImg>
        <h1>hello world</h1>
      </ArticleImg>
      <ArticleInformation>
        <h1>hello world</h1>
      </ArticleInformation>
      <ArticleDescription>
        <h1>hello world</h1>
      </ArticleDescription>
    </ArticleContainer>
  )
}
export const Articles = (props) => {
  return (
    <ArticleBox>
      <Article />
      <hr style={{borderColor: '#E4E5E4', width: '100%'}} />
      <ShareBox />
      <hr style={{borderColor: '#E4E5E4', width: '100%'}} />
      <OtherArticles />
    </ArticleBox>
  )
}
const NewsBlog = (props) => {
  return (
    <NewsContainer>
      <NewsBlogArticle>
        <Img />
        <ArticleData>
          <ArticleDate>19 sep 2017</ArticleDate>
          <ArticleTitle>
              Lorem ipsum dolor sit amet consectetur
          </ArticleTitle>
        </ArticleData>
      </NewsBlogArticle>
      <hr style={{borderColor: '#E4E5E4', width: '80%'}} />
      <NewsBlogArticle>
        <Img />
        <ArticleData>
          <ArticleDate>19 sep 2017</ArticleDate>
          <ArticleTitle>
              Lorem ipsum dolor sit amet consectetur
          </ArticleTitle>
        </ArticleData>
      </NewsBlogArticle>
      <hr style={{borderColor: '#E4E5E4', width: '80%'}} />
      <NewsBlogArticle>
        <Img />
        <ArticleData>
          <ArticleDate>19 sep 2017</ArticleDate>
          <ArticleTitle>
              Lorem ipsum dolor sit amet consectetur
          </ArticleTitle>
        </ArticleData>
      </NewsBlogArticle>
      <hr style={{borderColor: '#E4E5E4', width: '80%'}} />
    </NewsContainer>
  )
}

export const News = (props) => {
  return (
    <NewsWrapper>
      <NewEntries>ENTRADAS RECIENTES</NewEntries>
      <hr style={{borderColor: 'red', width: '80%'}} />
      <Container>
        <NewsBlog />
        <NewsEvents>
          <Events>
            <i className='fa fa-calendar' aria-hidden='true' style={{color: '#FFF', padding: 7, fontSize: 30 }} />
            <EventsTitle>Calendario de actividades y eventos</EventsTitle>
          </Events>
        </NewsEvents>
        <hr style={{borderColor: '#E4E5E4', width: '80%'}} />
        <NewsSponsors>
          <Sponsors src={'assets/img/logo_expansion.jpg'} />
          <Sponsors />
          <Sponsors src={'assets/img/transparencia_mexicana.png'} />
        </NewsSponsors>
        <hr style={{borderColor: '#E4E5E4', width: '80%'}} />
      </Container>
      <Container bottom />
    </NewsWrapper>
  )
}
