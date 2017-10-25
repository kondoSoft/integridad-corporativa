import React, { Component } from 'react'
import styled from 'styled-components'

class TabsShowBy extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isPressed: '1'
    }
    this.onClicked = this.onClicked.bind(this)
  }
  onClicked (n) {
    this.setState({
      activated: true,
      isPressed: n
    })
    this.props.Graphics(n)
  }
  render () {
    const { isPressed } = this.state
    return (
      <Wrapper>
        <Tab active={(isPressed === '1')} onClick={() => this.onClicked('1')} >POR SECTOR</Tab>
        <Tab active={(isPressed === '2')} onClick={() => this.onClicked('2')} >POR PAÍS</Tab>
        <Tab active={(isPressed === '3')} onClick={() => this.onClicked('3')} >POR REGIÓN</Tab>
        <Tab active={(isPressed === '4')} onClick={() => this.onClicked('4')} >POR AÑO</Tab>
      </Wrapper>
    )
  }
}
const Wrapper = styled.ul`
  list-style: none;
`

const Tab = styled.li`
  ${props => {
    if (props.active) {
      return (
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

// const TabsShowBy = (props) => (
//   <Wrapper>
//     <Tab onPress={props.onPress} active={(props.isPressed === 1) ? props.active : false}>POR SECTOR</Tab>
//     <Tab onPress={props.onPress} active={(props.isPressed === 2) ? props.active : false}>POR PAÍS</Tab>
//     <Tab onPress={props.onPress} active={(props.isPressed === 3) ? props.active : false}>POR REGIÓN</Tab>
//     <Tab onPress={props.onPress} active={(props.isPressed === 4) ? props.active : false}>POR AÑO</Tab>
//   </Wrapper>
// )

export default TabsShowBy
