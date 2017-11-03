import React, { Component } from 'react'
import {
    NavigationBar,
    SectionBanner,
    Main,
    Footer,
    ContentText,
    Content,
    MainSection,
    Banner500,
    Anchor,
    MiddleBanner,
    MiddleSection,
    MiddleLeft
} from '../../components'
import './styles.css'

export default class AboutUs extends Component {
  render () {
    return (
      <div style={{overflow: 'hidden'}}>
        <header>
          <SectionBanner image={'/assets/img/quienessomos_background.jpg'} title={'¿QUIÉNES SOMOS?'} subtitle={''} withBar />
        </header>
        <Main column>
          <MainSection isBig>
            <Content center column>
              <ContentText isBig>500 Frente a la Corrupción: Integridad Corporativa (IC500)</ContentText>
              <ContentText >Es una métrica de la publicidad de las políticas de integridad y anticorrupción de las 500 empresas</ContentText>
              <ContentText >más grandes del país, asi como una plataforma digital para darle seguimiento al compromiso y</ContentText>
              <ContentText >cumplimiento de estas empresas.</ContentText>
            </Content>
          </MainSection>
          <MiddleSection isMiddle>
            <MiddleLeft isMiddle column>
              <ContentText className='contentText'>
                Esta iniciativa, creada conjuntamente por <Anchor href='https://contralacorrupcion.mx/' target='_blank' bold>Mexicanos Contra la Corrupción y la impunidad</Anchor>,
              </ContentText>
              <ContentText className='contentText'>
                <Anchor href='https://www.tm.org.mx/' target='_blank' bold>Transparencia Mexicana</Anchor> y la revista <Anchor href='http://expansion.mx/' target='_blank' bold>Expansión</Anchor> busca dar a conocer los avances en el compromiso
              </ContentText>
              <ContentText className='contentTextLast'>
                  anticorrupción de las empresas más grandes del país.
              </ContentText>
              <ContentText className='contentTextFlex'>
                <p style={{fontWeight: 600}}>500 Frente a la Corrupción, Integridad Corporativa&nbsp;</p> se basa en el principio de que la
              </ContentText>
              <ContentText className='contentText'>
                publicidad de las políticas de integridad de las empresas se traduce en una mejor calidad y
              </ContentText>
              <ContentText className='contentText'>
                mayor efectividad en las medidas anticorrupción del sector privado, pues la adopción y
              </ContentText>
              <ContentText className='contentText'>
                difusión de buenas prácticas anticorrupción dentro de las empresas líderes tiene el potencial
              </ContentText>
              <ContentText className='contentText'>
                de impactar positivamente a toda la cadena de producción, así como a socios comerciales,
              </ContentText>
              <ContentText className='contentTextFlex'>
                proveedores y distribuidores.
              </ContentText>
              <br />
              <ContentText className='contentTextFlex'>
                De esa manera, <p style={{fontWeight: 600}}>&nbsp;500 Frente a la Corrupción, Integridad Corporativa&nbsp;</p>se une a la lucha anticorrupción
              </ContentText>
              <ContentText className='contentText'>
                en México y facilita la adopción y publicidad de las políticas de integridad en el sector
              </ContentText>
              <ContentText className='contentTextLast'>empresarial.</ContentText>
            </MiddleLeft>
            <Content isMiddle className='contentImage' column middleImg>
              <img width='400px' height='300px' src='/assets/img/quienessomos_logo.jpg' alt='' />
            </Content>
          </MiddleSection>
          <MainSection isBig>
            <Content center column>
              <ContentText isBig>Plataforma Digital IC500</ContentText>
              <ContentText >La Plataforma Digital IC500 nace como una herramienta dinámica para que cada vez</ContentText>
              <ContentText >más empresas se unan a la lucha contra la corrupción en la práctica.</ContentText>
            </Content>
          </MainSection>
          <MainSection isMiddleBanner>
            <Content>
              <MiddleBanner />
            </Content>
          </MainSection>
          <Banner500 margin='100px 0px' image='/assets/img/quienessomos_soyparte.jpg' />
        </Main>
        <Footer />
      </div>
    )
  }
}
