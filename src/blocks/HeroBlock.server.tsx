import { css } from 'linaria'
import { gql, TinaTemplate } from 'tinacms'
import { HeroBlockPropsFragment } from '../../graphql-types'
import { BaseBlockProps } from '../types/block'

export type HeroBlockProps = BaseBlockProps<HeroBlockPropsFragment>

const HeroBlock = ({ data }: HeroBlockProps) => {
  return (
    <section
      className={css`
        h1 {
          font-size: 2rem;
        }
      `}
    >
      <h1>{data.headline}</h1>
      <p>{data.text}</p>
    </section>
  )
}

export const HeroBlockPropsFragmentDocument = gql`
  fragment HeroBlockProps on PageBlocksHero {
    headline
    text
  }
`

export const heroBlock: TinaTemplate = {
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
  ],
}

export default HeroBlock
