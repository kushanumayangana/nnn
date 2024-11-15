import React from 'react';
import MenuList from '../components/Menu/MenuList';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const MenuPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header/>
        
            <div className="container mx-auto px-4 py-8">
                <   MenuList />
            </div>
            <Footer/>
        </div>
    );
};

export default MenuPage;
