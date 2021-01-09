import axios from 'axios';
import {
    REGISTER_USER,
} from './types';

export function registerUser(dataToSubmit) {
    //dataToSubmit은 LoginPage에서 가져온 body, 즉 state 값들

    const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}