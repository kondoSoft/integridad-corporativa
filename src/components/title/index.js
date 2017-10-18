import styled from 'styled-components'

const Title = styled.h2`
  text-align:center;
  font-weight:bold;
  font-size:3em;
  margin-top:30px;
  font-family:'Druk Text Web';
  transition:0.3s;
  color: ${props => (props.color) ? props.color : null};
`

export default Title
