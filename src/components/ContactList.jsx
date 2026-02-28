import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({ contacts, onEdit, onDelete, onView }) => {
    return (
        <div className="contacts-list">
            {contacts.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#999', marginTop: '20px' }}>
                    No contacts found.
                </p>
            ) : (
                contacts.map((contact, index) => (
                    <ContactCard
                        key={contact.id || index}
                        index={index + 1}
                        contact={contact}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        onView={onView}
                    />
                ))
            )}
        </div>
    );
};

export default ContactList;
