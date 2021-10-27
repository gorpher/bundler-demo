import App from './App.svelte'
import '@sveltejs/site-kit/base.css';
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/command-line/prism-command-line.css";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";

import "prismjs/themes/prism.css";
import "prismjs/themes/prism-coy.css";

const app = new App({
  target: document.getElementById('app')
})

export default app
