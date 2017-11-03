import styled from 'styled-components'
import React from 'react'

const WrapperBanner = styled.div`
  background-image: url(${props => props.image ? props.image : 'http://via.placeholder.com/2560x355'});
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.center) ? 'center' : 'flex-start'};
`
const SectionText = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content: ${props => (props.center) ? 'center' : 'space-around'};
  align-items: center;
  padding: 5px;
`
const Title = styled.h2`
  font-size: 60px;
  color: #FFF;
  padding: 3px;
  font-family: 'Druk Text Web';
  @media screen and (max-width: 597px) {
    font-size: 50px;
  }
  ${props => {
    if (props.isQuienes) {
      return `
        @media screen and (max-width:380px){
          text-align: center;
          font-size: 40px;
        }
      `
    }
  }}
`
const SubTitle = styled.p`
  font-size: 30px;
  color: #FFF;
  padding: 3px;
  font-family: 'Druk Text Web';
  text-align: center;
`
const DivisionBar = styled.hr`
  background-color: red;
  width: ${props => props.large ? '35%' : '20%'};
  height: 5px;
  border-width: 0px;
  -webkit-margin-before: 0.3em;
  -webkit-margin-after: 0.3em;
`
const SectionBanner = (props) => {
  return (
    <WrapperBanner image={props.image} center>
      <SectionText center>
        <Title isQuienes={props.isQuienes}>{props.title}</Title>
        <SubTitle>{props.subtitle}</SubTitle>
        {
            props.withBar
            ? <DivisionBar large />
            : null
        }
        {
            props.withBar
            ? <DivisionBar />
            : null
        }
      </SectionText>
    </WrapperBanner>
  )
}

export default SectionBanner
