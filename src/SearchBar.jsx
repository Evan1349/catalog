import React from 'react';
import './App.css';

function SearchBar({ filterText, setFilterText, inStockOnly, setInStockOnly }) {
  return (
    <form>
      <input 
        className='input'
        type="text"
        value={filterText} 
        placeholder="Search..." 
        onChange={(e) => setFilterText(e.target.value)} 
      />
        <input 
          type="checkbox"
          checked={inStockOnly} 
          onChange={(e) => setInStockOnly(e.target.checked)} 
        />
        {' '}
        In Stock
    </form>
  );
}

export default SearchBar;
