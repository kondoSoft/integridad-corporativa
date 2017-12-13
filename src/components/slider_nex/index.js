import styled from 'styled-components'

const SliderNext = styled.button`
  border: none;
  position: absolute;
  font-size: 3em;
  top: 50%;
  right: 5%;
  background: none;
  color: #ED4630;
  cursor: pointer;
  transition: 0.3s;
  &:focus {
    outline: none;
  }
  &:hover {
    text-shadow: 5px 2px 5px rgba(0,0,0,0.5);
  }
`

export default SliderNext
