import dynamic from 'next/dynamic'
import { ComponentType } from 'react'
import { gql } from 'tinacms'
import { BlockPropsFragment } from '../../graphql-types'
import { BaseBlockProps } from '../types/block'
import {
  HeroBlockProps,
  HeroBlockPropsFragmentDocument,
} from './HeroBlock.server'

const HeroBlock = dynamic<HeroBlockProps>(() => import('./HeroBlock.server'))

const blocks: Record<
  BlockProps['data']['__typename'],
  ComponentType<BaseBlockProps>
> = {
  PageBlocksHero: HeroBlock,
}

type BlockProps = BaseBlockProps<BlockPropsFragment>

export const Block = (props: BlockProps) => {
  const Block = blocks[props.data.__typename]

  return <Block data={props.data} />
}

export const BlockPropsFragmentDocument = gql`
  fragment BlockProps on PageBlocks {
    __typename
    ...HeroBlockProps
  }

  ${HeroBlockPropsFragmentDocument}
`
export default Block
