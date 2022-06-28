import { css } from 'linaria'
import { TinaTemplate } from 'tinacms'
import { BaseBlockProps } from '../types/block'
import ImageBlock, { imageBlockField } from './ImageBlock.server'
import { PageBlocksHero } from 'tina-types'

export type HeroBlockProps = BaseBlockProps<PageBlocksHero>

const HeroBlock = ({ data }: HeroBlockProps) => {
  return (
    <section
      className={css`
        h1 {
          font-size: 2rem;
        }
      `}
    >
      <h1>{data?.headline}</h1>
      <p>{data?.text}</p>

      <ImageBlock data={data?.image} />
    </section>
  )
}

export const heroBlockTemplate: TinaTemplate = {
  name: 'hero',
  label: 'Hero',
  ui: {
    defaultItem: {
      headline: "Here's some text above the other text",
      text: 'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Headline',
      name: 'headline',
    },
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      ui: {
        component: 'markdown',
      },
    },
    imageBlockField,
  ],
}

export default HeroBlock
