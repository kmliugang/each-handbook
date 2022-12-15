<template>
    <div class="temp_container">
        <textarea name="" id="mytextarea" cols="30" rows="10" v-model="inputVal"></textarea>

    </div>
</template>
  
<script setup>
import { ref, nextTick } from 'vue'
const inputVal = ref('hello');

nextTick(() => {
    var mytextarea = document.getElementById('mytextarea');
    mytextarea.onkeydown = (e) => {
        if (e.keyCode == 13 && e.shiftKey) {
            // 阻止原生的换行事件
            e.preventDefault();
            // 手动换行
            mytextarea.value += "\n";
        } else if (e.keyCode == 13) {
            // 阻止原生的换行事件
            e.preventDefault();
            // TODO: 发消息
            alert('BINGO!');
        }
    }
})



</script>

<style lang="scss" scoped>
.temp_container {}
</style>
  