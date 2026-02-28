import React, { useState, useEffect } from 'react';

const ContactModal = ({ isOpen, onClose, onSubmit, contact }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address: ''
    });

    // Populate form if editing, otherwise reset
    useEffect(() => {
        if (contact) {
            setFormData({
                first_name: contact.first_name || '',
                last_name: contact.last_name || '',
                email: contact.email || '',
                phone_number: contact.phone_number || '',
                address: contact.address || ''
            });
        } else {
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                address: ''
            });
        }
    }, [contact, isOpen]);

    if (!isOpen) return null;

    const isEditMode = Boolean(contact);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple required validation
        if (!formData.first_name || !formData.email || !formData.phone_number) {
            alert("Please fill required fields (First Name, Email, Phone Number)");
            return;
        }

        if (contact) {
            onSubmit({ ...formData, id: contact.id });
        } else {
            onSubmit(formData);
        }
    };

    const handleReset = () => {
        setFormData({
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            address: ''
        });
    };

    return (
        <div className="modal-container">
            <div className="modal-header">
                <span>{isEditMode ? 'Edit Contact' : 'Add Contact'}</span>
                <button className="modal-close" onClick={onClose}>&times;</button>
            </div>
            <div className="modal-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group" style={{ marginBottom: '10px' }}>
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="first_name"
                            placeholder="Enter First Name"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group" style={{ marginBottom: '10px' }}>
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Enter Last Name"
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group" style={{ marginBottom: '10px' }}>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group" style={{ marginBottom: '10px' }}>
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            name="phone_number"
                            placeholder="Enter Your Phone Number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label>Address:</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Enter Your Address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn-primary">
                            {isEditMode ? 'Update' : 'Submit'}
                        </button>
                        <button type="button" className="btn-secondary" onClick={handleReset}>
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
