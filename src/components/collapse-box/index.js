import styled, {keyframes} from 'styled-components'

const open = keyframes`
  from{
    height:0px;
  }
  to{
    height:800px;
  }
`
const close = keyframes`
  from{
    height:800px;
  }
  to{
    height:0px;
  }
`

const CollapseBox = styled.div`
  width:80%;
  border-bottom:3px solid #ED4630;
  margin: 0 auto;
  margin-top: ${props => props.noMargin ? '0px' : '40px'};
  height:${(props) => (props.isOpen) ? '800px' : '0px'};
  overflow:hidden;
  animation-name:${(props) => (props.isOpen) ? open : close};
  animation-duration:1s;
`

export default CollapseBox
