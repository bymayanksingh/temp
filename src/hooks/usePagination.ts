import { useState, useMemo } from 'react';

export function usePagination<T>(data: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }, [data, currentPage, itemsPerPage]);

  function nextPage() {
    setCurrentPage(page => Math.min(page + 1, totalPages));
  }

  function prevPage() {
    setCurrentPage(page => Math.max(page - 1, 1));
  }

  function goToPage(page: number) {
    const pageNumber = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNumber);
  }

  return {
    currentPage,
    currentData,
    totalPages,
    nextPage,
    prevPage,
    goToPage
  };
}