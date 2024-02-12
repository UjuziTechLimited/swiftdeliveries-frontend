// src/services/axios.js
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3001', // Set your base URL here
  timeout: 10000, // Set timeout if needed
})

export default instance