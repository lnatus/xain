import * as React from 'react'
import styled from 'styled-components'
import { theme } from '../common/theme'

const ProgressBarStyled = styled.div`
  width: 100%
  height: 3px;
  position: absolute;
  background: -webkit-linear-gradient(left , ${ theme.palette.secondary } 30%, ${ theme.palette.primary } 80%, ${ theme.palette.secondary } 100%) repeat;
  background-size: 50% 100%;
  animation-name: moving-gradient;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes moving-gradient {
    0% {
        background-position: left bottom;
    }

    100% {
        background-position: right bottom;
    }
  }​
`

export default class ProgressBar extends React.Component {
  public render() {
    return (
      <ProgressBarStyled />
    )
  }
}