<script setup>
import useStudent from '../../composables/YoutubeVideos'
import videosView from './videosView.vue'
import { onMounted, ref } from 'vue'
const { VideosList,AllVideoList,error } = useStudent()
const VideosDetails = ref([])

onMounted(async () => {
  await AllVideoList().then(() => {
    VideosDetails.value = [...VideosList.value];
  })
})

</script>


<template>
  <h1 class='text-center'>TRENDING NOW DAYS</h1>

  <div class="container mx-auto ">
    <videosView :videoDetail="VideosDetails"></videosView>
  </div>


</template>