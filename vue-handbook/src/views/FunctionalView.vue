<template>
    <div v-watermark>
        <h3>
            <span>函数式组件</span>
            <button>按钮</button>
        </h3>
        <div>
            <km-button type="success" data-id="123" @click="handleBtn">
                <span>
                    <b>提交</b>
                </span>
            </km-button>
        </div>
    </div>
</template>


<script setup>
import KmButton from '@/components/FunctionalComp.vue'

const handleBtn = () => {
    console.log('点击提交');
}

</script>

<style lang="scss" scoped>

</style>