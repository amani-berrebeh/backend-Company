import React from 'react';
import { Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Profile from './Profile';
import Trips from './Trips';





const SingleProfile = () => {

    document.title = "Profile | Bouden Coach Travel";
    const singleAccount = useLocation()
   

    return (
        <React.Fragment>
            <div className="page-content">
                        <Card.Body>
                            <Tab.Container defaultActiveKey="arrow-profile">
                            
                                <Nav as="ul"  justify variant="pills" className="arrow-navtabs nav-success bg-light mb-4">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="arrow-profile">
                                            <span className="d-block d-lg-none"><i className="mdi mdi-home-variant"></i></span>
                                            <span className="d-none d-lg-block">Profile</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="arrow-trips">
                                            <span className="d-block d-sm-none"><i className="mdi mdi-account"></i></span>
                                            <span className="d-none d-sm-block">Trips</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="arrow-attendance">
                                            <span className="d-block d-sm-none"><i className="mdi mdi-email"></i></span>
                                            <span className="d-none d-sm-block">Attendance</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="arrow-payment">
                                            <span className="d-block d-sm-none"><i className="mdi mdi-email"></i></span>
                                            <span className="d-none d-sm-block">Payment</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="arrow-profile">
                                       <Profile props={singleAccount.state.user_name}/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="arrow-trips">
                                       <Trips/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="arrow-contact">
                                        <h6>Contact</h6>
                                        <p className="mb-0">
                                            Consistency is the one thing that can take all of the different elements in your design, and tie them all together and make them work. In an awareness campaign, it is vital for people to begin put 2 and 2 together and begin to recognize your cause. Consistency piques people’s interest is that it has become more and more popular over the years, which is excellent news to the beginner and advanced <Link to="#" className="text-decoration-underline"><b>Contact Designer</b></Link>.
                                        </p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                
                
                 
            </div>
        </React.Fragment>
    );
}

export default SingleProfile;