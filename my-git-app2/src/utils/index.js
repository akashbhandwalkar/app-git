import axios from 'axios';

const utils = {
    getUsers : (text)=>{
        return axios.get('https://api.github.com/search/users?q=' + text);
    }
}

export default utils;