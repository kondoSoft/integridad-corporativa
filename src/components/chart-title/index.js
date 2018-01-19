import styled from 'styled-components'

const ChartTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 20px;
  text-align: center;
  width: ${props => props.width ? props.width : null};
`
export default ChartTitle
