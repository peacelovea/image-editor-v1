<template>
  <div style="display: inline-block">
    <Button size="small" @click="insert">插入图片</Button>
    <Modal
      v-model="showModal"
      title="请选择"
      @on-ok="insertImgFile"
      @on-cancel="showModal = false,imgFile = null"
    >
      <Upload :before-upload="handleUpload" action="#">
        <Button icon="ios-cloud-upload-outline">选择图片文件</Button>
      </Upload>
    </Modal>
  </div>
</template>

<script>
import select from '@/mixins/select'
import { v4 as uuid } from 'uuid'
import { getImgStr } from '@/utils/utils'

export default {
  name: 'importImg',
  mixins: [select],
  data () {
    return {
      showModal: false,
      imgFile: null
    }
  },
  methods: {
    insert () {
      this.imgFile = ''
      this.showModal = true
    },
    insertImgFile () {
      const imgEl = document.createElement('img')
      imgEl.src = this.imgFile
      // 插入页面
      document.body.appendChild(imgEl)
      imgEl.onload = () => {
        // 创建图片对象
        const imgInstance = new this.fabric.Image(imgEl, {
          id: uuid(),
          name: '图片1',
          left: 100,
          top: 100
        })
        // 缩放
        imgInstance.scale(0.2)
        this.canvas.c.add(imgInstance)
        this.canvas.c.setActiveObject(imgInstance)
        this.canvas.c.renderAll()
        // 删除页面中的图片元素
        imgEl.remove()
      }
    },
    // 选择文件
    handleUpload (file) {
      getImgStr(file).then(res => {
        this.imgFile = res
      })
    }
  }
}
</script>

<style scoped>

</style>
