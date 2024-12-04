// src/components/BookCard.jsx
import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt={book.book_name || 'Book Cover'}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book.book_name}</h2>
        <p>Category: {book.category}</p>
        <p>Price: ${book.price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
