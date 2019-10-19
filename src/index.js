import iEditor from './lib/components/editor.vue';
import iFullEditor from './lib/components/full-editor.vue';
import hljs from 'highlightjs/highlight.pack.js'
Vue.use(hljs)
const iviewEditor = {
    iEditor
};
const iviewFullEditor = {
    iFullEditor
};
const installEditor = function(Vue, opts = {}) {
    Vue.component('i-editor', iEditor);
};
const installFullEditor = function (Vue, opts = {}) {
    Vue.component('i-full-editor', iFullEditor);
};
if (typeof window !== 'undefined' && window.Vue) {
    installEditor(window.Vue);
    installFullEditor(window.Vue);
}

export default Object.assign({ iviewEditor, iviewFullEditor }, { installEditor, installFullEditor});