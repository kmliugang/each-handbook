<template>
    <div>
        <div>
            <span>男主：</span>
            <span>{{ man }}</span>
        </div>
        <div>
            <span>女主：</span>
            <span>{{ woman }}</span>
        </div>
        <div>
            <el-button type="primary" @click="changeActor">修改名字</el-button>
        </div>

    </div>
</template>

<script setup>
import { defineProps, defineEmits, nextTick, ref } from 'vue'
defineProps({
    man: String,
    woman: String
});
const emits = defineEmits(['update:man', 'update:woman']);
const flag = ref(false)

const changeActor = async () => {
    // await nextTick();
    if (!flag.value) {
        emits('update:man', '叶宇');
        emits('update:woman', '雪言');
    } else {
        emits('update:man', '萧炎');
        emits('update:woman', '云芝');
    }
    flag.value = !flag.value;
}



</script>

<style lang="scss" scoped>

</style>