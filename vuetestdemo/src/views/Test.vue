<!--  -->
<template>
  <div class="Test"><h1>This is Test page</h1>
  <p>{{mesg}}</p>
  </div>
</template>

<script>
import Test from './Test'
export default {
  name: Test,
  components: {Test}, // 组件注册
  data() {
    return {
        msg:"sucess"
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {}, // 生命周期 - 更新之后
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped></style>
