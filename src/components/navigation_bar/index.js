import React from 'react'
import styled from 'styled-components'
import {
  Link
} from 'react-router-dom'

const NavBar = styled.nav`
  width:100%;
  background:#ED4630;
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
  color:#FFF;
  font-weight:lighter;
  padding:20px 10px;
  transition:0.3s;
  border-radius:5px;
  &:hover{
    background:#d03e3d;
  }
`

const NavigationBar = (props) => (
  <section>
    <NavBar>
      <NavList>
        <NavItem>
          <Link to='/'>
            <NavLink>QUIÉNES SOMOS</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/articulo'>
            <NavLink>NOTICIAS</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/glosario'>
            <NavLink>GLOSARIO</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/'>
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
          <NavLink href='https://facebook.com' target='_blank'>
            <i className='fa fa-facebook' aria-hidden='true' />
          </NavLink>
          <NavLink href='https://twitter.com' target='_blank'>
            <i className='fa fa-twitter' aria-hidden='true' />
          </NavLink>
          <NavLink href='https://instagram.com' target='_blank'>
            <i className='fa fa-instagram' aria-hidden='true' />
          </NavLink>
          <NavLink href='https://youtube.com' target='_blank'>
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
  </section>
)

export default NavigationBar
