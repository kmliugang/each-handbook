<template>
    <div v-bgColor v-watermark>
        <h3>自定义指令water</h3>
        <div style="width:300px">
            <el-input v-focus v-model="input" placeholder="Please input" />
            <!-- <input v-focus /> -->
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const input = ref('');
// 在模板中启用 v-focus
const vFocus = {
    mounted: (el, vnode) => {
        const $el = el.children[0].children[0]
        return $el.focus()
    }
}
</script>

<style lang="scss" scoped>
div:first-child {
    padding: 10px;
    position: relative;
}
</style>