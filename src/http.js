import axios from "axios";


const http = axios.create({
    baseURL: "http://localhost:8000/api/",
    // params : {
    //     "content-type" : "application/javasciprt"
    // }
})
export default http;