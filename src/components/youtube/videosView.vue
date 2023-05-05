<template>
  <div class='q-pa-md row items-center justify-center gap-3 q-pa-md q-gutter-xs'>
    <q-card class='my-card' flat v-for='(items ,i) of videoDetail[0]' :key='i'>

      <q-card-section horizontal>
        <q-video
          class='col w-full'
          autofocus muted
          :ratio="16/9"
          fetchpriority='high'
          :src='`${items.videoUrl}`'
          style='border-radius: 20px;'
        />
      </q-card-section>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img :src='`${items.thumbnailUrl}`'>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <div class='flex items-center w-full justify-evenly'>
            <!--            <q-item-label caption>-->
            <!--              {{ items.title }}-->
            <!--            </q-item-label>-->
            <!--            <q-item-label caption>-->
            <!--              {{ items.description }}-->
            <!--            </q-item-label>-->

            <q-btn flat round color='red' icon='favorite' />
            <q-btn flat round color='accent' icon='bookmark' />
            <q-btn flat round color='primary' icon='share' />
            <q-btn flat icon='more_vert' more_vert>
              <q-menu
                transition-show='scale'
                transition-hide='scale'
              >
                <q-list class='flex flex-col'>
                  <!-- <q-item-section></q-item-section>-->
                  <q-btn flat round color='red' icon='favorite' />
                  <q-btn flat round color='accent' icon='bookmark' />
                  <q-btn flat round color='primary' icon='share' />
<!--                  <q-item clickable>-->
<!--                    <q-item-section>Save to Watch later</q-item-section>-->
<!--                  </q-item>-->
<!--                  <q-item clickable>-->
<!--                    <q-item-section>Save to Playlist</q-item-section>-->
<!--                  </q-item>-->
<!--                  <q-separator />-->
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </q-item-section>
      </q-item>

    </q-card>
  </div>
  <!--  for checking-->
  <!--  <div v-for='(items ,i) of videoDetail[0]' :key='i'>-->
  <!--    {{ items }}-->
  <!--    <br><br>-->
  <!--    <hr>-->
  <!--  </div>-->
</template>

<script setup>
const props = defineProps(
  ['videoDetail']
)

import { LazyYoutube, LazyVimeo } from "vue-lazytube";

</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 350px;
}
</style>