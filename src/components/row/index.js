import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  justify-content: ${props => props.flexStart ? 'flex-start' : 'space-around'};
  align-items: ${props => props.flexStart ? 'flex-start' : 'center'};
  flex-wrap: wrap;
  flex-flow: row;
  margin: ${props => props.noMargin ? '0px' : '40px 0px'};
  background: ${props => props.background ? props.background : null};
  width: ${props => props.width ? props.width : null};
  padding: ${props => props.padding ? props.padding : null};
`

export default Row
