import axios from "axios";
const baseUrl = "http://localhost:3030/";
const stackbaseUrl = "https://api.stackexchange.com/2.3/";
const suffix = "?page=1&pagesize=50&order=desc&sort=activity&site=stackoverflow";

export const getAllData = (url) => {
    return axios.get(stackbaseUrl + url+suffix);
}
export const getDataById = (url) => {
    return axios.delete(baseUrl + url);
}
export const createData = (url,data) => {
    return axios.post(baseUrl + url,data);
}
export const updateData = (url,data) => {
    return axios.put(baseUrl + url,data);
}
export const deleteData = (url) => {
    return axios.delete(baseUrl + url);
}
export const toggleTheme = () => {
    var item = localStorage.getItem('theme');
    if(item == 'light'){
        localStorage.setItem('theme','dark');
    }else{
        localStorage.setItem('theme','light');

    }
    console.log('theme')
    // window.location.reload(false);
}
export const getWikiDetails=(name)=>{
    return axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/"+name);
}