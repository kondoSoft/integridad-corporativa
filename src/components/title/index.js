import styled from 'styled-components'

const Title = styled.h2`
  text-align:center;
  font-weight: ${props => props.lighter ? 'lighter' : 'bold'};
  font-size: ${props => props.fontSize ? props.fontSize : '3em'};
  margin-top:30px;
  font-family:'Druk Text Web';
  transition:0.3s;
  color: ${props => (props.color) ? props.color : null};
  ${props => {
    if (props.Tablet) {
      return `@media screen and (max-width: 923px) {
          font-size: 2em;
        }`
    }
  }}
  ${props => {
    if (props.Cel) {
      return `
        @media screen and (max-width:380px) {
          font-size: 1.2em;
        }
      `
    }
  }}
`

export default Title
