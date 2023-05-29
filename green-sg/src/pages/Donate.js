import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Donate = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        itemsToDonate: '',
        location: '',
        timing: '',
        comments: ''
    });

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleInputChange = (e) => {
        setFormData((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5001/api/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setShowModal(true);
                setFormData({
                    name: '',
                    contactNumber: '',
                    itemsToDonate: '',
                    location: '',
                    timing: '',
                    comments: ''
                });
            } else {
                alert('Error submitting form data. Please try again.');
            }
        } catch (error) {
            alert('An error occurred while submitting the form. Please try again later.');
        }
    };

    return (
        <div className="container">

            <div className="row justify-content-center">

                <div className="col-lg-6 mt-5">
                    <h1 className="my-3 text-center" style={{ fontFamily: "Magilio" }}>Donate What You Don't Need.</h1>
                    <p className="text-center">By donating things that you do not need but are still in usable condition, you give these items a new lease of life. This can go a long way in building a sustainable future.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input required type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contactNumber" className="form-label">Contact Number:</label>
                            <input required type="tel" className="form-control" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="itemsToDonate" className="form-label">Items to be Donated:</label>
                            <textarea required className="form-control" id="itemsToDonate" name="itemsToDonate" value={formData.itemsToDonate} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">Location of Donation:</label>
                            <input required type="text" className="form-control" id="location" name="location" value={formData.location} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="timing" className="form-label">Timing of Donation:</label>
                            <input required type="datetime-local" className="form-control" id="timing" name="timing" value={formData.timing} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="comments" className="form-label">Other Comments:</label>
                            <textarea className="form-control" id="comments" name="comments" value={formData.comments} onChange={handleInputChange} />
                        </div>
                        <div className='text-center my-4'>
                            <button type="submit" className="mb-4 btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Response Received</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thank you for your response! We have received your donation details.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
};
;

export default Donate;