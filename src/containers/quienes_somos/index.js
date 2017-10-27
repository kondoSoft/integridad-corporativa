import React, { Component } from 'react'
import {
    NavigationBar,
    SectionBanner,
    Main,
    Footer,
    ContentText,
    Content,
    MainSection,
    BottomBanner,
    BackBannerContent,
    Button,
    Banner500
} from '../../components'
import './styles.css'

export default class AboutUs extends Component {
  render () {
    return (
      <div>
        <header>
          <SectionBanner image={'assets/img/glosario_background.jpg'} title={'¿QUIÉNES SOMOS?'} subtitle={''} withBar />
        </header>
        <Main column>
          <MainSection isBig>
            <Content center column>
              <ContentText isBig>500 Frente a la Corrupción: Integridad Corporativa (IC500)</ContentText>
              <ContentText>Es una metrica de la publicidad de las politicas de integridad y anticorrupcion de las 500 empresas</ContentText>
              <ContentText>mas grandes del pais, asi como una plataforma digital para darle seguimiento al compromiso y</ContentText>
              <ContentText>cumplimiento de estas empresas.</ContentText>
            </Content>
          </MainSection>
          <MainSection className='middleSection'>
            <Content className='contentLeft' column>
              <ContentText className='contentText'>
                Esta iniciativa, creada conjuntamente por Mexicanos Contra la Corrupcion, Transparencia
              </ContentText>
              <ContentText className='contentText'>
                Mexicana y la revista Expansion busca dar a conocer los avances en el compromiso
              </ContentText>
              <ContentText className='contentTextLast'>
                  anticorrupcion de las empresas mas grandes del pais.
              </ContentText>
              <ContentText className='contentTextFlex'>
                <p style={{fontWeight: 600}}>&nbsp;500 Frente a la Corrupcion, Integridad Corporativa&nbsp;</p> se basa en el principio de que la
              </ContentText>
              <ContentText className='contentText'>
                publicidad de las politicas de integridad de las empresas se traduce en una mejor calidad y
              </ContentText>
              <ContentText className='contentText'>
                mayor efectividad en las medidas anticorrupcion del sector privado, pues la adoptacion y
              </ContentText>
              <ContentText className='contentText'>
                difusion de buenas practicas anticorrupcion dentro de las empresas lideres tiene el potencial
              </ContentText>
              <ContentText className='contentText'>
                de impactar positivamente a toda la cadena de produccion, asi como a socios comerciales,
              </ContentText>
              <ContentText className='contentTextFlex'>
                proovedores y distribuidores.
              </ContentText>
              <ContentText className='contentTextFlex'>
                De esa manera, <p style={{fontWeight: 600}}>&nbsp;500 Frente a la Corrupcion, Integridad Corporativa&nbsp;</p> a la lucha anticorrupcion
              </ContentText>
              <ContentText className='contentText'>
                en Mexico y facilita la adopcion y publicidad de las politicas de integridad en el sector
              </ContentText>
              <ContentText className='contentTextLast'>empresarial.</ContentText>
            </Content>
            <Content className='contentImage' column>
              <img width='400px' height='300px' src='assets/img/quienessomos_logo.jpg' alt='' />
            </Content>
          </MainSection>
          <Banner500 margin='100px 0px'/>
          {/*<BottomBanner isBig>
            <BackBannerContent image={'assets/img/quienessomos_soyparte.jpg'} center className='backBanner'>
              <Content className='backBannerContentLeft'>
                <p className='backBannerContentLeftText'>SOY PARTE DE LAS&nbsp;<p style={{fontSize: 60}}>&nbsp;500</p></p>
              </Content>
               <Content center column className='backBannerContentRigth'>
                <Button className='button'>
                  <p style={{fontSize: 26, paddingRight: 10}}>Actualiza aquí</p>
                  <i style={{fontSize: 26, paddingTop: 3}} className='fa fa-chevron-right' aria-hidden='true' />
                </Button>
                <ContentText className='bottomButton'>tu información sobre integridad corporativa</ContentText>
              </Content> 
            </BackBannerContent>
          </BottomBanner>*/}
        </Main>
        <Footer />
      </div>
    )
  }
}
