import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Companies from '../components/Companies/Companies';

const companies: React.FC = () => {
  return (
    <div>
      <Header/>
      <Companies />
      <Footer/>
    </div>
  );
};

export default companies;
