import React, { createContext, useState, ReactNode, useContext } from "react";

interface PageContextProps {
  currentPage: number;
  searchQuery: string;
  setCurrentPage: (page: number) => void;
  setSearchQuery: (query: string) => void;
}

const PageContext = createContext<PageContextProps | undefined>(undefined);

export const PageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <PageContext.Provider
      value={{ currentPage, searchQuery, setCurrentPage, setSearchQuery }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageProvider");
  }
  return context;
};
