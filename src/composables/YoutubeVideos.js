import { ref } from 'vue'
import axios from 'axios'
import { APP_CONFIG } from '../enviroments/BaseUrl'

const url = APP_CONFIG.BASE_URL

export default function useYoutubeVideos() {
  const VideosList = ref([])
  const error = ref('')
  const favoriteStates = ref([]);
  const AllVideoList = async () => {
    VideosList.value = []
    error.value = null
    try {
      const res = await axios(`${url}/posts`)
      VideosList.value = res.data
    } catch (err) {
      error.value = err
    }
  }
  const AddPlayListApi = async (videosDetails) => {
    favoriteStates.value = []
    error.value = null
    try {
      const config = {
        method: 'POST',
        url: `${url}/playlists`,
        headers: {
          'Content-Type': 'Application/json'
        },
        data: JSON.stringify(videosDetails)
      }
      const res = await axios(config)
      favoriteStates.value = res.status
      console.log('this is response at all ---->', res)
    } catch (e) {
      console.log('error found while call api ---> ', e)
      error.value = e
    }
  }

  const getPlayLists = async () => {
    VideosList.value = []
    error.value = null
    try {
      const res = await axios(`${url}/playlists`)
      VideosList.value = res.data
      // console.log('response of playlist api ---> ', VideosList.value);
    } catch (e) {
      console.log('error in get playlist data ------>', e)
      error.value = e
    }
  }

  const removePLayList = async (removePlaylistId) => {
    try {
      const config = {
        method: 'delete',
        url: `${url}/playlists/${removePlaylistId}`,
        headers: {
          'Content-Type': 'Application/json'
        }
      }
      const res = await axios(config)
      console.log('removed from playlist ---->', res)
    } catch (e) {
      console.log('Error Found While remove playlist ---->', e)
    }
  }
  const subscribe = async (id,data) => {
    try {
      const config = {
        method : 'put',
        url: `${url}/posts/${id}`,
        headers: {
          'Content-Type': 'Application/json'
        },
        data: JSON.stringify(data)
      }
      const res = await axios(config);
      console.log('response is subscriber ',res);
    } catch (e) {
      console.log('error found while subscribe',e);
      error.value = e
    }
  }

  const getAllFavorite = async () => {
    VideosList.value = []
    error.value = null
    try{
      const res = await axios(`${url}/favorite`)
      // console.log('favorite response', res)
      VideosList.value = res.data
    }catch (e) {
      console.log('favorite error --> ', e)
      error.value = e
    }
  }


  const favorite = async (data) => {
    VideosList.value = []
    error.value = null
    try{
      const config = {
        method: 'POST',
        url: `${url}/favorite`,
        headers: {
          'Content-Type': 'Application/json'
        },
        data: JSON.stringify(data)
      }
      const res = await axios(config)
      favoriteStates.value = res.status
      console.log('favorite response', res)
    }catch (e) {
      // console.log('favorite error --> ', e)
      error.value = e
    }
  }
  const RemoveFavorite = async (id) => {
    VideosList.value = []
    error.value = null
    try{
      const config = {
        method: 'delete',
        url: `${url}/favorite/${id}`,
        headers: {
          'Content-Type': 'Application/json'
        }
      }
      const res = await axios(config)
      console.log('res',res)
    }catch (e) {
      console.log('favorite error --> ', e)
      error.value = e
    }
  }

  return {
    AddPlayListApi,
    VideosList,
    error,
    AllVideoList,
    getPlayLists,
    removePLayList,
    subscribe,
    favorite,
    getAllFavorite,
    RemoveFavorite,
    favoriteStates
  }
}
