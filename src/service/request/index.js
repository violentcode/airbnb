import axios from "axios";
import { TIME_OUT, BASE_URL } from "./config";

class MYAxios {
    constructor(baseURL, timeout = 10000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
    }
    request(config) { 
       return new Promise((resolve, reject) => {

        this.instance.request(config).then(res => {
            resolve(res.data)
    
        }).catch(err => {
            reject(err)
        })
       })
    }

    get(config) {
       return this.request({...config, method: 'get'})
    }

    post(config) {
        return this.request({...config, method: 'post'})
    }
}

export default new MYAxios(BASE_URL, TIME_OUT)