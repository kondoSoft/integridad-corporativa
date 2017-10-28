import styled from 'styled-components'
import React from 'react'
import {Article} from '../articulo'

const NewsBox = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${props => props.noPadding ? '0px' : '15px'};
  align-items: center;
`
export const NewsContainer = (props) => {
  return (
    <NewsBox noPadding={props.noPadding}>
      <Article disabled expanded column data={props.data} />
    </NewsBox>
  )
}
