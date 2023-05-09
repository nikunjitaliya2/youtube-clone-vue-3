<script setup>

</script>

<template>
  <div class='container mx-auto h-[400px] flex items-center my-4 justify-center'>
    <div class='text-center'>
      <div>
        <q-avatar size='200px'>
          <img src='https://www.gstatic.com/youtube/img/channels/empty_channel_illustration.svg' class='rounded-full'
               alt='no video'>
        </q-avatar>
      </div>
      <div class='w-[90%] mx-auto'>
        <h4 class='py-2 text-2xl'>Upload a video to get started</h4>
        <p class='text-grey'>
          Start sharing your story and connecting with viewers. Videos you upload will show up here.</p>
        <q-btn color="primary" label="Upload Video" />
        <p class='text-grey text-xs py-2'>Learn more about how to <span class='text-blue-6'>get started</span></p>
      </div>
    </div>
  </div>
</template>