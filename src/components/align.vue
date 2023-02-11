<template>
  <ButtonGroup size="small">
    <!-- 水平对齐 -->
    <Button :disabled="notMultiple()" @click="left">
      <svg class="icon" height="14" p-id="2345" t="1650442284704" version="1.1"
           viewBox="0 0 1024 1024" width="14" xmlns="http://www.w3.org/2000/svg">
        <path d="M80 24h64v976H80zM198 227h448v190H198zM198 607h746v190H198z" p-id="2346"></path>
      </svg>
    </Button>
    <Button :disabled="notMultiple()" @click="xcenter">
      <svg class="icon" height="14" p-id="1514" t="1650442754876" version="1.1"
           viewBox="0 0 1024 1024" width="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M477.312 576V448H266.688a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32h210.624V34.688a34.688 34.688 0 0 1 69.376 0V192h210.624a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H546.688v128H896a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H546.688v157.312a34.688 34.688 0 1 1-69.376 0V832H128a32 32 0 0 1-32-32v-192A32 32 0 0 1 128 576h349.312z"
          fill="#666666" p-id="1515"></path>
      </svg>
    </Button>
    <Button :disabled="notMultiple()" @click="right">
      <svg class="icon" height="14" p-id="2543" t="1650442299564" version="1.1"
           viewBox="0 0 1024 1024" width="14" xmlns="http://www.w3.org/2000/svg">
        <path d="M944 1000h-64V24h64zM826 417H378V227h448zM826 797H80V607h746z" p-id="2544"></path>
      </svg>
    </Button>
    <!-- 垂直对齐 -->
    <Button :disabled="notMultiple()" @click="top">
      <svg class="icon" height="14" p-id="1118" t="1650442692910" version="1.1"
           viewBox="0 0 1170 1024" width="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1170.285714 36.571429a36.571429 36.571429 0 0 1-36.571428 36.571428H36.571429a36.571429 36.571429 0 0 1 0-73.142857h1097.142857a36.571429 36.571429 0 0 1 36.571428 36.571429z m-219.428571 146.285714v512a36.571429 36.571429 0 0 1-36.571429 36.571428h-219.428571a36.571429 36.571429 0 0 1-36.571429-36.571428v-512a36.571429 36.571429 0 0 1 36.571429-36.571429h219.428571a36.571429 36.571429 0 0 1 36.571429 36.571429z m-438.857143 0v804.571428a36.571429 36.571429 0 0 1-36.571429 36.571429h-219.428571a36.571429 36.571429 0 0 1-36.571429-36.571429v-804.571428a36.571429 36.571429 0 0 1 36.571429-36.571429h219.428571a36.571429 36.571429 0 0 1 36.571429 36.571429z"
          fill="#666666" p-id="1119"></path>
      </svg>
    </Button>
    <Button :disabled="notMultiple()" @click="ycenter">
      <svg class="icon" height="14" p-id="1316" t="1650442732396" version="1.1"
           viewBox="0 0 1243 1024" width="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M548.571429 472.356571h146.285714V231.643429a36.571429 36.571429 0 0 1 36.571428-36.571429h219.428572a36.571429 36.571429 0 0 1 36.571428 36.571429v240.713142h179.785143a39.643429 39.643429 0 0 1 0 79.286858H987.428571v240.713142a36.571429 36.571429 0 0 1-36.571428 36.571429h-219.428572a36.571429 36.571429 0 0 1-36.571428-36.571429V551.643429h-146.285714V950.857143a36.571429 36.571429 0 0 1-36.571429 36.571428H292.571429a36.571429 36.571429 0 0 1-36.571429-36.571428V551.643429H76.214857a39.643429 39.643429 0 1 1 0-79.286858H256V73.142857A36.571429 36.571429 0 0 1 292.571429 36.571429h219.428571a36.571429 36.571429 0 0 1 36.571429 36.571428v399.213714z"
          fill="#666666" p-id="1317"></path>
      </svg>
    </Button>
    <Button :disabled="notMultiple()" @click="bottom">
      <svg class="icon" height="14" p-id="920" t="1650442674784" version="1.1"
           viewBox="0 0 1170 1024" width="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1170.285714 987.428571a36.571429 36.571429 0 0 0-36.571428-36.571428H36.571429a36.571429 36.571429 0 0 0 0 73.142857h1097.142857a36.571429 36.571429 0 0 0 36.571428-36.571429z m-219.428571-146.285714v-512a36.571429 36.571429 0 0 0-36.571429-36.571428h-219.428571a36.571429 36.571429 0 0 0-36.571429 36.571428v512a36.571429 36.571429 0 0 0 36.571429 36.571429h219.428571a36.571429 36.571429 0 0 0 36.571429-36.571429z m-438.857143 0V36.571429a36.571429 36.571429 0 0 0-36.571429-36.571429h-219.428571a36.571429 36.571429 0 0 0-36.571429 36.571429v804.571428a36.571429 36.571429 0 0 0 36.571429 36.571429h219.428571a36.571429 36.571429 0 0 0 36.571429-36.571429z"
          fill="#666666" p-id="921"></path>
      </svg>
    </Button>
  </ButtonGroup>
