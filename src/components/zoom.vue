<template>
  <ButtonGroup size="small">
    <Button @click="big">
      <svg class="icon" height="14" p-id="1271" t="1650853919128" version="1.1"
           viewBox="0 0 1024 1024" width="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M970.837333 919.850667l-205.696-205.653334A382.421333 382.421333 0 0 0 853.333333 469.333333a384 384 0 0 0-384-384 384 384 0 0 0-384 384 384 384 0 0 0 384 384 382.421333 382.421333 0 0 0 244.906667-88.192l205.653333 205.653334a36.053333 36.053333 0 0 0 50.986667 0 36.266667 36.266667 0 0 0-0.042667-50.944z m-380.117333-162.986667c-38.4 16.256-79.189333 24.448-121.386667 24.448a311.296 311.296 0 0 1-220.586666-91.392A311.296 311.296 0 0 1 157.312 469.333333 311.296 311.296 0 0 1 248.746667 248.746667 311.296 311.296 0 0 1 469.333333 157.354667a311.296 311.296 0 0 1 220.586667 91.392A311.296 311.296 0 0 1 781.354667 469.333333a311.296 311.296 0 0 1-91.392 220.586667 310.186667 310.186667 0 0 1-99.242667 66.901333z"
          fill="#595959" p-id="1272"></path>
        <path
          d="M652.672 431.829333h-147.84V292.010667a35.968 35.968 0 1 0-71.978667 0v139.818666H292.010667a35.968 35.968 0 1 0 0 72.021334h140.8v140.8a35.968 35.968 0 1 0 72.021333 0v-140.8h147.84a35.968 35.968 0 1 0 0-72.021334z"
          fill="#595959" p-id="1273"></path>
      </svg>
    </Button>
    <Button @click="small">
      <svg class="icon" height="14" p-id="1470" t="1650853934351" version="1.1"
           viewBox="0 0 1024 1024" width="14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M970.837333 919.850667l-205.696-205.653334A382.421333 382.421333 0 0 0 853.333333 469.333333a384 384 0 0 0-384-384 384 384 0 0 0-384 384 384 384 0 0 0 384 384 382.421333 382.421333 0 0 0 244.906667-88.192l205.653333 205.653334a36.053333 36.053333 0 0 0 50.986667 0 36.266667 36.266667 0 0 0-0.042667-50.944z m-380.117333-162.986667c-38.4 16.256-79.189333 24.448-121.386667 24.448a311.296 311.296 0 0 1-220.586666-91.392A311.296 311.296 0 0 1 157.312 469.333333 311.296 311.296 0 0 1 248.746667 248.746667 311.296 311.296 0 0 1 469.333333 157.354667a311.296 311.296 0 0 1 220.586667 91.392A311.296 311.296 0 0 1 781.354667 469.333333a311.296 311.296 0 0 1-91.392 220.586667 310.186667 310.186667 0 0 1-99.242667 66.901333z"
          fill="#595959" p-id="1471"></path>
        <path
          d="M652.672 431.829333H292.010667a35.968 35.968 0 1 0 0 72.021334h360.661333a35.968 35.968 0 1 0 0-72.021334z"
          fill="#595959" p-id="1472"></path>
      </svg>
    </Button>
    <Button @click="reset">1:1</Button>
  </ButtonGroup>
</template>

<script>
import select from '@/mixins/select'

export default {
  name: 'zoom',
  mixins: [select],
  data () {
    return {
      zoom: 0
    }
  },
  methods: {
    reset () {
      this.canvas.c.zoomToPoint(new this.fabric.Point(this.canvas.c.getWidth() / 2, this.canvas.c.getHeight() / 2), 1)
      this.zoom = `${Math.round(100)}%`
    },
    big () {
      let zoomRatio = this.canvas.c.getZoom()
      zoomRatio += 0.05
      this.canvas.c.zoomToPoint(
        new this.fabric.Point(this.canvas.c.getWidth() / 2, this.canvas.c.getHeight() / 2),
        zoomRatio,
      )
      this.zoom = `${Math.round(zoomRatio * 100)}`
    },
    small () {
      let zoomRatio = this.canvas.c.getZoom()
      zoomRatio -= 0.05
      this.canvas.c.zoomToPoint(
        new this.fabric.Point(this.canvas.c.getWidth() / 2, this.canvas.c.getHeight() / 2),
        zoomRatio,
      )
      this.zoom = `${Math.round(zoomRatio * 100)}%`
    }
  }
}
</script>

<style scoped>

</style>
