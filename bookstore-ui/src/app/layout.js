"use client";
import "./globals.css";
import Link from "next/link";
import { createContext, useState } from "react";
import {BsCart2} from "react-icons/bs"


// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
export const cartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
}); // need to be initialized with some default value

export default function RootLayout({ children }) {

  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
  }

  const removeFromCart = (book) => {
    setCart(cart.filter((item) => item.bookId !== book.bookId));
  }

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
  }

  return (
    <html lang="en">
      <body >
        {/* Nav */}
        <nav className="navbar navbar-expand-md navbar-dark  text-white">
          <div className="container">
            <a href="#" className="navbar-brand"><i className="fa-solid fa-book me-2"></i>BookStore</a>
            <button className="navbar-toggler" data-bs-toggle="collapse"
            data-bs-target="#myNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="myNav" className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="" className="nav-link">Home</a>
                </li>

                <li className="nav-item">
                    <a href="" className="nav-link">About</a>
                </li>

                <li className="nav-item">
                    <a href="" className="nav-link">ContactUs</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">Setting</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section  id="showcase" className="d-flex justify-content-center align-items-center">
          <div id="overlay"></div>
          <div id="header" className="container text-white text-center">
              <h3 className="display-5">Modern Book Store</h3>
              <h1 className="display-1">The BookEnd</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam at debitis earum nihil nobis.</p>
              <Link href='/books' className="btn btn-primary rounded px-5">Try Now</Link>
          </div>
        </section>

        {/* Cart */}
        <section >
          <div className="container">
          <div className="row my-3">
              <div className="col-md-10"></div>
              <Link className="col-md-2 " href="/cart-view">
                  <BsCart2 size={30}/>
                  <span className="badge bg-primary ms-3">{cart.length}</span>
              </Link>
          </div>
          </div>
        </section>

        {/* Book List */}
        <cartContext.Provider value={contextValue}>
          {children}
        </cartContext.Provider>

        {/* NewsLetter */}
        <section id="newsletter" className="bg-dark">
          <div className="container text-white text-center py-5">
              <p className="lead">JOIN OUR NEWSLETTER FOR DEALS AND UPDATES AND OFFERS</p>
              <div className="row justify-content-center">
                  <div className="col-10 col-sm-8 col-md-6 col-lg-4">
                      <form action="" className="form-inline">
                          <div className="input-group">
                              <input type="text" className="form-control" placeholder="Your Email" id=""/>
                              <div className="input-group-append">
                                  <button className="btn btn-primary">Join Now</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="footer" className="p-3 bg-secondary">
          <ul className="nav text-center justify-content-center flex-column flex-sm-row">
              <li className="nav-item">
                  <a href="#" className="nav-link text-white">FAQ</a>
              </li>
              <li className="nav-item">
                  <a href="#explore" className="nav-link text-white">EXPERIENCE</a>
              </li>
              <li className="nav-item">
                  <a href="#explore" className="nav-link text-white">EXPLORE</a>
              </li>
              <li className="nav-item">
                  <a href="#newsletter" className="nav-link text-white">CONTACT</a>
              </li>
              <li className="nav-item">
                  <a href="" className="nav-link text-white" data-toggle="modal" data-target="#bookingModal">BOOK NOW</a>
              </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
