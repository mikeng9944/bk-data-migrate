import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiBkhkAccessActiondomBkhkAccessActiondom
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_access_actiondom';
  info: {
    description: 'bkhk-access-actiondom collection type';
    displayName: 'Bkhk access actiondom';
    pluralName: 'bkhk-access-actiondoms';
    singularName: 'bkhk-access-actiondom';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    authority: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'9999'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-access-actiondom.bkhk-access-actiondom'
    > &
      Schema.Attribute.Private;
    policy: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'modPrincipal'>;
    publishedAt: Schema.Attribute.DateTime;
    target: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkAccessActionsBkhkAccessActions
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_access_actions';
  info: {
    description: 'bkhk-access-actions collection type';
    displayName: 'Bkhk access actions';
    pluralName: 'bkhk-access-actionss';
    singularName: 'bkhk-access-actions';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    authority: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'9999'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-access-actions.bkhk-access-actions'
    > &
      Schema.Attribute.Private;
    policy: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'modPrincipal'>;
    publishedAt: Schema.Attribute.DateTime;
    target: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkAccessCategoryBkhkAccessCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_access_category';
  info: {
    description: 'bkhk-access-category collection type';
    displayName: 'Bkhk access category';
    pluralName: 'bkhk-access-categorys';
    singularName: 'bkhk-access-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    authority: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'9999'>;
    context_key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-access-category.bkhk-access-category'
    > &
      Schema.Attribute.Private;
    policy: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'modPrincipal'>;
    publishedAt: Schema.Attribute.DateTime;
    target: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkAccessContextBkhkAccessContext
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_access_context';
  info: {
    description: 'bkhk-access-context collection type';
    displayName: 'Bkhk access context';
    pluralName: 'bkhk-access-contexts';
    singularName: 'bkhk-access-context';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    authority: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'9999'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-access-context.bkhk-access-context'
    > &
      Schema.Attribute.Private;
    policy: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'modPrincipal'>;
    publishedAt: Schema.Attribute.DateTime;
    target: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkAccessElementsBkhkAccessElements
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_access_elements';
  info: {
    description: 'bkhk-access-elements collection type';
    displayName: 'Bkhk access elements';
    pluralName: 'bkhk-access-elementss';
    singularName: 'bkhk-access-elements';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    authority: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'9999'>;
    context_key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-access-elements.bkhk-access-elements'
    > &
      Schema.Attribute.Private;
    policy: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'modPrincipal'>;
    publishedAt: Schema.Attribute.DateTime;
    target: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkAccessMediaSourceBkhkAccessMediaSource
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_access_media_source';
  info: {
    description: 'bkhk-access-media-source collection type';
    displayName: 'Bkhk access media source';
    pluralName: 'bkhk-access-media-sources';
    singularName: 'bkhk-access-media-source';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    authority: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'9999'>;
    context_key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-access-media-source.bkhk-access-media-source'
    > &
      Schema.Attribute.Private;
    policy: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'modPrincipal'>;
    publishedAt: Schema.Attribute.DateTime;
    target: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkAccessMenusBkhkAccessMenus
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_access_menus';
  info: {
    description: 'bkhk-access-menus collection type';
    displayName: 'Bkhk access menus';
    pluralName: 'bkhk-access-menuss';
    singularName: 'bkhk-access-menus';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    authority: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'9999'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-access-menus.bkhk-access-menus'
    > &
      Schema.Attribute.Private;
    policy: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'modPrincipal'>;
    publishedAt: Schema.Attribute.DateTime;
    target: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkAccessNamespaceBkhkAccessNamespace
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_access_namespace';
  info: {
    description: 'bkhk-access-namespace collection type';
    displayName: 'Bkhk access namespace';
    pluralName: 'bkhk-access-namespaces';
    singularName: 'bkhk-access-namespace';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    authority: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'9999'>;
    context_key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-access-namespace.bkhk-access-namespace'
    > &
      Schema.Attribute.Private;
    policy: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'modPrincipal'>;
    publishedAt: Schema.Attribute.DateTime;
    target: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkAccessPermissionsBkhkAccessPermissions
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_access_permissions';
  info: {
    description: 'bkhk-access-permissions collection type';
    displayName: 'Bkhk access permissions';
    pluralName: 'bkhk-access-permissionss';
    singularName: 'bkhk-access-permissions';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-access-permissions.bkhk-access-permissions'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    publishedAt: Schema.Attribute.DateTime;
    template: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    value: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'1'>;
  };
}

export interface ApiBkhkAccessPoliciesBkhkAccessPolicies
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_access_policies';
  info: {
    description: 'bkhk-access-policies collection type';
    displayName: 'Bkhk access policies';
    pluralName: 'bkhk-access-policiess';
    singularName: 'bkhk-access-policies';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    lexicon: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'permissions'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-access-policies.bkhk-access-policies'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    parent: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    template: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkAccessPolicyTemplateGroupsBkhkAccessPolicyTemplateGroups
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_access_policy_template_groups';
  info: {
    description: 'bkhk-access-policy-template-groups collection type';
    displayName: 'Bkhk access policy template groups';
    pluralName: 'bkhk-access-policy-template-groupss';
    singularName: 'bkhk-access-policy-template-groups';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-access-policy-template-groups.bkhk-access-policy-template-groups'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkAccessPolicyTemplatesBkhkAccessPolicyTemplates
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_access_policy_templates';
  info: {
    description: 'bkhk-access-policy-templates collection type';
    displayName: 'Bkhk access policy templates';
    pluralName: 'bkhk-access-policy-templatess';
    singularName: 'bkhk-access-policy-templates';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    lexicon: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'permissions'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-access-policy-templates.bkhk-access-policy-templates'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    publishedAt: Schema.Attribute.DateTime;
    template_group: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkAccessResourceGroupsBkhkAccessResourceGroups
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_access_resource_groups';
  info: {
    description: 'bkhk-access-resource-groups collection type';
    displayName: 'Bkhk access resource groups';
    pluralName: 'bkhk-access-resource-groupss';
    singularName: 'bkhk-access-resource-groups';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    authority: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'9999'>;
    context_key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-access-resource-groups.bkhk-access-resource-groups'
    > &
      Schema.Attribute.Private;
    policy: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'modPrincipal'>;
    publishedAt: Schema.Attribute.DateTime;
    target: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkAccessResourcesBkhkAccessResources
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_access_resources';
  info: {
    description: 'bkhk-access-resources collection type';
    displayName: 'Bkhk access resources';
    pluralName: 'bkhk-access-resourcess';
    singularName: 'bkhk-access-resources';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    authority: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'9999'>;
    context_key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-access-resources.bkhk-access-resources'
    > &
      Schema.Attribute.Private;
    policy: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'modPrincipal'>;
    publishedAt: Schema.Attribute.DateTime;
    target: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkAccessTemplatevarsBkhkAccessTemplatevars
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_access_templatevars';
  info: {
    description: 'bkhk-access-templatevars collection type';
    displayName: 'Bkhk access templatevars';
    pluralName: 'bkhk-access-templatevarss';
    singularName: 'bkhk-access-templatevars';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    authority: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'9999'>;
    context_key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-access-templatevars.bkhk-access-templatevars'
    > &
      Schema.Attribute.Private;
    policy: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    principal_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'modPrincipal'>;
    publishedAt: Schema.Attribute.DateTime;
    target: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkActiondomBkhkActiondom
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_actiondom';
  info: {
    description: 'bkhk-actiondom collection type';
    displayName: 'Bkhk actiondom';
    pluralName: 'bkhk-actiondoms';
    singularName: 'bkhk-actiondom';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'1'>;
    constraint: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    constraint_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    constraint_field: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    container: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    for_parent: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-actiondom.bkhk-actiondom'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    publishedAt: Schema.Attribute.DateTime;
    rank: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    rule: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    set: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    value: Schema.Attribute.Text;
    xtype: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
  };
}

export interface ApiBkhkActionsFieldsBkhkActionsFields
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_actions_fields';
  info: {
    description: 'bkhk-actions-fields collection type';
    displayName: 'Bkhk actions fields';
    pluralName: 'bkhk-actions-fieldss';
    singularName: 'bkhk-actions-fields';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    form: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-actions-fields.bkhk-actions-fields'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    other: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    publishedAt: Schema.Attribute.DateTime;
    rank: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    tab: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    type: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'field'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkActionsBkhkActions extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_actions';
  info: {
    description: 'bkhk-actions collection type';
    displayName: 'Bkhk actions';
    pluralName: 'bkhk-actionss';
    singularName: 'bkhk-actions';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    assets: Schema.Attribute.Text;
    controller: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    haslayout: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'1'>;
    help_url: Schema.Attribute.Text;
    lang_topics: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-actions.bkhk-actions'
    > &
      Schema.Attribute.Private;
    namespace: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'core'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkActiveUsersBkhkActiveUsers
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_active_users';
  info: {
    description: 'bkhk-active-users collection type';
    displayName: 'Bkhk active users';
    pluralName: 'bkhk-active-userss';
    singularName: 'bkhk-active-users';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    internalKey: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    ip: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }> &
      Schema.Attribute.DefaultTo<''>;
    lasthit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-active-users.bkhk-active-users'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<''>;
  };
}

export interface ApiBkhkCategoriesClosureBkhkCategoriesClosure
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_categories_closure';
  info: {
    description: 'bkhk-categories-closure collection type';
    displayName: 'Bkhk categories closure';
    pluralName: 'bkhk-categories-closures';
    singularName: 'bkhk-categories-closure';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ancestor: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    depth: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    descendant: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-categories-closure.bkhk-categories-closure'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkCategoriesBkhkCategories
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_categories';
  info: {
    description: 'bkhk-categories collection type';
    displayName: 'Bkhk categories';
    pluralName: 'bkhk-categoriess';
    singularName: 'bkhk-categories';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 45;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-categories.bkhk-categories'
    > &
      Schema.Attribute.Private;
    parent: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    rank: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkClassMapBkhkClassMap
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_class_map';
  info: {
    description: 'bkhk-class-map collection type';
    displayName: 'Bkhk class map';
    pluralName: 'bkhk-class-maps';
    singularName: 'bkhk-class-map';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    lexicon: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'core:resource'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-class-map.bkhk-class-map'
    > &
      Schema.Attribute.Private;
    name_field: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'name'>;
    parent_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }> &
      Schema.Attribute.DefaultTo<''>;
    path: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkClientconfigGroupBkhkClientconfigGroup
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_clientconfig_group';
  info: {
    description: 'bkhk-clientconfig-group collection type';
    displayName: 'Bkhk clientconfig group';
    pluralName: 'bkhk-clientconfig-groups';
    singularName: 'bkhk-clientconfig-group';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 75;
      }> &
      Schema.Attribute.DefaultTo<''>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-clientconfig-group.bkhk-clientconfig-group'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sortorder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkClientconfigSettingBkhkClientconfigSetting
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_clientconfig_setting';
  info: {
    description: 'bkhk-clientconfig-setting collection type';
    displayName: 'Bkhk clientconfig setting';
    pluralName: 'bkhk-clientconfig-settings';
    singularName: 'bkhk-clientconfig-setting';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    default: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    group: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'0'>;
    is_required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 75;
      }> &
      Schema.Attribute.DefaultTo<''>;
    label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 75;
      }> &
      Schema.Attribute.DefaultTo<''>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-clientconfig-setting.bkhk-clientconfig-setting'
    > &
      Schema.Attribute.Private;
    options: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    sortorder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    value: Schema.Attribute.Text;
    xtype: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 75;
      }> &
      Schema.Attribute.DefaultTo<''>;
  };
}

export interface ApiBkhkCollectionResourceTemplateBkhkCollectionResourceTemplate
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_collection_resource_template';
  info: {
    description: 'bkhk-collection-resource-template collection type';
    displayName: 'Bkhk collection resource template';
    pluralName: 'bkhk-collection-resource-templates';
    singularName: 'bkhk-collection-resource-template';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    collection_template: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-collection-resource-template.bkhk-collection-resource-template'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    resource_template: Schema.Attribute.Integer;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkCollectionSelectionsBkhkCollectionSelections
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_collection_selections';
  info: {
    description: 'bkhk-collection-selections collection type';
    displayName: 'Bkhk collection selections';
    pluralName: 'bkhk-collection-selectionss';
    singularName: 'bkhk-collection-selections';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    collection: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-collection-selections.bkhk-collection-selections'
    > &
      Schema.Attribute.Private;
    menuindex: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    resource: Schema.Attribute.Integer;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkCollectionSettingsBkhkCollectionSettings
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_collection_settings';
  info: {
    description: 'bkhk-collection-settings collection type';
    displayName: 'Bkhk collection settings';
    pluralName: 'bkhk-collection-settingss';
    singularName: 'bkhk-collection-settings';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    collection: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-collection-settings.bkhk-collection-settings'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    template: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkCollectionTemplateColumnsBkhkCollectionTemplateColumns
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_collection_template_columns';
  info: {
    description: 'bkhk-collection-template-columns collection type';
    displayName: 'Bkhk collection template columns';
    pluralName: 'bkhk-collection-template-columnss';
    singularName: 'bkhk-collection-template-columns';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    editor: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    hidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-collection-template-columns.bkhk-collection-template-columns'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    php_renderer: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    position: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    renderer: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    sort_type: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 64;
      }>;
    sortable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    template: Schema.Attribute.Integer;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    width: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'100'>;
  };
}

export interface ApiBkhkCollectionTemplatesBkhkCollectionTemplates
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_collection_templates';
  info: {
    description: 'bkhk-collection-templates collection type';
    displayName: 'Bkhk collection templates';
    pluralName: 'bkhk-collection-templatess';
    singularName: 'bkhk-collection-templates';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    allow_dd: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'1'>;
    allowed_resource_types: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 512;
      }> &
      Schema.Attribute.DefaultTo<''>;
    back_to_collection_label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'collections.children.back_to_collection_label'>;
    back_to_selection_label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'selections.back_to_selection_label'>;
    bulk_actions: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    button_label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'collections.children.create'>;
    buttons: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 512;
      }>;
    child_cacheable: Schema.Attribute.Integer;
    child_content_disposition: Schema.Attribute.Integer;
    child_content_type: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<'0'>;
    child_hide_from_menu: Schema.Attribute.Integer;
    child_published: Schema.Attribute.Integer;
    child_resource_type: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'modDocument'>;
    child_richtext: Schema.Attribute.Integer;
    child_searchable: Schema.Attribute.Integer;
    child_template: Schema.Attribute.Integer;
    content_place: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'original'>;
    context_menu: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 512;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    global_template: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    link_label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'selections.create'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-collection-templates.bkhk-collection-templates'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    page_size: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'20'>;
    parent: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    permanent_sort_after: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    permanent_sort_before: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    publishedAt: Schema.Attribute.DateTime;
    resource_type_selection: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<'1'>;
    selection_create_sort: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'id:desc'>;
    selection_link_condition: Schema.Attribute.Text;
    sort_dir: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 4;
      }> &
      Schema.Attribute.DefaultTo<'asc'>;
    sort_field: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'id'>;
    sort_type: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 64;
      }>;
    tab_label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'collections.children'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    view_for: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
  };
}

export interface ApiBkhkContentTypeBkhkContentType
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_content_type';
  info: {
    description: 'bkhk-content-type collection type';
    displayName: 'Bkhk content type';
    pluralName: 'bkhk-content-types';
    singularName: 'bkhk-content-type';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    binary: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    file_extensions: Schema.Attribute.String;
    headers: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-content-type.bkhk-content-type'
    > &
      Schema.Attribute.Private;
    mime_type: Schema.Attribute.String;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkContextResourceBkhkContextResource
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_context_resource';
  info: {
    description: 'bkhk-context-resource collection type';
    displayName: 'Bkhk context resource';
    pluralName: 'bkhk-context-resources';
    singularName: 'bkhk-context-resource';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    context_key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-context-resource.bkhk-context-resource'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    resource: Schema.Attribute.Integer;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkContextSettingBkhkContextSetting
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_context_setting';
  info: {
    description: 'bkhk-context-setting collection type';
    displayName: 'Bkhk context setting';
    pluralName: 'bkhk-context-settings';
    singularName: 'bkhk-context-setting';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    area: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    context_key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    editedon: Schema.Attribute.DateTime;
    key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-context-setting.bkhk-context-setting'
    > &
      Schema.Attribute.Private;
    namespace: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 40;
      }> &
      Schema.Attribute.DefaultTo<'core'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    value: Schema.Attribute.Text;
    xtype: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 75;
      }> &
      Schema.Attribute.DefaultTo<'textfield'>;
  };
}

export interface ApiBkhkContextBkhkContext extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_context';
  info: {
    description: 'bkhk-context collection type';
    displayName: 'Bkhk context';
    pluralName: 'bkhk-contexts';
    singularName: 'bkhk-context';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-context.bkhk-context'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    publishedAt: Schema.Attribute.DateTime;
    rank: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkDashboardWidgetPlacementBkhkDashboardWidgetPlacement
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_dashboard_widget_placement';
  info: {
    description: 'bkhk-dashboard-widget-placement collection type';
    displayName: 'Bkhk dashboard widget placement';
    pluralName: 'bkhk-dashboard-widget-placements';
    singularName: 'bkhk-dashboard-widget-placement';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    dashboard: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-dashboard-widget-placement.bkhk-dashboard-widget-placement'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    rank: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    widget: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
  };
}

export interface ApiBkhkDashboardWidgetBkhkDashboardWidget
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_dashboard_widget';
  info: {
    description: 'bkhk-dashboard-widget collection type';
    displayName: 'Bkhk dashboard widget';
    pluralName: 'bkhk-dashboard-widgets';
    singularName: 'bkhk-dashboard-widget';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    lexicon: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'core:dashboards'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-dashboard-widget.bkhk-dashboard-widget'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    namespace: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    publishedAt: Schema.Attribute.DateTime;
    size: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'half'>;
    type: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkDashboardBkhkDashboard
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_dashboard';
  info: {
    description: 'bkhk-dashboard collection type';
    displayName: 'Bkhk dashboard';
    pluralName: 'bkhk-dashboards';
    singularName: 'bkhk-dashboard';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    hide_trees: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-dashboard.bkhk-dashboard'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkDocumentGroupsBkhkDocumentGroups
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_document_groups';
  info: {
    description: 'bkhk-document-groups collection type';
    displayName: 'Bkhk document groups';
    pluralName: 'bkhk-document-groupss';
    singularName: 'bkhk-document-groups';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    document: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    document_group: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-document-groups.bkhk-document-groups'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkDocumentgroupNamesBkhkDocumentgroupNames
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_documentgroup_names';
  info: {
    description: 'bkhk-documentgroup-names collection type';
    displayName: 'Bkhk documentgroup names';
    pluralName: 'bkhk-documentgroup-namess';
    singularName: 'bkhk-documentgroup-names';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-documentgroup-names.bkhk-documentgroup-names'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    private_memgroup: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<'0'>;
    private_webgroup: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkElementPropertySetsBkhkElementPropertySets
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_element_property_sets';
  info: {
    description: 'bkhk-element-property-sets collection type';
    displayName: 'Bkhk element property sets';
    pluralName: 'bkhk-element-property-setss';
    singularName: 'bkhk-element-property-sets';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    element: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    element_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-element-property-sets.bkhk-element-property-sets'
    > &
      Schema.Attribute.Private;
    property_set: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkExtensionPackagesBkhkExtensionPackages
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_extension_packages';
  info: {
    description: 'bkhk-extension-packages collection type';
    displayName: 'Bkhk extension packages';
    pluralName: 'bkhk-extension-packagess';
    singularName: 'bkhk-extension-packages';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-extension-packages.bkhk-extension-packages'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'core'>;
    namespace: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 40;
      }> &
      Schema.Attribute.DefaultTo<'core'>;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    service_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    service_name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    table_prefix: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkFcProfilesUsergroupsBkhkFcProfilesUsergroups
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_fc_profiles_usergroups';
  info: {
    description: 'bkhk-fc-profiles-usergroups collection type';
    displayName: 'Bkhk fc profiles usergroups';
    pluralName: 'bkhk-fc-profiles-usergroupss';
    singularName: 'bkhk-fc-profiles-usergroups';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-fc-profiles-usergroups.bkhk-fc-profiles-usergroups'
    > &
      Schema.Attribute.Private;
    profile: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    usergroup: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
  };
}

export interface ApiBkhkFcProfilesBkhkFcProfiles
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_fc_profiles';
  info: {
    description: 'bkhk-fc-profiles collection type';
    displayName: 'Bkhk fc profiles';
    pluralName: 'bkhk-fc-profiless';
    singularName: 'bkhk-fc-profiles';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-fc-profiles.bkhk-fc-profiles'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    publishedAt: Schema.Attribute.DateTime;
    rank: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkFcSetsBkhkFcSets extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_fc_sets';
  info: {
    description: 'bkhk-fc-sets collection type';
    displayName: 'Bkhk fc sets';
    pluralName: 'bkhk-fc-setss';
    singularName: 'bkhk-fc-sets';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    constraint: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    constraint_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    constraint_field: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-fc-sets.bkhk-fc-sets'
    > &
      Schema.Attribute.Private;
    profile: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    template: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkLexiconEntriesBkhkLexiconEntries
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_lexicon_entries';
  info: {
    description: 'bkhk-lexicon-entries collection type';
    displayName: 'Bkhk lexicon entries';
    pluralName: 'bkhk-lexicon-entriess';
    singularName: 'bkhk-lexicon-entries';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    createdon: Schema.Attribute.DateTime;
    editedon: Schema.Attribute.DateTime;
    language: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }> &
      Schema.Attribute.DefaultTo<'en'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-lexicon-entries.bkhk-lexicon-entries'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    namespace: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 40;
      }> &
      Schema.Attribute.DefaultTo<'core'>;
    publishedAt: Schema.Attribute.DateTime;
    topic: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'default'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    value: Schema.Attribute.Text;
  };
}

export interface ApiBkhkManagerLogBkhkManagerLog
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_manager_log';
  info: {
    description: 'bkhk-manager-log collection type';
    displayName: 'Bkhk manager log';
    pluralName: 'bkhk-manager-logs';
    singularName: 'bkhk-manager-log';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    classKey: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    item: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'0'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-manager-log.bkhk-manager-log'
    > &
      Schema.Attribute.Private;
    occurred: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
  };
}

export interface ApiBkhkMediaSourcesContextsBkhkMediaSourcesContexts
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_media_sources_contexts';
  info: {
    description: 'bkhk-media-sources-contexts collection type';
    displayName: 'Bkhk media sources contexts';
    pluralName: 'bkhk-media-sources-contextss';
    singularName: 'bkhk-media-sources-contexts';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    context_key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'web'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-media-sources-contexts.bkhk-media-sources-contexts'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    source: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkMediaSourcesElementsBkhkMediaSourcesElements
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_media_sources_elements';
  info: {
    description: 'bkhk-media-sources-elements collection type';
    displayName: 'Bkhk media sources elements';
    pluralName: 'bkhk-media-sources-elementss';
    singularName: 'bkhk-media-sources-elements';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    context_key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'web'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-media-sources-elements.bkhk-media-sources-elements'
    > &
      Schema.Attribute.Private;
    object: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    object_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'modTemplateVar'>;
    publishedAt: Schema.Attribute.DateTime;
    source: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkMediaSourcesBkhkMediaSources
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_media_sources';
  info: {
    description: 'bkhk-media-sources collection type';
    displayName: 'Bkhk media sources';
    pluralName: 'bkhk-media-sourcess';
    singularName: 'bkhk-media-sources';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    class_key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'sources.modFileMediaSource'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    is_stream: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'1'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-media-sources.bkhk-media-sources'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    properties: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkMemberGroupsBkhkMemberGroups
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_member_groups';
  info: {
    description: 'bkhk-member-groups collection type';
    displayName: 'Bkhk member groups';
    pluralName: 'bkhk-member-groupss';
    singularName: 'bkhk-member-groups';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-member-groups.bkhk-member-groups'
    > &
      Schema.Attribute.Private;
    member: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    rank: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    role: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'1'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user_group: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
  };
}

export interface ApiBkhkMembergroupNamesBkhkMembergroupNames
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_membergroup_names';
  info: {
    description: 'bkhk-membergroup-names collection type';
    displayName: 'Bkhk membergroup names';
    pluralName: 'bkhk-membergroup-namess';
    singularName: 'bkhk-membergroup-names';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    dashboard: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'1'>;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-membergroup-names.bkhk-membergroup-names'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    parent: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    rank: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkMenusBkhkMenus extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_menus';
  info: {
    description: 'bkhk-menus collection type';
    displayName: 'Bkhk menus';
    pluralName: 'bkhk-menuss';
    singularName: 'bkhk-menus';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    handler: Schema.Attribute.Text;
    icon: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-menus.bkhk-menus'
    > &
      Schema.Attribute.Private;
    menuindex: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    namespace: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'core'>;
    params: Schema.Attribute.Text;
    parent: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    permissions: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkMigxConfigElementsBkhkMigxConfigElements
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_migx_config_elements';
  info: {
    description: 'bkhk-migx-config-elements collection type';
    displayName: 'Bkhk migx config elements';
    pluralName: 'bkhk-migx-config-elementss';
    singularName: 'bkhk-migx-config-elements';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    config_id: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    createdAt: Schema.Attribute.DateTime;
    createdby: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    createdon: Schema.Attribute.DateTime;
    deleted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    deletedby: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    deletedon: Schema.Attribute.DateTime;
    editedby: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    editedon: Schema.Attribute.DateTime;
    element_id: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-migx-config-elements.bkhk-migx-config-elements'
    > &
      Schema.Attribute.Private;
    published: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    publishedby: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    publishedon: Schema.Attribute.DateTime;
    rank: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkMigxConfigsBkhkMigxConfigs
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_migx_configs';
  info: {
    description: 'bkhk-migx-configs collection type';
    displayName: 'Bkhk migx configs';
    pluralName: 'bkhk-migx-configss';
    singularName: 'bkhk-migx-configs';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    actionbuttons: Schema.Attribute.Text;
    columnbuttons: Schema.Attribute.Text;
    columns: Schema.Attribute.Text;
    contextmenus: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdby: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    createdon: Schema.Attribute.DateTime;
    deleted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    deletedby: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    deletedon: Schema.Attribute.DateTime;
    editedby: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    editedon: Schema.Attribute.DateTime;
    extended: Schema.Attribute.Text;
    filters: Schema.Attribute.Text;
    formtabs: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-migx-configs.bkhk-migx-configs'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    published: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    publishedby: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    publishedon: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkMigxElementsBkhkMigxElements
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_migx_elements';
  info: {
    description: 'bkhk-migx-elements collection type';
    displayName: 'Bkhk migx elements';
    pluralName: 'bkhk-migx-elementss';
    singularName: 'bkhk-migx-elements';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdby: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    createdon: Schema.Attribute.DateTime;
    deleted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    deletedby: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    deletedon: Schema.Attribute.DateTime;
    editedby: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    editedon: Schema.Attribute.DateTime;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-migx-elements.bkhk-migx-elements'
    > &
      Schema.Attribute.Private;
    published: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    publishedby: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    publishedon: Schema.Attribute.DateTime;
    type: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkMigxFormtabFieldsBkhkMigxFormtabFields
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_migx_formtab_fields';
  info: {
    description: 'bkhk-migx-formtab-fields collection type';
    displayName: 'Bkhk migx formtab fields';
    pluralName: 'bkhk-migx-formtab-fieldss';
    singularName: 'bkhk-migx-formtab-fields';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    caption: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    config_id: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    configs: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    default: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    description_is_code: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<'0'>;
    display: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    extended: Schema.Attribute.Text;
    field: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    formtab_id: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    inputOptionValues: Schema.Attribute.Text;
    inputTV: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    inputTVtype: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-migx-formtab-fields.bkhk-migx-formtab-fields'
    > &
      Schema.Attribute.Private;
    pos: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    restrictive_condition: Schema.Attribute.Text;
    sourceFrom: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    sources: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    validation: Schema.Attribute.Text;
  };
}

export interface ApiBkhkMigxFormtabsBkhkMigxFormtabs
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_migx_formtabs';
  info: {
    description: 'bkhk-migx-formtabs collection type';
    displayName: 'Bkhk migx formtabs';
    pluralName: 'bkhk-migx-formtabss';
    singularName: 'bkhk-migx-formtabs';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    caption: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    config_id: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    extended: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-migx-formtabs.bkhk-migx-formtabs'
    > &
      Schema.Attribute.Private;
    pos: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    print_before_tabs: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkNamespacesBkhkNamespaces
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_namespaces';
  info: {
    description: 'bkhk-namespaces collection type';
    displayName: 'Bkhk namespaces';
    pluralName: 'bkhk-namespacess';
    singularName: 'bkhk-namespaces';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    assets_path: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-namespaces.bkhk-namespaces'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 40;
      }> &
      Schema.Attribute.DefaultTo<''>;
    path: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkPropertySetBkhkPropertySet
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_property_set';
  info: {
    description: 'bkhk-property-set collection type';
    displayName: 'Bkhk property set';
    pluralName: 'bkhk-property-sets';
    singularName: 'bkhk-property-set';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-property-set.bkhk-property-set'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<''>;
    properties: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkRegisterMessagesBkhkRegisterMessages
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_register_messages';
  info: {
    description: 'bkhk-register-messages collection type';
    displayName: 'Bkhk register messages';
    pluralName: 'bkhk-register-messagess';
    singularName: 'bkhk-register-messages';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    accessed: Schema.Attribute.DateTime;
    accesses: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    created: Schema.Attribute.DateTime;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    expires: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    kill: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-register-messages.bkhk-register-messages'
    > &
      Schema.Attribute.Private;
    payload: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    topic: Schema.Attribute.Integer;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    valid: Schema.Attribute.DateTime;
  };
}

export interface ApiBkhkRegisterQueuesBkhkRegisterQueues
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_register_queues';
  info: {
    description: 'bkhk-register-queues collection type';
    displayName: 'Bkhk register queues';
    pluralName: 'bkhk-register-queuess';
    singularName: 'bkhk-register-queues';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-register-queues.bkhk-register-queues'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    options: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkRegisterTopicsBkhkRegisterTopics
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_register_topics';
  info: {
    description: 'bkhk-register-topics collection type';
    displayName: 'Bkhk register topics';
    pluralName: 'bkhk-register-topicss';
    singularName: 'bkhk-register-topics';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    created: Schema.Attribute.DateTime;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-register-topics.bkhk-register-topics'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    options: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    queue: Schema.Attribute.Integer;
    updated: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkSeoproKeywordsBkhkSeoproKeywords
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_seopro_keywords';
  info: {
    description: 'bkhk-seopro-keywords collection type';
    displayName: 'Bkhk seopro keywords';
    pluralName: 'bkhk-seopro-keywordss';
    singularName: 'bkhk-seopro-keywords';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    keywords: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-seopro-keywords.bkhk-seopro-keywords'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    resource: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkSessionBkhkSession extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_session';
  info: {
    description: 'bkhk-session collection type';
    displayName: 'Bkhk session';
    pluralName: 'bkhk-sessions';
    singularName: 'bkhk-session';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    access: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-session.bkhk-session'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkSiteHtmlsnippetsBkhkSiteHtmlsnippets
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_site_htmlsnippets';
  info: {
    description: 'bkhk-site-htmlsnippets collection type';
    displayName: 'Bkhk site htmlsnippets';
    pluralName: 'bkhk-site-htmlsnippetss';
    singularName: 'bkhk-site-htmlsnippets';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cache_type: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    category: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'Chunk'>;
    editor_type: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-site-htmlsnippets.bkhk-site-htmlsnippets'
    > &
      Schema.Attribute.Private;
    locked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<''>;
    properties: Schema.Attribute.Text;
    property_preprocess: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    snippet: Schema.Attribute.Text;
    source: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    static: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    static_file: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkSitePluginEventsBkhkSitePluginEvents
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_site_plugin_events';
  info: {
    description: 'bkhk-site-plugin-events collection type';
    displayName: 'Bkhk site plugin events';
    pluralName: 'bkhk-site-plugin-eventss';
    singularName: 'bkhk-site-plugin-events';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    event: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-site-plugin-events.bkhk-site-plugin-events'
    > &
      Schema.Attribute.Private;
    pluginid: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    priority: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    propertyset: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkSitePluginsBkhkSitePlugins
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_site_plugins';
  info: {
    description: 'bkhk-site-plugins collection type';
    displayName: 'Bkhk site plugins';
    pluralName: 'bkhk-site-pluginss';
    singularName: 'bkhk-site-plugins';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cache_type: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    category: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    editor_type: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-site-plugins.bkhk-site-plugins'
    > &
      Schema.Attribute.Private;
    locked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    moduleguid: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 32;
      }> &
      Schema.Attribute.DefaultTo<''>;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<''>;
    plugincode: Schema.Attribute.Text;
    properties: Schema.Attribute.Text;
    property_preprocess: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    source: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    static: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    static_file: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkSiteSnippetsBkhkSiteSnippets
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_site_snippets';
  info: {
    description: 'bkhk-site-snippets collection type';
    displayName: 'Bkhk site snippets';
    pluralName: 'bkhk-site-snippetss';
    singularName: 'bkhk-site-snippets';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cache_type: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    category: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    editor_type: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-site-snippets.bkhk-site-snippets'
    > &
      Schema.Attribute.Private;
    locked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    moduleguid: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 32;
      }> &
      Schema.Attribute.DefaultTo<''>;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<''>;
    properties: Schema.Attribute.Text;
    property_preprocess: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    snippet: Schema.Attribute.Text;
    source: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    static: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    static_file: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkSiteTemplatesBkhkSiteTemplates
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_site_templates';
  info: {
    description: 'bkhk-site-templates collection type';
    displayName: 'Bkhk site templates';
    pluralName: 'bkhk-site-templatess';
    singularName: 'bkhk-site-templates';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    content: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'Template'>;
    editor_type: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    icon: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-site-templates.bkhk-site-templates'
    > &
      Schema.Attribute.Private;
    locked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    properties: Schema.Attribute.Text;
    property_preprocess: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    source: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    static: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    static_file: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    template_type: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    templatename: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkSiteTmplvarAccessBkhkSiteTmplvarAccess
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_site_tmplvar_access';
  info: {
    description: 'bkhk-site-tmplvar-access collection type';
    displayName: 'Bkhk site tmplvar access';
    pluralName: 'bkhk-site-tmplvar-accesss';
    singularName: 'bkhk-site-tmplvar-access';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    documentgroup: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-site-tmplvar-access.bkhk-site-tmplvar-access'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    tmplvarid: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkSiteTmplvarContentvaluesBkhkSiteTmplvarContentvalues
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_site_tmplvar_contentvalues';
  info: {
    description: 'bkhk-site-tmplvar-contentvalues collection type';
    displayName: 'Bkhk site tmplvar contentvalues';
    pluralName: 'bkhk-site-tmplvar-contentvaluess';
    singularName: 'bkhk-site-tmplvar-contentvalues';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contentid: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-site-tmplvar-contentvalues.bkhk-site-tmplvar-contentvalues'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    tmplvarid: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    value: Schema.Attribute.Text;
  };
}

export interface ApiBkhkSiteTmplvarTemplatesBkhkSiteTmplvarTemplates
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_site_tmplvar_templates';
  info: {
    description: 'bkhk-site-tmplvar-templates collection type';
    displayName: 'Bkhk site tmplvar templates';
    pluralName: 'bkhk-site-tmplvar-templatess';
    singularName: 'bkhk-site-tmplvar-templates';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-site-tmplvar-templates.bkhk-site-tmplvar-templates'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    rank: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    templateid: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    tmplvarid: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkSiteTmplvarsBkhkSiteTmplvars
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_site_tmplvars';
  info: {
    description: 'bkhk-site-tmplvars collection type';
    displayName: 'Bkhk site tmplvars';
    pluralName: 'bkhk-site-tmplvarss';
    singularName: 'bkhk-site-tmplvars';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    caption: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }> &
      Schema.Attribute.DefaultTo<''>;
    category: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    default_text: Schema.Attribute.Text;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    display: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }> &
      Schema.Attribute.DefaultTo<''>;
    editor_type: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    elements: Schema.Attribute.Text;
    input_properties: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-site-tmplvars.bkhk-site-tmplvars'
    > &
      Schema.Attribute.Private;
    locked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<''>;
    output_properties: Schema.Attribute.Text;
    properties: Schema.Attribute.Text;
    property_preprocess: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    rank: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    source: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    static: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    static_file: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    type: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkSystemEventnamesBkhkSystemEventnames
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_system_eventnames';
  info: {
    description: 'bkhk-system-eventnames collection type';
    displayName: 'Bkhk system eventnames';
    pluralName: 'bkhk-system-eventnamess';
    singularName: 'bkhk-system-eventnames';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    groupname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }> &
      Schema.Attribute.DefaultTo<''>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-system-eventnames.bkhk-system-eventnames'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    publishedAt: Schema.Attribute.DateTime;
    service: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkSystemSettingsBkhkSystemSettings
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_system_settings';
  info: {
    description: 'bkhk-system-settings collection type';
    displayName: 'Bkhk system settings';
    pluralName: 'bkhk-system-settingss';
    singularName: 'bkhk-system-settings';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    area: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    editedon: Schema.Attribute.DateTime;
    key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<''>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-system-settings.bkhk-system-settings'
    > &
      Schema.Attribute.Private;
    namespace: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 40;
      }> &
      Schema.Attribute.DefaultTo<'core'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    value: Schema.Attribute.Text;
    xtype: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 75;
      }> &
      Schema.Attribute.DefaultTo<'textfield'>;
  };
}

export interface ApiBkhkTblImgcacheBkhkTblImgcache
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_tbl_imgcache';
  info: {
    description: 'bkhk-tbl-imgcache collection type';
    displayName: 'Bkhk tbl imgcache';
    pluralName: 'bkhk-tbl-imgcaches';
    singularName: 'bkhk-tbl-imgcache';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cachedate: Schema.Attribute.DateTime;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date: Schema.Attribute.Integer;
    extensions: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    img_id: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-tbl-imgcache.bkhk-tbl-imgcache'
    > &
      Schema.Attribute.Private;
    md5name: Schema.Attribute.Text;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    publishedAt: Schema.Attribute.DateTime;
    query_str: Schema.Attribute.Text;
    server_path: Schema.Attribute.Text;
    size: Schema.Attribute.Integer;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkTransportPackagesBkhkTransportPackages
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_transport_packages';
  info: {
    description: 'bkhk-transport-packages collection type';
    displayName: 'Bkhk transport packages';
    pluralName: 'bkhk-transport-packagess';
    singularName: 'bkhk-transport-packages';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    attributes: Schema.Attribute.Text;
    created: Schema.Attribute.DateTime;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    installed: Schema.Attribute.DateTime;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-transport-packages.bkhk-transport-packages'
    > &
      Schema.Attribute.Private;
    manifest: Schema.Attribute.Text;
    metadata: Schema.Attribute.Text;
    package_name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    provider: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    release_index: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    signature: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    source: Schema.Attribute.String;
    state: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'1'>;
    updated: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    version_major: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    version_minor: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    version_patch: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    workspace: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
  };
}

export interface ApiBkhkTransportProvidersBkhkTransportProviders
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_transport_providers';
  info: {
    description: 'bkhk-transport-providers collection type';
    displayName: 'Bkhk transport providers';
    pluralName: 'bkhk-transport-providerss';
    singularName: 'bkhk-transport-providers';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'1'>;
    api_key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    created: Schema.Attribute.DateTime;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-transport-providers.bkhk-transport-providers'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    priority: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'10'>;
    properties: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    service_url: Schema.Attribute.String;
    updated: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
  };
}

export interface ApiBkhkUserAttributesBkhkUserAttributes
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_user_attributes';
  info: {
    description: 'bkhk-user-attributes collection type';
    displayName: 'Bkhk user attributes';
    pluralName: 'bkhk-user-attributess';
    singularName: 'bkhk-user-attributes';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    address: Schema.Attribute.Text;
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    blockedafter: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    blockeduntil: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    city: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    comment: Schema.Attribute.Text;
    country: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    dob: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    email: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    extended: Schema.Attribute.Text;
    failedlogincount: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<'0'>;
    fax: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    fullname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    gender: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    internalKey: Schema.Attribute.Integer;
    lastlogin: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-user-attributes.bkhk-user-attributes'
    > &
      Schema.Attribute.Private;
    logincount: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    mobilephone: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    phone: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    photo: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    publishedAt: Schema.Attribute.DateTime;
    sessionid: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    state: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 25;
      }> &
      Schema.Attribute.DefaultTo<''>;
    thislogin: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    website: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    zip: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 25;
      }> &
      Schema.Attribute.DefaultTo<''>;
  };
}

export interface ApiBkhkUserGroupRolesBkhkUserGroupRoles
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_user_group_roles';
  info: {
    description: 'bkhk-user-group-roles collection type';
    displayName: 'Bkhk user group roles';
    pluralName: 'bkhk-user-group-roless';
    singularName: 'bkhk-user-group-roles';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    authority: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'9999'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-user-group-roles.bkhk-user-group-roles'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkUserGroupSettingsBkhkUserGroupSettings
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_user_group_settings';
  info: {
    description: 'bkhk-user-group-settings collection type';
    displayName: 'Bkhk user group settings';
    pluralName: 'bkhk-user-group-settingss';
    singularName: 'bkhk-user-group-settings';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    area: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    editedon: Schema.Attribute.DateTime;
    group: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-user-group-settings.bkhk-user-group-settings'
    > &
      Schema.Attribute.Private;
    namespace: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 40;
      }> &
      Schema.Attribute.DefaultTo<'core'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    value: Schema.Attribute.Text;
    xtype: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 75;
      }> &
      Schema.Attribute.DefaultTo<'textfield'>;
  };
}

export interface ApiBkhkUserMessagesBkhkUserMessages
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_user_messages';
  info: {
    description: 'bkhk-user-messages collection type';
    displayName: 'Bkhk user messages';
    pluralName: 'bkhk-user-messagess';
    singularName: 'bkhk-user-messages';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date_sent: Schema.Attribute.DateTime;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-user-messages.bkhk-user-messages'
    > &
      Schema.Attribute.Private;
    message: Schema.Attribute.Text;
    private: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    read: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    recipient: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    sender: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    type: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 15;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBkhkUserSettingsBkhkUserSettings
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_user_settings';
  info: {
    description: 'bkhk-user-settings collection type';
    displayName: 'Bkhk user settings';
    pluralName: 'bkhk-user-settingss';
    singularName: 'bkhk-user-settings';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    area: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    editedon: Schema.Attribute.DateTime;
    key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<''>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-user-settings.bkhk-user-settings'
    > &
      Schema.Attribute.Private;
    namespace: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 40;
      }> &
      Schema.Attribute.DefaultTo<'core'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    value: Schema.Attribute.Text;
    xtype: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 75;
      }> &
      Schema.Attribute.DefaultTo<'textfield'>;
  };
}

export interface ApiBkhkUsersBkhkUsers extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_users';
  info: {
    description: 'bkhk-users collection type';
    displayName: 'Bkhk users';
    pluralName: 'bkhk-userss';
    singularName: 'bkhk-users';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'1'>;
    cachepwd: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    class_key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'modUser'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    createdon: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    hash_class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'hashing.modNative'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-users.bkhk-users'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    primary_group: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    publishedAt: Schema.Attribute.DateTime;
    remote_data: Schema.Attribute.Text;
    remote_key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    salt: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
    session_stale: Schema.Attribute.Text;
    sudo: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<''>;
  };
}

export interface ApiBkhkVersionxChunkBkhkVersionxChunk
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_versionx_chunk';
  info: {
    description: 'bkhk-versionx-chunk collection type';
    displayName: 'Bkhk versionx chunk';
    pluralName: 'bkhk-versionx-chunks';
    singularName: 'bkhk-versionx-chunk';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    content_id: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'Chunk'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-versionx-chunk.bkhk-versionx-chunk'
    > &
      Schema.Attribute.Private;
    locked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    marked: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'0'>;
    mode: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 24;
      }> &
      Schema.Attribute.DefaultTo<'update'>;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<''>;
    properties: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    saved: Schema.Attribute.DateTime;
    snippet: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    version_id: Schema.Attribute.Integer;
  };
}

export interface ApiBkhkVersionxPluginBkhkVersionxPlugin
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_versionx_plugin';
  info: {
    description: 'bkhk-versionx-plugin collection type';
    displayName: 'Bkhk versionx plugin';
    pluralName: 'bkhk-versionx-plugins';
    singularName: 'bkhk-versionx-plugin';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    content_id: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'Chunk'>;
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-versionx-plugin.bkhk-versionx-plugin'
    > &
      Schema.Attribute.Private;
    locked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    marked: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'0'>;
    mode: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 24;
      }> &
      Schema.Attribute.DefaultTo<'update'>;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<''>;
    plugincode: Schema.Attribute.Text;
    properties: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    saved: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    version_id: Schema.Attribute.Integer;
  };
}

export interface ApiBkhkVersionxResourceBkhkVersionxResource
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_versionx_resource';
  info: {
    description: 'bkhk-versionx-resource collection type';
    displayName: 'Bkhk versionx resource';
    pluralName: 'bkhk-versionx-resources';
    singularName: 'bkhk-versionx-resource';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    class: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'modDocument'>;
    content: Schema.Attribute.Text;
    content_id: Schema.Attribute.Integer;
    context_key: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'web'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fields: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-versionx-resource.bkhk-versionx-resource'
    > &
      Schema.Attribute.Private;
    marked: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'0'>;
    mode: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 24;
      }> &
      Schema.Attribute.DefaultTo<'update'>;
    publishedAt: Schema.Attribute.DateTime;
    saved: Schema.Attribute.DateTime;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'Unnamed'>;
    tvs: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    version_id: Schema.Attribute.Integer;
  };
}

export interface ApiBkhkVersionxSnippetBkhkVersionxSnippet
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_versionx_snippet';
  info: {
    description: 'bkhk-versionx-snippet collection type';
    displayName: 'Bkhk versionx snippet';
    pluralName: 'bkhk-versionx-snippets';
    singularName: 'bkhk-versionx-snippet';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    content_id: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'Chunk'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-versionx-snippet.bkhk-versionx-snippet'
    > &
      Schema.Attribute.Private;
    locked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    marked: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'0'>;
    mode: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 24;
      }> &
      Schema.Attribute.DefaultTo<'update'>;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<''>;
    properties: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    saved: Schema.Attribute.DateTime;
    snippet: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    version_id: Schema.Attribute.Integer;
  };
}

export interface ApiBkhkVersionxTemplateBkhkVersionxTemplate
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_versionx_template';
  info: {
    description: 'bkhk-versionx-template collection type';
    displayName: 'Bkhk versionx template';
    pluralName: 'bkhk-versionx-templates';
    singularName: 'bkhk-versionx-template';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    content: Schema.Attribute.Text;
    content_id: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<'Template'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-versionx-template.bkhk-versionx-template'
    > &
      Schema.Attribute.Private;
    locked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    marked: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'0'>;
    mode: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 24;
      }> &
      Schema.Attribute.DefaultTo<'update'>;
    properties: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    saved: Schema.Attribute.DateTime;
    templatename: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    version_id: Schema.Attribute.Integer;
  };
}

