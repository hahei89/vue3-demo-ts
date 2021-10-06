<script setup lang="ts">
import { useStore } from './store'
const store = useStore()
console.log('ss', store.state.username)
</script>

<template>
  <router-view />
</template>

<style lang="less">
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
