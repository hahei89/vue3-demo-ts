<template>
  <a-layout-header  class="border-b-2 border-gray-200 border-solid shadow-sm ring-2">
    <common-header />
  </a-layout-header>
  <a-layout>
    <a-layout-sider>left l sider</a-layout-sider>
    <a-layout-content>Content</a-layout-content>
    <a-layout-sider>right Sider</a-layout-sider>
  </a-layout>
</template>

<script setup lang="ts">
import CommonHeader from '@/components/common-header.vue'
</script>

<style>
</style>