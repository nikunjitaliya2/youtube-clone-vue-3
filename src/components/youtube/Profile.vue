<script setup>
import { ref } from 'vue'

const tab = ref('mails')
const splitterModel = ref(20)
</script>
<template>
  <div class='flex justify-center items-center w-full h-screen pt-[50px] pl-[57px]'>
    <div class='flex items-center '>
      <div>
        <q-avatar size='130px'>
          <img
            class='object-fit border border-sky-500'
            src='https://yt3.googleusercontent.com/ytc/AGIKgqMNAgKED1HmJZGr-rPxTnpp4sdzVqUBgsjIjVTUWA=s176-c-k-c0x00ffffff-no-rj'
          />
        </q-avatar>
      </div>
      <div>
        <h4>Nik Italiya</h4>
        <p class='m-0'>@nikitaliya999827 subscribersNo videos</p>
        <p class='m-0'>More about this channel</p>
      </div>
    </div>
    <div></div>
  </div>
</template>
<style>

</style>