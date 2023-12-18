import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Dropdown, Form, Image, Row } from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";
import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import Dropzone from "react-dropzone";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SimpleBar from "simplebar-react";
import country from "Common/country";

const AddNewAccount = () => {
  document.title = "create Account | Bouden Coach Travel";

  const [selectedFiles, setselectedFiles] = useState([]);

  function handleAcceptedFiles(files: any) {
    files.map((file: any) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  /* Formats the size */
  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  const [seletedCountry, setseletedCountry] = useState<any>({});
  const [seletedCountry1, setseletedCountry1] = useState<any>({});

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* <Breadcrumb title="Create Vehicle" pageTitle="Vehicles" /> */}
          <form
            id="createproduct-form"
            autoComplete="off"
            className="needs-validation"
            noValidate
          >
            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Header>
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar-sm">
                          <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                            <i className="bi bi-person-workspace"></i>
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="card-title mb-1">Employee's Account</h5>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Body>
                  <Card.Header>
                              <div className="d-flex">
                                <div className="flex-shrink-0 me-3">
                                  <div className="avatar-sm">
                                    <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                      <i className="bi bi-box-seam"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h5 className="card-title">Personal Information</h5>
                                </div>
                              </div>
                            </Card.Header>
                            <Card.Body>
                                
                            </Card.Body>
                    <div className="mb-3">
                      <Form className="tablelist-form">
                        <input type="hidden" id="id-field" />
                        <Row>
                          <Row>
                            {/* First Name  == Done */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="customerName-field">
                                  First Name
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="customerName-field"
                                  placeholder="Enter first name"
                                  required
                                />
                              </div>
                            </Col>
                            {/* Last Name == Done */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Last Name
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="supplierName-field"
                                  placeholder="Enter last name"
                                  required
                                />
                              </div>
                            </Col>
                            {/* Birth_Date  == Done */}
                            <Col lg={2}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                Date of Birth
                                </Form.Label>
                                <Flatpickr
                                  className="form-control flatpickr-input"
                                  placeholder="Select Date"
                                  options={{
                                    dateFormat: "d M, Y",
                                  }}
                                />
                              </div>
                            </Col>
                            <Col lg={3}>
                              <div className="mb-3">
                                <label
                                  htmlFor="statusSelect"
                                  className="form-label"
                                >
                                  Gender
                                </label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Gender</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                            </Col>
                          
                          </Row>
                          <Row> 
                           <Col lg={3}>
                               <div className="mb-3">
                                <Form.Label>
                                  Nationality
                                </Form.Label>
                                <Dropdown>
                                  <Dropdown.Toggle
                                    as="input"
                                    style={{
                                      backgroundImage: `url(${
                                        seletedCountry1.flagImg &&
                                        seletedCountry1.flagImg
                                      })`,
                                    }}
                                    className="form-control rounded-end flag-input form-select"
                                    placeholder="Select country"
                                    readOnly
                                    defaultValue={seletedCountry1.countryName}
                                  ></Dropdown.Toggle>
                                  <Dropdown.Menu
                                    as="ul"
                                    className="list-unstyled w-100 dropdown-menu-list mb-0"
                                  >
                                    <SimpleBar
                                      style={{ maxHeight: "220px" }}
                                      className="px-3"
                                    >
                                      {(country || []).map(
                                        (item: any, key: number) => (
                                          <Dropdown.Item
                                            as="li"
                                            onClick={() =>
                                              setseletedCountry1(item)
                                            }
                                            key={key}
                                            className="dropdown-item d-flex"
                                          >
                                            <div className="flex-shrink-0 me-2">
                                              <Image
                                                src={item.flagImg}
                                                alt="country flag"
                                                className="options-flagimg"
                                                height="20"
                                              />
                                            </div>
                                            <div className="flex-grow-1">
                                              <div className="d-flex">
                                                <div className="country-name me-1">
                                                  {item.countryName}
                                                </div>
                                                <span className="countrylist-codeno text-muted">
                                                  {item.countryCode}
                                                </span>
                                              </div>
                                            </div>
                                          </Dropdown.Item>
                                        )
                                      )}
                                    </SimpleBar>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </Col>
                            {/* Original_Nationality  == Not Yet */}
                            <Col lg={3}>
                               <div className="mb-3">
                                <Form.Label>
                                  Original Nationality
                                </Form.Label>
                                <Dropdown>
                                  <Dropdown.Toggle
                                    as="input"
                                    style={{
                                      backgroundImage: `url(${
                                        seletedCountry.flagImg &&
                                        seletedCountry.flagImg
                                      })`,
                                    }}
                                    className="form-control rounded-end flag-input form-select"
                                    placeholder="Select country"
                                    readOnly
                                    defaultValue={seletedCountry.countryName}
                                  ></Dropdown.Toggle>
                                  <Dropdown.Menu
                                    as="ul"
                                    className="list-unstyled w-100 dropdown-menu-list mb-0"
                                  >
                                    <SimpleBar
                                      style={{ maxHeight: "220px" }}
                                      className="px-3"
                                    >
                                      {(country || []).map(
                                        (item: any, key: number) => (
                                          <Dropdown.Item
                                            as="li"
                                            onClick={() =>
                                              setseletedCountry(item)
                                            }
                                            key={key}
                                            className="dropdown-item d-flex"
                                          >
                                            <div className="flex-shrink-0 me-2">
                                              <Image
                                                src={item.flagImg}
                                                alt="country flag"
                                                className="options-flagimg"
                                                height="20"
                                              />
                                            </div>
                                            <div className="flex-grow-1">
                                              <div className="d-flex">
                                                <div className="country-name me-1">
                                                  {item.countryName}
                                                </div>
                                                <span className="countrylist-codeno text-muted">
                                                  {item.countryCode}
                                                </span>
                                              </div>
                                            </div>
                                          </Dropdown.Item>
                                        )
                                      )}
                                    </SimpleBar>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </Col>
                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Civil Status
                                </Form.Label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Status</option>
                                  <option value="Married">Married</option>
                                  <option value="Single">Single</option>
                                  <option value="Divorced">Divorced</option>
                                  <option value="Widowed">Widowed</option>
                                </select>
                              </div>
                            </Col>
                            <Row>

                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Phone Number
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="supplierName-field"
                                  placeholder="Enter phone"
                                  required
                                  />
                              </div>

                            </Col>
                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Emergency Phone Number
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="supplierName-field"
                                  placeholder="Enter phone"
                                  required
                                  />
                              </div>

                            </Col>
                            <Col lg={4}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Email
                                </Form.Label>
                               <Form.Control
                                  type="email"
                                  id="supplierName-field"
                                  placeholder="Enter email"
                                  required
                                />
                              </div>
                            </Col>
                            <Row>

                            
                          <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  House Number and Street
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="supplierName-field"
                                  placeholder="Enter address"
                                  required
                                />
                              </div>
                            </Col>
                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Locality
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="supplierName-field"
                                  placeholder="Enter address"
                                  required
                                />
                              </div>
                            </Col>
                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Post Code
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="supplierName-field"
                                  placeholder="Enter address"
                                  required
                                />
                              </div>
                            </Col>
                            </Row>
                                  </Row>
                        
                            
                           
                          </Row>

                      
                          <Col lg={12}>
                            <Card.Header>
                              <div className="d-flex">
                                <div className="flex-shrink-0 me-3">
                                  <div className="avatar-sm">
                                    <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                      <i className="bi bi-box-seam"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h5 className="card-title">Identification and Authentication</h5>
                                </div>
                              </div>
                            </Card.Header>
                            <Card.Body>
                              <Row>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      Employee ID
                                    </label>
                                    <Form.Control
                                      type="text"
                                      id="supplierName-field"
                                      placeholder="Enter number"
                                      required
                                    />
                                  </div>
                                </Col>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <Form.Label htmlFor="orderDate-field">
                                    Social Security Number
                                    </Form.Label>
                                    <Flatpickr
                                      className="form-control flatpickr-input"
                                      placeholder="Select Date"
                                     
                                    />
                                  </div>
                                </Col>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      Photo
                                    </label>
                                    <Form.Control
                                      type="file"
                                      id="supplierName-field"
                                      placeholder="Enter number"
                                      className="text-muted"
                                      required
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Col>
                         
                          <Col lg={12}>
                            <Card.Header>
                              <div className="d-flex">
                                <div className="flex-shrink-0 me-3">
                                  <div className="avatar-sm">
                                    <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                      <i className="bi bi-box-seam"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h5 className="card-title">Transportation-Specific Information</h5>
                                </div>
                              </div>
                            </Card.Header>
                            <Card.Body>
                              <Row>
                              <Col lg={3}>
                              <div className="mb-3">
                                <label
                                  htmlFor="statusSelect"
                                  className="form-label"
                                >
                                  Station
                                </label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Station 1</option>
                                  <option value="Male">Station 2</option>
                                  <option value="Female">Station 3</option>
                                  <option value="Other">Station 4</option>
                                </select>
                              </div>
                            </Col>
                                <Col lg={2}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      Group
                                    </label>
                                    <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Group</option>
                                  <option value="Active">Group 1</option>
                                  <option value="Inactive">Group 2</option>
                                  <option value="Annual vacation">
                                   Annual vacation
                                  </option>
                                      <option value="Exceptional vacation">Exceptional vacation</option>
                                       <option value="Driving">Driving</option>
                                </select>
                                  </div>
                                </Col>
                                <Col lg={2}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      Category
                                    </label>
                                    <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Category</option>
                                  <option value="Only Car">Only Car</option>
                                  <option value="Only Bus">Only Bus</option>
                                  <option value="Both">
                                   Both
                                  </option>
                                </select>
                                  </div>
                                </Col>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      Contract Type 
                                    </label>
                                    <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Contract</option>
                                  <option value="CDI">CDI</option>
                                  <option value="CDD">CDD</option>
                                  <option value="Part Time">
                                   Part Time
                                  </option>
                                </select>
                                  </div>
                                </Col>
                               
                              </Row>
                            </Card.Body>
                          </Col>
                          {/* <Col lg={6}>
                            <div className="mb-3">
                              <label
                                htmlFor="statusSelect"
                                className="form-label"
                              >
                                Shift
                              </label>
                              <select
                                className="form-select"
                                name="choices-single-default"
                                id="statusSelect"
                                required
                              >
                                <option value="">Shifts</option>
                                <option value="Pickups">Night </option>
                                <option value="Pending">Weekend </option>
                                <option value="Shipping">Holiday </option>
                                <option value="Delivered">Costum </option>
                              </select>
                            </div>
                          </Col> */}
                          <Col lg={12}>
                            <div className="hstack gap-2 justify-content-end">
                              <Button variant="primary" id="add-btn">
                                Add New employee's Account
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddNewAccount;