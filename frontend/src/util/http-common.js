import axios from "axios";

// axios 객체 생성
export default axios.create({
    // baseURL: "http://localhost:8000/api",
    baseURL: "https://k3a306.p.ssafy.io/api",
    headers: {
        "Content-type": "application/json",
    },
});