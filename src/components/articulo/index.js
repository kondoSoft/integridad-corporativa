import styled from 'styled-components'
import React from 'react'
import {
  Link
} from 'react-router-dom'
import {LogoLink} from '../'

const ArticleBox = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
`
const ArticleContainer = styled.div`
  width: 100%;
  background-color: #FFF;
`
const ShareBox = styled.div`
  width: 95%;
  display: flex;
  padding: 20px;
`
const OtherArticles = styled.div`
  width: 100%;
  display: flex;
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
`
const ArticleDescription = styled.div`
  width: 84%;
  background-color: #FFF;
  padding-left: 120px;
  padding-top: 40px;
  padding-bottom: 20px;
  display: ${props => props.disabled ? 'none' : null};
`
const InformationLeft = styled.div`
  width: 15%; 
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 10px 10px 0px;
`
const InformationRigth = styled.div`
  width: 85%; 
  display: flex;
  flex-direction: column;
  padding: 10px 10px 0px 0px;
`
const LeftDate = styled.div`
  background-color: red;
  width: 70%;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    color: #73030E;
    cursor: pointer;
  }
`
const Left = styled.div`
  width: 40%;
  display: flex;
  align-items: flex-end;
`
const Rigth = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-end;
`
const Socials = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`
const SocialsTitle = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Druk Text Web';
  font-size: 20px;
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
`
const MiniInfo = styled.div`
  width: 100%;
  display: ${props => props.disabled ? 'none' : 'flex'};
  align-items: flex-end;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  padding-bottom: 15px;
`
export const Article = (props) => {
  const {data} = props
  if (Array.isArray(data)) {
    return data.map((data, i) => {
      const description = data.descripcion.substring(0, 201) + `...`
      return (
        <ArticleContainer>
          {
            data.imagen !== undefined
              ? <ArticleImg>
                <img height='200px' style={{width: '100%'}} src={data.imagen} alt='' />
              </ArticleImg>
              : null
          }
          <ArticleInformation expanded={props.expanded}>
            <InformationLeft>
              <LeftDate>
                <LeftDateText isDay>{data.dia}</LeftDateText>
                <LeftDateText>{data.mes}</LeftDateText>
              </LeftDate>
            </InformationLeft>
            <InformationRigth>
              <RightColTop>
                <TitleArticle>
                  {data.titulo}
                </TitleArticle>
              </RightColTop>
              <RightColBottomWithButton column={props.column} isArticle={props.isArticle}>
                <MiniInfo>
                  <Left>
                    <p style={{color: '#A9AAA9', fontSize: 12}}>Autor:&nbsp;</p>
                    <a href='' style={{color: '#EC0F00', fontSize: 14}}>{data.autor}</a>
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
                </MiniInfo>
                <MiniDescription>
                  {description}
                </MiniDescription>
                <SeeMoreButton>
                  <Link style={{color: '#FFF', textDecoration: 'none'}} to={`/noticias/${data.slug}`}>
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
  } else {
    return (
      <ArticleContainer>
        {
          data.imagen !== undefined
          ? <ArticleImg>
            <img height='200px' style={{width: '100%'}} src={data.imagen} alt='' />
          </ArticleImg>
          : null
        }
        <ArticleInformation expanded={props.expanded}>
          <InformationLeft>
            <LeftDate>
              <LeftDateText isDay>5</LeftDateText>
              <LeftDateText>Nov</LeftDateText>
            </LeftDate>
          </InformationLeft>
          <InformationRigth>
            <RightColTop style={{marginBottom: 20}}>
              <TitleArticle>
                {data.titulo}
              </TitleArticle>
            </RightColTop>
            <RightColBottom disabled={props.disabled}>
              <Left>
                <p style={{color: '#A9AAA9', fontSize: 12}}>Autor:&nbsp;</p>
                <a href='' style={{color: '#EC0F00', fontSize: 14}}>{data.autor}</a>
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
        <ArticleDescription disabled={props.disabled}>
          <p style={{letterSpacing: 1, fontSize: 14, fontWeight: 400, fontFamily: 'arial'}}>{data.descripcion}</p>
        </ArticleDescription>
        <hr style={{borderColor: '#E4E5E4', width: '100%', marginTop: 20, marginBottom: 20}} />
        <iframe style={{width: '100%'}} src='//e.issuu.com/embed.html#7138783/10008731' height='686' frameborder='0' allowfullscreen='allowfullscreen' />
      </ArticleContainer>
    )
  }
}
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
          <a href=''>
            <i style={{fontSize: 35, paddingLeft: 5, paddingRight: 5, color: '#3A5896'}} class='fa fa-facebook-square' aria-hidden='true' />
          </a>
          <a href=''>
            <i style={{fontSize: 35, paddingLeft: 5, paddingRight: 5, color: '#40B7D8'}} className='fa fa-twitter-square' aria-hidden='true' />
          </a>
          <a href=''>
            <i style={{fontSize: 35, paddingLeft: 5, paddingRight: 5, color: '#1572B1'}} className='fa fa-linkedin-square' aria-hidden='true' />
          </a>
          <a href=''>
            <i style={{fontSize: 35, paddingLeft: 5, paddingRight: 5, color: '#D54937'}} className='fa fa-google-plus-square' aria-hidden='true' />
          </a>
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
  return (
    <NewsContainer disabled={props.disabled}>
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
    <NewsWrapper noPadding={props.noPadding}>
      <SearchBox withSearch={props.withSearch}>
        <SearchInput />
        <IconButton>
          <Icon className='fa fa-search' aria-hidden='true' />
        </IconButton>
      </SearchBox>
      <NewEntries>ENTRADAS RECIENTES</NewEntries>
      <hr style={{borderColor: 'red', width: '80%'}} />
      <Container>
        <NewsBlog disabled={props.disabled} />
        <NewsEvents>
          <Link to='/eventos' style={{width: '80%', textDecoration: 'none', textAlign: 'center', backgroundColor: 'darkred', padding: 10}}>
            <i className='fa fa-calendar' aria-hidden='true' style={{color: '#FFF', padding: 7, fontSize: 30 }} />
            <EventsTitle>Calendario de actividades y eventos</EventsTitle>
          </Link>
        </NewsEvents>
        <hr style={{borderColor: '#E4E5E4', width: '80%'}} />
        <NewsSponsors>
          <LogoLink href='http://expansion.mx/' target='blank'>
            <Sponsors src={'/assets/img/logo_expansion.jpg'} />
          </LogoLink>
          <LogoLink href='https://contralacorrupcion.mx/' target='blank'>
            <Sponsors isMCCI src={'/assets/img/mcci.png'} />
          </LogoLink>
          <LogoLink href='https://www.tm.org.mx/' target='blank'>
            <Sponsors style={{width: '100%'}} src={'/assets/img/transparencia_mexicana.png'} />
          </LogoLink>
        </NewsSponsors>
        <hr style={{borderColor: '#E4E5E4', width: '80%'}} />
      </Container>
      <Container bottom />
    </NewsWrapper>
  )
}
