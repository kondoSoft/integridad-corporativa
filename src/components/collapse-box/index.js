import styled, {keyframes} from 'styled-components'

const CollapseBox = styled.div`
  width:80%;
  border-bottom:3px solid #ED4630;
  margin: 0 auto;
  margin-top: ${props => props.noMargin ? '0px' : '40px'};
  height:${(props) => (props.isOpen) ? props.height : '0px'};
  overflow:${props => props.isOpen ? 'initial' : 'hidden'};
  animation-name:${(props) => (props.isOpen) ? keyframes`from{height: 0px; opacity:0;}to{height:${props.height};opacity:1;}` : keyframes`from{height: ${props.height};}to{height: 0px;}`};
  animation-duration:1s;
`
export const NewsBox = styled.div`
  width: 100%;
  border-bottom:3px solid #ED4630;
  margin-top: ${props => props.noMargin ? '0px' : '40px'};
  height:${(props) => (props.isOpen) ? props.height : '0px'};
  overflow:${props => props.isOpen ? 'initial' : 'hidden'};
  animation-name:${(props) => (props.isOpen) ? keyframes`from{height: 0px; opacity:0;}to{height:${props.height};opacity:1;}` : keyframes`from{height: ${props.height};}to{height: 0px;}`};
  animation-duration:1s;
`
export const SliderBox = styled.div`
  width: 90%;
  border-bottom:3px solid #ED4630;
  margin: 0 auto;
  margin-top: ${props => props.noMargin ? '0px' : '40px'};
  height:${(props) => (props.isOpen) ? props.height : '0px'};
  overflow:${props => props.isOpen ? 'initial' : 'hidden'};
  animation-name:${(props) => (props.isOpen) ? keyframes`from{height: 0px; opacity:0;}to{height:${props.height};opacity:1;}` : keyframes`from{height: ${props.height};}to{height: 0px;}`};
  animation-duration:1s;
`

export default CollapseBox
