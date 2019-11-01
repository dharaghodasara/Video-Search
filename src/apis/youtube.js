import axios from 'axios'
const KEY = "AIzaSyDDAiUf9_cKKTX5_j549S1SEqgr9utp-vQ"

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3/",
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
})

