import { defineStore } from 'pinia';
import { ref } from 'vue';

// export const useCounterStore = defineStore('counter', () => {
//     const count = ref<number>(0);
//     function increment() {
//         count.value++
//     }
//     return { count, increment };
// });

// Does not work with my testString. If only count stays it works..
export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0);
  const testString = ref<string>('');
  return { count, testString };
});
