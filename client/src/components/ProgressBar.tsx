import * as React from 'react'
import styled from 'styled-components'
import { theme } from '../common/theme'
import { movingGradient } from '../common/keyframes'

const ProgressBarStyled = styled.div`
  width: 100%
  height: 3px;
  position: absolute;
  background-size: 50% 100%;
  animation: 18s ${ movingGradient } linear infinite 1s;
  background: -webkit-linear-gradient(left , ${ theme.palette.secondary } 30%, ${ theme.palette.primary } 80%, ${ theme.palette.secondary } 100%) repeat;
`

export default class ProgressBar extends React.Component {
  public render() {
    return (
      <ProgressBarStyled />
    )
  }
}