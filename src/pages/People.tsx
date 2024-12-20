import { useEffect, useState } from "react";
import { getPeople } from "../api/sw-api";
import { IPerson } from "../api/types";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { PersonsList } from "../components/PersonsList/PersonsList";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function People() {
  const [persons, setPersons] = useState<IPerson[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchPeople = async () => {
      const data = await getPeople(currentPage, searchQuery);
      setPersons(data.results);
      setTotalPages(Math.ceil(data.count / 10));
    };
    fetchPeople();
  }, [currentPage, searchQuery]);

  const handleSearchChange = (search: string) => {
    setSearchQuery(search);
    setCurrentPage(1);
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <main>
      <SearchBox value={searchQuery} onChange={handleSearchChange} />
      <PersonsList persons={persons} />
      <Stack spacing={2} alignItems="center" sx={{ marginTop: 4 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          variant="outlined"
          siblingCount={1}
          boundaryCount={1}
          showFirstButton={totalPages > 5}
          showLastButton={totalPages > 5}
        />
      </Stack>
    </main>
  );
}
