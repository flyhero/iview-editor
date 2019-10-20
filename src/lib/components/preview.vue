<template>

	<Markdown  :content="content" :highlight="highlight" ref="markdown">

	</Markdown>

</template>
<script>
	import Markdown from './md.vue';

	export default {
		name: 'preview',
		components: {
			Markdown
		},
		props: {
			value: {
			    type: String,
			    default: ''
			},
			highlight: {
				type: Function,
				default (code) {
					return code;
				}
			}
		},
		data() {
			return {
				content: this.value
			};
		}
	}
</script>
