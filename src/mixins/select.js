// 在mixins中定义了选择类型（多选、单选、未选中）、选中元素类型、选中id等属性，以及选中、取消选中的事件，子组件通过引入mixins来开发对应功能
// 如子组件需要对fabric对象进行操作，则可以通过inject获得原始对象。
export default {
  inject: ['canvas', 'fabric', 'event'],
  data () {
    return {
      mSelectMode: '', // one | multiple
      mSelectOneType: '', // i-text | group ...
      mSelectId: '', // 选择id
      mSelectIds: [], // 选择id
    }
  },
  created () {
    this.event.on('selectOne', (e) => {
      console.log(e, 'e')
      this.mSelectOneType = 'one'
      this.mSelectId = e[0].id
      this.mSelectOneType = e[0].type
      this.mSelectIds = e.map(item => item.id)
    })
  }
}
