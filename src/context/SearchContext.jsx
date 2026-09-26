import React, { createContext, useContext, useState, useCallback } from 'react';
import SearchModal from '../components/SearchModal.jsx';

const SearchContext = createContext({
  isOpen: false,
  openSearch: () => {},
  closeSearch: () => {}
});

export function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openSearch = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <SearchContext.Provider value={{ isOpen, openSearch, closeSearch }}>
      {children}
      {isOpen && <SearchModal onClose={closeSearch} />}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
