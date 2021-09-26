# 页面滚动到底部监听事件

自定义 `onReachBottom` 函数，用于监听页面滚动到底部，兼容移动端，可以通过 `mixins` 引入

## 安装和引入

该方法基于 `lodash/debounce`，需要先安装 `lodash`：
```sh
npm install -save lodash
```

引入 `src/mixins/onReachBottom.js` 文件

## 使用

```js
<script>
import onReachBottom from '@/mixins/onReachBottom'

export default {
  mixins: [onReachBottom],
  data () {
    return {

    }
  },
  // 滚动到底部回调函数
  methods: {
    onReachBottom () {
      alert('到底了')
    }
  }
}
</script>
```

> vant 组件库已经实现了 `List` 组件，支持滚动加载，滚动加载提示和下拉刷新