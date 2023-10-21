import React, { useEffect, useState } from 'react';
import './product.css';
import { Link } from 'react-router-dom';
import AddCategory from './AddCategory';

function Products() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProductIndices, setSelectedProductIndices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {

    const storedProductsJSON = localStorage.getItem('products');
    const storedProducts = storedProductsJSON ? JSON.parse(storedProductsJSON) : [];
    setProducts(storedProducts);

    const storedCategoriesJSON = localStorage.getItem('categories'); 
    const storedCategories = storedCategoriesJSON ? JSON.parse(storedCategoriesJSON) : [];
    setCategories(storedCategories); 
  }, []);


  const handleDeleteProduct = () => {
    const updatedProducts = products.filter((_, index) => !selectedProductIndices.includes(index));
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setSelectedProductIndices([]); 
  };
  
  const handleDeleteProductSingle = (index) =>{
    const updatedCategories = [...products];
    updatedCategories.splice(index, 1);
    setProducts(updatedCategories);

    localStorage.setItem('products', JSON.stringify(updatedCategories));
  }

  const toggleProductSelection = (index) => {
    if (selectedProductIndices.includes(index)) {
      setSelectedProductIndices(selectedProductIndices.filter((i) => i !== index));
    } else {
      setSelectedProductIndices([...selectedProductIndices, index]);
    }
  };

  const isProductSelected = (index) => selectedProductIndices.includes(index);
  const handleDeleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);

    localStorage.setItem('categories', JSON.stringify(updatedCategories));
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center tm-content-row">
        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col">
          <div className="tm-bg-primary-dark tm-block tm-block-products">
            <div className="tm-product-table-container">
              <table className="table1 table-hover tm-table-small tm-product-table">
                <thead>
                  <tr>
                    <th scope="col">
                      &nbsp;
                    </th>
                    <th scope="col" style={{ paddingLeft: '0' }}>
                      PRODUCT NAME
                    </th>
                    <th scope="col" style={{ paddingLeft: '0' }}>
                      Category
                    </th>
                    <th scope="col" style={{ paddingLeft: '0' }}>
                      IN STOCK
                    </th>
                    <th scope="col" style={{ paddingLeft: '0' }}>
                      EXPIRE DATE
                    </th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {products.slice().reverse().map((product, index) => (
                    <tr key={index}>
                      <th scope="row">
                        <input
                          type="checkbox"
                          onChange={() => toggleProductSelection(index)}
                          checked={isProductSelected(index)}
                        />
                      </th>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.unitsInStock}</td>
                      <td>{product.expireDate}</td>
                      <td style={{ fontSize: '17px' }}>
                        <i
                          className="fa-solid fa-trash"
                          onClick={() => handleDeleteProductSingle(index)}
                          style={{ cursor: 'pointer' }}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link to="/addproducts">
              <button className="btn btn-primary btn-block text-uppercase mb-3">
                Add new product
              </button>
            </Link>
            <button
              className="btn btn-primary btn-block text-uppercase mb-3"
              onClick={handleDeleteProduct}
            >
              Delete selected Products
            </button>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col">
          <div className="tm-bg-primary-dark tm-block tm-block-products">
            <div className="tm-product-table-container">
              <table className="table1 table-hover tm-table-small tm-product-table">
                <thead>
                  <tr>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">CATEGORY</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, index) => ( 
                    <tr key={index}>
                      <td style={{ padding:"10px", paddingLeft:"20px", margin:"5px" ,}}>{category}</td>
                      <td
                        style={{
                          textAlign: 'end',
                          paddingRight: '20px',
                          fontSize: '17px',
                        }}
                      >
                        <i  onClick={() => handleDeleteCategory(index)} className="fa-solid fa-trash"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a onClick={() => setModalIsOpen(true)} className="btn btn-primary btn-block text-uppercase mb-3">
              Add new Category
            </a>
          </div>
        </div>
      </div>
      <AddCategory modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} setCategories={setCategories} />
    </div>
  );
}

export default Products;
