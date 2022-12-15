<template>
    <div class="slot_container">
        <h3>
            <span>插槽</span>
            <button>VS</button>
            <span>v-if</span>
        </h3>
        <div>
            <div class="v_if">
                <ul>
                    <template v-for="(item,index) in list" :key="index">
                        <li v-if="item.name=='雪言'">
                            <span>无双</span>
                        </li>
                        <li v-if="item.name=='梦儿'">
                            <span>梦儿</span>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="slot">

                <CharacterList :list="list">
                    <template v-slot:雪言="{ todo }">
                        <!-- <span>瑶池仙子</span> -->
                        <span>{{todo}}</span>
                    </template>

                    <template v-slot:南絮="{ todo }">
                        <!-- <span>瑶池仙子</span> -->
                        <span>{{todo}}</span>
                    </template>
                </CharacterList>


            </div>

        </div>

    </div>
</template>



<script setup>
import { reactive } from 'vue';
import CharacterList from './CharacterList.vue';


const list = reactive([
    { name: '雪言', age: 18 },
    { name: '小诗诗', age: 18 },
    { name: '梦儿', age: 18 },
    { name: '宁静', age: 18 },
    { name: '宁艳', age: 18 },
    { name: '南絮', age: 18 },

])

</script>

<style lang="scss" scoped>
.slot_container {
    h3>*{
        margin-right: 6px;
    }
    &>div {
        min-height: 500px;
        display: flex;

        div &>div {
            flex-grow: 1;
        }

        .v_if {
            border: 1px solid lightpink;
            margin-right: 10px;
        }

        .slot {
            border: 1px solid lightblue;
        }

    }

}
</style>