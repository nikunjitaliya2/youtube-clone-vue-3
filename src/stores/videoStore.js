import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useVideoStore = defineStore('videosStore', () => {
  // state
  const videos = ref([])

  // getter
  const savedVideos = JSON.parse(localStorage.getItem('playlist'))

  // action
  const playListInLocalStorage = async (data) => {
    videos.value.push([data])
    localStorage.setItem('playlist', JSON.stringify(videos.value))
  }

  return { videos, savedVideos, playListInLocalStorage }
})
