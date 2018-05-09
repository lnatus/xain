import * as React from 'react'
import Moment from 'react-moment'
import styled from 'styled-components'
import { Col, Row } from 'react-flexbox-grid'
import { theme } from '../common/theme'

const BlockStyled = styled.li`
  padding: ${ theme.space.s }
  margin-bottom: ${ theme.space.s };
  background: ${ theme.palette.white };
  box-shadow: ${ theme.palette.shadow };
`
const IndexStyled = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  line-height: 60px;
  text-align: center;
  color:  ${ theme.palette.white };
  box-shadow: ${ theme.palette.shadow };
  background: ${ theme.palette.gradient };
`

const GenesisBlockStyled = BlockStyled.extend`
  background: ${ theme.palette.gradient };
  color: ${ theme.palette.white };
`

const GenesisIndexStyled = IndexStyled.extend`
  background: ${ theme.palette.white };
  color: ${ theme.palette.primary };
`

const GenesisCaptionStyled = styled.small`
  float: right;
  font-size: ${ theme.fontsize.xs };
  margin-top: ${ theme.space.s };
`

export interface IBlockProps {
  block: any
}

export default class Block extends React.Component<IBlockProps> {

  public render() {
    const block = this.props.block
    const BlockComponent =  block.index ? BlockStyled : GenesisBlockStyled
    const IndexComponent = block.index ? IndexStyled : GenesisIndexStyled
    return (
      <BlockComponent>
        <Row>
          <Col xs={12} md={12} lg={1}>
            <IndexComponent>
              { block.index }
            </IndexComponent>
          </Col>
          <Col xs={12} md={12} lg={11}>
          <div>
            <b>HASH: </b>
            { block.hash }
          </div>
          <div>
           <b>PARENT: </b>
           { block.parentHash }
          </div>
          <Moment format="DD.MM.YYYY HH:mm:ss">
            { block.timestamp }
          </Moment>
          { !block.index  &&
            <GenesisCaptionStyled>
              GENESIS BLOCK
            </GenesisCaptionStyled>
          }
         </Col>
        </Row>
      </BlockComponent>
    )
  }
}
