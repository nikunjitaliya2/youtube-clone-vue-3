<script setup>
import { onMounted, onUpdated, ref } from 'vue'
import useYoutubeVideos from '../../composables/YoutubeVideos'
import { Notify } from 'quasar'

const { AddPlayListApi, favorite, favoriteStates } = useYoutubeVideos()
const props = defineProps(['videoDetail'])
const titles = ref([])

onUpdated(async () => {
  const videoDetail = await props.videoDetail
  titles.value = videoDetail.map((item) => item.title.slice(0, 22))
})

onMounted(async () => {
  const videoDetail = await props.videoDetail
  titles.value = videoDetail.map((item) => item.title.slice(0, 22))
})

const addtoplaylist = async (data) => {
  await AddPlayListApi(data)
  await isSuccess()
}

const addFavorite = async (data) => {
  await favorite(data)
  await isSuccess()
}

const isSuccess = async () => {
    if (favoriteStates.value === 201) {
      Notify.create({
        type: 'positive',
        message: 'Added',
        position: 'top'
      })
      favoriteStates.value = 0
    } else {
      Notify.create({
        type: 'negative',
        message: 'Already Added',
        position: 'top'
      })
    }
}
</script>

<template>
  <div class='q-pa-md row items-center justify-center gap-3 q-pa-lg q-gutter-xs '>
    <q-card class='my-card' flat v-for='(items, i) of videoDetail' :key='items'>
      <div class='unhidden-menu'>
        <q-card-section horizontal>
          <video :ratio='16 / 9' controls loop style='border-radius: 12px'>
            <source :src='`${items.videoUrl}`' type='video/mp4' />
          </video>
          <!--          <q-video :src='`${items.videoUrl}`' :ratio='16/9' controls loop style='border-radius: 12px' />-->
        </q-card-section>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img :src='`${items.thumbnailUrl}`' alt='profile image' />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <div class='flex items-center justify-between row'>
              <q-item-label class='col-10'>
                {{ titles[i] }}
              </q-item-label>
              <q-btn flat icon='more_vert' class='menu-button col'>
                <q-menu transition-show='scale' transition-hide='scale' class='menu'>
                  <q-list class='flex flex-col'>
                    <q-item clickable @click="$emit('IsSubscriber',items)">
                      <div v-if='items.subscriber' class='flex'>
                        <q-item-section>Unsubscribe</q-item-section>
                        <q-btn flat round color='red' icon='subscriptions' />
                      </div>
                      <div v-else class='flex'>
                        <q-item-section>Subscribe</q-item-section>
                        <q-btn flat round color='red' icon='subscriptions' />
                      </div>
                    </q-item>
                    <q-item clickable @click='addFavorite(items)'>
                      <q-item-section>Add to Favorite</q-item-section>
                      <q-btn flat round color='red' icon='favorite' />
                    </q-item>
                    <q-item clickable @click='addtoplaylist(items)'>
                      <q-item-section>Add to Playlist</q-item-section>
                      <q-btn flat round color='primary' icon='playlist_add_circle' />
                    </q-item>
                    <q-separator />
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
          </q-item-section>
        </q-item>
      </div>
    </q-card>
  </div>
</template>

<style scoped>


.menu-button {
  opacity: 0;
  transition: 0.5s ease-in-out;
}

.unhidden-menu:hover .menu-button {
  opacity: 1;
}

q-item-section {
  margin-right: 10px;
}
</style>
