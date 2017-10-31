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
`
const NavList = styled.ul`
  list-style:none;
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
`

const NavLink = styled.a`
  display:inline-block;
  text-decoration:none;
  color: #FFF;
  font-weight:lighter;
  padding:20px 10px;
  transition:0.3s;
  border-radius: ${props => props.isSocial ? '0px' : '5px'};
  &:hover{
    background: #d03e3d;
    cursor: pointer;
  }
`
class NavigationBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isHover: false
    }
    this.isHover = this.isHover.bind(this)
    this.isLeave = this.isLeave.bind(this)
  }
  render () {
    return (
      <section>
        <NavBar>
          <NavList>
            <NavItem>
              <Link to='/'>
                <NavLink>INICIO</NavLink>
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
              <NavLink href='#'>SOY PARTE DE LAS 500</NavLink>
            </NavItem>
          </NavList>
          <NavList>
            <NavItem>
              <NavLink onMouseEnter={this.isHover} onMouseLeave={this.isLeave} href='https://facebook.com' target='_blank'>
                <i className='fa fa-facebook' aria-hidden='true' />
              </NavLink>
              <NavLink onMouseEnter={this.isHover} onMouseLeave={this.isLeave} href='https://twitter.com' target='_blank'>
                <i className='fa fa-twitter' aria-hidden='true' />
              </NavLink>
              <NavLink onMouseEnter={this.isHover} onMouseLeave={this.isLeave} href='https://instagram.com' target='_blank'>
                <i className='fa fa-instagram' aria-hidden='true' />
              </NavLink>
              <NavLink onMouseEnter={this.isHover} onMouseLeave={this.isLeave} href='https://youtube.com' target='_blank'>
                <i className='fa fa-youtube-play' aria-hidden='true' />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <i className='fa fa-search' aria-hidden='true' />
              </NavLink>
            </NavItem>
          </NavList>
        </NavBar>
        {
          this.state.isHover
          ? <div onMouseEnter={this.isHover} onMouseLeave={this.isLeave} style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', top: 57, right: 0, zIndex: 4, width: '20%'}}>
            <div style={{backgroundColor: '#ED4630', display: 'flex'}}>
              <NavLink isSocial>
                @Expansión
              </NavLink>
              <NavLink isSocial>
                @TransparenciaMexicana
              </NavLink>
            </div>
          </div>
          : null
        }
      </section>
    )
  }
  isHover () {
    this.setState({
      isHover: true
    })
  }
  isLeave () {
    this.setState({
      isHover: false
    })
  }
}

export default NavigationBar
