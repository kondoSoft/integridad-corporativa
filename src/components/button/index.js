import styled from 'styled-components'

const Button = styled.div`
  cursor: pointer;
  border: 3px solid #ED4630;
  display: inline-block;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 400;
  padding: 15px 40px;
  color: #ED4630;
  transition: 0.3s;
  &:hover{
    background: #ED4630;
    color: #FFF;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
  }
  &:active{
    box-shadow: none;
  }
  ${props => {
    if (props.invert) {
      return (
        `
          background: #ED4630;
          color: #FFF;
          &:hover{
            background: none;
            color: #ED4630;
            box-shadow: none;
          }
        `
      )
    }
  }}
`

export default Button
