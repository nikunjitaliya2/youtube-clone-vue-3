<script setup>
import { onMounted, onUpdated, ref } from 'vue'

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
</script>

<template>
<!--  <div class='pt-[50px] pl-[57px]'>-->
    <div class='q-pa-md row items-center justify-center gap-3 q-pa-md q-gutter-xs'>
      <q-card class='my-card' flat v-for='(items, i) of videoDetail' :key='items'>
        <div class='unhidden-menu'>
          <q-card-section horizontal>
            <video :ratio='16 / 9' controls loop style='border-radius: 12px'>
              <source :src='`${items.videoUrl}`' type='video/mp4' />
            </video>
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
                      <q-item clickable>
                        <q-item-section>Save to Watch later</q-item-section>
                        <q-btn flat round color='accent' icon='bookmark' />
                      </q-item>
                      <q-item clickable>
                        <q-item-section>Add to Favorite</q-item-section>
                        <q-btn flat round color='red' icon='favorite' />
                      </q-item>
                      <q-item clickable>
                        <q-item-section>Share</q-item-section>
                        <q-btn flat round color='primary' icon='share' />
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
<!--  </div>-->
</template>

<style scoped>
.my-card {
  width: 100%;
  max-width: 350px;
}

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
