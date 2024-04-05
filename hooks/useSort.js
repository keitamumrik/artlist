import { useState } from 'react';

const useSort = () => {
  const [sortOrder, setSortOrder] = useState(null);

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortData = (data, sortKey) => {
    if (!sortOrder) return data;

    const sortedData = [...data].sort((a, b) => {
      const valueA = new Date(a[sortKey]);
      const valueB = new Date(b[sortKey]);

      if (sortOrder === 'asc') {
        return valueA - valueB;
      } else {
        return valueB - valueA;
      }
    });

    return sortedData;
  };

  return { sortOrder, toggleSortOrder, sortData };
};

export default useSort;