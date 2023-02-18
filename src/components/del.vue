<template>
  <Button v-if="mSelectMode" icon="ios-trash" size="small" @click="del"></Button>
</template>

<script>
import select from '@/mixins/select'

export default {
  name: 'dele',
  mixins: [select],
  data () {
    return {}
  },
  methods: {
    del () {
      const activeObject = this.canvas.c.getActiveObjects()
      activeObject && activeObject.map(item => this.canvas.c.remove(item))
      this.canvas.c.requestRenderAll()
      this.canvas.c.discardActiveObject()
    }
  }
}
</script>

<style scoped>

</style>
