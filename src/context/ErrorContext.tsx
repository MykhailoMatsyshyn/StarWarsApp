import React, { createContext, useContext, useState, ReactNode } from "react";

interface ErrorContextProps {
  error: string | null;
  setError: (error: string | null) => void;
}

const ErrorContext = createContext<ErrorContextProps | undefined>(undefined);

export const ErrorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [error, setError] = useState<string | null>(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useErrorContext = (): ErrorContextProps => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useErrorContext must be used within an ErrorProvider");
  }
  return context;
};
