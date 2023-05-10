<script setup>
import { ref } from 'vue'

const fullWidth = ref(false)
</script>
<template>
  <div class="container mx-auto h-[90vh] flex items-center justify-center">
    <div class="text-center">
      <div>
        <q-avatar size="200px">
          <img
            src="https://www.gstatic.com/youtube/img/creator/no_content_illustration_upload_video_v3.svg"
            class="rounded-full"
            alt="no video"
          />
        </q-avatar>
      </div>
      <div class="">
        <h4 class="py-2 text-sm text-grey">No content available</h4>
<!--        <p class="text-grey">-->
<!--          Start sharing your story and connecting with viewers. Videos you upload will show up here.-->
<!--        </p>-->
        <q-btn color="primary" label="Upload Video" @click="fullWidth = true" />
        <q-dialog
        v-model="fullWidth"
        persistent
        transition-show="scale" transition-hide="scale"
        >
        <q-card style="width: 60%; max-width: 80vw;">
          <q-card-section class='border-b flex justify-between items-center'>
              <h6>Upload Video</h6>
            <div class='flex gap-2 text-grey-6 font-light'>
              <q-icon size="26px" name="info" class='cursor-pointer'/>
              <q-icon size="26px" name="close" class='cursor-pointer' v-close-popup/>
            </div>
          </q-card-section>

          <q-card-section class="flex justify-center">
            <q-uploader
              url="https://www.veed.io/send-video?locale=en&source=%2Ftools%2Fvideo-hosting%2Fvideo-upload"
              label="Upload files"
              color="purple"
              square
              bordered
              multiple
              class='w-full'
            />
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" />
          </q-card-actions>
        </q-card>
        </q-dialog>
      </div>
    </div>
  </div>
</template>
