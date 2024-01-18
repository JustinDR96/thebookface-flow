// search_bar.js
import React, { useState, useEffect, useRef } from 'react';
import './search_bar.scss'; // Importez le fichier SCSS

const users = [
  { id: 1, name: 'John Doe' },
  { id: 3, name: 'Jane Doe' },
  { id: 4, name: 'Burak Doe' },
  { id: 5, name: 'Ayoub Doe' },
  { id: 6, name: 'Justin Doe' },
  { id: 7, name: 'Guigui Doe' },
  { id: 8, name: 'danté Doe' },
  // Ajoutez d'autres utilisateurs
];

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
    setSearchOpen(true);
  };

  const handleUserClick = (userName) => {
    // Ajouter le profil sélectionné à la liste des profils dans la barre de recherche
    setSelectedUsers([...selectedUsers, userName]);
    // Mettre à jour le terme de recherche pour inclure le nom du profil sélectionné
    setSearchTerm(userName);
    // Fermer la zone de recherche après avoir sélectionné un utilisateur
    setSearchOpen(false);
  };

  const handleRemoveSuggestion = (userName) => {
    const updatedResults = searchResults.filter((user) => user.name !== userName);
    setSearchResults(updatedResults);
  };

  return (
    <div className="search-bar" ref={searchRef}>
      <i className="search-icon"></i>
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <img src="/icon/search_logo.svg" alt="Search Logo" />
      </div>
      {searchOpen && (
        <div className="search-results">
          {searchResults.map((user) => (
            <div key={user.id} className="search-result" onClick={() => handleUserClick(user.name)}>
              {user.name} <span className="remove-suggestion" onClick={() => handleRemoveSuggestion(user.name)}></span>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
}
