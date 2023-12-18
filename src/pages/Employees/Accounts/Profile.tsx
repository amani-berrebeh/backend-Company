import React from 'react';
import { Card, Col, Dropdown, Row, Table } from 'react-bootstrap';

import { Link } from 'react-router-dom';

// Import Images
import img1 from 'assets/images/users/avatar-1.jpg'

const Profile = (props:any) => {
 console.log(props);

    return (
        <React.Fragment>
            {/* <Row> */}
                {/* <Col xxl={9}> */}
                    {/* <Card> */}
                        <Card.Body>
                            <Row>
                                <Col lg={3}>
                                    <div className="profile-user-img position-relative">
                                        <img src={img1} alt="" className="rounded object-fit-cover" />
                                        <span className="position-absolute top-0 start-100 translate-middle badge border border-3 border-white rounded-circle bg-success p-1 mt-1 me-1"><span className="visually-hidden">unread messages</span></span>
                                    </div>
                                </Col>
                                <Col lg={9}>
                                    <div className="d-flex border-bottom border-bottom-dashed pb-3 mb-0 mt-10 mt-lg-4">
                                        <div className="flex-grow-5">
                                            <h4>{props}</h4>
                                            
                                            <h5 className="text-muted mb-0">Sales & Marketing Manager</h5>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Dropdown>
                                                <Dropdown.Toggle href="#" className="arrow-none btn btn-ghost-primary btn-sm btn-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ph-dots-three-outline"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <li><Dropdown.Item href="/#">Action</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="/#">Another action</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="/#">Something else here</Dropdown.Item></li>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>

                                  

                                    <div className="mt-4">
                                        <ul className="list-unstyled hstack gap-2 mb-">
                                            <li>
                                                Social Media:
                                            </li>
                                            <li>
                                                <Link to="#!" className="btn btn-soft-secondary btn-icon"><i className="ph-facebook-logo"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#!" className="btn btn-soft-danger btn-icon"><i className="ph-envelope"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#!" className="btn btn-soft-primary btn-icon"><i className="ph-twitter-logo"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#!" className="btn btn-soft-success btn-icon "><i className="ph-whatsapp-logo"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                        <Col lg={6}>
                                            <div className="table-responsive">
                                                <Table className="table-borderless mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Station
                                                            </td>
                                                            <td className="fw-medium">
                                                            
                                                            </td>
                                                        </tr>
                                                        
                                                        <tr>
                                                            <td>
                                                                Email:
                                                            </td>
                                                            <td className="fw-medium">
                                                                
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Date of Birth:
                                                            </td>
                                                            <td className="fw-medium">
                                                                29 Oct, 1986
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Mobile / Phone No:
                                                            </td>
                                                            <td className="fw-medium">
                                                                +(235) 01234 5678
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Total Reviews:
                                                            </td>
                                                            <td className="fw-medium">
                                                                <i className="bi bi-star-half text-warning align-middle me-1"></i> 365
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="table-responsive">
                                                <Table className="table-borderless mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Designation:
                                                            </td>
                                                            <td className="fw-medium">
                                                                Sales & Marketing Managers
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Total Trips:
                                                            </td>
                                                            <td className="fw-medium">
                                                                237
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Orders:
                                                            </td>
                                                            <td className="fw-medium">
                                                                3,412
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Earnings
                                                            </td>
                                                            <td className="fw-medium">
                                                                $2,960.32
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-bold">
                                                                Joining Date
                                                            </td>
                                                            <td className="fw-medium">
                                                                16 Aug, 2019
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>
                                    </Row>
                        </Card.Body>
                    {/* </Card> */}
                    
                {/* </Col> */}

              
            {/* </Row> */}
        </React.Fragment>
    );
};

export default Profile;