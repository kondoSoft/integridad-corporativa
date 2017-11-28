import styled from 'styled-components'
import React from 'react'
import {
  Link
} from 'react-router-dom'
import {
  ShareButtons,
  generateShareIcon
} from 'react-share'
import {LogoLink} from '../'
import '../../App.css'

const ENDPOINT = '165.227.53.250'

const ArticleBox = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
  @media screen and (max-width: 968px) {
    padding: 0px;
  }
`
const ArticleContainer = styled.div`
  width: 100%;
  background-color: #FFF;
`
const ShareBox = styled.div`
  width: 95%;
  display: flex;
  padding: 20px;
  @media screen and (max-width: 968px) {
    width: 100%;
    flex-direction: column;
    padding: 0px;
    align-items: center;
  }
`
const OtherArticles = styled.div`
  width: 100%;
  display: none;
  padding: 10px 0px;
  align-items: center;
  justify-content: space-between;
`
const Suggested = styled.div`
  width: 30%;
`
const NewsWrapper = styled.div`
    padding-right: ${props => props.noPadding ? '0px' : '60px'};
    width: 30%;
    display: flex;
    flex-direction: column;
    height: 1400px;
    margin-top: 60px;
    ${props => {
      if (props.isTablet) {
        return `@media screen and (max-width: 968px){
          display: none;
        }`
      }
    }}
`
const Container = styled.div`
    flex: ${props => props.bottom ? 0 : 4};
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    width: 100%;
`
const NewsContainer = styled.div`
    flex: 2;
    width: 100%;
    display: ${props => props.disabled ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 15px 0px;
    overflow: scroll;
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
    width: 80%;
    height: ${props => props.isMCCI ? '100px' : '70px'};
`
const NewEntries = styled.p`
    font-size: 20px;
    text-align: center;
    font-family: 'Druk Text Web';
`
const NewsBlogArticle = styled.div`
    max-height: 125px;
    background-color: #EBEBEB;
    width: 90%;
    margin: 5px;
    display: flex;
`
const Img = styled.img`
    width: 100%;
`
const ImgBottom = styled.img`
    flex: 0;
    height: 150px;
    width: 100%;
`
const ArticleData = styled.div`
    flex: 1;
    width: 50%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    textAlign: left;
`
const ArticleDate = styled.p`
    width: 100%;
    color: '#E4E5E4';
    font-size: 12px;
    padding-top: 5px;
    padding-bottom: 10px;
`
const ArticleTitle = styled.a`
    width: 100%;
    font-size: 16px;
    letter-spacing: 2px;
    text-decoration: none;
    color: black;
    &:hover{
      text-decoration: underline;
      color: #F24437;
    }
`
const Events = styled.a`
    width: 90%;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: darkred;
`
const EventsTitle = styled.p`
    width: 100%;
    font-size: 16px;
    color: #FFF;
    text-align: center;
`
const ArticleImg = styled.div`
  width: 100%;
`
const ArticleInformation = styled.div`
  width: 100%;
  display: flex;
  padding-top: 15px;
  height: ${props => props.expanded ? '170px' : '100px'};
  ${props => {
    if (props.Tablet) {
      return `@media screen and (max-width: 684px) {
        height: auto;
      }`
    }
  }}
  ${props => {
    if (props.Phone) {
      return `@media screen and (max-width: 768px) {
        flex-direction: column;
        padding-top: 0px;
      }`
    }
  }}
`
const ArticleDescription = styled.div`
  width: 84%;
  background-color: #FFF;
  padding-left: 120px;
  padding-top: 40px;
  padding-bottom: 20px;
  display: ${props => props.disabled ? 'none' : null};
  ${props => {
    if (props.Tablet) {
      return `@media screen and (max-width: 684px) {
        padding-left: 0px;
      }`
    }
  }}
  ${props => {
    if (props.Phone) {
      return `@media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 0px;
      }`
    }
  }}
`
const InformationLeft = styled.div`
  width: 15%; 
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 10px 10px 0px;
  ${props => {
    if (props.Tablet) {
      return `@media screen and (max-width: 684px) {
        width: 20%;
        padding: 5px 0px; 
      }`
    }
  }}
  ${props => {
    if (props.Phone) {
      return `@media screen and (max-width: 480px){
        width: 100%;
      }`
    }
  }}
`
const InformationRigth = styled.div`
  width: 85%; 
  display: flex;
  flex-direction: column;
  padding: 10px 10px 0px 0px;
  ${props => {
    if (props.Tablet) {
      return `@media screen and (max-width: 684px) {
        width: 80%;
        padding: 5px 0px; 
      }`
    }
  }}
  ${props => {
    if (props.Phone) {
      return `@media screen and (max-width: 480px){
        width: 100%;
      }`
    }
  }}
`
const LeftDate = styled.div`
  background-color: red;
  width: 70%;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props => {
    if (props.Phone) {
      return `@media screen and (max-width: 480px) {
        width: 100%;
      }`
    }
  }}
