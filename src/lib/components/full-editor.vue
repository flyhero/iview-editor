<template>
  <div class="i-editor">
    <div>
      <div class="i-editor-fullscreen-container">
        <div slot="header" class="i-editor-fullscreen-header">
          <div class="i-editor-fullscreen-header-menu">
            <!-- <p>全屏编辑</p> -->
            <ul>
              <li>
                <a href="javascript:;" title="撤销（Ctrl+Z）" unselectable="on">
                  <i class="fa fa-undo" name="undo" unselectable="on"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;" title="重做（Ctrl+Y）" unselectable="on">
                  <i class="fa fa-repeat" name="redo" unselectable="on"></i>
                </a>
              </li>
              <li class="divider" unselectable="on">|</li>
              <li>
                <a href="javascript:;" title="粗体" unselectable="on">
                  <i class="fa fa-bold" name="bold" unselectable="on"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;" title="删除线" unselectable="on">
                  <i class="fa fa-strikethrough" name="del" unselectable="on"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;" title="斜体" unselectable="on">
                  <i class="fa fa-italic" name="italic" unselectable="on"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;" title="引用" unselectable="on">
                  <i class="fa fa-quote-left" name="quote" unselectable="on"></i>
                </a>
              </li>
              <li class="divider" unselectable="on">|</li>
              <li>
                <a href="javascript:;" title="标题1" @click="handleInsertMenu('# ')">
                  <i class="fa editormd-bold" name="h1" unselectable="on">H1</i>
                </a>
              </li>
              <li>
                <a href="javascript:;" title="标题2" @click="handleInsertMenu('## ')">
                  <i class="fa editormd-bold" name="h2" unselectable="on">H2</i>
                </a>
              </li>
              <li>
                <a href="javascript:;" title="标题3" @click="handleInsertMenu('### ')">
                  <i class="fa editormd-bold" name="h3" unselectable="on">H3</i>
                </a>
              </li>
              <li>
                <a href="javascript:;" title="标题4" @click="handleInsertMenu('#### ')">
                  <i class="fa editormd-bold" name="h4" unselectable="on">H4</i>
                </a>
              </li>
              <li>
                <a href="javascript:;" title="标题5" @click="handleInsertMenu('##### ')">
                  <i class="fa editormd-bold" name="h5" unselectable="on">H5</i>
                </a>
              </li>
              <li>
                <a href="javascript:;" title="标题6" @click="handleInsertMenu('###### ')">
                  <i class="fa editormd-bold" name="h6" unselectable="on">H6</i>
                </a>
              </li>
              <li class="divider" unselectable="on">|</li>
              <li>
                <a href="javascript:;" title="无序列表" @click="handleInsertMenu('- ')">
                  <i class="fa fa-list-ul" name="list-ul" unselectable="on"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;" title="有序列表" @click="handleInsertMenu('1. \n2. \n3. ')">
                  <i class="fa fa-list-ol" name="list-ol" unselectable="on"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;" title="横线" unselectable="on">
                  <i class="fa fa-minus" name="hr" unselectable="on"></i>
                </a>
              </li>
              <li class="divider" unselectable="on">|</li>
              <li>
                <a href="javascript:;" title="链接" @click="handleInsertMenu('![]()')">
                  <i class="fa fa-link" name="link" unselectable="on"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;" title="添加图片" unselectable="on">
                  <i class="fa fa-picture-o" name="image" unselectable="on"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;" title="代码块" @click="handleInsertMenu('\n```\n```')">
                  <i class="fa fa-code" name="code" unselectable="on"></i>
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  title="添加表格"
                  @click="handleInsertMenu('\n\n|No1|No2|No3|\n|---|---|---|\n|cloum1|cloum2|cloum3|')"
                >
                  <i class="fa fa-table" name="table" unselectable="on"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;" title="日期时间" @click="handleInsertMenu(new Date())">
                  <i class="fa fa-clock-o" name="datetime" unselectable="on"></i>
                </a>
              </li>
              <li class="divider" unselectable="on">|</li>
              <li>
				  
                <a href="javascript:;" v-if="showPreview === 'all'" title="编辑" @click="handlePreview('edit')">
                  <i class="fa fa-eye-slash" name="watch" ></i>
                </a>
				<a href="javascript:;" v-else-if="showPreview === 'edit'" title="预览" @click="handlePreview('preview')">
				  <i class="fa fa-eye" name="watch" ></i>
				</a>
				<a href="javascript:;" v-else title="实时预览" @click="handlePreview('all')">
					<Icon type="md-contrast" />
				</a>
              </li>
              <li>
                <a href="javascript:;" title="清空" @click="handleClearContent">
                  <i class="fa fa-eraser" name="clear" unselectable="on"></i>
                </a>
              </li>
              <li>
                <a title="搜索" unselectable="on">
                  <i class="fa fa-search" name="search" unselectable="on"></i>
                </a>
              </li>
              <li class="divider" unselectable="on">|</li>
              <li>
                <a href="javascript:;" title="使用帮助" @click="showMdTip = true">
                  <i class="fa fa-question-circle" name="help" unselectable="on"></i>
                </a>
              </li>
              <li>
                <a href="javascript:;" title unselectable="on">
                  <i class="fa fa-download" name="download" unselectable="on"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="i-editor-fullscreen-main">
          <row :gutter="32" v-if="showPreview === 'all'">
            <i-col span="12">
              <Upload
                :paste="paste"
                :config="config"
                :before-upload="beforeUpload"
                type="drag"
                :styles="3"
                @on-success="handleUploadSuccess"
                @click.prevent.stop.native
              >
                <Input
                  v-model="content"
                  :placeholder="placeholder"
                  type="textarea"
                  :autosize="autosize"
                  ref="content"
                />
              </Upload>
            </i-col>
            <i-col span="12">
              <Markdown	 :content="content" :highlight="highlight"></Markdown>
            </i-col>
          </row>
          <row :gutter="32" v-else-if="showPreview === 'edit'">
            <i-col span="24">
              <Upload
                :paste="paste"
                :config="config"
                :before-upload="beforeUpload"
                type="drag"
                :styles="3"
                @on-success="handleUploadSuccess"
                @click.prevent.stop.native
              >
                <Input
                  v-model="content"
                  :placeholder="placeholder"
                  type="textarea"
                  :autosize="autosize"
                  ref="content"
                />
              </Upload>
            </i-col>
          </row>
		  <row :gutter="32" v-else>
		    <i-col span="24">
		      <Markdown	 :content="content" :highlight="highlight"></Markdown>
		    </i-col>
		  </row>
        </div>
        <div class="i-editor-fullscreen-tail" v-if="showPreview == 'all'"></div>
      </div>
    </div>
    <Modal
      title="常用 Markdown 语法"
      scrollable
      width="300"
      v-model="showMdTip"
      class="i-editor-md-tip"
      draggable
      footer-hide
    >
      <row>
        <i-col span="10">
          <div>
            <strong>Markdown</strong>
          </div>
          <div># 标题</div>
          <div>## 标题</div>
          <div>**粗体**</div>
          <div>*斜体*</div>
          <div>[描述](http://)</div>
          <div>`code`</div>
          <div>```code```</div>
          <div>![alt](http://)</div>
          <div>- item</div>
          <div>1. item</div>
          <div>> 引用内容</div>
        </i-col>
        <i-col span="14">
          <div>
            <strong>结果</strong>
          </div>
          <div>H1</div>
          <div>H2</div>
          <div>
            <strong>粗体</strong>
          </div>
          <div>
            <i>斜体</i>
          </div>
          <div>
            <a href="javascript:void(0)">链接</a>
          </div>
          <div>
            <code>Inline Code</code>
          </div>
          <div>
            <code>Code</code>
          </div>
          <div>图片</div>
          <div>
            <ul>
              <li>无序列表</li>
            </ul>
          </div>
          <div>
            <ol>
              <li>有序列表</li>
            </ol>
          </div>
          <div>
            <blockquote>引用内容</blockquote>
          </div>
        </i-col>
      </row>
      <a href="http://wowubuntu.com/markdown/" target="_blank">更多语法</a>
    </Modal>
  </div>
</template>
<script>
import insertText from "../util/insertText";
import Upload from "./upload.vue";
import Markdown from "./md.vue";
import hljs from "highlightjs/highlight.pack.js";

export default {
  name: "iFullEditor",
  components: { Upload, Markdown },
  props: {
    affix: Boolean,
    offsetTop: Number,
    placeholder: String,
    autosize: Object,
    writeName: {
      type: String,
      default: "内容"
    },
    changeScroll: Boolean,
    cover: String,
    showSummary: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object,
      default() {
        return {
          action: "/",
          maxSize: 5120
        };
      }
    },
    value: {
      type: String,
      default: ""
    },
    beforeUpload: {
      type: Function,
      default() {
        return true;
      }
    },
    imgUrl: {
      type: Function,
      default(res) {
        return res;
      }
    },
    highlight: {
      type: Function,
      default(code) {
        console.log("解析内容："+hljs.highlightAuto(code).value);
        return hljs.highlightAuto(code).value;
      }
    },
    paste: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      tabType: "write", // write || preview || summary
      content: this.value,
      showMdTip: false,
      showPreview: 'all',
      showDiff: false,
      showDiffEditor: false,
      summary: ""
    };
  },
  watch: {
    showDiff(val) {
      // 避免出现输入框的滚动条
      this.$nextTick(() => {
        this.showDiffEditor = val;
      });
    },
    value(val) {
      this.content = val;
    },
    content(val) {
      this.$emit("input", val);
    },
    highlight(code) {
      return hljs.highlightAuto(code).value;
    },
  },
  computed: {
    //            coverUrl () {
    //                return config.filePrefix + this.cover + '/large';
    //            }
  },
  methods: {
    handleUploadSuccess(res) {
      //                const url = config.filePrefix + res.key + '/large';
      const url = this.imgUrl(res);
      const md_link = `![](${url})`;

      const $content = this.$refs.content.$refs.textarea;
      insertText($content, md_link);

      this.$nextTick(() => {
        this.content = $content.value; // 不加此行，改变了 value 不会重绘，原数据则没有改变
        this.$refs.content.focus();
      });
    },
    handleInsertMenu(text) {
      const $content = this.$refs.content.$refs.textarea;
      insertText($content, text);
    },
    handlePreview(text) {
      this.showPreview = text;
    },
    handleClearContent() {
      this.content = "";
    },
    handleImportMd(result) {
      if (this.content !== "") {
        this.$Modal.confirm({
          title: "导入确认",
          content: "导入后将覆盖您已经输入的内容，是否继续导入？",
          onOk: () => {
            this.content = result;
          }
        });
      } else {
        this.content = result;
      }
    },
    focus() {
      if (this.$refs.content) {
        this.$refs.content.focus();
      }
    }
  }
};
</script>