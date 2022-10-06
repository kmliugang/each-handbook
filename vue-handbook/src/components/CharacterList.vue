<template>
    <ul>
        <li v-for="(item,index) in list" :key="index">
            <slot :name="item.name" v-bind:todo="item">
                <span>{{item.name}}</span>
            </slot>
        </li>
    </ul>

</template>


<script setup>
    import {toRefs} from 'vue'
    const props = defineProps({
    list:Array,
    message:Number
})
const {list} = toRefs(props)

</script>