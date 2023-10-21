import React, { useState,useEffect } from "react";
import "./product.css";
import { useLocation } from 'react-router-dom';

function AddProduct(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [unitsInStock, setUnitsInStock] = useState("");
  const [imageFile, setImageFile] = useState(null);



  const location = useLocation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (location.state && location.state.product) {
      const parsedProduct = JSON.parse(location.state.product);
      setProduct(parsedProduct);
    }
  }, [location.state]);

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    setImageFile(selectedFile);
  };
  
  const handleAddProduct = () => {
    if (
      !name ||
      !description ||
      !category ||
      !expireDate ||
      !unitsInStock ||
      !imageFile
    ) {
      alert("Please fill in all fields and select an image.");
      return;
    }

    const existingProductsJSON = localStorage.getItem('products');
    const existingProducts = existingProductsJSON ? JSON.parse(existingProductsJSON) : [];

    const newProduct = {
      name,
      description,
      category,
      expireDate,
      unitsInStock,
      imageFile: imageFile.name,
    };

    existingProducts.push(newProduct);

    localStorage.setItem('products', JSON.stringify(existingProducts));
   
    setName('');
    setDescription('');
    setCategory('');
    setExpireDate('');
    setUnitsInStock('');
    setImageFile(null);

    window.location.href = "/products";
  };

  return (
    <div>
      <div className="container tm-mt-big tm-mb-big">
        <div className="row">
          <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12">
                  <h2 className="mt-4 tm-block-title d-inline-block">
                    Add Product
                  </h2>
                </div>
              </div>
              <div className="row tm-edit-product-row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <form action="" className="tm-edit-product-form">
                    <div className="form-group mb-3">
                      <label htmlFor="name">Product Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control validate"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="description">Description</label>
                      <textarea
                        className="form-control validate"
                        rows="3"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="category">Category</label>
                      <select
                        style={{ backgroundColor: "#50657b" }}
                        className="custom-select tm-select-accounts"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="">Select category</option>
                        <option value="New Arrival">New Arrival</option>
                        <option value="Most Popular">Most Popular</option>
                        <option value="Trending">Trending</option>
                      </select>
                    </div>
                    <div className="row">
                      <div className="form-group mb-3 col-xs-12 col-sm-6">
                        <label htmlFor="expire_date">Expire Date</label>
                        <input
                          id="expire_date"
                          name="expire_date"
                          type="text"
                          className="form-control validate hasDatepicker"
                          data-large-mode="true"
                          value={expireDate}
                          onChange={(e) => setExpireDate(e.target.value)}
                        />
                      </div>
                      <div className="form-group mb-3 col-xs-12 col-sm-6">
                        <label htmlFor="stock">Units In Stock</label>
                        <input
                          id="stock"
                          name="stock"
                          type="text"
                          className="form-control validate"
                          required
                          value={unitsInStock}
                          onChange={(e) => setUnitsInStock(e.target.value)}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                  <div className="tm-product-img-dummy mx-auto">
                    {imageFile && (
                      <div className="text-center mt-3 mb-4">
                        <img
                          src={URL.createObjectURL(imageFile)}
                          alt="Product Preview"
                          style={{ width: '400px', height: "200px" }}
                        />
                      </div>
                    )}
                    <i className={imageFile ? "d-none" : "fas fa-cloud-upload-alt tm-upload-icon"}></i>
                  </div>
                  <div className="custom-file mt-3 mb-3">
                    <input 
                      type="file"
                      id="fileInput"
                      onChange={handleFileInputChange}
                      style={{ display: "none" }}
                    />
                    <label className="btn btn-primary btn-block mx-auto">
                      UPLOAD PRODUCT IMAGE
                      <input
                        type="file"
                        id="fileInput"
                        onChange={handleFileInputChange}
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary btn-block text-uppercase"
                    onClick={handleAddProduct}
                  >
                    Add Product Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
