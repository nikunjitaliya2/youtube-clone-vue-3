<script setup>
const drawer = ref(false)
const miniState = ref(true)
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const search = ref('')
let inputWidth = ref('40%')
const expandInput = () => {
  inputWidth.value = '50%'
}
const minimize = () => {
  let screenWidth = window.screen.width
  if (screenWidth > 900) {
    inputWidth.value = '40%'
  } else {
    inputWidth.value = '65%'
  }
}
</script>
<template>
  <div class="">
    <q-layout view="lHh lpr lFf" style="min-height: 0">
      <q-header>
        <q-toolbar class="shadow-2 bg-white text-black justify-between">
          <div class="cursor-pointer flex items-center">
          <q-btn flat round dense icon="menu" class="q-mr-sm" @click="drawer = !drawer" />
            <q-icon name="smart_display" class="text-2xl text-red hide-logo" size="28px" />
            <q-toolbar-title shrink class="text-weight-bold text-red"> YouTube</q-toolbar-title>
          </div>
            <q-input
              dense
              outlined
              rounded
              type="search"
              v-model="search"
              placeholder="Search"
              class="text-gray-800 border-0 rounded-full focus:w-full duration-500"
              @focus="expandInput"
              @focusout="minimize"
              :style="{ width: inputWidth }"
            >
              <template v-slot:after>
                <q-btn round flat icon="mic" />
              </template>
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
            <div class='hide-logo'>
              <q-btn round flat icon="video_call" />
              <q-btn round flat icon="notifications" />
              <q-btn round flat>
                <q-avatar flat>
                  <q-img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJyMDqdXgH0WbYqeCVArdRHZO-5_GCETLk1w&usqp=CAU"
                  />
                </q-avatar>
              </q-btn>
            </div>
        </q-toolbar>
      </q-header>
      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :width="200"
        :breakpoint="500"
        bordered
      >
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>
            <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>
              <q-item-section> Home</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/subscribe">
              <q-item-section avatar>
                <q-icon name="subscriptions" />
              </q-item-section>

              <q-item-section> Subscribe</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/favorite">
              <q-item-section avatar>
                <q-icon name="favorite" />
              </q-item-section>

              <q-item-section> Favorite</q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple to="/playlists">
              <q-item-section avatar>
                <q-icon name="playlist_add" />
              </q-item-section>
              <q-item-section> Play-List</q-item-section>
            </q-item>
            <q-item clickable v-ripple to='/upload'>
              <q-item-section avatar>
                <q-icon name="cloud_upload" />
              </q-item-section>
              <q-item-section> Upload</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/profile">
              <q-item-section avatar>
                <q-icon name="account_circle" />
              </q-item-section>
              <q-item-section> Your Profile</q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <q-page>
          <RouterView />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style>
.q-field__native {
  transition: width 0.5s;
}
</style>
