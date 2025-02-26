import BookListComponent from '@/components/BookListComponent'
import React from 'react'

export default function BookList() {
  return (
    <>
        <main className='container mt-3'>
            <h1 className=' text-primary text-center'>Book List</h1>
            <BookListComponent/>
        </main>
    </>
  )
}
