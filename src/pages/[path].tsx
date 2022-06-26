import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  NextPage,
} from 'next'
import { gql, staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'
import { PagePathsQuery, PageQuery } from '../../graphql-types'
import Block, { BlockPropsFragmentDocument } from '../blocks/Block.server'
import SEO, { SEOPropsFragmentDocument } from '../components/SEO.server'

const PageQueryDocument = gql`
  query Page($path: String!) {
    page(relativePath: $path) {
      id
      title
      seo {
        ...SEOProps
      }
      blocks {
        ...BlockProps
      }
    }
  }

  ${BlockPropsFragmentDocument}
  ${SEOPropsFragmentDocument}
`

const Page: NextPage<{ data: PageQuery } & Params> = ({
  data: originalData,
  path,
}) => {
  const { data } = useTina<PageQuery>({
    query: PageQueryDocument,
    variables: { path },
    data: originalData,
  })

  return (
    <main>
      <SEO data={data.page.seo} />

      {data?.page?.blocks?.map(
        (data, i) => data && <Block key={i} data={data} />
      )}
    </main>
  )
}

type Params = {
  path: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const path = `${params?.path}.json`

  const data = await staticRequest({
    query: PageQueryDocument,
    variables: {
      path,
    },
  })

  return { props: { data, path } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { pageConnection } = (await staticRequest({
    query: gql`
      query PagePaths {
        pageConnection {
          edges {
            node {
              id
              path
              blocks {
                ...BlockProps
              }
            }
          }
        }
      }

      ${BlockPropsFragmentDocument}
    `,
  })) as PagePathsQuery

  const paths: GetStaticPathsResult<Params>['paths'] =
    pageConnection.edges?.flatMap((edge) => {
      const path = edge?.node?.path

      if (!path) {
        return []
      }

      return {
        params: {
          path,
        },
      }
    }) ?? []

  return { paths, fallback: false }
}

export default Page
