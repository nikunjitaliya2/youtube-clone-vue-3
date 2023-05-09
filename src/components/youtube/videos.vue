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
  <h3 class='text-red-3 text-center'>This is videos page</h3>
  <div class="container mx-auto">
    <VideosView :videoDetail="VideosDetails"></VideosView>
  </div>
</template>
