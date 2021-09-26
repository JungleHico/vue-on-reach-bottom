<template>
  <div class="container">
    滚动到底部试试
  </div>
</template>

<script>
import onReachBottom from '@/mixins/onReachBottom'

export default {
  mixins: [onReachBottom],
  data () {
    return {

    }
  },
  methods: {
    onReachBottom () {
      alert('到底了')
    }
  }
}
</script>

<style scoped>
.container {
  height: 200vh;
}
</style>
