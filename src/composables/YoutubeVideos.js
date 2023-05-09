import { ref } from 'vue'
import axios from 'axios'
import { APP_CONFIG } from '../enviroments/BaseUrl'

const url = APP_CONFIG.BASE_URL

export default function useStudent() {
  const VideosList = ref([])
  const error = ref('')

  const AllVideoList = async () => {
    VideosList.value = []
    error.value = null
    try {
      const res = await axios(`${url}`)
      VideosList.value = res.data
    } catch (err) {
      error.value = err
    }
  }

  return {
    VideosList,
    error,
    AllVideoList
  }
}
