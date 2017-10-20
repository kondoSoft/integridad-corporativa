import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
  list-style: none;
`

const Tab = styled.li`
  ${props => {
    if (props.active) {
      return(
       `background: #ED4630;
        color: #FFF; 
        font-weight: bold;
       `
      )
    }
  }}
  display: inline-block;
  padding: 10px 20px;
  border-right: 2px solid #ED4630;
  cursor: pointer;
  transition: 0.3s;
  &:nth-child(1){
    border-left: 2px solid #ED4630;
    
  }
  &:hover{
    background: #ED4630;
    color: #FFF;
    font-weight: bold;
  //   &:after{
  //     background: #ED4630;
  //   }
  }
  // &:after{
  //   content: '';
  //   display: inline-block;
  //   width: 25px;
  //   height: 25px;
  //   transform: rotate(45deg);
  //   transition: 0.3s;
  //   position: absolute;
  // }
`

const TabsShowBy = (props) => (
  <Wrapper>
    <Tab active>POR SECTOR</Tab>
    <Tab>POR PAÍS</Tab>
    <Tab>POR REGIÓN</Tab>
    <Tab>POR AÑO</Tab>
  </Wrapper>
)

export default TabsShowBy