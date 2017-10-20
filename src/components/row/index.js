import styled from 'styled-components'

const Row = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  flex-wrap:wrap;
  flex-flow:row;
  margin: ${ props => props.noMargin ? '0px' : '40px 0px'};
`

export default Row
