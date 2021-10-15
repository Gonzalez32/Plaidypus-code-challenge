const https = require('https');

class YelpAPI {
    constructor(apiKey) {
        this._apikey = apiKey;
    }
    get apiKey() {
        return this._apikey;
    }
    set apiKey(value) {
        this._apikey = value;
    }

    makeHttpRequest(serverRes, parser, path) {
        let options = {
            hostname: 'api.yelp.com',
            method: 'GET',
            path: path,
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
            }
        };
        const request = https.request(options, res => {
            let data = '';
            res.on('data', chunk => {
                data += chunk;
            });
            res.on('end', () => {
                data = parser(JSON.parse(data));
                serverRes.send(data);
            });
        });

        request.on('error', e => {
            serverRes.status(500).send(e);
        });

        request.end();
    }
    business(id) {

    }
};

module.exports = YelpAPI;