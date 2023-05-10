import { ref } from 'vue'
import axios from 'axios'
import { APP_CONFIG } from '../enviroments/BaseUrl'
const url = APP_CONFIG.BASE_URL

export default function useYoutubeVideos() {
  const VideosList = ref([])
  const error = ref('')
  const favoriteStates = ref([])
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
    } catch (e) {
      error.value = e
    }
  }

  const getPlayLists = async () => {
    VideosList.value = []
    error.value = null
    try {
      const res = await axios(`${url}/playlists`)
      VideosList.value = res.data
    } catch (e) {
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
    } catch (e) {
      error.value = e
    }
  }
  const subscribe = async (id, data) => {
    try {
      const config = {
        method: 'put',
        url: `${url}/posts/${id}`,
        headers: {
          'Content-Type': 'Application/json'
        },
        data: JSON.stringify(data)
      }
      const res = await axios(config)
    } catch (e) {
      error.value = e
    }
  }

  const getAllFavorite = async () => {
    VideosList.value = []
    error.value = null
    try {
      const res = await axios(`${url}/favorite`)
      VideosList.value = res.data
    } catch (e) {
      error.value = e
    }
  }

  const favorite = async (data) => {
    VideosList.value = []
    error.value = null
    try {
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
    } catch (e) {
      error.value = e
    }
  }
  const RemoveFavorite = async (id) => {
    VideosList.value = []
    error.value = null
    try {
      const config = {
        method: 'delete',
        url: `${url}/favorite/${id}`,
        headers: {
          'Content-Type': 'Application/json'
        }
      }
      const res = await axios(config)
    } catch (e) {
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
