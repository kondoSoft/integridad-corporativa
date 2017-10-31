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
`

const Title = styled.h2`
  font-size:2em;
  color:#FFF;
  font-weight:bolder;
  vertical-align:middle;
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
`

const Column = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const Banner500 = (props) => (
  <Wrapper margin={props.margin} image={props.image}>
    <Title>SOY PARTE DE LAS <Span>500</Span></Title>
    <Column>
      <Button>
        Actualiza aquí&nbsp;<i className='fa fa-chevron-right' aria-hidden='true' />
      </Button>
      <Description>tu información sobre integridad corporativa a partir del 15 de noviembre</Description>
    </Column>
  </Wrapper>
)

export default Banner500
