import axios from "axios";

const BACKEND_URL = 'http://localhost:8080/book';

export const getAllBooks = () => axios.get(BACKEND_URL+ '/all');