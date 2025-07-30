import React from "react";
import "./Book.css";

function Book() {
  const image =
    "https://m.media-amazon.com/images/I/41XDKz9klML._SY445_SX342_.jpg";
  const title = "Don't Let Him in";
  const author = "Lisa Jewell";
  const price = " ₹2,212";

  return (
    <div className="book">
      <div className="book-image">
        <img src={image} alt="book-image" />
      </div>
      <div className="book-info">
        <h1>{title}</h1>
        <p className="author">by {author}</p>
        <p className="price">{price}</p>
        <button>add to cart</button>
      </div>
    </div>
  );
}

export default Book;
