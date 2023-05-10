<script setup>
import { ref } from 'vue'

const tab = ref('mails')
const profileToolbar = ref('home')
const splitterModel = ref(20)
</script>
<template>
  <div class="flex items-center container mx-auto pb-2">
    <div class="pt-6 pr-4 pl-4">
      <q-avatar size="130px">
        <img
          class="object-fit border border-sky-500"
          src="https://yt3.googleusercontent.com/ytc/AGIKgqMNAgKED1HmJZGr-rPxTnpp4sdzVqUBgsjIjVTUWA=s176-c-k-c0x00ffffff-no-rj"
        />
      </q-avatar>
    </div>
    <div class="flex justify-between items-center w-full max-w-[87%]">
      <div>
        <h5 class="font-light">
          Nik Italiya
          <q-tooltip> Nik Italiya</q-tooltip>
        </h5>
        <p class="m-0 py-1 text-[#606060]">
          <span class="pr-2">@nikitaliya999827</span> <span class="pr-2">subscribers</span
          ><span class="pr-2">No videos</span>
        </p>
        <p class="m-0 py-1 text-md font-light">
          More about this channel
          <q-icon size="20px" name="chevron_right" />
        </p>
      </div>
      <div class="flex gap-3">
        <q-btn size="12px" rounded color="white" text-color="black" label="Customize channel">
          <q-tooltip>Customize channel</q-tooltip>
        </q-btn>
        <q-btn
          size="12px"
          rounded
          color="white"
          text-color="black"
          padding="xs lg"
          label="Manage videos"
        >
          <q-tooltip>Manage videos</q-tooltip>
        </q-btn>
      </div>
    </div>
  </div>
  <div>
    <div class="border-b">
      <q-toolbar class="container mx-auto">
        <q-tabs v-model="profileToolbar" shrink>
          <q-tab name="home">
            <RouterLink to="/profile">HOME</RouterLink>
          </q-tab>
          <q-tab name="playlists">
            <RouterLink to="/profile/playlists">PLAYLISTS</RouterLink>
          </q-tab>
          <q-tab name="channels">
            <RouterLink to="/profile/channels">CHANNELS</RouterLink>
          </q-tab>
          <q-tab name="about" label="ABOUT" />
        </q-tabs>
      </q-toolbar>
    </div>
    <RouterView />
  </div>
</template>
<style></style>
