import React from "react";
import { Link } from 'react-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';

export class BusinessPage extends React.Component {
    render() {
        return (
            <Container>
                <Row className="m-4">
                    <Link to="/">Return to Search</Link>
                </Row>
                <Row className="m-4">
                    <h1>{this.props.details.name}</h1>
                </Row>
                <Row className="mt-4 ml-4">
                    <p>{this.props.details.location.display_address[0]}, {this.props.details.location.display_address[1]}</p>
                </Row>
                <Row className="mb-4 ml-4">
                    <p>{this.props.details.display_phone}</p>
                </Row>
                <Row className="m-4">
                    <p>Rating: {this.props.details.rating} Stars with {this.props.details.review_count} reviews</p>
                </Row>
                <Row className="m-4">
                    <p>Hours:</p>
                </Row>
                <Row className="m-4">
                    <ul>
                        {this.props.details.hours[0].open.map((day, index) => {
                            switch (day.day) {
                            case 0:
                                return <li key={index}>Sun: {day.start}-{day.end}</li>
                            case 1:
                                return <li key={index}>Mon: {day.start}-{day.end}</li>
                            case 2:
                                return <li key={index}>Tues: {day.start}-{day.end}</li>
                            case 3:
                                return <li key={index}>Wed: {day.start}-{day.end}</li>
                            case 4:
                                return <li key={index}>Thurs: {day.start}-{day.end}</li>
                            case 5:
                                return <li key={index}>Fri: {day.start}-{day.end}</li>
                            case 6:
                                return <li key={index}>Sat: {day.start}-{day.end}</li>
                            default:
                                return <br key={index} />;
                            }
                        })}
                    </ul>
                </Row>
                <Row className="m-4">
                    {this.props.details.photos.map((photo, index) => {
                        return (<Col xs={6} md={4}><Image src={photo} width='250px' height='250px' rounded /></Col>);
                    })}
                </Row>
                <Row className="m-4">
                    <p>For more information on {this.props.details.name} please visit the <a href={this.props.details.url}>Yelp Review Page</a>.</p>
                </Row>
            </Container>
        );
    }
};