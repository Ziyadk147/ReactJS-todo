import axios from "axios";


const http = axios.create({
    baseURL: "http://todo-app-react.test/api/",
    // params : {
    //     "content-type" : "application/javasciprt"
    // }
})
export default http;