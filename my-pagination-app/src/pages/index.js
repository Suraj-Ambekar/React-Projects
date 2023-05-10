import { useState, useEffect } from 'react';
import axios from 'axios';

const PAGE_SIZE = 10;

export default function Home() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${PAGE_SIZE}`);
    setData(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(Math.ceil(totalCount / PAGE_SIZE));
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <div>
        <button disabled={currentPage === 1} onClick={handlePrevClick}>
          Prev
        </button>
        <button disabled={currentPage === totalPages} onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}
