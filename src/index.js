import iEditor from './lib/components/editor.vue';
import iFullEditor from './lib/components/full-editor.vue';
import Preview from './lib/components/preview.vue';
import hljs from 'highlightjs/highlight.pack.js'
Vue.use(hljs)
const iviewEditor = {
    iEditor,iFullEditor,Preview
};

const installEditor = function(Vue, opts = {}) {
    Vue.component('i-editor', iEditor);
	 Vue.component('i-full-editor', iFullEditor);
	  Vue.component('i-preview', Preview);
};

if (typeof window !== 'undefined' && window.Vue) {
    installEditor(window.Vue);
}

export default Object.assign({ iviewEditor }, { installEditor});