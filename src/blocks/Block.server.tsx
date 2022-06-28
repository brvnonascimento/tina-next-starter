import dynamic from 'next/dynamic'
import { ComponentType } from 'react'
import { BaseBlockProps, BaseBlockPropsWithTypename } from '../types/block'
import { HeroBlockProps } from './HeroBlock.server'
import { ImageBlockProps } from './ImageBlock.server'
import { PageBlocks } from 'tina-types'

const HeroBlock = dynamic<HeroBlockProps>(() => import('./HeroBlock.server'))
const ImageBlock = dynamic<ImageBlockProps>(() => import('./ImageBlock.server'))

const blocks: Record<
  NonNullable<PageBlocks['__typename']>,
  ComponentType<BaseBlockProps>
> = {
  PageBlocksHero: HeroBlock,
  PageBlocksImage: ImageBlock,
}

type BlockProps = BaseBlockPropsWithTypename<PageBlocks>

export const Block = (props: BlockProps) => {
  const typeName = props?.data?.__typename

  if (!typeName) {
    return null
  }

  const Block = blocks[typeName]

  return <Block data={props.data} />
}

export default Block
