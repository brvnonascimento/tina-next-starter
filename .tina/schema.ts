import { defineSchema, defineConfig, TinaTemplate } from 'tinacms'
import { heroBlockTemplate } from '../src/blocks/HeroBlock.server'
import { imageBlockField } from '../src/blocks/ImageBlock.server'

const schema = defineSchema({
  collections: [
    {
      label: 'Page',
      name: 'page',
      path: 'content/pages',
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
          isTitle: true,
          required: true,
        },
        {
          type: 'object',
          label: 'SEO',
          name: 'seo',
          fields: [
            {
              type: 'string',
              label: 'Title',
              name: 'title',
              required: true,
            },
            {
              type: 'string',
              label: 'Description',
              name: 'description',
              required: true,
            },
          ],
        },
        {
          type: 'object',
          list: true,
          name: 'blocks',
          label: 'Sections',
          ui: {
            visualSelector: true,
          },
          templates: [heroBlockTemplate, imageBlockField] as TinaTemplate[],
        },
      ],
    },
    {
      label: 'Blog Posts',
      name: 'posts',
      path: 'content/posts',
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
        },
        {
          type: 'rich-text',
          label: 'Blog Post Body',
          name: 'body',
          isBody: true,
          templates: [
            {
              name: 'PageSection',
              label: 'Page Section',
              fields: [
                {
                  type: 'string',
                  name: 'heading',
                  label: 'Heading',
                },
                {
                  type: 'string',
                  name: 'content',
                  label: 'Content',
                  ui: {
                    component: 'textarea',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
})

export default schema

// Your tina config
// ==============
const branch = 'main'
// When working locally, hit our local filesystem.
// On a Vercel deployment, hit the Tina Cloud API
const apiURL =
  process.env.NODE_ENV == 'development'
    ? 'http://localhost:4001/graphql'
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`

export const tinaConfig = defineConfig({
  apiURL,
  schema,
  mediaStore: async () => {
    const pack = await import('next-tinacms-cloudinary')

    return pack.TinaCloudCloudinaryMediaStore
  },
  cmsCallback: (cms) => {
    //  add your CMS callback code here (if you want)

    // The Route Mapper
    /**
     * 1. Import `tinacms` and `RouteMappingPlugin`
     **/
    import('tinacms').then(({ RouteMappingPlugin }) => {
      /**
       * 2. Define the `RouteMappingPlugin` see https://tina.io/docs/tinacms-context/#the-routemappingplugin for more details
       **/
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        console.log({ document })

        if (collection.name === 'page') {
          return `/${document._sys.filename}`
        }

        return undefined
      })
      /**
       * 3. Add the `RouteMappingPlugin` to the `cms`.
       **/
      cms.plugins.add(RouteMapping)
    })

    import('react-tinacms-editor').then((field) => {
      cms.plugins.add(field.MarkdownFieldPlugin)
    })

    return cms
  },
})
