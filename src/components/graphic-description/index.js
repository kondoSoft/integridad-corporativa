import styled from 'styled-components'
import React from 'react'

export const GraphicDescription = styled.p`
  text-align: center;
  margin: auto 10%;
`
export const CustomizedAxisTick = (props) => {
  const {x, y, stroke, payload} = props
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={-10} y={-10} dy={16} textAnchor='end' fill='#666' transform='rotate(-90)'>{payload.value}</text>
    </g>
  )
}
