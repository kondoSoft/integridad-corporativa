import styled from 'styled-components'

const Col = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:${props => (props.center) ? 'center' : 'space-around'};
  align-items:center;
  Width: ${props => props.width ? props.width : null};
  margin: ${props => props.margin ? props.margin : null};
`

export default Col
