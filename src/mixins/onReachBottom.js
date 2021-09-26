// 滚动到底部
import debounce from 'lodash/debounce'

export default {
  created () {
    this.addScrollListener()
  },
  beforeDestroy () {
    this.removeScrollListener()
  },
  methods: {
    // 滚动加载
    addScrollListener () {
      window.addEventListener('scroll', this.onScrollIntoBottom)
    },
    removeScrollListener () {
      window.removeEventListener('scroll', this.onScrollIntoBottom)
    },
    onScrollIntoBottom: debounce(function () {
      const body = document.documentElement || document.body
      const scrollTop = window.pageYOffset || body.scrollTop
      const viewHeight = body.clientHeight
      const scrollHeight = body.scrollHeight
      if (scrollTop + viewHeight >= scrollHeight) {
        this.onReachBottom()
      }
    }, 500)
  }
}
