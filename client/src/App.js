import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SearchPage } from './components/SearchPage';
import { BusinessPage } from './components/BusinessPage';
import './App.css';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      businessid: "",
      details: []
    }
    this.updateBuisinessDetails = this.updateBuisinessDetails.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keypress', event => {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });
  }
  /*
    Updates the DOM with the results of the yelp business API call.
  */
  updateBuisinessDetails(details) {
    this.setState({
      businessid: details.id,
      details: details
    });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchPage updateBuisinessDetails={this.updateBuisinessDetails} />
          </Route>
          <Route exact path={`/${this.state.businessid}`}>
            <BusinessPage id={this.state.businessid} details={this.state.details} />
          </Route>
          <Route path="/">
            <SearchPage updateBuisinessDetails={this.updateBuisinessDetails} />
          </Route>
        </Switch>
      </Router>
    );
  }
};