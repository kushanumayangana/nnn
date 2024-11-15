import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Food Delivery App</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/cart">Cart</a>
        <a href="/profile">Profile</a>
      </nav>
    </header>
  );
};

export default Header;
