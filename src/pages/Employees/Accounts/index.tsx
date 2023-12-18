import React, { useMemo, useState } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import { Link, useNavigate } from 'react-router-dom';
import Flatpickr from "react-flatpickr";
import TableContainer from 'Common/TableContainer';
import { userList} from 'Common/data';

const Account = () => {

    document.title = "Account | Bouden Coach Travel";

    const navigate = useNavigate();

    const [modal_AddEmployeeModal, setmodal_AddEmployeeModal] = useState<boolean>(false);
    function tog_AddEmployeeModal() {
        navigate("/employees/account/new-account")
    }

     const columns = useMemo(
        () => [
            {
                Header: "Employee Name",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (<div className="d-flex align-items-center gap-2">
                        <div className="flex-shrink-0">
                            <img src={cellProps.user_img} alt="" className="avatar-xs rounded-circle user-profile-img" />
                        </div>
                        <div className="flex-grow-1 ms-2 user_name">{cellProps.user_name}</div>
                    </div>)
                }
            },
           
            {
                Header: "Address",
                accessor: "address",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Station",
                accessor: "station",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Group",
                accessor: "group",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Email",
                accessor: "email",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Mobile",
                accessor: "mobile",
                disableFilters: true,
                filterable: true,
             },
             
            {
                Header: "Action",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (
                        <ul className="hstack gap-2 list-unstyled mb-0">
                            <li>
                                <Link to="#" className="badge badge-soft-primary edit-item-btn">Edit</Link>
                            </li>
                            <li>
                                <Link to="#" className="badge badge-soft-danger remove-item-btn">Delete</Link>
                            </li> <li>
                                <Link to="/single-account" state={cellProps} className="badge badge-soft-success view-item-btn">View</Link>
                            </li>
                        </ul>
                    )
                },
            },
        ],
        []
    );


    return (
        <React.Fragment>
           <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Account" pageTitle="Employees" />
                    <Card id="shipmentsList">
                        <Card.Header className="border-bottom-dashed">
                            <Row className="align-items-center g-3">
                            <Col xxl={3} lg={6}>
                                    <div className="search-box">
                                        <input type="text" className="form-control search" placeholder="Search for something..." />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </Col>
                                <Col className="col-xxl-auto col-sm-auto ms-auto">
                                    <Button variant='success' onClick={() => tog_AddEmployeeModal()} className="add-btn"><i className="bi bi-plus-circle me-1 align-middle"></i> Add Employee Account</Button>
                                </Col>
                            </Row>
                        </Card.Header>
                       
                        <Card.Body>
                            <div className="table-responsive table-card">
                                <TableContainer
                                    columns={(columns || [])}
                                    data={(userList || [])}
                                    // isGlobalFilter={false}
                                    iscustomPageSize={false}
                                    isBordered={false}
                                    customPageSize={10}
                                    className="custom-header-css table align-middle table-nowrap"
                                    tableClass="table-centered align-middle table-nowrap mb-0"
                                    theadClassName="text-muted table-light"
                                    SearchPlaceholder='Search Products...'
                                />
                            </div>
                            <div className="noresult" style={{ display: "none" }}>
                                <div className="text-center py-4">
                                    <div className="avatar-md mx-auto mb-4">
                                        <div className="avatar-title bg-primary-subtle text-primary rounded-circle fs-24">
                                            <i className="bi bi-search"></i>
                                        </div>
                                    </div>
                                    <h5 className="mt-2">Sorry! No Result Found</h5>
                                    <p className="text-muted mb-0">We've searched more than 150+ shipment orders We did not find any shipment orders for you search.</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    <Modal className="fade zoomIn" size="lg" show={modal_AddEmployeeModal} onHide={() => { tog_AddEmployeeModal(); }} centered>
                     
                    </Modal>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Account;