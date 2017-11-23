import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Link
} from 'react-router-dom'

const NavBar = styled.nav`
  width:100%;
  background: #ED4630;
  display:flex;
  justify-content:space-around;
  @media screen and (max-width: 1165px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 945px) {
    flex-direction: row; 
  }
`
const NavList = styled.ul`
  width: 80%;
  list-style:none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1165px) {
    width: 100%;
    flex-direction: row;
  }
  @media screen and (max-width: 945px) {
   flex-direction: row; 
   display: none;
  }
  @media screen and (max-width: 731px) {
    width: 60%; 
  }
  @media screen and (max-width: 440px) {
    width: 40%; 
  }
`
const NavListSocials = styled.ul`
  width: 20%;
  list-style:none;
  @media screen and (max-width: 1165px) {
    flex-direction: column;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  @media screen and (max-width: 945px) {
    width: 20%;
  }
  @media screen and (max-width: 731px) {
    width: 40%; 
  }
  @media screen and (max-width: 440px) {
    width: 60%; 
  }
`

const NavItem = styled.li`
  display:inline-block;
  &:after{
    content:'';
    border-right:1px solid #FFF;
  }
  &:nth-child(1){
    &:before{
      content:'';
      border-right:1px solid #FFF;
    }
  }
  @media screen and (max-width:468px){
    &:after{
      content:'';
      border-right:0px;
    }
    &:nth-child(1){
      &:before{
        content:'';
        border-right:0px;
      }
    } 
  }
  ${props => {
    if (props.isResponsiveMenu) {
      return `
        width: 100%;
        &:after{
          content:'';
          border-right:0px;
        }
        &:nth-child(1){
          &:before{
            content:'';
            border-right:0px;
          }
        }
        &:hover{
          background: #d03e3d;
          cursor: pointer;
        }
      `
    }
  }}
`

const NavLink = styled.a`
  display:inline-block;
  text-decoration:none;
  color: #FFF;
  font-weight:lighter;
  padding: 15px 15px;
  transition:0.3s;
  font-size: ${props => props.isSocial ? '18px' : '16px'};
  &:hover{
    background: #d03e3d;
    cursor: pointer;
  }
  @media screen and (max-width:476px){
    font-size: 16px;
  }
  ${props => {
    if (props.isResponsiveMenu) {
      return `width: 100%;`
    }
  }}
`
const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 57;
  right: 0;
  z-index: 4;
  background-color: #ED4630;
  @media screen and (max-width:476px){
    flex-direction: column;
  }
  ${props => {
    if (props.isResponsiveMenu) {
      return `
        flex-direction: column;
        width: 100%;
      `
    }
  }}
`
const SocialIcon = styled.i`
  font-size: 22px;
  color: #FFF;
  padding: 10px;
  @media screen and (max-width:476px){
    display: none;
  }
`
const HamMenu = styled.div`
  width: 80%;
  list-style:none;
  display: none;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 945px) {
    display: flex;
  }
  
`
const MenuIcon = styled.i`
  color: #FFF;
  font-size: 25px;
