import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'master';

export default defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      // Uploads land in public/menu, matching existing image paths ("/menu/xxx.png")
      mediaRoot: 'menu',
      publicFolder: 'public',
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: 'menu',
        label: 'Menu',
        path: 'content/menu',
        format: 'json',
        match: { include: 'menu' },
        ui: {
          // Single document: the owner edits the list, not the file
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: 'object',
            name: 'items',
            label: 'Menu items',
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.name?.en || 'New item',
              }),
            },
            fields: [
              { type: 'number', name: 'id', label: 'ID (unique, do not reuse)', required: true },
              {
                type: 'object',
                name: 'name',
                label: 'Name',
                fields: [
                  { type: 'string', name: 'de', label: 'German', required: true },
                  { type: 'string', name: 'en', label: 'English', required: true },
                ],
              },
              { type: 'number', name: 'price', label: 'Price (€)', required: true },
              {
                type: 'object',
                name: 'description',
                label: 'Description (optional)',
                fields: [
                  { type: 'string', name: 'de', label: 'German', ui: { component: 'textarea' } },
                  { type: 'string', name: 'en', label: 'English', ui: { component: 'textarea' } },
                ],
              },
              { type: 'image', name: 'image', label: 'Image', required: true },
            ],
          },
        ],
      },
    ],
  },
});
