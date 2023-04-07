import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'92b351228863400c9a7ce83182120900'
    }
})