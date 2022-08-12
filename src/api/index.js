import axios from 'axios';


// for foods
const url = 'https://api.github.com/users';
export const fetchUserbyUserName = (userName) => axios.get(`${url}/${userName}`);
export const fetchPublicRepos = (userName) => axios.get(`${url}/${userName}/repos`)