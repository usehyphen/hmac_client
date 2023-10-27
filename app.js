const axios = require('axios');
const crypto = require('crypto');

// Secret key for HMAC
const SECRET_KEY = 'test_secret_key';
const SERVER_URL = 'http://0.0.0.0:8675';

const calculateHMAC = (route, timestamp, body) => {
    const stringifiedBody = body ? JSON.stringify(body) : "";
    const data = `${route}-${timestamp}-${stringifiedBody}`;
    const hmac = crypto.createHmac('sha256', SECRET_KEY);
    hmac.update(data);
    const hmacSignature = hmac.digest('base64');
    return hmacSignature;
}

// Function to make an HMAC-authenticated GET request
async function makeAuthenticatedGetRequest() {
    // Construct the URL for the GET request
    const route = '/health';
    const url = `${SERVER_URL}${route}`;

    const timestampInSeconds = Math.floor(new Date().getTime() / 1000);

    // Create the HMAC signature for the request
    const hmacSignature = calculateHMAC(route, timestampInSeconds);

    // Set the HMAC signature in the request headers as well as the timestamp used in it
    const headers = {
        'X-Authorization': hmacSignature,
        'X-Authorization-Timestamp': timestampInSeconds
    };

    try {
    const response = await axios.get(url, { headers });
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    } catch (error) {
        console.error('Error Message:', error.message);
        console.error('status:', error.response.status);
        console.error('statusText:', error.response.statusText);
        console.error('data:', error.response.data);
    }
}

// Make secured GET request
// makeAuthenticatedGetRequest();


async function makeAuthenticatedPostRequest() {
    // Construct the URL for the POST request
    const route = '/lift/up';
    const url = `${SERVER_URL}${route}`;

    const timestampInSeconds = Math.floor(new Date().getTime() / 1000);

    const body = null

    // Create the HMAC signature for the request
    const hmacSignature = calculateHMAC(route, timestampInSeconds, body);

    // Set the HMAC signature in the request headers as well as the timestamp used in it
    const headers = {
        'X-Authorization': hmacSignature,
        'X-Authorization-Timestamp': timestampInSeconds
    };

    try {
    const response = await axios.post(url, body, { headers });
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    } catch (error) {
    console.error('Error Message:', error.message);
    console.error('status:', error.response.status);
    console.error('statusText:', error.response.statusText);
    console.error('data:', error.response.data);
    }
}

// Make secured POST request with no body
makeAuthenticatedPostRequest();


// Function to make an HMAC-authenticated POST request
// async function makeAuthenticatedPostRequest() {
//     // Construct the URL for the POST request
//     const route = '/secured_route_w_body';
//     const url = `${SERVER_URL}${route}`;

//     const timestampInSeconds = Math.floor(new Date().getTime() / 1000);

//     const body = {
//         orderitem_id: "8675309"
//     }

//     // Create the HMAC signature for the request
//     const hmacSignature = calculateHMAC(route, timestampInSeconds, body);

//     // Set the HMAC signature in the request headers as well as the timestamp used in it
//     const headers = {
//         'X-Authorization': hmacSignature,
//         'X-Authorization-Timestamp': timestampInSeconds
//     };

//     try {
//     const response = await axios.post(url, body, { headers });
//     console.log('Status:', response.status);
//     console.log('Data:', response.data);
//     } catch (error) {
//     console.error('Error Message:', error.message);
//     console.error('status:', error.response.status);
//     console.error('statusText:', error.response.statusText);
//     console.error('data:', error.response.data);
//     }
// }

// Make secured POST request with body
// makeAuthenticatedPostRequest();