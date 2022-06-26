import { NextSeo } from 'next-seo'
import { gql } from 'tinacms'
import { SeoPropsFragment } from '../../graphql-types'

type SEOProps = {
  data?: SeoPropsFragment | null
}

const SEO = ({ data }: SEOProps) => {
  return <NextSeo title={data?.title} description={data?.description} />
}

export const SEOPropsFragmentDocument = gql`
  fragment SEOProps on PageSeo {
    title
    description
  }
`
export default SEO
