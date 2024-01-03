const axios = require('axios');
const crypto = require('crypto');
const args = process.argv.slice(2);

// Secret key for HMAC
const SECRET_KEY = 'test_secret_key';
// const SERVER_URL = 'http://192.168.1.99:8675';
const SERVER_URL = 'http://0.0.0.0:8675';

const calculateHMAC = (route, timestamp, body) => {
    const stringifiedBody = body ? JSON.stringify(body) : "";
    const data = `${route}-${timestamp}-${stringifiedBody}`;
    const hmac = crypto.createHmac('sha256', SECRET_KEY);
    hmac.update(data);
    const hmacSignature = hmac.digest('base64');
    return hmacSignature;
}

async function makeGetHealthRequest() {
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
    console.time("My Call")
    const response = await axios.get(url, { headers });
    console.timeEnd("My Call")
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    } catch (error) {
        console.timeEnd("My Call")
        console.error('Error Message:', error.message);
        console.error('status:', error.response.status);
        console.error('statusText:', error.response.statusText);
        console.error('data:', error.response.data);
    }
}

async function makeGetStateRequest() {
    // Construct the URL for the GET request
    const route = '/state';
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
    console.time("My Call")
    const response = await axios.get(url, { headers });
    console.timeEnd("My Call")
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    } catch (error) {
        console.timeEnd("My Call")
        console.error('Error Message:', error.message);
        console.error('status:', error.response.status);
        console.error('statusText:', error.response.statusText);
        console.error('data:', error.response.data);
    }
}

async function makeGetAllEntreesRequest() {
    // Construct the URL for the GET request
    const route = '/entree/all';
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
    console.time("My Call")
    const response = await axios.get(url, { headers });
    console.timeEnd("My Call")
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    } catch (error) {
        console.timeEnd("My Call")
        console.error('Error Message:', error.message);
        console.error('status:', error.response.status);
        console.error('statusText:', error.response.statusText);
        console.error('data:', error.response.data);
    }
}

async function makeGetEntreeRequest(entreeId) {
    // Construct the URL for the GET request
    const route = `/entree/${entreeId}`;
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
    console.time("My Call")
    const response = await axios.get(url, { headers });
    console.timeEnd("My Call")
    console.log('Status:', response.status);
    console.log('Data:');
    console.dir(response.data, { depth: null })
    } catch (error) {
        console.timeEnd("My Call")
        console.error('Error Message:', error.message);
        console.error('status:', error.response.status);
        console.error('statusText:', error.response.statusText);
        console.error('data:', error.response.data);
    }
}

async function makeEntreeSubmitRequest(body) {
    // Construct the URL for the POST request
    const route = '/entree/submit';
    const url = `${SERVER_URL}${route}`;

    const timestampInSeconds = Math.floor(new Date().getTime() / 1000);

    // Create the HMAC signature for the request
    const hmacSignature = calculateHMAC(route, timestampInSeconds, body);

    // Set the HMAC signature in the request headers as well as the timestamp used in it
    const headers = {
        'X-Authorization': hmacSignature,
        'X-Authorization-Timestamp': timestampInSeconds
    };

    try {
    console.time("My Call")
    const response = await axios.post(url, body, { headers });
    console.timeEnd("My Call")
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    } catch (error) {
    console.timeEnd("My Call")
    console.error('Error Message:', error.message);
    console.error('status:', error.response.status);
    console.error('statusText:', error.response.statusText);
    console.error('data:', error.response.data);
    }
}

async function makeEntreeCancelRequest(entreeId) {
    // Construct the URL for the POST request
    const route = `/entree/${entreeId}/cancel`;
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
    console.time("My Call")
    const response = await axios.post(url, body, { headers });
    console.timeEnd("My Call")
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    } catch (error) {
    console.timeEnd("My Call")
    console.error('Error Message:', error.message);
    console.error('status:', error.response.status);
    console.error('statusText:', error.response.statusText);
    console.error('data:', error.response.data);
    }
}

async function makePowerOnRequest() {
    // Construct the URL for the POST request
    const route = '/state/power-on';
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
    console.time("My Call")
    const response = await axios.post(url, body, { headers });
    console.timeEnd("My Call")
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    } catch (error) {
    console.timeEnd("My Call")
    console.error('Error Message:', error.message);
    console.error('status:', error.response.status);
    console.error('statusText:', error.response.statusText);
    console.error('data:', error.response.data);
    }
}

async function makePowerOffRequest() {
    // Construct the URL for the POST request
    const route = '/state/power-off';
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
    console.time("My Call")
    const response = await axios.post(url, body, { headers });
    console.timeEnd("My Call")
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    } catch (error) {
    console.timeEnd("My Call")
    console.error('Error Message:', error.message);
    console.error('status:', error.response.status);
    console.error('statusText:', error.response.statusText);
    console.error('data:', error.response.data);
    }
}

async function makePauseRequest() {
    // Construct the URL for the POST request
    const route = '/state/pause';
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
    console.time("My Call")
    const response = await axios.post(url, body, { headers });
    console.timeEnd("My Call")
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    } catch (error) {
    console.timeEnd("My Call")
    console.error('Error Message:', error.message);
    console.error('status:', error.response.status);
    console.error('statusText:', error.response.statusText);
    console.error('data:', error.response.data);
    }
}

