module.exports = {
  kind: 'collectionType',
  collectionName: 'pages',
  info: {
    singularName: 'page',
    pluralName: 'pages',
    displayName: 'Page',
    description: 'Create flexible pages with various content blocks',
  },
  options: {
    draftAndPublish: true,
  },
  pluginOptions: {
    i18n: {
      localized: true,
    },
  },
  attributes: {
    title: {
      type: 'string',
      required: true,
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    slug: {
      type: 'uid',
      targetField: 'title',
      required: true,
    },
    description: {
      type: 'text',
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    isFeatured: {
      type: 'boolean',
      default: false,
    },
    publishedAt: {
      type: 'datetime',
    },
    metadata: {
      type: 'component',
      repeatable: false,
      component: 'shared.seo',
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    blocks: {
      type: 'dynamiczone',
      components: [
        'shared.rich-text',
        'shared.media',
        'shared.quote',
        'shared.slider',
        'shared.cta',
        'shared.feature-list'
      ],
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    cover: {
      type: 'media',
      multiple: false,
      required: false,
      allowedTypes: ['images'],
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    parentPage: {
      type: 'relation',
      relation: 'manyToOne',
      target: 'api::page.page',
      inversedBy: 'childPages',
    },
    childPages: {
      type: 'relation',
      relation: 'oneToMany',
      target: 'api::page.page',
      mappedBy: 'parentPage',
    },
    showInNavigation: {
      type: 'boolean',
      default: false,
    },
    navigationOrder: {
      type: 'integer',
      default: 0,
    },
    modxId: {
      type: 'integer',
      private: true,
      description: 'The ID from the original MODX database for migration tracking',
    },
    modxUrl: {
      type: 'string',
      private: true,
      description: 'The original URL from MODX for redirection setup',
    }
  },
};
