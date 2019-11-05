import iEditor from './lib/components/editor.vue';
import iFullEditor from './lib/components/full-editor.vue';
import preview from './lib/components/preview.vue';
import hljs from 'highlightjs/highlight.pack.js'
Vue.use(hljs)
const iviewEditor = {
    iEditor
};
const iviewFullEditor = {
    iFullEditor
};
const iPreview = {
    preview
};

const installEditor = function(Vue, opts = {}) {
    Vue.component('i-editor', iEditor);
};

const installFullEditor = function(Vue, opts = {}) {
	 Vue.component('i-full-editor', iFullEditor);
};

const installPreview = function(Vue, opts = {}) {
	  Vue.component('i-preview', preview);
};

if (typeof window !== 'undefined' && window.Vue) {
    installEditor(window.Vue);
	installFullEditor(window.Vue);
	installPreview(window.Vue);
}

export default Object.assign({ iviewEditor,iviewFullEditor,iPreview }, { installEditor,installFullEditor,installPreview});