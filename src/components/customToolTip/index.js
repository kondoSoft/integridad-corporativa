import React,{Component} from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  flex: 1;
`
const LabelContainer = styled.div`
  flex: 1;
  background-color: #fff;
`

class CustomTooltip extends Component{

  render() {
    console.log(this.props)
    const { active } = this.props
    if (active) {
      const { payload } = this.props
      return (
        <LabelContainer className="custom-tooltip">
          <p className="label">{`${this.props.Label} : ${payload[0].value}`}</p>
        </LabelContainer>
      )
    }
    return null
  }
}
export default CustomTooltip
