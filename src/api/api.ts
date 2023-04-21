import axios from "axios";

// BASE API
let BASE_API = 'https://jsonplaceholder.typicode.com';

export const api = {
    getData: async (route:string) => {
        let response = await axios.get(`${BASE_API}/${route}`);
        return response.data;
    },
    postData: async () => {
        
    }
}