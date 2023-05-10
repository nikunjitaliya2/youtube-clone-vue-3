<script setup>
import useYoutubeVideos from '../../composables/YoutubeVideos'
import { onMounted, ref } from 'vue'

const { AllVideoList, VideosList, subscribe } = useYoutubeVideos()
const cloneSubscriber = ref([])
onMounted(async () => {
  await AllVideoList().then(() => {
    VideosList._rawValue.map((item) => {
      if (item.subscriber) {
        cloneSubscriber.value.push(item)
      }
    })
  })
})

const unsubscribe = async (data) => {
  data.subscriber = false
  await subscribe(data.id, data)
  cloneSubscriber._rawValue.map((item, index) => {
    if (data.id === item.id) {
      cloneSubscriber.value.splice(index, 1)
    }
  })
}
</script>

<template>
  <h5 class="text-center">Subscriptions</h5>
  <div class="q-pa-md row items-center justify-center gap-5 q-pa-xxl q-gutter-xs">
    <q-card class="my-card" v-for="item in cloneSubscriber" :key="item.id">
      <q-item class="flex">
        <q-item-section avatar>
          <q-avatar>
            <img :src="`${item.thumbnailUrl}`" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-lg">{{ item.author }}</q-item-label>
          <q-item-label caption :title="`${item.title}`">{{ item.title }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-card-actions class="justify-around">
        <q-btn color="white" text-color="black" to="/viewchannel">View Channel</q-btn>
        <q-btn color="red" @click="unsubscribe(item)">Unsubscribe</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>
