import React from 'react'
import { Formik, Form as FormikForm } from 'formik';
import { Row, Col, Button, Form, Modal } from 'react-bootstrap';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import '../styles.css';
import '../admin-home/AdminModal.styles.css'



const initialValues = {
	text: '',
	response: '',
};

const AdminResponse = (props) => {
	const { id } = props;
	const { editModal, setEditModal } = props;

	const history = useHistory();
    const { unansweredData } = useSelector((state) => state.registration);
    const currentData = unansweredData.find((item) => item.id == id);
	console.log('currentData', currentData.text);

    const validateRequestCallBack = Yup.object().shape({
		text: Yup.string().trim().email('Enter valid Question').required('Please enter Question'),
		response: Yup.string().trim().required('Please enter your Response'),
	});

    const newInitialValues = Object.assign(initialValues, {
		text: currentData && Object.keys(currentData).length > 0 ? currentData.text : '',
	});

    const handleSubmitEvent = (values, actions) => {
		let post_data = {
			id: currentData && Object.keys(currentData).length > 0 ? currentData.id : '',
			text: values.text,
            response: values.response            
		};
        console.log(post_data);
    }

    const handleClose = () => {
		history.push('/adminhome');
	};

    return(
        <Modal className="requestCallModal" show={editModal} onHide={() => setEditModal(false)} backdrop="static" centered>
        <Modal.Header  onClick={handleClose} > <Button variant="secondary">Close</Button> </Modal.Header>
        <Modal.Body>
            <div className="requestCallWrapper">
                <Row>
                    <Col xs={12} md={12} className="">
                        <h3>Edit Customer's Data</h3>
                        <Formik initialValues={newInitialValues} validationSchema={validateRequestCallBack} onSubmit={handleSubmitEvent}>
                            {({ values, errors, handleChange, isSubmitting, setFieldValue, touched }) => {
                                return (
                                    <FormikForm>
                                        <Form.Group controlId="text">
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Question*"
                                                onChange={handleChange}
                                                value={values.text}
                                                isInvalid={errors.text && touched.text}
                                            />
                                            {errors.text && touched.text ? <p className="error no-pos"> {errors.text}</p> : null}
                                        </Form.Group>
                                        <Form.Group controlId="Response">
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your Response *"
                                                onChange={handleChange}
                                                value={values.response}
                                                isInvalid={errors.response && touched.response}
                                            />
                                            {errors.response && touched.response ? <p className="error no-pos"> {errors.resposense}</p> : null}
                                        </Form.Group>
                                        {errors.message ? (
												<Row>
													<Col xs={12} sm={12} md={12}>
														<span className="errorMsg">{errors.message}</span>
													</Col>
												</Row>
											) : null}
                                        <button variant="primary" className="btn btn-info" type="submit">
                                            Save
                                        </button>
                                    </FormikForm>
                                );
                            }}
                        </Formik>
                    </Col>
                </Row>
            </div>
        </Modal.Body>
    </Modal>
    )
}

export default AdminResponse;