module.exports = {
  kind: 'collectionType',
  collectionName: 'categories',
  info: {
    singularName: 'category',
    pluralName: 'categories',
    displayName: 'Category',
    description: 'Organize content with categories',
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
    name: {
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
      targetField: 'name',
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
    image: {
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
    parentCategory: {
      type: 'relation',
      relation: 'manyToOne',
      target: 'api::category.category',
      inversedBy: 'subCategories',
    },
    subCategories: {
      type: 'relation',
      relation: 'oneToMany',
      target: 'api::category.category',
      mappedBy: 'parentCategory',
    },
    pages: {
      type: 'relation',
      relation: 'manyToMany',
      target: 'api::page.page',
      inversedBy: 'categories',
    },
    blogPosts: {
      type: 'relation',
      relation: 'manyToMany',
      target: 'api::blog-post.blog-post',
      mappedBy: 'categories',
    },
    showInNavigation: {
      type: 'boolean',
      default: false,
    },
    navigationOrder: {
      type: 'integer',
      default: 0,
    },
    seo: {
      type: 'component',
      repeatable: false,
      component: 'shared.seo',
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
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
