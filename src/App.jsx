import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import ContactModal from './components/ContactModal';
import ViewModal from './components/ViewModal';
import SearchBar from './components/SearchBar';
import './index.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    // Fetch contacts
    fetch('https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json')
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(item => {
          const parts = (item.name || '').split(' ');
          return {
            id: item.id,
            first_name: parts[0] || '',
            last_name: parts.slice(1).join(' ') || '',
            email: item.email || '',
            phone_number: item.mobile || item.phone || '',
            address: item.address || ''
          };
        });
        setContacts(formatted);
      })
      .catch(err => console.error("Error fetching contacts:", err));
  }, []);

  // Filter contacts
  const filteredContacts = contacts.filter(c => {
    const q = searchQuery.toLowerCase();
    const first = c.first_name ? c.first_name.toLowerCase() : '';
    const last = c.last_name ? c.last_name.toLowerCase() : '';
    const phone = c.phone_number || c.phone || '';

    return first.includes(q) || last.includes(q) || phone.includes(q);
  });

  const handleAddSubmit = (newContact) => {
    const newId = Date.now();
    setContacts([{ ...newContact, id: newId }, ...contacts]);
    setIsAddModalOpen(false);
  };

  const handleEditSubmit = (updatedContact) => {
    setContacts(contacts.map(c => c.id === updatedContact.id ? updatedContact : c));
    setSelectedContact(null);
  };

  const handleDelete = (contactToDelete) => {
    const confirm = window.confirm("Are you sure you want to delete this contact?");
    if (confirm) {
      setContacts(contacts.filter(c => c.id !== contactToDelete.id));
    }
  };

  return (
    <>
      <div className="contacts-container">
        <div className="contacts-header">
          <span>All Contacts</span>
          <button className="add-btn" onClick={() => setIsAddModalOpen(true)}>+</button>
        </div>

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <ContactList
          contacts={filteredContacts}
          onEdit={(contact) => {
            setSelectedContact(contact);
            setIsViewModalOpen(false);
          }}
          onDelete={handleDelete}
          onView={(contact) => {
            setSelectedContact(contact);
            setIsViewModalOpen(true);
          }}
        />
      </div>

      {/* Add Modal */}
      <ContactModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddSubmit}
      />

      {/* Edit Modal (reusing ContactModal) */}
      <ContactModal
        isOpen={Boolean(selectedContact && !isViewModalOpen)}
        onClose={() => setSelectedContact(null)}
        contact={selectedContact}
        onSubmit={handleEditSubmit}
      />

      {/* View Modal */}
      <ViewModal
        isOpen={isViewModalOpen}
        onClose={() => {
          setIsViewModalOpen(false);
          setSelectedContact(null);
        }}
        contact={selectedContact}
      />
    </>
  );
}

export default App;
