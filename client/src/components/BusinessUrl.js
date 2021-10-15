import React from 'react';
import { Link } from 'react-router-dom';
import { makeHTTPRequest } from '../service/HTTPRequest';

export class BusinessUrl extends React.Component {
    constructor() {
        super();
        this.getBusinessDetails = this.getBusinessDetails.bind(this);
    }
    /*
        Starts the begining of a HTTP call to the Back End for more information based on the company ID.
    */
    getBusinessDetails() {
        let path = `/business?id=${this.props.id}`;
        makeHTTPRequest(this.props.updateBuisinessDetails, path);
    }
    render() {
        return (
            <Link to={`/${this.props.id}`} onClick={this.getBusinessDetails}>{this.props.name}</Link>
        );
    }
};