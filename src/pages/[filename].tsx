import { GetStaticProps, NextPage } from 'next'
import { useTina } from 'tinacms/dist/edit-state'
import { ExperimentalGetTinaClient, PageQuery } from 'tina-types'
import Block from '../blocks/Block.server'
import SEO from '../components/SEO.server'
import { AsyncReturnType } from '../types/asyncReturnType'

const Page: NextPage<AsyncReturnType<typeof getStaticProps>['props']> = ({
  query,
  variables,
  data: originalData,
}) => {
  const { data } = useTina<PageQuery>({
    query,
    variables,
    data: originalData as PageQuery,
  })

  if (!data?.page) {
    return null
  }

  return (
    <main>
      <SEO data={data.page.seo} />

      {data?.page?.blocks?.map(
        (data, i) => data && <Block key={i} data={data} />
      )}
    </main>
  )
}

export const getStaticProps = async ({
  params,
}: GetStaticProps['arguments']) => {
  const client = ExperimentalGetTinaClient()
  const tinaProps = await client.ContentQuery({
    relativePath: `${params?.filename}.md`,
  })

  return {
    props: {
      data: tinaProps.data,
      query: tinaProps.query,
      variables: tinaProps.variables,
    },
  }
}

export const getStaticPaths = async () => {
  const client = ExperimentalGetTinaClient()
  const pagesListData = await client.pageConnection()

  return {
    paths: pagesListData.data.pageConnection.edges?.map((page) => ({
      params: { filename: page?.node?._sys.filename ?? '' },
    })),
    fallback: false,
  }
}

export default Page
