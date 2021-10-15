const YelpAPI = require('./YelpAPI');

class BusinessAPI extends YelpAPI {
    parseData(data) {
        let business = { 
            id: data.id, 
            name: data.name,
            url: data.url,
            photos: data.photos,
            display_phone: data.display_phone,
            review_count: data.review_count,
            rating: data.rating,
            location: data.location,
            hours: data.hours
        };
        return business;
    }

    details(res, id) {
        let path = `/v3/businesses/${id}`;
        this.makeHttpRequest(res, this.parseData, path);
    }
};

module.exports = BusinessAPI;