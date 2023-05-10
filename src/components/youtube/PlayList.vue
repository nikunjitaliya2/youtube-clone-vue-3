<script setup>
import useYoutubeVideos from '../../composables/YoutubeVideos'
import { onMounted, ref } from 'vue'

const clonePlaylist = ref([])
const { getPlayLists, VideosList, removePLayList} = useYoutubeVideos()
onMounted(async () => {
  await getPlayLists().then(() => {
    clonePlaylist.value = [...VideosList._rawValue]
  })
})

const removeFromPlayList = async (removePlayList) => {
  await clonePlaylist.value.map((item, index) => {
    if (item.id === removePlayList) {
      clonePlaylist.value.splice(index, 1)
      removePLayList(removePlayList)
    }
  })
}


console.log('clonePlaylist',clonePlaylist)
</script>
<template>
  <div class='q-pa-md row items-center justify-center gap-3 q-pa-lg q-gutter-xs '>
    <q-card class='my-card' flat v-for='(items, i) of clonePlaylist' :key='items.id'>
      <div class='unhidden-menu'>
        <q-video :src='`${items.videoUrl}`' :ratio='16/9' controls loop style='border-radius: 12px' />
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img :src='`${items.thumbnailUrl}`' alt='profile image' />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <div class='flex items-center justify-between row'>
              <q-item-label class='col-10'>
                {{ items.title }}
              </q-item-label>
              <q-btn flat icon='more_vert' class='menu-button col'>
                <q-menu transition-show='scale' transition-hide='scale' class='menu'>
                  <q-list class='flex flex-col'>
                    <q-item clickable @click='removeFromPlayList(items.id)'>
                      <q-item-section>Remove from Playlist</q-item-section>
                      <q-btn flat round color='warning' icon='delete' />
                    </q-item>
                    <q-item clickable>
                      <q-item-section>Add to Favorite</q-item-section>
                      <q-btn flat round color='red' icon='favorite' />
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
<style>
.my-card {
  width: 100%;
  max-width: 350px;
}
</style>
