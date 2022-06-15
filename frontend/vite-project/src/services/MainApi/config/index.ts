import axios from 'axios'

const baseApi = axios.create({
    // baseURL: 'http:// --- Falta definir' 
    // headers: {
    //    "Content-Type": "application/json",
    // }
})

export default baseApi