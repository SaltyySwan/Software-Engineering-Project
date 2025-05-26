import React, { createContext, useContext, ReactNode } from 'react';
import { create } from 'tailwind-rn';
import utilities from '../../tailwind.json';

// 1. Kreiramo tailwind funkciju i uzimamo njen tip
const { tailwind } = create(utilities);
type TailwindFunction = typeof tailwind;

// 2. Kontekst koji čuva tailwind funkciju
const TailwindContext = createContext<TailwindFunction | null>(null);

// 3. Provider komponenta
export const TailwindProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TailwindContext.Provider value={tailwind}>
      {children}
    </TailwindContext.Provider>
  );
};

// 4. Custom hook za pristup tailwind stilovima
export const useTailwind = (): TailwindFunction => {
  const context = useContext(TailwindContext);
  if (!context) {
    throw new Error('useTailwind must be used within TailwindProvider');
  }
  return context;
};