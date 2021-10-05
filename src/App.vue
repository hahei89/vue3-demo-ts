<script setup lang="ts">
import { useStore } from './store'
const store = useStore()
console.log('ss', store.state.username)
</script>

<template>
  <router-view />
</template>

<style>

</style>