export interface ApiBkhkVersionxTemplatevarBkhkVersionxTemplatevar
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_versionx_templatevar';
  info: {
    description: 'bkhk-versionx-templatevar collection type';
    displayName: 'Bkhk versionx templatevar';
    pluralName: 'bkhk-versionx-templatevars';
    singularName: 'bkhk-versionx-templatevar';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    caption: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }> &
      Schema.Attribute.DefaultTo<''>;
    category: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    content_id: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    default_text: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 2000;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    display: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }> &
      Schema.Attribute.DefaultTo<''>;
    input_properties: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-versionx-templatevar.bkhk-versionx-templatevar'
    > &
      Schema.Attribute.Private;
    locked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    marked: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'0'>;
    mode: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 24;
      }> &
      Schema.Attribute.DefaultTo<'update'>;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<''>;
    output_properties: Schema.Attribute.Text;
    properties: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    rank: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    saved: Schema.Attribute.DateTime;
    type: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }> &
      Schema.Attribute.DefaultTo<''>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<'0'>;
    version_id: Schema.Attribute.Integer;
  };
}

export interface ApiBkhkWorkspacesBkhkWorkspaces
  extends Struct.CollectionTypeSchema {
  collectionName: 'bkhk_workspaces';
  info: {
    description: 'bkhk-workspaces collection type';
    displayName: 'Bkhk workspaces';
    pluralName: 'bkhk-workspacess';
    singularName: 'bkhk-workspaces';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<'0'>;
    attributes: Schema.Attribute.Text;
    created: Schema.Attribute.DateTime;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bkhk-workspaces.bkhk-workspaces'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    path: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Schema.Attribute.DefaultTo<''>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDemoDemo extends Struct.CollectionTypeSchema {
  collectionName: 'demos';
  info: {
    description: '';
    displayName: 'Demo';
    pluralName: 'demos';
    singularName: 'demo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Date: Schema.Attribute.Date;
    DateTime: Schema.Attribute.DateTime;
    Decimal: Schema.Attribute.Decimal;
    Integer: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::demo.demo'> &
      Schema.Attribute.Private;
    Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    publishedAt: Schema.Attribute.DateTime;
    RichText: Schema.Attribute.RichText;
    Text: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::bkhk-access-actiondom.bkhk-access-actiondom': ApiBkhkAccessActiondomBkhkAccessActiondom;
      'api::bkhk-access-actions.bkhk-access-actions': ApiBkhkAccessActionsBkhkAccessActions;
      'api::bkhk-access-category.bkhk-access-category': ApiBkhkAccessCategoryBkhkAccessCategory;
      'api::bkhk-access-context.bkhk-access-context': ApiBkhkAccessContextBkhkAccessContext;
      'api::bkhk-access-elements.bkhk-access-elements': ApiBkhkAccessElementsBkhkAccessElements;
      'api::bkhk-access-media-source.bkhk-access-media-source': ApiBkhkAccessMediaSourceBkhkAccessMediaSource;
      'api::bkhk-access-menus.bkhk-access-menus': ApiBkhkAccessMenusBkhkAccessMenus;
      'api::bkhk-access-namespace.bkhk-access-namespace': ApiBkhkAccessNamespaceBkhkAccessNamespace;
      'api::bkhk-access-permissions.bkhk-access-permissions': ApiBkhkAccessPermissionsBkhkAccessPermissions;
      'api::bkhk-access-policies.bkhk-access-policies': ApiBkhkAccessPoliciesBkhkAccessPolicies;
      'api::bkhk-access-policy-template-groups.bkhk-access-policy-template-groups': ApiBkhkAccessPolicyTemplateGroupsBkhkAccessPolicyTemplateGroups;
      'api::bkhk-access-policy-templates.bkhk-access-policy-templates': ApiBkhkAccessPolicyTemplatesBkhkAccessPolicyTemplates;
      'api::bkhk-access-resource-groups.bkhk-access-resource-groups': ApiBkhkAccessResourceGroupsBkhkAccessResourceGroups;
      'api::bkhk-access-resources.bkhk-access-resources': ApiBkhkAccessResourcesBkhkAccessResources;
      'api::bkhk-access-templatevars.bkhk-access-templatevars': ApiBkhkAccessTemplatevarsBkhkAccessTemplatevars;
      'api::bkhk-actiondom.bkhk-actiondom': ApiBkhkActiondomBkhkActiondom;
      'api::bkhk-actions-fields.bkhk-actions-fields': ApiBkhkActionsFieldsBkhkActionsFields;
      'api::bkhk-actions.bkhk-actions': ApiBkhkActionsBkhkActions;
      'api::bkhk-active-users.bkhk-active-users': ApiBkhkActiveUsersBkhkActiveUsers;
      'api::bkhk-categories-closure.bkhk-categories-closure': ApiBkhkCategoriesClosureBkhkCategoriesClosure;
      'api::bkhk-categories.bkhk-categories': ApiBkhkCategoriesBkhkCategories;
      'api::bkhk-class-map.bkhk-class-map': ApiBkhkClassMapBkhkClassMap;
      'api::bkhk-clientconfig-group.bkhk-clientconfig-group': ApiBkhkClientconfigGroupBkhkClientconfigGroup;
      'api::bkhk-clientconfig-setting.bkhk-clientconfig-setting': ApiBkhkClientconfigSettingBkhkClientconfigSetting;
      'api::bkhk-collection-resource-template.bkhk-collection-resource-template': ApiBkhkCollectionResourceTemplateBkhkCollectionResourceTemplate;
      'api::bkhk-collection-selections.bkhk-collection-selections': ApiBkhkCollectionSelectionsBkhkCollectionSelections;
      'api::bkhk-collection-settings.bkhk-collection-settings': ApiBkhkCollectionSettingsBkhkCollectionSettings;
      'api::bkhk-collection-template-columns.bkhk-collection-template-columns': ApiBkhkCollectionTemplateColumnsBkhkCollectionTemplateColumns;
      'api::bkhk-collection-templates.bkhk-collection-templates': ApiBkhkCollectionTemplatesBkhkCollectionTemplates;
      'api::bkhk-content-type.bkhk-content-type': ApiBkhkContentTypeBkhkContentType;
      'api::bkhk-context-resource.bkhk-context-resource': ApiBkhkContextResourceBkhkContextResource;
      'api::bkhk-context-setting.bkhk-context-setting': ApiBkhkContextSettingBkhkContextSetting;
      'api::bkhk-context.bkhk-context': ApiBkhkContextBkhkContext;
      'api::bkhk-dashboard-widget-placement.bkhk-dashboard-widget-placement': ApiBkhkDashboardWidgetPlacementBkhkDashboardWidgetPlacement;
      'api::bkhk-dashboard-widget.bkhk-dashboard-widget': ApiBkhkDashboardWidgetBkhkDashboardWidget;
      'api::bkhk-dashboard.bkhk-dashboard': ApiBkhkDashboardBkhkDashboard;
      'api::bkhk-document-groups.bkhk-document-groups': ApiBkhkDocumentGroupsBkhkDocumentGroups;
      'api::bkhk-documentgroup-names.bkhk-documentgroup-names': ApiBkhkDocumentgroupNamesBkhkDocumentgroupNames;
      'api::bkhk-element-property-sets.bkhk-element-property-sets': ApiBkhkElementPropertySetsBkhkElementPropertySets;
      'api::bkhk-extension-packages.bkhk-extension-packages': ApiBkhkExtensionPackagesBkhkExtensionPackages;
      'api::bkhk-fc-profiles-usergroups.bkhk-fc-profiles-usergroups': ApiBkhkFcProfilesUsergroupsBkhkFcProfilesUsergroups;
      'api::bkhk-fc-profiles.bkhk-fc-profiles': ApiBkhkFcProfilesBkhkFcProfiles;
      'api::bkhk-fc-sets.bkhk-fc-sets': ApiBkhkFcSetsBkhkFcSets;
      'api::bkhk-lexicon-entries.bkhk-lexicon-entries': ApiBkhkLexiconEntriesBkhkLexiconEntries;
      'api::bkhk-manager-log.bkhk-manager-log': ApiBkhkManagerLogBkhkManagerLog;
      'api::bkhk-media-sources-contexts.bkhk-media-sources-contexts': ApiBkhkMediaSourcesContextsBkhkMediaSourcesContexts;
      'api::bkhk-media-sources-elements.bkhk-media-sources-elements': ApiBkhkMediaSourcesElementsBkhkMediaSourcesElements;
      'api::bkhk-media-sources.bkhk-media-sources': ApiBkhkMediaSourcesBkhkMediaSources;
      'api::bkhk-member-groups.bkhk-member-groups': ApiBkhkMemberGroupsBkhkMemberGroups;
      'api::bkhk-membergroup-names.bkhk-membergroup-names': ApiBkhkMembergroupNamesBkhkMembergroupNames;
      'api::bkhk-menus.bkhk-menus': ApiBkhkMenusBkhkMenus;
      'api::bkhk-migx-config-elements.bkhk-migx-config-elements': ApiBkhkMigxConfigElementsBkhkMigxConfigElements;
      'api::bkhk-migx-configs.bkhk-migx-configs': ApiBkhkMigxConfigsBkhkMigxConfigs;
      'api::bkhk-migx-elements.bkhk-migx-elements': ApiBkhkMigxElementsBkhkMigxElements;
      'api::bkhk-migx-formtab-fields.bkhk-migx-formtab-fields': ApiBkhkMigxFormtabFieldsBkhkMigxFormtabFields;
      'api::bkhk-migx-formtabs.bkhk-migx-formtabs': ApiBkhkMigxFormtabsBkhkMigxFormtabs;
      'api::bkhk-namespaces.bkhk-namespaces': ApiBkhkNamespacesBkhkNamespaces;
      'api::bkhk-property-set.bkhk-property-set': ApiBkhkPropertySetBkhkPropertySet;
      'api::bkhk-register-messages.bkhk-register-messages': ApiBkhkRegisterMessagesBkhkRegisterMessages;
      'api::bkhk-register-queues.bkhk-register-queues': ApiBkhkRegisterQueuesBkhkRegisterQueues;
      'api::bkhk-register-topics.bkhk-register-topics': ApiBkhkRegisterTopicsBkhkRegisterTopics;
      'api::bkhk-seopro-keywords.bkhk-seopro-keywords': ApiBkhkSeoproKeywordsBkhkSeoproKeywords;
      'api::bkhk-session.bkhk-session': ApiBkhkSessionBkhkSession;
      'api::bkhk-site-htmlsnippets.bkhk-site-htmlsnippets': ApiBkhkSiteHtmlsnippetsBkhkSiteHtmlsnippets;
      'api::bkhk-site-plugin-events.bkhk-site-plugin-events': ApiBkhkSitePluginEventsBkhkSitePluginEvents;
      'api::bkhk-site-plugins.bkhk-site-plugins': ApiBkhkSitePluginsBkhkSitePlugins;
      'api::bkhk-site-snippets.bkhk-site-snippets': ApiBkhkSiteSnippetsBkhkSiteSnippets;
      'api::bkhk-site-templates.bkhk-site-templates': ApiBkhkSiteTemplatesBkhkSiteTemplates;
      'api::bkhk-site-tmplvar-access.bkhk-site-tmplvar-access': ApiBkhkSiteTmplvarAccessBkhkSiteTmplvarAccess;
      'api::bkhk-site-tmplvar-contentvalues.bkhk-site-tmplvar-contentvalues': ApiBkhkSiteTmplvarContentvaluesBkhkSiteTmplvarContentvalues;
      'api::bkhk-site-tmplvar-templates.bkhk-site-tmplvar-templates': ApiBkhkSiteTmplvarTemplatesBkhkSiteTmplvarTemplates;
      'api::bkhk-site-tmplvars.bkhk-site-tmplvars': ApiBkhkSiteTmplvarsBkhkSiteTmplvars;
      'api::bkhk-system-eventnames.bkhk-system-eventnames': ApiBkhkSystemEventnamesBkhkSystemEventnames;
      'api::bkhk-system-settings.bkhk-system-settings': ApiBkhkSystemSettingsBkhkSystemSettings;
      'api::bkhk-tbl-imgcache.bkhk-tbl-imgcache': ApiBkhkTblImgcacheBkhkTblImgcache;
      'api::bkhk-transport-packages.bkhk-transport-packages': ApiBkhkTransportPackagesBkhkTransportPackages;
      'api::bkhk-transport-providers.bkhk-transport-providers': ApiBkhkTransportProvidersBkhkTransportProviders;
      'api::bkhk-user-attributes.bkhk-user-attributes': ApiBkhkUserAttributesBkhkUserAttributes;
      'api::bkhk-user-group-roles.bkhk-user-group-roles': ApiBkhkUserGroupRolesBkhkUserGroupRoles;
      'api::bkhk-user-group-settings.bkhk-user-group-settings': ApiBkhkUserGroupSettingsBkhkUserGroupSettings;
      'api::bkhk-user-messages.bkhk-user-messages': ApiBkhkUserMessagesBkhkUserMessages;
      'api::bkhk-user-settings.bkhk-user-settings': ApiBkhkUserSettingsBkhkUserSettings;
      'api::bkhk-users.bkhk-users': ApiBkhkUsersBkhkUsers;
      'api::bkhk-versionx-chunk.bkhk-versionx-chunk': ApiBkhkVersionxChunkBkhkVersionxChunk;
      'api::bkhk-versionx-plugin.bkhk-versionx-plugin': ApiBkhkVersionxPluginBkhkVersionxPlugin;
      'api::bkhk-versionx-resource.bkhk-versionx-resource': ApiBkhkVersionxResourceBkhkVersionxResource;
      'api::bkhk-versionx-snippet.bkhk-versionx-snippet': ApiBkhkVersionxSnippetBkhkVersionxSnippet;
      'api::bkhk-versionx-template.bkhk-versionx-template': ApiBkhkVersionxTemplateBkhkVersionxTemplate;
      'api::bkhk-versionx-templatevar.bkhk-versionx-templatevar': ApiBkhkVersionxTemplatevarBkhkVersionxTemplatevar;
      'api::bkhk-workspaces.bkhk-workspaces': ApiBkhkWorkspacesBkhkWorkspaces;
      'api::demo.demo': ApiDemoDemo;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
