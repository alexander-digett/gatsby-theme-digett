// Usage with import from npm package
import CMS, { init } from 'netlify-cms'

/**
 * Optionally pass in a config object. This object will be merged into `config.yml` if it exists
 */
 var collections = [      
 { label: "Basic Page 6", name: "basic-page-6", folder: "src/pages", create: true, fields: [
        { label: "Template Key", name: "templateKey", widget: "hidden", default: "basic-page" },
        { label: "Title2", name: "title", widget: "string" },
        { label: "Body", name: "body", widget: "markdown" },
      ]}
  ];

init({
  config: {
    backend: {
      name: 'git-gateway',
    },
    media_folder: "static/assets",
    public_folder: "/assets",
    collections: collections,
  },
})