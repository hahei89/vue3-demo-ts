<template>
  <a-layout-header  class="border-b-2 border-gray-200 border-solid shadow-sm ring-2">
    <common-header />
  </a-layout-header>
  <a-layout>
    <a-layout-sider>left l sider</a-layout-sider>
    <a-layout-content>
      <v-md-editor v-model="text" height="100%" />
    </a-layout-content>
    <a-layout-sider>right Sider</a-layout-sider>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CommonHeader from '@/components/common-header.vue'

const text = ref('')
</script>

<style>
</style>