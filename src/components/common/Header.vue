<template>
  <div>
    <q-layout view="hHh Lpr lff">
      <q-header>
        <q-toolbar class='shadow-2 bg-white text-black'>
          <q-btn flat round dense icon='menu' class='q-mr-sm' @click='drawer = !drawer' />
          <div class='cursor-pointer flex items-center'>
            <q-icon name='smart_display' class='text-2xl text-red hide-logo' size='28px'/>
            <q-toolbar-title shrink class='text-weight-bold text-red'>
              YouTube
            </q-toolbar-title>
          </div>
          <div class='flex w-[40%] mx-auto'>
            <q-input dense outlined rounded v-model='search' placeholder='Search' class='col'>
              <template v-slot:after>
                <q-btn round flat icon='mic' />
              </template>
              <template v-slot:append>
                <q-icon name='search' />
              </template>
            </q-input>
          </div>
          <q-btn round flat icon='video_call' />
          <q-btn round flat icon='notifications' />
          <q-btn round flat>
            <q-avatar flat>
              <q-img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJyMDqdXgH0WbYqeCVArdRHZO-5_GCETLk1w&usqp=CAU' />
            </q-avatar>
          </q-btn>
        </q-toolbar>
      </q-header>
      <q-drawer
        v-model='drawer'
        show-if-above
        :mini='miniState'
        @mouseover='miniState = false'
        @mouseout='miniState = true'
        mini-to-overlay

        :width='200'
        :breakpoint='500'
        bordered
      >
        <q-scroll-area class='fit' :horizontal-thumb-style='{ opacity: 0 }'>
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name='inbox' />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name='star' />
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name='send' />
              </q-item-section>

              <q-item-section>
                Send
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name='drafts' />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
            <Videos/>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
  {{ search }}
  <RouterView />
</template>
<script setup>
const drawer = ref(false)
const miniState = ref(true)
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import Videos from '../youtube/videos.vue'


const search = ref('')

</script>

<style>
@media screen and (max-width: 600px) {
  .hide-logo{
    display: none !important;
  }
}
</style>
