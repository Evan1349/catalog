import React from 'react';
import FilterableProductTable from './FilterableProductTable'; 
import { products } from './data';

function App() {
  return (
    <div>
      <FilterableProductTable products={products} />
    </div>
  );
}

export default App;
