<template>
  <div class="home">
    <Layout>
      <!-- 头部 -->
      <Header v-if="show">Header</Header>

      <!-- 内容区 -->
      <Content style=" display: flex; height: calc(100vh - 64px);">
        <!-- 左侧功能区 -->
        <div style="width: 380px; height: 100%; background:#fff; display: flex">
          <Menu :active-name="menuActive" accordion @on-select="activeIndex => menuActive = activeIndex" width="80px">
            <MenuItem :name="1" style="padding:10px">
              <Icon type="md-book"/>
              模板
            </MenuItem>
            <MenuItem :name="2" style="padding:10px">
              <Icon type="md-create"/>
              元素
            </MenuItem>
            <MenuItem :name="3" style="padding:10px">
              <Icon type="ios-build"/>
              背景
            </MenuItem>
          </Menu>
          <!-- 功能模版 -->
          <div class="content">
            <!-- 生成模板 -->
            <div v-show="menuActive === 1" class="left-panel">
              <import-tmpl></import-tmpl>
            </div>
            <!-- 常用元素 -->
            <div v-show="menuActive === 2" class="left-panel">
              <tools></tools>
              <svgEl></svgEl>
            </div>
            <!-- 背景设置 -->
            <!--            <div v-show="menuActive === 3" class="left-panel">-->
            <!--              <set-size></set-size>-->
            <!--              <bg-bar></bg-bar>-->
            <!--            </div>-->
          </div>
        </div>

        <!-- 画布区域 -->
        <div style="width: 100%;position: relative; background:#F1F1F1;">
          <div class="canvas-box" style="width: 100%;height:100%">
            <canvas width="1000" height="1000" id="canvas"></canvas>
          </div>
        </div>

        <!-- 属性区域 -->
        <div style="width: 380px; height: 100%; padding:10px; overflow-y: auto; background:#fff">

        </div>
      </Content>
    </Layout>
  </div>
</template>

<script>

// 左侧组件
import importTmpl from '@/components/importTmpl.vue'
import tools from '@/components/tools.vue'
import svgEl from '@/components/svgEl.vue'

import { fabric } from 'fabric'

const canvas = {}
export default {
  name: 'HomeView',
  components: {
    importTmpl,
    tools,
    svgEl
  },
  provide: {
    canvas,
    fabric,
  },
  data () {
    return {
      menuActive: 1,
      show: false,
    }
  },
  methods: {
    init: function () {
      const canvas = new fabric.Canvas('canvas') // 这里传入的是canvas元素的id

      // 创建一个长方形
      const rect = new fabric.Rect({
        top: 100, // 距离容器顶部 100px
        left: 100, // 距离容器左侧 100px
        width: 100, // 矩形宽度 30px
        height: 100, // 矩形高度 30px
        fill: 'pink' // 填充 红色
      })

      canvas.add(rect) // 将矩形添加到 canvas 画布里
    }
  },
  created () {
    this.$Spin.show()
  },
  mounted () {
    this.canvas = canvas.c = new fabric.Canvas('canvas')
    this.canvas.set('backgroundColor', '#fff')
    this.show = true
    this.$Spin.hide()
  }
}
</script>

<style lang="less" scoped>
/deep/ .ivu-layout-header {
  padding: 0 10px;
}

.home,
.ivu-layout {
  height: 100vh;
}

.icon {
  display: block;
}

.canvas-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#canvas {
  width: 300px;
  height: 300px;
  margin: 0 auto;
}

.content {
  flex: 1;
  width: 200px;
  padding: 10px;
  padding-top: 0;
  height: 100%;
  overflow-y: auto;
}
</style>
