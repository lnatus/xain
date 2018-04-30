import * as React from 'react'
import styled from 'styled-components'

const ProgressBarStyled = styled.div`
  width: 100%
  height: 5px;
  position: absolute;
  background: -webkit-linear-gradient(left , #67A0FA 30%, #8A51FF 80%, #67A0FA 100%) repeat;
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