`

class NavigationBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isHover: false,
      social: '',
      showMenu: false
    }
    this.isHover = this.isHover.bind(this)
    this.isLeave = this.isLeave.bind(this)
    this.showMenu = this.showMenu.bind(this)
  }
  render () {
    return (
      <section>
        <NavBar>
          <HamMenu>
            <NavLink onClick={() => this.showMenu()}>
              <MenuIcon className='fa fa-bars' aria-hidden='true' />
            </NavLink>
          </HamMenu>
          <NavList>
            <NavItem>
              <Link to='/'>
                <NavLink onClick={e => window.scrollTo(0, 0)}>INICIO</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/quienes-somos'>
                <NavLink>QUIÉNES SOMOS</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/noticias'>
                <NavLink>NOTICIAS</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/glosario'>
                <NavLink>GLOSARIO</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/metodologia'>
                <NavLink>METODOLOGÍA</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/contacto'>
                <NavLink href='#'>CONTACTO</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href={`http://integridadcorporativa500.mx:8000/login/`}>SOY PARTE DE LAS 500</NavLink>
            </NavItem>
          </NavList>
          <NavListSocials>
            <NavItem>
              <NavLink isSocial onClick={() => this.isHover('fb')} >
                <i className='fa fa-facebook' aria-hidden='true' />
              </NavLink>
              <NavLink isSocial onClick={() => this.isHover('twt')} >
                <i className='fa fa-twitter' aria-hidden='true' />
              </NavLink>
              {/* <NavLink onClick={this.isHover} href='https://instagram.com' target='_blank'>
                <i className='fa fa-instagram' aria-hidden='true' />
              </NavLink> */}
              <NavLink isSocial onClick={this.isHover} href='https://www.youtube.com/channel/UCr052Of4pfPKREgfVITItZw' target='_blank'>
                <i className='fa fa-youtube-play' aria-hidden='true' />
              </NavLink>
            </NavItem>
            <NavItem style={{display: 'none'}}>
              <NavLink>
                <i className='fa fa-search' aria-hidden='true' />
              </NavLink>
            </NavItem>
          </NavListSocials>
        </NavBar>
        {
          this.state.isHover
          ? <SocialsContainer onMouseEnter={() => this.isHover(this.state.social)} onMouseLeave={this.isLeave}>
            {
              this.state.social === 'fb'
                ? <SocialIcon className='fa fa-facebook' aria-hidden='true' />
                : <SocialIcon className='fa fa-twitter' aria-hidden='true' />
            }
            <NavLink onClick={this.isLeave} isSocial href={(this.state.social === 'fb') ? 'https://facebook.com/MXvsCORRUPCION' : 'https://twitter.com/MXvsCORRUPCION'} target='blank'>
                @MXvsCORRUPCION
              </NavLink>
            <NavLink onClick={this.isLeave} isSocial href={(this.state.social === 'fb') ? 'https://facebook.com/TransparenciaMexicana' : 'https://twitter.com/IntegridadMx'} target='blank'>
              {
                  (this.state.social === 'fb') ? '@TransparenciaMexicana' : '@IntegridadMX'
                }
            </NavLink>
          </SocialsContainer>
          : null
        }
        {
          this.state.showMenu
            ? <SocialsContainer isResponsiveMenu>
              <NavItem isResponsiveMenu>
                <Link onClick={() => this.showMenu()} to='/'>
                  <NavLink isResponsiveMenu onClick={e => window.scrollTo(0, 0)}>INICIO</NavLink>
                </Link>
              </NavItem>
              <NavItem isResponsiveMenu>
                <Link onClick={() => this.showMenu()} to='/quienes-somos'>
                  <NavLink isResponsiveMenu>QUIÉNES SOMOS</NavLink>
                </Link>
              </NavItem>
              <NavItem isResponsiveMenu>
                <Link onClick={() => this.showMenu()} to='/noticias'>
                  <NavLink isResponsiveMenu>NOTICIAS</NavLink>
                </Link>
              </NavItem>
              <NavItem isResponsiveMenu>
                <Link onClick={() => this.showMenu()} to='/glosario'>
                  <NavLink isResponsiveMenu>GLOSARIO</NavLink>
                </Link>
              </NavItem>
              <NavItem isResponsiveMenu>
                <Link onClick={() => this.showMenu()}to='/metodologia'>
                  <NavLink isResponsiveMenu>METODOLOGÍA</NavLink>
                </Link>
              </NavItem>
              <NavItem isResponsiveMenu>
                <Link onClick={() => this.showMenu()} to='/contacto'>
                  <NavLink isResponsiveMenu href='#'>CONTACTO</NavLink>
                </Link>
              </NavItem>
              <NavItem isResponsiveMenu>
                <NavLink isResponsiveMenu href='#'>SOY PARTE DE LAS 500</NavLink>
              </NavItem>
            </SocialsContainer>
          : null
        }
      </section>
    )
  }
  isHover (social) {
    this.setState({
      isHover: true,
      social
    })
  }
  isLeave () {
    this.setState({
      isHover: false,
      social: ''
    })
  }
  showMenu () {
    console.log('se ejecuta la hamburguesa')
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
}

export default NavigationBar
