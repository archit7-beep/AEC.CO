'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface EnquiryItem {
  id: string; // unique combination of model and variant
  brand?: string;
  name: string;
  category: string;
  variant?: string;
  quantity: number;
}

interface EnquiryContextType {
  items: EnquiryItem[];
  isDrawerOpen: boolean;
  addItem: (item: Omit<EnquiryItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearEnquiry: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<EnquiryItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('aec-enquiry-cart');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse enquiry cart from localStorage');
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('aec-enquiry-cart', JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const addItem = (newItem: Omit<EnquiryItem, 'quantity'>) => {
    setItems((prevItems) => {
      // Prevent payload stuffing loopholes
      if (prevItems.length >= 50) {
        console.warn('Maximum unique items reached');
        return prevItems;
      }
      
      const existing = prevItems.find((i) => i.id === newItem.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === newItem.id 
            ? { ...i, quantity: Math.min(i.quantity + 1, 999) } 
            : i
        );
      }
      
      // Truncate ridiculously long strings to prevent localstorage/payload overflow
      const sanitize = (str: string) => str.slice(0, 100);
      return [...prevItems, { 
        ...newItem, 
        name: sanitize(newItem.name),
        category: sanitize(newItem.category),
        variant: newItem.variant ? sanitize(newItem.variant) : undefined,
        brand: newItem.brand ? sanitize(newItem.brand) : undefined,
        quantity: 1 
      }];
    });
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    // Strictly enforce bounds
    if (quantity < 1) quantity = 1;
    if (quantity > 999) quantity = 999;
    
    setItems((prevItems) =>
      prevItems.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  const clearEnquiry = () => {
    setItems([]);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <EnquiryContext.Provider
      value={{
        items,
        isDrawerOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearEnquiry,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (context === undefined) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
}
