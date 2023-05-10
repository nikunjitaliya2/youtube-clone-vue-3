<script setup>
import useYoutubeVideos from '../../composables/YoutubeVideos'
import { onMounted, ref } from 'vue'

const { VideosList, AllVideoList, error ,subscribe} = useYoutubeVideos()
import VideosView from './videosView.vue'

const VideosDetails = ref([])

onMounted(async () => {
  await AllVideoList().then(() => {
    VideosDetails.value = [...VideosList._rawValue]
  })
})
const subscribeChannel = async (data) => {
  if(!data.subscriber) {
    data.subscriber = true
    await subscribe(data.id , data)
  }else{
    data.subscriber = false
    await subscribe(data.id , data)
  }
}
</script>

<template>
  <h3 class='text-center'>Now Days Trending</h3>
  <div class="container mx-auto ">
    <VideosView :videoDetail="VideosDetails" @IsSubscriber='subscribeChannel'></VideosView>
  </div>
</template>
