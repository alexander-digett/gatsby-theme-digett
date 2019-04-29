import CMS, { init } from "netlify-cms"

/**
 * Optionally pass in a config object. This object will be merged into `config.yml` if it exists
 */

init({
  config: {
    backend: {
      name: "git-gateway",
    },
    collections:{
    	name: "basic-page",
    	label: "Basic Page",
    	folder: "src/pages",
    	create: true,
    	slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    	fields:{
    		[
    		label: "Template Key", 
    		name: "templateKey", 
    		widget: "hidden", 
    		default: "basic-page"
    		],
    		[
    		label: "Title", 
    		name: "title", 
    		widget: "string"
    		],
    		[
    		label: "Body", 
    		name: "body", 
    		widget: "markdown"
    		],
    	}
    }
  },
})