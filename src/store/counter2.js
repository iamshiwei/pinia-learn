import { defineStore } from "pinia";
import { ref } from "vue";

export const useCountStore = defineStore('counter', () => {
    // 定义数据count
    const count = ref(0)
    const increment = () => {
        count.value++
    }
    return {
        count, increment
    }
})