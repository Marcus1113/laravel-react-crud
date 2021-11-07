const axios = window.axios;

const BASE_API_URL = 'http://local.laravel-react-crud/api'

export default {
    
    getAllPosts: () =>
        axios.get(`${BASE_API_URL}/posts`)
}