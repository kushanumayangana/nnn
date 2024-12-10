import React from 'react'

function SideBar() {
  return (
    <div>
        <nav className='flex flex-col'>
            <a href="/">Home</a>
            <a href="/menu">Menu</a>
            <a href="/cart">Cart</a>
            <a href="/profile">Profile</a>
        </nav>
    </div>
  )
}

export default SideBar