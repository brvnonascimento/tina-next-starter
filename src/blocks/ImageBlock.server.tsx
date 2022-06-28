import { TinaField } from '@tinacms/cli'
import Image, { ImageProps } from 'next/image'
import { PageBlocksImage } from '../../.tina/__generated__/types'
import { BaseBlockProps } from '../types/block'

export type ImageBlockProps = Omit<ImageProps, 'src' | 'alt'> &
  BaseBlockProps<PageBlocksImage>

const ImageBlock = ({ data, ...props }: ImageBlockProps) => {
  if (!data) {
    return null
  }

  const { src, alt, width, height } = data

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      width={width && width?.toString()?.length > 0 ? width : 300}
      height={height && height?.toString()?.length > 0 ? height : 300}
    />
  )
}

export const imageBlockField: TinaField = {
  label: 'Image',
  name: 'image',
  type: 'object',
  fields: [
    {
      type: 'image',
      name: 'src',
      label: 'Image Source',
      required: true,
    },
    {
      type: 'string',
      name: 'alt',
      label: 'Image Alt Text',
      required: true,
    },
    {
      type: 'number',
      name: 'width',
      label: 'Width',
      required: true,
      ui: {
        defaultValue: 300,
      },
    },
    {
      type: 'number',
      name: 'height',
      label: 'Height',
      required: true,
      ui: {
        defaultValue: 300,
      },
    },
  ],
}

export default ImageBlock
