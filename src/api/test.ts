import axios from 'axios';

export const test = async () => {
    const response = await axios.get('http://localhost:8000/test');
    return response.data;
}