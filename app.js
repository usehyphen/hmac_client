const axios = require('axios');
const crypto = require('crypto');
const https = require('https');
const args = process.argv.slice(2);

// Secret key for HMAC
const SECRET_KEY = 'test_secret_key';
// const SERVER_URL = 'http://192.168.1.99:8675';
// const SERVER_URL = 'https://hyphen.chipotle.esc:8675';
const SERVER_URL = 'http://localhost:8675';

const calculateHMAC = (route, timestamp, body) => {
    const stringifiedBody = body ? JSON.stringify(body) : "";
    const data = `${route}-${stringifiedBody}-${timestamp}`;
    console.log(data);
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
    const agent = new https.Agent({  
        rejectUnauthorized: false
      });
    const response = await axios.get(url, { headers, httpsAgent: agent });
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
    const agent = new https.Agent({  
        rejectUnauthorized: false
      });
    const response = await axios.get(url, { headers, httpsAgent: agent });
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
    const agent = new https.Agent({  
        rejectUnauthorized: false
      });
    const response = await axios.post(url, body, { headers, httpsAgent: agent });
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

async function makeStartMakelineRequest() {
    // Construct the URL for the POST request
    const route = '/state/start';
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

async function makeSkipRequest() {
    // Construct the URL for the POST request
    const route = '/component-install/skip'
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

async function makeStartComponentCheckRequest() {
    // Construct the URL for the POST request
    const route = '/component-install/start'
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

async function makeShutdownRequest() {
    // Construct the URL for the POST request
    const route = '/state/prepare-for-shutdown';
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

async function makeHardResetRequest() {
    // Construct the URL for the POST request
    const route = '/state/hard-reset';
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

async function makeManualModeRequest() {
    // Construct the URL for the POST request
    const route = '/state/manual-mode';
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

async function makeGetDispensersRequest() {
    // Construct the URL for the GET request
    const route = '/dispensers';
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
    const agent = new https.Agent({  
        rejectUnauthorized: false
      });
    const response = await axios.get(url, { headers, httpsAgent: agent });
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

async function makeloadinRequest() {
    // Construct the URL for the GET request
    const route = '/component-install/all';
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

async function makeGordieRequest() {
    // Construct the URL for the GET request
    const route = '/gordie';
    const url = `${SERVER_URL}${route}`;
    const body = {"namse": "Gordie"}

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

const entreeId = args[1] || "<entreeId>"
const entree = {
    "externalOrderId": "external-id",
    "externalRecipeId": "tempid",
    "externalEntreeId": "38dd1cb6-838a-4f8a-8b71-bbea56a2d588",
    "name": {
        "full": "Chicken Salad"
    },
    "customerName": "Gordie White",
    "promiseTimeMs": 1710263384000,
    "ingredients": [
        {
            "name": {
                "full": "II-WHITE-RICE"
            },
            "externalIngredientId": "II-WHITE-RICE",
            "multiplier": 1
        },
    ]
}

const entreeBugTest = {
    "externalOrderId": "558da4af-ef95-4932-be8a-4dd18f961b34",
    "externalRecipeId": "tempid",
    "externalEntreeId": "408cb97a-ec84-4038-b169-1628b12ccf06",
    "name": {
        "full": "Chicken Salad"
    },
    "customerName": "Gordie White",
    "promiseTimeMs": 1710263384000,
    "ingredients": [
        {
            "name": {
                "full": "II-CHICKEN"
            },
            "externalIngredientId": "II-CHICKEN",
            "multiplier": 1.0
        },
        {
            "name": {
                "full": "II-SALAD-LETTUCE"
            },
            "externalIngredientId": "II-SALAD-LETTUCE",
            "multiplier": 1.0
        },
        {
            "name": {
                "full": "II-BROWN-RICE"
            },
            "externalIngredientId": "II-BROWN-RICE",
            "multiplier": 0.5
        },
        {
            "name": {
                "full": "II-WHITE-RICE"
            },
            "externalIngredientId": "II-WHITE-RICE",
            "multiplier": 0.5
        },
        {
            "name": {
                "full": "II-TOMATO-SALSA"
            },
            "externalIngredientId": "II-TOMATO-SALSA",
            "multiplier": 0.5
        },
        {
            "name": {
                "full": "II-FAJITA-VEGGIES"
            },
            "externalIngredientId": "II-FAJITA-VEGGIES",
            "multiplier": 2.0
        },
        {
            "name": {
                "full": "II-STEAK"
            },
            "externalIngredientId": "II-STEAK",
            "multiplier": 1.0
        }
    ]
}

const entrees = [
    {
        "externalOrderId": "external-id-A",
        "externalRecipeId": "tempid",
        "externalEntreeId": "A1",
        "name": {
            "full": "Chicken Salad A1"
        },
        "customerName": "Gordie White",
        "promiseTimeMs": 1710263384000,
        "ingredients": []
    },
    {
        "externalOrderId": "external-id-A",
        "externalRecipeId": "tempid",
        "externalEntreeId": "A2",
        "name": {
            "full": "Chicken Salad A2"
        },
        "customerName": "Gordie White",
        "promiseTimeMs": 1710263384000,
        "ingredients": []
    },
    {
        "externalOrderId": "external-id-A",
        "externalRecipeId": "tempid",
        "externalEntreeId": "A3",
        "name": {
            "full": "Chicken Salad A3"
        },
        "customerName": "Gordie White",
        "promiseTimeMs": 1710263384000,
        "ingredients": []
    },
    {
        "externalOrderId": "external-id-B",
        "externalRecipeId": "tempid",
        "externalEntreeId": "B1",
        "name": {
            "full": "Chicken Salad B1"
        },
        "customerName": "Gordie White",
        "promiseTimeMs": 1710263385000,
        "ingredients": []
    },
    {
        "externalOrderId": "external-id-B",
        "externalRecipeId": "tempid",
        "externalEntreeId": "B2",
        "name": {
            "full": "Chicken Salad B2"
        },
        "customerName": "Gordie White",
        "promiseTimeMs": 1710263385000,
        "ingredients": []
    },
    {
        "externalOrderId": "external-id-B",
        "externalRecipeId": "tempid",
        "externalEntreeId": "B3",
        "name": {
            "full": "Chicken Salad B3"
        },
        "customerName": "Gordie White",
        "promiseTimeMs": 1710263384000,
        "ingredients": []
    }
]

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
    case 'submitmultiple':
        async function submitMultipleEntrees() {
            for (const entree of entrees) {
                await makeEntreeSubmitRequest(entree);
            }
        }
        submitMultipleEntrees();
        break;
    case 'cancel':
        makeEntreeCancelRequest("68703288-e83d-4103-bd0b-353ad2e73876");
        break;
    case 'on':
        makePowerOnRequest();
        break;
    case 'skip':
        makeSkipRequest();
        break;
    case 'startComponentCheck':
        makeStartComponentCheckRequest();
        break;
    case 'start':
        makeStartMakelineRequest();
        break;
    case 'shutdown':
        makeShutdownRequest();
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
    case 'manualmode':
        makeManualModeRequest();
        break;
    case 'hardreset':
        makeHardResetRequest();
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
    case 'dispensers':
        makeGetDispensersRequest();
        break;
    case 'denester':
        makeDenesterRequest();
        break;
    case 'requestloadin':
        makeloadinRequest();
        break;
    case 'gordie':
        makeGordieRequest();
        break;
    default:
      console.log('Unknown endpoint command');
  }