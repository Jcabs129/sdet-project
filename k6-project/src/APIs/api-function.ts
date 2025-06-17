import http from 'k6/http';
import { check } from 'k6';
import codes from '../types/responseCodes.ts';

const BASE_URL = 'https://reqres.in/api';
const params = {
    headers: {
        'Accept': 'application/json',
        'x-api-key': 'reqres-free-v1',
    }
}
const payload = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  };


// API Functions
export function fetchUserList() {
    const response = http.get(`${BASE_URL}/users?page=2`);
    check(response, {
        'status is 200': (res) => res.status === codes.OK,
    });
    return response;
}

export function getUserById(userId: number) {
    const response = http.get(`${BASE_URL}/users/${userId}`, params);
    check(response, {
        'status is 200': (res) => res.status === codes.OK,
    });
    return response;
}

export function loginUser() {
    const response = http.post(`${BASE_URL}/login`, payload, params);
    check(response, {
        'status is 200': (res) => res.status === codes.OK,
    });
    return response;
}

export function registerUser() {
    const response = http.post(`${BASE_URL}/register`, payload, params);
    check(response, {
        'status is 200': (res) => res.status === codes.OK,
    });
    return response;
}