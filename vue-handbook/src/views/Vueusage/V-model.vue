<template>
    <div>
        <h3>组件model</h3>
        <Child v-model:man="man" v-model:woman="woman">
        </Child>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import Child from '@/components/subvmodel.vue'
// 组件 v-model
const man = ref('萧炎');
const woman = ref('云芝');




</script>

<style lang="scss" scoped>

</style>