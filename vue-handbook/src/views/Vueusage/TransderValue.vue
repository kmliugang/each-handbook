<template>
    <div class="transder_container">
        <h3>组件间传值</h3>
        <div>
            <TransferChild :msg="msg" :msg2="msg2"/>
        </div>
      



    </div>
</template>

<script setup>
import { ref } from 'vue'
import TransferChild from '@/components/TransferValue/index.vue'
const msg=ref('闲云潭影日悠悠,物转星移几度秋');
const msg2=ref('此时相望不想闻，愿逐月华流照君');
</script>

<style lang="scss" scoped>
.transder_container{
    background: #fff;
    overflow: hidden;
}
</style>