import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavbarComponent() {
  return (
    <div>
        <nav className='navbar navbar-expand-md navbar-dark sticky-top'>
            <div className="container">
                <Link href="/" className='navbar-brand'>  
                    <Image src="/images/logo.png"  width={50} height={40}/>
                </Link>

                <div className='collapse navbar-collapse text-white'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <Link className='nav-link lead' href=''><b>Home</b></Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' href=''><b>Menu</b></Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' href=''><b>Login</b></Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' href=''><b>Register</b></Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </div>
  )
}
