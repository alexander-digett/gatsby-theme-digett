import CMS, { init } from "netlify-cms"

/**
 * Optionally pass in a config object. This object will be merged into `config.yml` if it exists
 */

init({
  config: {
    backend: {
      name: 'git-gateway',
    },
    load_config_file: false,
    media_folder: "static/assets",
    public_folder: "/assets",
    collections: [
      { label: "Basic Page", name: "basic-page", folder: "src/pages", create: true, fields: [
        { label: "Template Key", name: "templateKey", widget: "hidden", default: "basic-page" },
        { label: "Title", name: "title", widget: "string" },
        { label: "Body", name: "body", widget: "markdown" },
      ]},
    ],
  },
})