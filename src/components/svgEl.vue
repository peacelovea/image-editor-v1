<!--
 * 素材面板组件
 * @Description: 素材面板
-->

<template>
  <div>
    <Divider plain orientation="left">卡通</Divider>
    <div class="box">
      <img :src="`./svg/${item}.svg`" alt="" :key="item" v-for="(item) in getIndex(460, 489)" @click="addItem">
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid'

const defaultPosition = {
  left: 100,
  top: 100,
  shadow: '',
  fontFamily: '1-1'
}

export default {
  name: 'svgEl',
  inject: ['canvas', 'fabric'],
  methods: {
    getIndex (start, end) {
      const arr = Array(end - (start - 1)).fill('')
      return arr.map((item, i) => (i + start))
    },
    // 按照类型渲染
    addItem (e) {
      const url = e.target.src
      this.fabric.loadSVGFromURL(url, (objects, options) => {
        let item = this.fabric.util.groupSVGElements(objects, {
          ...options, ...defaultPosition,
          id: uuid(),
          name: 'svg元素'
        })
        this.canvas.c.add(item)
        this.canvas.c.renderAll()
      })
    },
  }
}
</script>

<style scoped lang="less">

img {
  display: inline-block;
  width: 53px;
  margin-left: 2px;
  margin-bottom: 2px;
  background: #F5F5F5;
  padding: 6px;
  cursor: pointer;
}
</style>
