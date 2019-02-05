import axios from 'axios'
const KEY = "AIzaSyCdE-TuIEILUwj9-T-sxXoDhD6nLnZ474Y"

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3/",
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
})

