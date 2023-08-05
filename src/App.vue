<script setup>
import { onMounted } from 'vue';
import { useCountStore } from './store/counter2';
import { storeToRefs } from 'pinia';
const counter = useCountStore()

// 解构赋值会导致响应式丢失,需要加上storeToRefs,才会响应式更新
const {count, doubleCount} = storeToRefs(counter) 
// 如果需要直接从原来的counter中解构
const {increment, getList}  = counter
const modify = () => {
  increment()
}
 onMounted(() => {
  getList()
})
</script>

<template>
  <div>
    {{count }}
    <button @click="modify">{{count}}</button>
    <div>{{ doubleCount }}</div>
    <ul>
      <li v-for="(item) in counter.list" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
