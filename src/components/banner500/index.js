import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-image: ${props => props.image ? `url('${props.image}')` : "url('assets/img/soyparte_background.jpg')"};
  background-size: cover;
  background-repeat:no-repeat;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  padding:20px 0px 40px 0px;
  height:150px;
  margin: ${props => props.margin ? props.margin : null};
  @media screen and (max-width: 768px) {
    padding: 10px 0px 10px 0px;
  }
  @media screen and (max-width: 597px) {
    margin: 50px 0px;
  }
`
const Button = styled.div`
  cursor:pointer;
  border:3px solid #FFF;
  display:inline-block;
  box-sizing:border-box;
  font-size:24px;
  font-weight:400;
  padding:15px 40px;
  color:#FFF;
  transition:0.3s;
  &:hover{
    background:#FFF;
    color:#ED4630;
    box-shadow:0px 0px 15px 0px rgba(0,0,0,0.5);
  }
  &:active{
    box-shadow:none;
  }
  @media screen and (max-width: 1056px) {

  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding: 10px 10px;
  }
  @media screen and (max-width: 487px) {
    font-size: 18px;
    padding: 10px 10px;
  }
`

const Title = styled.h2`
  width: 50%;
  padding: 10px;
  font-size:2em;
  color:#FFF;
  font-weight:bolder;
  vertical-align:middle;
  @media screen and (max-width: 1056px) {
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`

const Span = styled.span`
  font-size:3em;
  position:relative;
  top:20px;
`

const Description = styled.p`
  color:#FFF;
  margin-top:15px;
  font-size:24px;
  font-weight:300;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 487px) {
    font-size: 14px;
  }
`

const Column = styled.div`
  width: 50%;
  padding: 40px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`
const ENDPOINT = '165.227.53.250'

const Banner500 = (props) => (
  <Wrapper margin={props.margin} image={props.image}>
    <Title>SOY PARTE DE LAS <Span>500</Span></Title>
    <Column>
      <a href={`http://${ENDPOINT}:8000/login/`}>
        <Button>
          Actualiza aquí&nbsp;<i className='fa fa-chevron-right' aria-hidden='true' />
        </Button>
      </a>
      <Description>tu información sobre integridad corporativa</Description>
    </Column>
  </Wrapper>
)

export default Banner500
