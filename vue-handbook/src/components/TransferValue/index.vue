<template>
    <div>
        <div>
            <span>接收来自父组件的值1：</span>
            <span>{{ props.msg }}</span>
        </div>
        <div>
            <span>接收来自父组件的值2：</span>
            <span>{{ props.msg2 }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// const props = defineProps({
//     msg: {
//         type: String,
//         default: ''
//     }
// })
const props=defineProps(['msg','msg2'])







</script>

<style lang="scss" scoped>

</style>