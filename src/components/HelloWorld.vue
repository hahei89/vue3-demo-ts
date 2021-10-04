<template>
  <button @click="increment">增加</button>
  <div>默认的count: {{ state.count }}</div>
  <input type="text" ref="root" :value="state.count" />
</template>

<script setup lang="ts">
import { reactive, computed, ref, onMounted, watch, watchEffect, defineExpose } from 'vue'

defineProps({
  msg: String
})
type DState = {
  count: number,
  double: number
}
const root = ref(null) // ref(null) 代表templateRef
onMounted(() => {
  console.log('mounted ', root);
})

const count = ref(0)
const state: DState = reactive({ count: 0, double: computed(() => state.count + 2) })
function increment () {
  state.count++
  console.log('count + 1 ', count.value + 1)
  console.log('count ', count)
}
watch(() => state.count, (val, prevVal) => {
  console.log('第一个监听的值: ', val, prevVal)
}, {
  deep: true,
  immediate: true
})
/**
 * 1. 不需要手动传入值
 * 2. 不是lazy  初始化执行分析依赖
 * 3. 无法获取原始值
 * 4. 一些异步操作放里面更加的合适
 * 5. watch第三个参数处理副作用的第一个参数
 * @param {any} () 
 * @return void
 */
const stop = watchEffect((onInvalidate) => {
  console.log('unmounted之前会调用watchEffect ', state.count)
  onInvalidate(() => { 
    /**
     * 清除副作用
     */
  })
}, {
  onTrigger (e) {
    // debugger
  },
  //flush: "post",
})
// 停用watchEffect
// stop()
defineExpose(count)
</script>
<style scoped>
:root {
  --varColor: #42b983;
}
a {
  color: var(--varColor);
}
</style>