</template>

<script>
import select from '@/mixins/select'

export default {
  name: 'align',
  mixins: [select],
  data () {
    return {
      id: '',
      list: []
    }
  },
  methods: {
    // 非多选时，禁止组合对齐操作
    notMultiple () {
      return this.mSelectMode !== 'multiple'
    },
    // 左对齐
    left () {
      const activeObject = this.canvas.c.getActiveObject()
      if (activeObject && activeObject.type === 'activeSelection') {
        const activeSelection = activeObject
        const activeObjectLeft = -(activeObject.width / 2)
        activeSelection.forEachObject(item => {
          item.set({
            left: activeObjectLeft,
          })
          item.setCoords()
          this.canvas.c.renderAll()
        })
      }
    },
    // 右对齐
    right () {
      const activeObject = this.canvas.c.getActiveObject()
      if (activeObject && activeObject.type === 'activeSelection') {
        const activeSelection = activeObject
        const activeObjectLeft = (activeObject.width / 2)
        activeSelection.forEachObject(item => {
          item.set({
            left: activeObjectLeft - (item.width * item.scaleX),
          })
          item.setCoords()
          this.canvas.c.renderAll()
        })
      }
    },
    // 水平居中对齐
    xcenter () {
      const activeObject = this.canvas.c.getActiveObject()
      if (activeObject && activeObject.type === 'activeSelection') {
        const activeSelection = activeObject
        activeSelection.forEachObject(item => {
          item.set({
            left: 0 - ((item.width * item.scaleX) / 2),
          })
          item.setCoords()
          this.canvas.c.renderAll()
        })
      }
    },
    // 顶部对齐
    top () {
      const activeObject = this.canvas.c.getActiveObject()
      if (activeObject && activeObject.type === 'activeSelection') {
        const activeSelection = activeObject
        console.log(activeSelection)
        const activeObjectTop = -(activeObject.height / 2)
        activeSelection.forEachObject(item => {
          item.set({
            top: activeObjectTop,
          })
          item.setCoords()
          this.canvas.c.renderAll()
        })
      }
    },
    // 底部对齐
    bottom () {
      const activeObject = this.canvas.c.getActiveObject()
      if (activeObject && activeObject.type === 'activeSelection') {
        const activeSelection = activeObject
        const activeObjectTop = (activeObject.height / 2)
        activeSelection.forEachObject(item => {
          item.set({
            top: activeObjectTop - (item.height * item.scaleY),
          })
          item.setCoords()
          this.canvas.c.renderAll()
        })
      }
    },
    // 垂直居中对齐
    ycenter () {
      const activeObject = this.canvas.c.getActiveObject()
      if (activeObject && activeObject.type === 'activeSelection') {
        const activeSelection = activeObject
        activeSelection.forEachObject(item => {
          item.set({
            top: 0 - ((item.height * item.scaleY) / 2),
          })
          item.setCoords()
          this.canvas.c.renderAll()
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
