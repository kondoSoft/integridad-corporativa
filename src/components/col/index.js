import styled from 'styled-components'

const Col = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:${props => (props.center) ? 'center' : 'space-around'};
  align-items:center;
  Width: ${props => props.width ? props.width : null};
  margin: ${props => props.margin ? props.margin : null};
  background: ${props => props.background ? props.background : null};
  padding: ${props => props.padding ? props.padding : null};
`

export default Col
