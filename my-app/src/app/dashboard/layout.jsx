import React from 'react'

export default function Layout({children}) {
  return (
    <>
        <nav className='navbar navbar-expand-lg navbar-dark bg-black text-white'>
           <span className=' ms-5'>My App</span>
        </nav>

        <section className='container mt-5'>
            <h1>{ children }</h1>
        </section>
    </>
  )
}
