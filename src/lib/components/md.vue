<template>
	<div class="i-editor-md">
		<slot></slot>
		<div class="dev-md-content" v-html="html" ref="content"></div>
	</div>
</template>
<script>
	var codes = [];
	window.copy = function(index) {
		var oInput = document.createElement('input');
		oInput.value = codes[index];
		document.body.appendChild(oInput);
		oInput.select(); // 选择对象
		document.execCommand("Copy"); // 执行浏览器复制命令
		oInput.className = 'oInput';
		oInput.style.display = 'none';
		info();
	}
	import marked from 'marked';
	import hljs from 'highlightjs/highlight.pack.js';
	import pinyinUtil from '../util/pinyin/pinyinUtil';
	export default {
		props: {
			content: String,
			highlight: Function
		},
		data() {
			return {
				html: ''
			}
		},
		watch: {
			content() {
				this.renderMd();
			}
		}, //挂载前
		created() {
			window.info = () => this.info();
		},
		methods: {
			info() {
				this.$Notice.info({
					title: '复制成功',
					desc: ''
				});
			},
			renderMd() {
				const renderer = new marked.Renderer();
				renderer.heading = function(text, level) {
					let id = pinyinUtil.getFirstLetter(text);
					id = id.replace(/\s/g, '_').replace(/\?|？|,/g, '');
					return `<h${level} id="${id}">${text}</h${level}>`;
				};

				const _this = this;
				const waitingHtml = marked(this.content, {
					breaks: true,
					headerIds: false,
					highlight(code) {
						codes.push(code);
						return hljs.highlightAuto(code).value;
					},
					renderer: renderer
				});
				console.log('原文：' + waitingHtml);
				const ary = waitingHtml.split('<pre>');
				var res = '';
				for (var j = 0, len = ary.length; j < len; j++) {
					console.log('内容：' + ary[j]);
					if (j != 0) {
						const k = j - 1;
						res = res + '<pre><a onclick="copy(' + k +
							')"><i class="ivu-icon ivu-icon-md-copy" style="float:right;"></i></a>' + ary[j];
					} else {
						res = res + ary[j];
					}
				}
				this.html = res;

				// this.html = marked(this.content, {
				//     breaks: true,
				//     headerIds: false,
				//     highlight (code) {
				//         return hljs.highlightAuto(code).value;
				//     },
				//     renderer: renderer
				// });
				// console.log('内容：'+res);
			}
		},
		mounted() {
			this.renderMd();
		}
	};
</script>