`
const RightColTop = styled.div`
  width: 100%;
`
const RightColBottom = styled.div`
  width: 100%;
  display: ${props => props.disabled ? 'none' : 'flex'};
  align-items: flex-end;
  flex-direction: ${props => props.column ? 'column' : 'row'};
`
const RightColBottomWithButton = styled.div`
  width: 100%;
  display: ${props => props.isArticle ? 'none' : 'flex'};
  align-items: flex-end;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  margin-top: 10px;
`
const TitleArticle = styled.a`
  font-size: 24px;
  font-family: 'Druk Text Web';
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #771C15;
    cursor: pointer;
  }
`
const Left = styled.div`
  width: 40%;
  display: flex;
  align-items: flex-end;
  ${props => {
    if (props.Tablet) {
      return `@media screen and (max-width: 744px){
          width: 100%;
          padding: 5px 0px;
          height: 15px;
      }`
    }
  }}
  ${props => {
    if (props.Phone) {
      return `@media screen and (max-width: 684px) {
         width: 100%;
      }`
    }
  }}
`
const Rigth = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-end;
  ${props => {
    if (props.Tablet) {
      return `@media screen and (max-width: 744px){
          width: 100%;
          padding: 5px 0px;
          height: 15px;
      }`
    }
  }}
  ${props => {
    if (props.Tablet) {
      return `@media screen and (max-width: 684px) {
         
      }`
    }
  }}
`
const Socials = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-around;
`
const SocialsTitle = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Druk Text Web';
  font-size: 20px;
  @media screen and (max-width: 968px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;
  }
`
const LeftDateText = styled.p`
  font-size: ${props => props.isDay ? '24px' : '22px'};
  color: #FFF;
  font-family: 'Druk Text Web';
`
const SearchBox = styled.div`
  width: 100%;
  display: ${props => props.withSearch ? 'flex' : 'none'};
  padding: 10px;
  align-items: center;
  justify-content: center;
`
const SearchInput = styled.input`
  width: 80%;
  height: 31px;
`
const Icon = styled.i`
  width: 100%;
`
const IconButton = styled.button`
  width: 20%;
  background-color: #FF0000;
  text-align: center;
  color: #FFF;
  font-size: 27px;
  padding: 3px;
  cursor: pointer;
  border: 'none';
  border-width: 0px;
`
const MiniDescription = styled.p`
  width: 100%;
  font-size: 14px;
`
const SeeMoreButton = styled.button`
  width: 90px;
  border: none;
  padding: 6px;
  background-color: #FF0000;
  color: #FFF;
  cursor: pointer;
  ${props => {
    if (props.Tablet) {
      return `@media screen and (max-width: 684px) {
        display: none;
      }`
    }
  }}
`
const MiniInfo = styled.div`
  width: 100%;
  display: ${props => props.disabled ? 'none' : 'flex'};
  align-items: flex-end;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  padding-bottom: 15px;
  ${props => {
    if (props.Tablet) {
      return `@media screen and (max-width: 744px){
          flex-direction: column;
      }`
    }
  }}
  ${props => {
    if (props.Tablet) {
      return `@media screen and (max-width: 684px) {
        
      }`
    }
  }}
`
const VirtualMagazine = styled.div`
  width: 100%;
`
const renderContentArticle = (data, screen) => {
  if (screen === 'noticias') {
    const descripcion = data.substring(0, 201) + `...`
    return {__html: descripcion}
  } else {
    return {__html: data}
  }
}
export const Article = (props) => {
  const {data} = props
  if (Array.isArray(data) && data.length !== 0) {
    return data.map((data, i) => {
      const date = new Date(data.fields.fecha)
      const month = date.getMonth() + 1
      const day = date.getDate() + 1
      const months = ['', 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
      return (
        <ArticleContainer>
          {
            data.fields.imagen !== undefined
              ? <ArticleImg>
                <img height='200px' style={{width: '100%'}} src={`http://${ENDPOINT}:8000/${data.fields.imagen}`} alt='' />
              </ArticleImg>
              : null
          }
          <ArticleInformation expanded={props.expanded} Tablet Phone>
            <InformationLeft Tablet Phone>
              <LeftDate Phone>
                <LeftDateText isDay>{day}</LeftDateText>
                <LeftDateText>{months[month]}</LeftDateText>
              </LeftDate>
            </InformationLeft>
            <InformationRigth Tablet Phone>
              <RightColTop>
                <Link style={{color: 'black', textDecoration: 'none'}} to={`/noticias/${data.fields.slug}`}>
                  <TitleArticle>
                    {data.fields.titulo}
                  </TitleArticle>
                </Link>
              </RightColTop>
              <RightColBottomWithButton column={props.column} isArticle={props.isArticle}>
                <MiniInfo Tablet>
                  <Left Tablet Phone>
                    <p style={{color: '#A9AAA9', fontSize: 12}}>Autor:&nbsp;</p>
                    <a href={data.fields.url} target='_blank' style={{color: '#EC0F00', fontSize: 14}}>{data.fields.autor}</a>
                  </Left>
                  {
                    (data.fields.categorias !== undefined)
                      ? <Rigth Tablet>
                        <p style={{color: '#A9AAA9', fontSize: 12}}>Categorias:&nbsp;</p>
                        {
                            data.fields.categorias.map((categoria, i) => {
                              return <a href='' style={{color: '#EC0F00', fontSize: 14, paddingLeft: 5, paddingRigth: 5}}>{categoria}</a>
                            })
                          }
                      </Rigth>
                        : null
                  }
                </MiniInfo>
                <MiniDescription dangerouslySetInnerHTML={renderContentArticle(data.fields.contenido, 'noticias')} />
                <SeeMoreButton Tablet>
                  <Link style={{color: '#FFF', textDecoration: 'none'}} to={`/noticias/${data.fields.slug}`}>
                    Leer más
                  </Link>
                </SeeMoreButton>
              </RightColBottomWithButton>
            </InformationRigth>
          </ArticleInformation>
          <ArticleDescription disabled={props.disabled}>
            <p style={{letterSpacing: 1, fontSize: 14, fontWeight: 400, fontFamily: 'arial'}}>{data.descripcion}</p>
          </ArticleDescription>
          <hr style={{borderColor: '#E4E5E4', width: '100%', marginTop: 20, marginBottom: 20}} />
        </ArticleContainer>
      )
    })
  } if (!Array.isArray(data) && data instanceof Object) {
    const date = new Date(data.fecha)
    const month = date.getMonth() + 1
    const day = date.getDate() + 1
    const months = ['', 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    return (
      <ArticleContainer>
        {/*
          {
            data.imagen !== undefined
            ? <ArticleImg>
              <img height='200px' style={{width: '100%'}} src={data.imagen} alt='' />
            </ArticleImg>
            : null
          }
      */}
        <ArticleInformation expanded={props.expanded} Tablet Phone>
          <InformationLeft Tablet Phone>
            <LeftDate Phone>
              <LeftDateText isDay>{day}</LeftDateText>
              <LeftDateText>{months[month]}</LeftDateText>
            </LeftDate>
          </InformationLeft>
          <InformationRigth Tablet Phone>
            <RightColTop style={{marginBottom: 20}}>
              <TitleArticle>
                {data.titulo}
              </TitleArticle>
            </RightColTop>
            <RightColBottom disabled={props.disabled}>
              <Left Tablet Phone>
                <p style={{color: '#A9AAA9', fontSize: 12}}>Autor:&nbsp;</p>
                <a href={data.url} target='_blank' style={{color: '#EC0F00', fontSize: 14}}>{data.autor}</a>
              </Left>
              {
                (data.categorias !== undefined)
                  ? <Rigth>
                    <p style={{color: '#A9AAA9', fontSize: 12}}>Categorias:&nbsp;</p>
                    {
                        data.categorias.map((categoria, i) => {
                          return <a href='' style={{color: '#EC0F00', fontSize: 14, paddingLeft: 5, paddingRigth: 5}}>{categoria}</a>
                        })
                      }
                  </Rigth>
                    : null
              }
            </RightColBottom>
          </InformationRigth>
        </ArticleInformation>
        <ArticleDescription disabled={props.disabled} dangerouslySetInnerHTML={renderContentArticle(data.contenido, 'articulo')} Tablet Phone />
        <hr style={{borderColor: '#E4E5E4', width: '100%', marginTop: 20, marginBottom: 20}} />
        {
          (data.revista !== undefined)
            ? <VirtualMagazine dangerouslySetInnerHTML={{__html: data.revista}} />
            : null
        }
        {/* <iframe style={{width: '100%'}} src='//e.issuu.com/embed.html#7138783/10008731' height='686' frameborder='0' allowfullscreen='allowfullscreen' /> */}
      </ArticleContainer>
    )
  } else {
    return null
  }
}

// share buttons
const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton
} = ShareButtons

// share icons
const FacebookIcon = generateShareIcon('facebook')
const TwitterIcon = generateShareIcon('twitter')
const GooglePlusIcon = generateShareIcon('google')
const LinkedinIcon = generateShareIcon('linkedin')

// Social url's
const fbURL = 'https://facebook.com'
const fbTitle = 'facebook'
const twtURL = 'https://twitter.com'
const twtTitle = 'twitter'
const lkdinURL = 'https://linkedin.com'
const lkdinTitle = 'linkedin'
const googleURL = 'https://plus.google.com/'
const googleTitle = 'google plus'

export const Articles = (props) => {
  return (
    <ArticleBox>
      <Article disabled={props.disabled} data={props.data} expanded={props.expanded} column={props.column} isArticle={props.isArticle} />
      <hr style={{borderColor: '#E4E5E4', width: '100%'}} />
      <ShareBox>
        <SocialsTitle>
          <p>Comparte este artículo:</p>
        </SocialsTitle>
        <Socials>
          <FacebookShareButton
            url={fbURL}
            quote={fbTitle}
            className='Demo__some-network__share-button'>
            <FacebookIcon
              size={36}
              round
              />
          </FacebookShareButton>
          <TwitterShareButton
            url={twtURL}
            quote={twtTitle}
            className='Demo__some-network__share-button'>
            <TwitterIcon
              size={36}
              round
              />
          </TwitterShareButton>
          <LinkedinShareButton
            url={lkdinURL}
            quote={lkdinTitle}
            className='Demo__some-network__share-button'>
            <LinkedinIcon
              size={36}
              round
              />
          </LinkedinShareButton>
          <GooglePlusShareButton
            url={googleURL}
            quote={googleTitle}
            className='Demo__some-network__share-button'>
            <GooglePlusIcon
              size={36}
              round
              />
          </GooglePlusShareButton>
        </Socials>
      </ShareBox>
      <hr style={{borderColor: '#E4E5E4', width: '100%'}} />
      <OtherArticles>
        <Suggested>
          <ImgBottom all src={'assets/img/blog2_example.jpg'} alt='' />
          <p style={{paddingTop: 10, color: '#A9AAA9', fontSize: 14}}>19 Sep. 2017</p>
          <p style={{paddingTop: 5, fontSize: 16, paddingBottom: 3}}>Enterate de los resultados del estudio de tansparencia mexicana.</p>
          <hr style={{borderColor: '#EB0F00', width: '99%'}} />
        </Suggested>
        <Suggested>
          <ImgBottom all src={'assets/img/blog2_example.jpg'} alt='' />
          <p style={{paddingTop: 10, color: '#A9AAA9', fontSize: 14}}>19 Sep. 2017</p>
          <p style={{paddingTop: 5, fontSize: 16, paddingBottom: 3}}>Enterate de los resultados del estudio de tansparencia mexicana.</p>
          <hr style={{borderColor: '#EB0F00', width: '99%'}} />
        </Suggested>
        <Suggested>
          <ImgBottom all src={'assets/img/blog2_example.jpg'} alt='' />
          <p style={{paddingTop: 10, color: '#A9AAA9', fontSize: 14}}>19 Sep. 2017</p>
          <p style={{paddingTop: 5, fontSize: 16, paddingBottom: 3}}>Enterate de los resultados del estudio de tansparencia mexicana.</p>
          <hr style={{borderColor: '#EB0F00', width: '99%'}} />
        </Suggested>
      </OtherArticles>
    </ArticleBox>
  )
}
const NewsBlog = (props) => {
  const {data} = props
  if (data === undefined || data.length === 0) {
    return (<NewsContainer>
      <i className='fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom' style={{color: '#F24437'}} />
    </NewsContainer>)
  } else {
    return (
      <NewsContainer disabled={props.disabled}>
        {
          data.map((news, i) => {
            return (
              <NewsBlogArticle key={i}>
                { (news.fields.imagen)
                  ? <div style={{width: 180, height: 120, display: 'flex', alignItems: 'center'}}><Img src={`http://${ENDPOINT}:8000/${news.fields.imagen}`} /></div>
                  : <div style={{width: 180, height: 120, display: 'flex', alignItems: 'center'}}><Img src='/assets/img/LOGO IC500.jpg' /></div>
                }
                <ArticleData>
                  <ArticleDate>{news.fields.fecha}</ArticleDate>
                  <ArticleTitle href={news.fields.url} target='_blank'>
                    {news.fields.titulo}
                  </ArticleTitle>
                </ArticleData>
              </NewsBlogArticle>
            )
          })
        }
        <hr style={{borderColor: '#E4E5E4', width: '80%', marginTop: 5}} />
      </NewsContainer>
    )
  }
}
export const News = (props) => {
  return (
    <NewsWrapper isTablet={props.isTablet} noPadding={props.noPadding}>
      <SearchBox withSearch={props.withSearch}>
        <SearchInput />
        <IconButton>
          <Icon className='fa fa-search' aria-hidden='true' />
        </IconButton>
      </SearchBox>
      <NewEntries>ENTRADAS RECIENTES</NewEntries>
      <hr style={{borderColor: 'red', width: '80%'}} />
      <Container>
        <NewsBlog disabled={props.disabled} data={props.data} />
        <NewsEvents>
          <Link to='/eventos' style={{width: '80%', textDecoration: 'none', textAlign: 'center', backgroundColor: 'darkred', padding: 10}}>
            <i className='fa fa-calendar' aria-hidden='true' style={{color: '#FFF', padding: 7, fontSize: 30 }} />
            <EventsTitle>Calendario de actividades y eventos</EventsTitle>
          </Link>
        </NewsEvents>
        <hr style={{borderColor: '#E4E5E4', width: '80%'}} />
        <NewsSponsors>
          {/*<LogoLink href='http://expansion.mx/' target='blank'>
            <Sponsors src={'/assets/img/logo_expansion.jpg'} />
          </LogoLink>*/}
          <LogoLink href='https://contralacorrupcion.mx/' target='blank'>
            <Sponsors isMCCI src={'/assets/img/mcci.png'} />
          </LogoLink>
          <LogoLink href='https://www.tm.org.mx/' target='blank'>
            <Sponsors style={{width: '100%', height: '90px'}} src={'/assets/img/transparencia_mexicana.png'} />
          </LogoLink>
        </NewsSponsors>
        <hr style={{borderColor: '#E4E5E4', width: '80%'}} />
      </Container>
      <Container bottom />
    </NewsWrapper>
  )
}
