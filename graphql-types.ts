export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  JSON: any
  /** References another document, used as a foreign key */
  Reference: any
}

export type Collection = {
  __typename?: 'Collection'
  documents: DocumentConnection
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>
  format?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  matches?: Maybe<Scalars['String']>
  name: Scalars['String']
  path: Scalars['String']
  slug: Scalars['String']
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>
}

export type CollectionDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Float']>
  last?: InputMaybe<Scalars['Float']>
  sort?: InputMaybe<Scalars['String']>
}

/** A relay-compliant pagination connection */
export type Connection = {
  pageInfo: PageInfo
  totalCount: Scalars['Float']
}

export type Document = {
  _sys?: Maybe<SystemInfo>
  _values: Scalars['JSON']
  id: Scalars['ID']
}

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection'
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>
  pageInfo: PageInfo
  totalCount: Scalars['Float']
}

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges'
  cursor: Scalars['String']
  node?: Maybe<DocumentNode>
}

export type DocumentMutation = {
  page?: InputMaybe<PageMutation>
  posts?: InputMaybe<PostsMutation>
}

export type DocumentNode = Page | Posts

export type Mutation = {
  __typename?: 'Mutation'
  addPendingDocument: DocumentNode
  createDocument: DocumentNode
  createPage: Page
  createPosts: Posts
  deleteDocument: DocumentNode
  updateDocument: DocumentNode
  updatePage: Page
  updatePosts: Posts
}

export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String']
  relativePath: Scalars['String']
  template?: InputMaybe<Scalars['String']>
}

export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>
  params: DocumentMutation
  relativePath: Scalars['String']
}

export type MutationCreatePageArgs = {
  params: PageMutation
  relativePath: Scalars['String']
}

export type MutationCreatePostsArgs = {
  params: PostsMutation
  relativePath: Scalars['String']
}

export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>
  relativePath: Scalars['String']
}

export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>
  params: DocumentMutation
  relativePath: Scalars['String']
}

export type MutationUpdatePageArgs = {
  params: PageMutation
  relativePath: Scalars['String']
}

export type MutationUpdatePostsArgs = {
  params: PostsMutation
  relativePath: Scalars['String']
}

export type Node = {
  id: Scalars['ID']
}

export type Page = Document &
  Node & {
    __typename?: 'Page'
    _sys: SystemInfo
    _values: Scalars['JSON']
    blocks?: Maybe<Array<Maybe<PageBlocks>>>
    id: Scalars['ID']
    path: Scalars['String']
    title: Scalars['String']
  }

export type PageBlocks = PageBlocksHero

export type PageBlocksHero = {
  __typename?: 'PageBlocksHero'
  headline?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
}

export type PageBlocksHeroMutation = {
  headline?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
}

export type PageBlocksMutation = {
  hero?: InputMaybe<PageBlocksHeroMutation>
}

export type PageConnection = Connection & {
  __typename?: 'PageConnection'
  edges?: Maybe<Array<Maybe<PageConnectionEdges>>>
  pageInfo: PageInfo
  totalCount: Scalars['Float']
}

export type PageConnectionEdges = {
  __typename?: 'PageConnectionEdges'
  cursor: Scalars['String']
  node?: Maybe<Page>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor: Scalars['String']
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor: Scalars['String']
}

export type PageMutation = {
  blocks?: InputMaybe<Array<InputMaybe<PageBlocksMutation>>>
  path?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type Posts = Document &
  Node & {
    __typename?: 'Posts'
    _sys: SystemInfo
    _values: Scalars['JSON']
    body?: Maybe<Scalars['JSON']>
    id: Scalars['ID']
    title?: Maybe<Scalars['String']>
  }

export type PostsConnection = Connection & {
  __typename?: 'PostsConnection'
  edges?: Maybe<Array<Maybe<PostsConnectionEdges>>>
  pageInfo: PageInfo
  totalCount: Scalars['Float']
}

export type PostsConnectionEdges = {
  __typename?: 'PostsConnectionEdges'
  cursor: Scalars['String']
  node?: Maybe<Posts>
}

export type PostsMutation = {
  body?: InputMaybe<Scalars['JSON']>
  title?: InputMaybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  collection: Collection
  collections: Array<Collection>
  document: DocumentNode
  getOptimizedQuery?: Maybe<Scalars['String']>
  node: Node
  page: Page
  pageConnection: PageConnection
  posts: Posts
  postsConnection: PostsConnection
}

export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>
}

export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>
  relativePath?: InputMaybe<Scalars['String']>
}

export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String']
}

export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>
}

export type QueryPageArgs = {
  relativePath?: InputMaybe<Scalars['String']>
}

export type QueryPageConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Float']>
  last?: InputMaybe<Scalars['Float']>
  sort?: InputMaybe<Scalars['String']>
}

export type QueryPostsArgs = {
  relativePath?: InputMaybe<Scalars['String']>
}

export type QueryPostsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Float']>
  last?: InputMaybe<Scalars['Float']>
  sort?: InputMaybe<Scalars['String']>
}

export type SystemInfo = {
  __typename?: 'SystemInfo'
  basename: Scalars['String']
  breadcrumbs: Array<Scalars['String']>
  collection: Collection
  extension: Scalars['String']
  filename: Scalars['String']
  path: Scalars['String']
  relativePath: Scalars['String']
  template: Scalars['String']
  title?: Maybe<Scalars['String']>
}

export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>
}

export type BlockPropsFragment = {
  __typename: 'PageBlocksHero'
  headline?: string | null
  text?: string | null
}

export type HeroBlockPropsFragment = {
  __typename?: 'PageBlocksHero'
  headline?: string | null
  text?: string | null
}

export type PageQueryVariables = Exact<{
  path: Scalars['String']
}>

export type PageQuery = {
  __typename?: 'Query'
  page: {
    __typename?: 'Page'
    id: string
    title: string
    blocks?: Array<{
      __typename: 'PageBlocksHero'
      headline?: string | null
      text?: string | null
    } | null> | null
  }
}

export type PagePathsQueryVariables = Exact<{ [key: string]: never }>

export type PagePathsQuery = {
  __typename?: 'Query'
  pageConnection: {
    __typename?: 'PageConnection'
    edges?: Array<{
      __typename?: 'PageConnectionEdges'
      node?: {
        __typename?: 'Page'
        id: string
        path: string
        blocks?: Array<{
          __typename: 'PageBlocksHero'
          headline?: string | null
          text?: string | null
        } | null> | null
      } | null
    } | null> | null
  }
}
