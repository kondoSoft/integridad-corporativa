import styled from 'styled-components'

const Anchor = styled.a`
  color: #ED462F;
  text-decoration: none;
  transition: 0.3s;
  &:hover{
    color: #000;
  }
  font-weight: ${props => props.bold ? '600' : null};
`

export default Anchor
