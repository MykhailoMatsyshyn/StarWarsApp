import { useEffect, useState } from "react";
import { getPeople } from "../api/sw-api";
import { IPerson } from "../api/types";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { PersonsList } from "../components/PersonsList/PersonsList";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { usePageContext } from "../context/PageContext";

export default function People() {
  const { currentPage, searchQuery, setCurrentPage, setSearchQuery } =
    usePageContext();
  const [persons, setPersons] = useState<IPerson[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPeople = async () => {
      setLoading(true); // Встановлюємо стан завантаження
      try {
        const data = await getPeople(currentPage, searchQuery);
        setPersons(data.results);
        setTotalPages(Math.ceil(data.count / 10));
      } catch (error) {
        console.error("Error fetching people data:", error);
      } finally {
        setLoading(false); // Скидаємо стан завантаження після завершення
      }
    };
    fetchPeople();
  }, [currentPage, searchQuery]);

  const handleSearchChange = (search: string) => {
    setSearchQuery(search);
    setCurrentPage(1); // Скидаємо сторінку на першу при зміні пошуку
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page); // Оновлюємо поточну сторінку
  };

  return (
    <main>
      <SearchBox value={searchQuery} onChange={handleSearchChange} />
      <PersonsList persons={persons} isLoading={loading} />

      <Stack spacing={2} alignItems="center" sx={{ marginTop: 4 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          variant="outlined"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#fff",
              borderColor: "rgba(33, 150, 243, 0.5)",
              borderWidth: "2px",
              borderRadius: "8px",
              transition: "all 0.3s",
              fontSize: "16px",
            },
            "& .MuiPaginationItem-root:hover": {
              background: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0 0 15px 3px rgba(33, 150, 243, 0.5)",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              borderColor: "rgba(240, 0, 0, 0.8)",
              boxShadow: "0 0 15px 3px rgba(240, 0, 0, 0.5)",
            },
          }}
          siblingCount={1}
          boundaryCount={1}
          showFirstButton={totalPages > 5}
          showLastButton={totalPages > 5}
        />
      </Stack>
    </main>
  );
}