async function makeResumeRequest() {
    // Construct the URL for the POST request
    const route = '/state/resume';
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
    console.time("My Call")
    const response = await axios.post(url, body, { headers });
    console.timeEnd("My Call")
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    } catch (error) {
    console.timeEnd("My Call")
    console.error('Error Message:', error.message);
    console.error('status:', error.response.status);
    console.error('statusText:', error.response.statusText);
    console.error('data:', error.response.data);
    }
}

async function makeLiftRiseRequest() {
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
    console.time("My Call")
    const response = await axios.post(url, body, { headers });
    console.timeEnd("My Call")
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    } catch (error) {
    console.timeEnd("My Call")
    console.error('Error Message:', error.message);
    console.error('status:', error.response.status);
    console.error('statusText:', error.response.statusText);
    console.error('data:', error.response.data);
    }
}

async function makeGetHvacRequest() {
    // Construct the URL for the GET request
    const route = '/hvac';
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
    console.time("My Call")
    const response = await axios.get(url, { headers });
    console.timeEnd("My Call")
    console.log('Status:', response.status);
    console.log('Data:');
    console.dir(response.data, { depth: null })
    } catch (error) {
        console.timeEnd("My Call")
        console.error('Error Message:', error.message);
        console.error('status:', error.response.status);
        console.error('statusText:', error.response.statusText);
        console.error('data:', error.response.data);
    }
}

async function makeGetFaultsRequest() {
    // Construct the URL for the GET request
    const route = '/faults/all';
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
    console.time("My Call")
    const response = await axios.get(url, { headers });
    console.timeEnd("My Call")
    console.log('Status:', response.status);
    console.log('Data:');
    console.dir(response.data, { depth: null })
    } catch (error) {
        console.timeEnd("My Call")
        console.error('Error Message:', error.message);
        console.error('status:', error.response.status);
        console.error('statusText:', error.response.statusText);
        console.error('data:', error.response.data);
    }
}

async function makeGetHoppersRequest() {
    // Construct the URL for the GET request
    const route = '/hoppers';
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
    console.time("My Call")
    const response = await axios.get(url, { headers });
    console.timeEnd("My Call")
    console.log('Status:', response.status);
    console.log('Data:');
    console.dir(response.data, { depth: null })
    } catch (error) {
        console.timeEnd("My Call")
        console.error('Error Message:', error.message);
        console.error('status:', error.response.status);
        console.error('statusText:', error.response.statusText);
        console.error('data:', error.response.data);
    }
}

async function makeDenesterRequest() {
    // Construct the URL for the GET request
    const route = '/denester/fill-level';
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
    console.time("My Call")
    const response = await axios.get(url, { headers });
    console.timeEnd("My Call")
    console.log('Status:', response.status);
    console.log('Data:');
    console.dir(response.data, { depth: null })
    } catch (error) {
        console.timeEnd("My Call")
        console.error('Error Message:', error.message);
        console.error('status:', error.response.status);
        console.error('statusText:', error.response.statusText);
        console.error('data:', error.response.data);
    }
}

async function willRequest() {
    // Construct the URL for the POST request
    const route = '/command/submit';
    const url = `${SERVER_URL}${route}`;

    const body = {
        entreeId: "12345",
        commands: ['my/command/script.rs']
    };

    try {
    console.time("My Call")
    const response = await axios.post(url, body);
    console.timeEnd("My Call")
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    } catch (error) {
    console.timeEnd("My Call")
    console.error('Error Message:', error.message);
    console.error('status:', error.response.status);
    console.error('statusText:', error.response.statusText);
    console.error('data:', error.response.data);
    }
}

const entreeId = args[1] || "<entreeId>"
const entree = {
    externalOrderId: "12345",
    externalRecipeId: "23456",
    externalEntreeId: "34567",
    name: {
        full: "Chicken Bowl"
    },
    customerName: "Keith Warter",
    promiseTimeMs: 1669114118000,
    ingredients: [
        {
            externalIngredientId: "45678",
            name: {
                full: "Amazing Chicken"
            },
            multiplier: 1,
        }
    ]
}

switch (args[0]) {
    case 'health':
        makeGetHealthRequest();
        break;
    case 'state':
        makeGetStateRequest();
        break;
    case 'entrees':
        makeGetAllEntreesRequest();
        break;
    case 'entree':
        makeGetEntreeRequest(entreeId);
        break;
    case 'submit':
        makeEntreeSubmitRequest(entree);
        break;
    case 'cancel':
        makeEntreeCancelRequest(entreeId);
        break;
    case 'on':
        makePowerOnRequest();
        break;
    case 'off':
        makePowerOffRequest();
        break;
    case 'pause':
        makePauseRequest();
        break;
    case 'resume':
        makeResumeRequest();
        break;
    case 'lift':
        makeLiftRiseRequest();
        break;
    case 'hvac':
        makeGetHvacRequest();
        break;
    case 'faults':
        makeGetFaultsRequest();
        break;
    case 'hoppers':
        makeGetHoppersRequest();
        break;
    case 'denester':
        makeDenesterRequest();
        break;
    case 'will':
        willRequest();
        break;
    default:
      console.log('Unknown endpoint command');
  }