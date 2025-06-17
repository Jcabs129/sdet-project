// https://grafana.com/docs/k6/next/get-started/write-your-first-test/

import http from 'k6/http';
import { sleep } from 'k6';
import { SELECT_RANDOM_USER } from '../utils/helpers.ts';
import { fetchUserList, getUserById, loginUser, registerUser } from '../APIs/api-function.ts';

export const options = {
    // iterations: 2,
    duration: '15s',
    vus: 5
}

// Main test function
export default function() {
    // Test user list endpoint
    const userListResponse = fetchUserList();
    console.log('User List Response:', userListResponse.body);
    sleep(1);

    // Test get user by ID
    const userResponse = getUserById(SELECT_RANDOM_USER.id);
    console.log('Get User Response:', userResponse.body);
    sleep(1);

    // Test login
    const loginResponse = loginUser();
    console.log('Login Response:', loginResponse.body);
    sleep(1);

    // Test registration
    const registerResponse = registerUser();
    console.log('Register Response:', registerResponse.body);
    sleep(1);
}



