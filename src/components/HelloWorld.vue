<template>
  <button @click="increment">增加</button>
  <div>默认的count: {{ state.count }}</div>
  <input type="text" name="" id="" ref="root" value="使用ref例子">
</template>

<script setup lang="ts">
import { reactive, computed, ref, onMounted } from 'vue'
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
  console.log('count ', count.value + 1)
  console.log('count ', count)
}
</script>
<style scoped>
:root {
  --varColor: #42b983;
}
a {
  color: var(--varColor);
}
</style>