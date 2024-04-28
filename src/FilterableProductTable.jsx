import React, { useState } from 'react';
import SearchBar from './SearchBar'; 
import ProductTable from './ProductTable'; 
import { Flex, Layout } from 'antd';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  
  // sorted
  const sortedProduct = [...products].sort((a, b) => a.category.localeCompare(b.category));

  return (
    <>
      <Flex gap="middle" wrap="wrap">
        <Layout className='layoutStyle'>
          <Sider width="25%" className="siderStyle">
            
          </Sider>
          <Layout>
            <Header className="siderStyle">
              <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                setFilterText={setFilterText}
                setInStockOnly={setInStockOnly}
              />
            </Header>
            <Content className='contentStyle'>
              <ProductTable
                products={sortedProduct}
                filterText={filterText}
                inStockOnly={inStockOnly}
              />
            </Content>
          </Layout>
        </Layout>
      </Flex>
    </>
  );
}

export default FilterableProductTable;
