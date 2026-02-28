import React from 'react';

const ContactCard = ({ index, contact, onEdit, onDelete, onView }) => {
    return (
        <div className="contact-card">
            <div className="contact-index">{index}</div>
            <div className="contact-avatar">
                👤
            </div>
            <div className="contact-info">
                <div className="contact-name">
                    {contact.first_name} {contact.last_name || contact.lastName}
                </div>
                <div className="contact-phone">
                    {contact.phone_number || contact.phone}
                </div>
            </div>
            <div className="contact-actions">
                <button className="action-btn" title="View" onClick={() => onView(contact)}>
                    👁️
                </button>
                <button className="action-btn" title="Delete" onClick={() => onDelete(contact)}>
                    🗑️
                </button>
                <button className="action-btn" title="Edit" onClick={() => onEdit(contact)}>
                    ✏️
                </button>
            </div>
        </div>
    );
};

export default ContactCard;
