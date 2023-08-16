# Strapi Algolia Search Plugin

A plugin which will let you index your Strapi content to Algolia search engine. It supports Dymanic Zones, Components and Relations.

## Installation

To install the plugin
`npm i strapi-plugin-algolia-search`

## Configuration

```javascript
search: {
    enabled: true,
    config: {
      applicationId: env("ALGOLIA_APPLICATION_ID"),
      apiKey: env("ALGOLIA_ADMIN_API_KEY"),
      debug: true,
      forceApplySettings: false,
      contentTypes: {
        "api::post.post": {
          indexName: "posts",
          fields: [
            "title",
            "description"
            "image",
            "dz.field",
            "dz.nested.field",
            "relation.field",
          ],
          populate: ["image", "dz", "relation"],
          settings: {
            searchableAttributes: ["title", "description"],
          },
        },
      },
    },
  },
```

Add the above configuration to Strapi's plugin.js file to enable this plugins

_ALGOLIA_APPLICATION_ID_ = provide your Algolia application ID. Set in environment variables.
_ALGOLIA_ADMIN_API_KEY_ = provide your Algolia admin key

## Config Descriptions

**applicationId and apiKey**: You will get this details from Algolia account.

**debug**: if enabled, it will print the console messages

**forceApplySettings**: This will update the Algolia search settings. Generally settings are applied when an index is created. You can set this setting to true if you want to apply the settings later.

**contentTypes**: This is an object containing content types as keys. E.g. if you have post content type in Strapi, it can be specified as `api::post.post`. All the config settings under this content type would apply to only that content type.

- **indexName**: This would be the name of your index in Algolia.
- **fields**: An array of fields you want to select for indexing. Only the fields mentioned here would be indexed. You can include fields from dymanic zones and from relations as well.
  Specify the nested fields separated by dot (.). For example, if you have the following structure and you want to index field `side_text` from blocks dynamic zone, you can specify it like `blocks.side_text`. Further, you can have nested fields selection i.e. `blocks.nested.side_text`.

```javascript
{
  id: 50,
  title: 'Some title',
  description: 'some description',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  locale: 'en',
  image: {
    id: 1,
    name: 'landscape.svg',
    alternativeText: null,
    caption: null,
    width: 1312,
    height: 707,
    formats: null,
    hash: '',
    ext: '.svg',
    mime: 'image/svg+xml',
    size: 2060.21,
    url: '',
    previewUrl: null,
    provider: 'local',
    provider_metadata: null,
    folderPath: '/',
    createdAt: '2023-08-15T16:32:35.124Z',
    updatedAt: '2023-08-15T17:14:33.946Z'
  },
  blocks: [
    {
      __component: 'components.description',
      id: 1,
      side_text: 'Dummny side text',
      description: 'this is the description'
    },
    {
      __component: 'components.description',
      id: 2,
      side_text: 'Another side text',
      description: 'this is another description',
      nested: [
          {
            __component: 'components.description',
            id: 2,
            side_text: 'Nested Another side text',
            description: 'this is another description',
          }
      ]

    },
  ],
}

```

- **populate**: To populate fields from Strapi. E.g. to include the dynamic zone `blocks` from above structure, you will need to populate this field first. To do that, just include the fields you want to populate i.e. `["blocks", "blocks.image", "image"]`.
- **settings**: Algolia index related settings.
