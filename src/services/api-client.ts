import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "3693512dbb104ec48f2bdea444f983f5"
    }
})