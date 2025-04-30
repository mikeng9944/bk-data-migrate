module.exports = {
  kind: 'collectionType',
  collectionName: 'blog_posts',
  info: {
    singularName: 'blog-post',
    pluralName: 'blog-posts',
    displayName: 'Blog Post',
    description: 'Create and manage blog articles',
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
    summary: {
      type: 'text',
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    content: {
      type: 'richtext',
      required: true,
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    publishDate: {
      type: 'datetime',
      required: true,
    },
    categories: {
      type: 'relation',
      relation: 'manyToMany',
      target: 'api::category.category',
      inversedBy: 'blogPosts',
    },
    tags: {
      type: 'relation',
      relation: 'manyToMany',
      target: 'api::tag.tag',
      inversedBy: 'blogPosts',
    },
    author: {
      type: 'relation',
      relation: 'manyToOne',
      target: 'api::author.author',
      inversedBy: 'blogPosts',
    },
    featuredImage: {
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
    isFeatured: {
      type: 'boolean',
      default: false,
    },
    relatedPosts: {
      type: 'relation',
      relation: 'manyToMany',
      target: 'api::blog-post.blog-post',
      inversedBy: 'relatedPosts',
    },
    allowComments: {
      type: 'boolean',
      default: true,
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
