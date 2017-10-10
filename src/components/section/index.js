import styled from 'styled-components'

const Section = styled.section`
  padding:30px;
  background: ${props => (props.background) ? props.background : null};
`

export default Section
