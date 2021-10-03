<script setup lang="ts">
import css from '../assets/index.css'
import { ref, onMounted } from 'vue'
const color = "red"
const font = {
  size: '12px'
}
defineProps({
  msg: String
})

const count = ref(0)
onMounted: {
  console.log('on Mounted')
}

</script>

<template>
  <h1 class="text">{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
:root {
  --varColor: #42b983;
}
a {
  color: var(--varColor);
}
.text {
  color: v-bind(color);
  font-size: v-bind("font.size");
}
</style>
