import { defineStore } from "pinia";

export const useCountStore = defineStore({
    id: 'counter',
    state: () => {
        return {
            count: 0
        }
    },
    actions: {
        increment() {
            this.count++
        },
        
        decrement() {
            this.count--
        }
    }
})