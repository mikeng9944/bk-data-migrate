1. The table fields in Strapi is not matching with Modx table fields. We need to convert the Modx table schema to Strapi format.

2. Even we solve the table data format issue mentioned in Point 1. There are also other tables need to be import data in order to support the Strapi native functions, like api permission, state the field data type, set the data are published or not. All these details data are need to fill in to database for each table.

Supposing, all these thing / data should be via Strapi. Strapi will help to add these details data it self.

Regarding transferring data: 3. At old modx, database looks complex, data are scattered around many tables.
We may need to transfer data (text, image and PDF) manually - direct copy from current mainsite to new CMS - to be discussed after I study old DB structure.

Only after we understand the old DB structure, we can transfer data programmatically with some codes.
