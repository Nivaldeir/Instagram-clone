import axios from "axios";

const axiosAPI = axios.create({
    baseURL: 'https://instagrambackend10.herokuapp.com'
})

export default axiosAPI