import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from 'axios'
const API_URL = 'http://geek.itheima.net/v1_0/channels'
export const useCountStore = defineStore('counter', () => {
    // 定义数据count
    const count = ref(0)
    // 定时修改数据的方法（action = 同步 + 异步）
    const increment = () => {
        count.value++
    }
    // 定义异步action
    const list = ref([])
    const getList = async ()=> {
        const res = await axios.get(API_URL)
        list.value = res.data.data.channels
    }
    // getter定义
    const doubleCount =  computed(() => count.value * 2)
    return {
        count, increment, doubleCount, getList, list
    }
})