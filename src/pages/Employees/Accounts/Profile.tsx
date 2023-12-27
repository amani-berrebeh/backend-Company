import React from 'react';
import { Card, Col, Dropdown, Row, Table } from 'react-bootstrap';

import { Link } from 'react-router-dom';

// Import Images
import img1 from 'assets/images/users/avatar-1.jpg'

const Profile = (props:any) => {
const{
    user_name, address, dropdown_time, mobile, group, station, user_img, trip_ref, email, pickup_time, 
}= props
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
                                        {/* <span className="position-absolute top-0 start-100 translate-middle badge border border-3 border-white rounded-circle bg-success p-1 mt-1 me-1"><span className="visually-hidden">unread messages</span></span> */}
                                    </div>
                                </Col>
                                <Col lg={9}>
                                    <div className="d-flex border-bottom border-bottom-dashed pb-3 mb-0 mt-10 mt-lg-4">
                                        <div className="flex-grow-5">
                                            <h4>{user_name}</h4>
                                            
                                        </div>
                                        {/* <div className="flex-shrink-0">
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
                                        </div> */}
                                    </div>

                                  

                                    <div className="mt-4">
                                    <Col lg={6}>
                                            <div className="table-responsive">
                                                <Table className=" mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td className="fw-bold">
                                                                Address
                                                            </td>
                                                            <td className="fw-medium">
                                                            {address}
                                                            </td>
                                                        </tr>
                                                        
                                                        <tr>
                                                            <td className="fw-bold">
                                                                Station
                                                            </td>
                                                            <td className="fw-medium">
                                                            {station}
                                                            </td>
                                                        </tr>  <tr>
                                                            <td className="fw-bold">
                                                                Mobile
                                                            </td>
                                                            <td className="fw-medium">
                                                            {mobile}
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                </Table>
                                            </div>
                                            </Col>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-3 g-5">
                                        <Col lg={6}>
                                            <div className="table-responsive">
                                                <Table className=" mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td className="fw-bold">
                                                                Station
                                                            </td>
                                                            <td className="fw-medium">
                                                            {station}
                                                            </td>
                                                        </tr>
                                                        
                                                        <tr>
                                                            <td className="fw-bold">
                                                                Email:
                                                            </td>
                                                            <td className="fw-medium">
                                                            {email}
                                                            </td>
                                                        </tr>
                                                        {/* <tr>
                                                            <td>
                                                                Date of Birth:
                                                            </td>
                                                            <td className="fw-medium">
                                                                29 Oct, 1986
                                                            </td>
                                                        </tr> */}
                                                        <tr>
                                                            <td className="fw-bold">
                                                                Mobile / Phone No:
                                                            </td>
                                                            <td className="fw-medium">
                                                                {mobile}
                                                            </td>
                                                        </tr>
                                                        {/* <tr>
                                                            <td>
                                                                Total Reviews:
                                                            </td>
                                                            <td className="fw-medium">
                                                                <i className="bi bi-star-half text-warning align-middle me-1"></i> 365
                                                            </td>
                                                        </tr> */}
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>
                                    <Col lg={6}>
                                            <div className="table-responsive g-3">
                                                <Table className=" mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td className="fw-bold">
                                                                Designation:
                                                            </td>
                                                            <td className="fw-medium">
                                                                Sales & Marketing Managers
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-bold">
                                                                Total Trips:
                                                            </td>
                                                            <td className="fw-medium">
                                                                237
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-bold">
                                                                Orders:
                                                            </td>
                                                            <td className="fw-medium">
                                                                3,412
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-bold">
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