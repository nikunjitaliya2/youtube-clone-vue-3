import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useVideoStore = defineStore('videosStore', () => {
  const videos = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return { videos }
})
