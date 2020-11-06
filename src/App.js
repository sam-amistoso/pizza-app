import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products';
import Feauture from './components/Feature';
import { productsData, productDataTwo } from './components/Products/data';

function App() {
  return (
    <>
      <Router>
        <Hero />
        <Products heading='Best items to choose' data={productsData} />
        <Feauture />
        <Products heading='Sweet treats to choose' data={productDataTwo} />
      </Router>
    </>
  );
}

export default App;
