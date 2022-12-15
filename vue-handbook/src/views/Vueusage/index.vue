<template>
  <div class="usage_container">
    <div class="main_content">
      <div class="content_wrap">
        <router-view />
      </div>
    </div>

    <div class="sidebar">
      <!-- <template v-for="(item, index) in navList" :key="index">
        <div style="padding:4px 8px;cursor:pointer" @click="changeComp">
          <span style="color:#fff;">{{ item.name }}</span>
        </div>
      </template> -->
      <div>
        <router-link to="/vueusage/transderValue">组件传值</router-link>
      </div>
      <div>
        <router-link to="/vueusage/customDirectives">自定义指令</router-link>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue';
import TransferValue from './TransderValue.vue'
const state = reactive({
  navList: [
    {
      name: '组件之间传值',
      value: '/transferVlaue'
    }
  ],

});
const { navList } = toRefs(state);


</script>

<style lang="scss" scoped>
.usage_container {
  height: 100%;
  width: 100%;

  .main_content {
    width: calc(100% - 120px);
    min-height: 100%;
    margin-left: 120px;

    .content_wrap {
      width: 100%;
      min-height: 100vh;
      background: #f0f0f0;
      overflow: hidden;
      padding: 12px;

      &>div {
        height: 762px;
        min-height: calc(100vh - 24px);
        background: #fff;
        overflow: hidden;
        padding: 10px;
      }
    }
  }

  .sidebar {
    width: 120px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: lightseagreen;
    overflow-y: auto;
    &>div{
      padding: 8px;
      &>a{
        text-decoration: none;
        color: #fff;
        &:hover{
          color:salmon
        }

      }
    }

  }
}
</style>