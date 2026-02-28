import React from 'react';

const ViewModal = ({ isOpen, onClose, contact }) => {
    if (!isOpen || !contact) return null;

    return (
        <div className="modal-container">
            <div className="modal-header">
                <span>Contact Details</span>
                <button className="modal-close" onClick={onClose}>&times;</button>
            </div>
            <div className="modal-body">
                <div className="details-row">
                    <div className="details-label">Name :</div>
                    <div className="details-value">{contact.first_name} {contact.last_name}</div>
                </div>
                <div className="details-row">
                    <div className="details-label">Email :</div>
                    <div className="details-value">{contact.email || 'N/A'}</div>
                </div>
                <div className="details-row">
                    <div className="details-label">Number :</div>
                    <div className="details-value">{contact.phone_number || contact.phone || 'N/A'}</div>
                </div>
                <div className="details-row">
                    <div className="details-label">Address :</div>
                    <div className="details-value">{contact.address || 'N/A'}</div>
                </div>
            </div>
        </div>
    );
};

export default ViewModal;
