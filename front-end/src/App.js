import { useEffect, useState } from 'react';
import { fetchbookData } from './api';
import Navbar from './components/navbar';
import BookCard from './components/bookcard';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchbookData();
      if (data && data.rows) {
        setBooks(data.rows); // Update state with book data
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1 className="bg-gray-600">Book List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.length > 0 ? (
            books.map((book, index) => <BookCard key={index} book={book} />)
          ) : (
            <p>Loading books...</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
