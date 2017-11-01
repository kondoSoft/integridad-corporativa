import styled from 'styled-components'

const Section = styled.section`
  padding: ${props => props.isNews ? '30px 0px 30px 0px' : '30px'};
  background: ${props => (props.background) ? props.background : null};
  ${props => {
    if (props.isNews) {
      return `@media screen and (max-width: 1280px) {
        padding: 30px;
      }
      @media screen and (max-width: 597px) {
        padding: 30px 0px 30px 0px;
      }`
    }
  }}
`
export const EditionSection = styled.section`
  background: ${props => (props.background) ? props.background : null};  
`
export const SectionButtons = styled.div`
  display: ${props => props.disabled ? 'none' : 'flex'};
  ${props => {
    if (props.flexEnd) {
      return 'justify-content: flex-end;'
    }
    if (props.flexStart) {
      return 'justify-content: flex-start;'
    }
    return 'justify-content: space-around;'
  }}
  align-items: ${props => props.flexStart ? 'flex-start' : 'center'};
  flex-wrap: ${props => props.noWrap ? 'nowrap' : 'wrap'};
  flex-direction: ${props => props.invert ? 'row-reverse' : 'row'};
  margin: ${props => props.noMargin ? '0px' : props.margin ? props.margin : '40px 0px'};
  background: ${props => props.background ? props.background : null};
  width: ${props => props.width ? props.width : null};
  padding: ${props => props.padding ? props.padding : null};
  box-sizing: border-box;
  @media screen and (max-width: 669px) {
    flex-direction: column;
  } 
`
export const SectionGraphics = styled.section`
  padding: 0px 0px 0px 0px;
  background: ${props => (props.background) ? props.background : null};
`

export default Section
