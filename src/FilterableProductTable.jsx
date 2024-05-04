import React, { useState } from 'react';
import SearchBar from './SearchBar'; 
import ProductTable from './ProductTable'; 
import { Layout } from 'antd';
import './App.css';
import MenuComponent from './menu'; 

const { Header, Sider, Content } = Layout;

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  
  // sorted
  const sortedProduct = [...products].sort((a, b) => a.category.localeCompare(b.category));

  return (
    <Layout>
      <Header className="headerStyle">
        <div className="logo">
          California Sunset Grocery
        </div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          setFilterText={setFilterText}
          setInStockOnly={setInStockOnly}
        />
      </Header>
      <Layout>
        <Sider width="25%" style={{ background: '#fff' }}>
          <MenuComponent />
        </Sider>
        <Layout className='layoutStyle'>
          <Content className='contentStyle'>
            <ProductTable
              products={sortedProduct}
              filterText={filterText}
              inStockOnly={inStockOnly}
            />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default FilterableProductTable;

