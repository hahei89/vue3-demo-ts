<template>
  <a-row class="header">
    <a-col :span="8" class="header-left">
      <a-row>
        <img class="home-img" src="../assets/imgs/home.jpeg" alt="首页" srcset="">
        <span class="home-text">践知</span>
      </a-row>
    </a-col>
    <a-col
      :span="2"
      :offset="14"
      class="header-right">
      <a-dropdown
        :placement="placement"
        :getPopupContainer="
          triggerNode => {            
            return triggerNode.parentNode
          }">
        <div>
          <img class="avatar-img" src="../assets/imgs/home.jpeg" alt="头像" srcset="">
          <DownOutlined />
        </div>

        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </a-col>
  </a-row>
</template>
<script setup lang="ts">
  import { DownOutlined } from "@ant-design/icons-vue";
  const placement = "bottomCenter";
</script>
<style lang="less">
  .avatar-box {
    height: 32px;
    border-radius: 50%;
  }
  .header {
    .header-left {
      .ant-row {
        align-items: center;
        font-size: 16px;
        .home-img {
          .avatar-box();
        }
        .home-text {
          font-size: 16px;
          margin-left: 4px;
        }
      }
    }
    .header-right {
      .avatar-img {
        .avatar-box();
      }
    }
  }
</style>