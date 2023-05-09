<script setup>
import useStudent from '../../composables/YoutubeVideos'
import { onMounted, ref } from 'vue'

const { VideosList, AllVideoList, error } = useStudent()
import VideosView from './videosView.vue'

const VideosDetails = ref([])

onMounted(async () => {
  await AllVideoList().then(() => {
    VideosDetails.value = [...VideosList._rawValue]
  })
})
</script>

<template>
  <h3 class='text-center'>Now Days Trending</h3>
  <div class="container mx-auto ">
    <VideosView :videoDetail="VideosDetails"></VideosView>
  </div>
</template>
