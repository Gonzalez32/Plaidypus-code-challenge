const YelpAPI = require('./YelpAPI');

class SearchAPI extends YelpAPI {
    parseData(data) {
        let businesses = {businesses: []};
        if (data.error) {
            return businesses;
        }
        for (let business of data.businesses) {
            businesses.businesses.push({ id: business.id, name: business.name });
        }
        return businesses;
    }
    search(res, location) {
        let path = (`/v3/businesses/search?location=${location}`);
        this.makeHttpRequest(res, this.parseData, path);
    }
};

module.exports = SearchAPI;