"use client";
import { cartContext } from '@/app/layout';
import { getAllBooks } from '@/services/BookServices';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'

function BookListComponent() {

    const [books, setBooks] = useState([]);
    const {addToCart} = useContext(cartContext);

    const addBookToCart = (book) => {
        addToCart(book);
    }

    useEffect(() => {
       
        fetchBooks();
    }, []);

    const fetchBooks =() => getAllBooks().then(response => {
        setBooks(response.data);
    }).catch(error => {
        console.log(error);
    });

  return (
    <>
        <section className='row'>
            {
                books.map(
                    book => (
                        <div className="col-md-4" key={book.bookId}>
                            <div className="card my-2">
                                <Image src={book.imgUrl}
                                    width={200}
                                    height={200}
                                className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">{book.categoryName}</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>{book.price}</p>
                                        <p>
                                            <button className='btn btn-link' onClick={(e) => addBookToCart(book)}>Add To Cart</button>
                                        </p>
                                        <p>{book.firstName + " " + book.lastName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </section>
    </>
  )
}

export default BookListComponent