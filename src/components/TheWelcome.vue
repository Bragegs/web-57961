<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  counter: number;
  testString: string;
}
interface Emits {
  // v-models
  (event: 'update:counter', payload: number): void;
}
const props = withDefaults(defineProps<Props>(), {});
const emits = defineEmits<Emits>();

const localCounter = computed<number>({
  get: () => props.counter,
  set: (newVal: number) => emits('update:counter', newVal),
});

setInterval(() => {
  localCounter.value++
}, 1000)
</script>

<template>
  <div>{{ localCounter }} - {{testString}}</div>
</template>
