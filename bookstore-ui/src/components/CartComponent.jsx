import { cartContext } from '@/app/layout';
import Image from 'next/image';
import React, { useContext } from 'react'
import { BsCart3 } from 'react-icons/bs';

function CartComponent() {


    const {cart, removeFromCart} = useContext(cartContext);

    const handleRemove = (book) => {
        removeFromCart(book);
    }

  return (
    <>

        <div className='row'>
            {
                cart.map(
                    book => (
                        <div className="col-md-4" key={book.bookId}>
                            <div className="card my-2">
                                <Image height={224} width={360} src={book.imgUrl} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">{book.categoryName}</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>{book.price}</p>
                                        <p>
                                            <button className='btn btn-link' onClick={(e) => handleRemove(book)}>Remove</button>
                                        </p>
                                        <p>{book.firstName + " " + book.lastName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    </>
  )
}

export default CartComponent