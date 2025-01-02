import { useEffect, useState } from "react";
import { fetchPeopleList } from "../api/sw-api";
import { IPerson } from "../api/types";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { PersonsList } from "../components/PersonsList/PersonsList";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { usePageContext } from "../context/PageContext";
import { useErrorContext } from "../context/ErrorContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function People() {
  const { currentPage, searchQuery, setCurrentPage, setSearchQuery } =
    usePageContext();
  const { error, setError } = useErrorContext();
  const [persons, setPersons] = useState<IPerson[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPeople = async () => {
      setLoading(true);
      try {
        setError(null);
        const data = await fetchPeopleList(currentPage, searchQuery);
        if (data && data.results) {
          setPersons(data.results);
          setTotalPages(Math.ceil(data.count / 10));
        } else {
          setError("No data found.");
        }
      } catch (error) {
        setError("Error fetching people data.");
      } finally {
        setLoading(false);
      }
    };
    fetchPeople();
  }, [currentPage, searchQuery, setError]);

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

  useEffect(() => {
    if (error) {
      // toast.dismiss();
      toast.error(error);
    }
  }, [error]);

  return (
    <main>
      <SearchBox value={searchQuery} onChange={handleSearchChange} />
      <PersonsList persons={persons} isLoading={loading} />

      {persons.length > 0 && (
        <Stack spacing={2} alignItems="center">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            variant="outlined"
            size="large"
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
                background: "rgba(33, 150, 243, 0.5)",
                borderColor: "rgba(33, 150, 243, 0.9)",
                boxShadow: "0 0 15px 3px rgba(33, 150, 243, 0.5)",
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                color: "#fff",
                borderWidth: "2px",
                background: "rgba(240, 0, 0, 0.3)",
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
      )}
    </main>
  );
}
