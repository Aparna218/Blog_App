import axios from 'axios'
import { API_NOTIFICATION_MESSAGES, SERVISE_URLS } from '../constant/config'


const API_URL ="http://localhost:5000"

const axiosInstance  = axios.create({
    baseURL:API_URL,
    timeout:10000,
    headers:{
        "Content-Type":"application/json"
    }
})

axiosInstance.interceptors.request.use(
    function(config){
        return config
    }, 
    function(error){
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    function(response){
        // we can show loader here
        return processResponse(response)
    },
    function(error){
        return Promise.reject(processError(Response))
    }
)

const processResponse = (response) => {
    if(response?.status === 200){
        return {isSucess: true, data: response.data}
    }else{
        return {
            isFailure: true,
            status:response?.msg,
            code:response?.code
        }
    }
}


const processError = (error) => {
    if(error.response){
        console.log("Error in response", error.toJSON())
        return{
            isError : true,
            msg: API_NOTIFICATION_MESSAGES.responseFailure,
            code: error.response.status
        }
    }else if(error.request){
        console.log("Error in request", error.toJSON())
        return{
            isError : true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        }
    }else{
        console.log("Error in network", error.toJSON())
        return{
            isError : true,
            msg: API_NOTIFICATION_MESSAGES.newtworkFailure,
            code: ""
        }
    }

}

const API = {}

for( const [key,value] of Object.entries(SERVISE_URLS)){
    API[key] = (body, showUploadProgress, showDownloadProgress)=>{
        axiosInstance({
            method:value.method,
            url:value.url,
            data:body,
            responseType:value.responseType,
            onUploadProgress:function(progressEvent){
                if(showUploadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded*100)/progressEvent.total)
                    showUploadProgress(percentageCompleted)
                }
            },
            onDownloadProgress:function(progressEvent){
                if(showDownloadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded*100)/progressEvent.total)
                    showDownloadProgress(percentageCompleted)
                }
            }
        
        })
    }
}

export {API}