<!--
 * 导入模版组件
 * @Description: 插入修图模版
-->

<template>
  <div style="display:inline-block">
    <Divider plain orientation="left">标题模板</Divider>
    <Tooltip placement="top" v-for="(item,i) in list" :key="i">
      <img class="tmpl-img" :alt="item.label" :src="item.src" @click="getTempData(item.tempUrl)">
    </Tooltip>
    <!-- <Divider plain orientation="left">形状模板</Divider> -->
  </div>
</template>

<script>
import select from '@/mixins/select'
import { downFontByJSON } from '@/utils/utils'

export default {
  name: 'importTmpl',
  mixins: [select],
  data () {
    return {
      jsonFile: null,
      list: [
        {
          label: '笔记模板',
          tempUrl: './template/073606d4-22de-491b-8b51-b90d72101d89.json',
          src: './template/073606d4-22de-491b-8b51-b90d72101d89.png',
        },
        {
          label: '醒目封面',
          tempUrl: './template/dcebee41-59b5-408b-a65a-c51bc390be3d.json',
          src: './template/dcebee41-59b5-408b-a65a-c51bc390be3d.png',
        },
        {
          label: '教师节',
          tempUrl: './template/3a7471f2-b8cf-4939-ad1a-a7d586768640.json',
          src: './template/3a7471f2-b8cf-4939-ad1a-a7d586768640.png',
        },
        {
          label: '升职锦囊',
          tempUrl: './template/ef5eb884-28e0-4d79-9e98-a73d759541f8.json',
          src: './template/ef5eb884-28e0-4d79-9e98-a73d759541f8.png',
        },
        {
          label: '古风模板',
          tempUrl: './template/ecc3fca2-f66e-465e-b2c7-80b7522fdb3b.json',
          src: './template/ecc3fca2-f66e-465e-b2c7-80b7522fdb3b.png',
        },
      ],
    }
  },
  methods: {
    // 插入文件
    insertSvgFile () {
      this.$Spin.show({
        render: (h) => h('div', '正在加载字体...')
      })
      // 根据json模板下载字体文件
      downFontByJSON(this.jsonFile).then(() => {
        this.$Spin.hide()
        // loadFromJSON：数据加载到画布
        this.canvas.c.loadFromJSON(this.jsonFile, this.canvas.c.renderAll.bind(this.canvas.c))
      }).catch((e) => {
        this.$Spin.hide()
        this.$Message.error('字体加载失败，请重试')
      })
    },
    // 获取模版数据
    getTempData (url) {
      this.$Spin.show({
        render: (h) => {
          return h('div', '加载数据中...')
        }
      })
      const getTemp = this.$http.get(url)
      getTemp.then(res => {
        this.jsonFile = JSON.stringify(res?.data)
        this.insertSvgFile()
      })
    },
  },
}
</script>

<style scoped lang="less">
.tmpl-img {
  width: 77px;
  cursor: pointer;
  margin-right: 5px;
}
</style>
