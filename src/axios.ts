import axios from 'axios';

axios.defaults.withCredentials = true;

axios.defaults.baseURL = import.meta.env.VITE_APP_BACKEND_URL