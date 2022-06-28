export type BaseBlockProps<DataFragment = any> = {
  data?: Omit<DataFragment, '__typename'> | null
}

export type BaseBlockPropsWithTypename<DataFragment = any> =
  BaseBlockProps<DataFragment> & {
    data?: DataFragment | null
  }
