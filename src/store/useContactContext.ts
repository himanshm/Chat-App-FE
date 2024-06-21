import { useContext } from 'react';
import { ContactContext } from './ContactContext';

export function useContactContext() {
  const context = useContext(ContactContext);

  if (!context) {
    throw new Error('useContactContext must be used within a ContactProvider');
  }
  return context;
}
