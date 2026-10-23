"use client";

import React, { ReactNode, createContext, useCallback, useContext, useState } from 'react';

interface CalContextProps {
  calLoaded: boolean;
  loadCal: () => void;
}

const CalContext = createContext<CalContextProps | undefined>(undefined);

export const useCal = () => {
  const context = useContext(CalContext);
  if (!context) {
    throw new Error('useCal must be used within a CalProvider');
  }
  return context;
};

interface CalProviderProps {
  children: ReactNode;
}

export const CalProvider: React.FC<CalProviderProps> = ({ children }) => {
  const [calLoaded, setCalLoaded] = useState(false);

  const loadCal = useCallback(() => {
    if (!calLoaded) {
      setCalLoaded(true);
    }
  }, [calLoaded]);

  return (
    <CalContext.Provider value={{ calLoaded, loadCal }}>
      {children}
    </CalContext.Provider>
  );
};