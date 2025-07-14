import BookCard from "./BookCard";
import Books from "./Books.json"
import React from "react";



const Booklist =()=>{
  
  return (
    <div>
      {Books.map((ele)=>{
        return <BookCard
          cover={ele.cover}
          title={ele.title}
          author={ele.author}
          year={ele.year}
        />
      })}
    </div>
  )
}

export default Booklist;