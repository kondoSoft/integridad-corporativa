import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  ${props => {
    if (props.flexEnd) {
      return 'justify-content: flex-end;'
    }
    if (props.flexStart) {
      return 'justify-content: flex-start;'
    }
    return 'justify-content: space-around;'
  }}
  align-items: ${props => props.flexStart ? 'flex-start' : 'center'};
  flex-wrap: ${props => props.noWrap ? 'nowrap' : 'wrap'};
  flex-direction: ${props => props.invert ? 'row-reverse' : 'row'};
  margin: ${props => props.noMargin ? '0px' : props.margin ? props.margin : '40px 0px'};
  background: ${props => props.background ? props.background : null};
  width: ${props => props.width ? props.width : null};
  padding: ${props => props.padding ? props.padding : null};
  box-sizing: border-box;
`

export default Row
