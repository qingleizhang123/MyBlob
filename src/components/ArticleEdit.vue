<template>
  <div class="markdown">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.titleName"></el-input>
      </el-form-item>
      <el-form-item label="类别">
        <el-select v-model="form.type" style="width:100%">
          <el-option label="angular" value="angular"></el-option>
          <el-option label="react" value="react"></el-option>
          <el-option label="vue" value="vue"></el-option>
          <el-option label="typescript" value="typescript"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签">
        <el-tag
        :key="tag"
        v-for="tag in form.tags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)">
        {{tag}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      </el-form-item>
      <el-form-item>
        <Markdown v-model="form.content"></Markdown>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Markdown from 'vue-meditor'
export default {
  name: 'ArticleEdit',
  data () {
    return {
      inputVisible: false,
      inputValue: '',
      form: {
        titleName: '',
        type: '',
        content: '',
        tags: []
      }
    }
  },
  components: {
    Markdown
  },
  methods: {
    onSubmit () {
      console.log(this.form)
      this.$http({
        method: 'post',
        url: '/api/v1/article/create',
        data: { title: this.form.titleName, author: 'ces', content: this.form.content, category: this.form.type }
      }).then((result) => {
        console.log(result.data.data)
        this.$message({
          message: '发布成功！',
          type: 'success'
        })
        // todo 跳转到想去页
      }).catch((err) => {
        console.log(err)
      })
    },
    handleClose (tag) {
      this.form.tags.splice(this.form.tags.indexOf(tag), 1)
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.form.tags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.el-form-item__content {
  text-align: left;
}
</style>
