import { TinaField } from '@tinacms/cli'

export const imageObjectTemplate: TinaField & { interface: 'Image' } = {
  type: 'object',
  label: 'Image',
  name: 'image',
  interface: 'Image',
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
    },
    {
      type: 'number',
      name: 'height',
      label: 'Height',
    },
  ],
}
