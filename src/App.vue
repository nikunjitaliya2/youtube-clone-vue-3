<!--<script setup>-->
<!--import Header from './components/common/Header.vue'-->
<!--</script>-->

<!--<template>-->
<!--  <Header />-->
<!--</template>-->
<script setup>
const drawer = ref(false)
const miniState = ref(true)
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const search = ref('')
let inputWidth = ref('60%')
const expandInput = () => {
  inputWidth.value = '80%'
}
const minimize = () => {
  let screenWidth = window.screen.width
  if (screenWidth > 900) {
    inputWidth.value = '60%'
  } else {
    inputWidth.value = '100%'
  }
}
</script>
<template>
  <div class=''>
    <q-layout  view="lHh lpr lFf" style="min-height: 0">
      <q-header>
        <q-toolbar class="shadow-2 bg-white text-black">
          <q-btn flat round dense icon="menu" class="q-mr-sm" @click="drawer = !drawer" />
          <div class="cursor-pointer flex items-center">
            <q-icon name="smart_display" class="text-2xl text-red hide-logo" size="28px" />
            <q-toolbar-title shrink class="text-weight-bold text-red"> YouTube</q-toolbar-title>
          </div>
          <div class="flex w-[40%] mx-auto justify-center">
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
          </div>
          <q-btn class='hide-logo' round flat icon="video_call" />
          <q-btn class='hide-logo' round flat icon="notifications" />
          <q-btn class='hide-logo' round flat>
            <q-avatar flat>
              <q-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJyMDqdXgH0WbYqeCVArdRHZO-5_GCETLk1w&usqp=CAU"
              />
            </q-avatar>
          </q-btn>
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

            <q-item clickable v-ripple to='/subscribe'>
              <q-item-section avatar>
                <q-icon name="subscriptions" />
              </q-item-section>

              <q-item-section> Subscribe</q-item-section>
            </q-item>

            <q-item clickable v-ripple to='/favorite'>
              <q-item-section avatar>
                <q-icon name="favorite" />
              </q-item-section>

              <q-item-section> Favorite</q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple to='/playlists'>
              <q-item-section avatar>
                <q-icon name="playlist_add" />
              </q-item-section>
              <q-item-section> Play-List</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
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
