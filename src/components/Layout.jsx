import React from 'react'
import TopLeftImg from './TopLeftImg'
import Nav from './Nav'
import Header from './Header'

export default function Layout({ children }) {
    return (
        <div className='page bg-site relative bg-no-repeat text-white'>
            <TopLeftImg />
            <Nav />
            <Header />
            {children}
        </div>
    )
}
