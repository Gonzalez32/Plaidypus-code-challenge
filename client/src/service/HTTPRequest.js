let http = require('http');

// function that updates the DOM and path to the server express.
export function makeHTTPRequest(update, path) {
    let options = {
        hostname: 'localhost',
        port: 3001,
        method: 'GET',
        path: path
    };

    const request = http.request(options, res => {
    let data = '';
        res.on('data', chunk => {
            data += chunk;
        });
        res.on('end', () => {
            update(JSON.parse(data));
        });
    });
    
    request.on('error', e => {
        console.log(e);
    });
    
    request.end();
};