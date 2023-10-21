import React, { useState } from 'react';
import Modal from 'react-modal';

function AddCategory({ modalIsOpen, setModalIsOpen }) {
  const [category, setCategory] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAddCategory = () => {
    if (category) {
      // Get existing categories from local storage (if any)
      const existingCategoriesJSON = localStorage.getItem('categories');
      const existingCategories = existingCategoriesJSON ? JSON.parse(existingCategoriesJSON) : [];

      // Add the new category to the list
      existingCategories.push(category);

      // Save the updated list back to local storage
      localStorage.setItem('categories', JSON.stringify(existingCategories));

      // Clear the input field
      setCategory('');

      // Close the modal
      setModalIsOpen(false);
    }
  };

  const customStyles = {
    content: {
      width: '50%',
      height: '60%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'fixed',
    },
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Add Category Modal"
        style={customStyles}
      >
        <h2 style={{ marginLeft: "5px", color: "black", fontSize: "25px", paddingBottom: "0px", marginBottom: "16px" }} className='tm-block-title'>Add New Category</h2>
        <form>
          <div style={{ height: "215px" }} class="tm-bg-primary-dark">
            <label htmlFor="category" style={{ color: "white", fontSize: "16px", padding: "20px", paddingLeft: "70px" }}>Category Name</label>
            <div style={{ margin: "0px 70px" }}>
              <input
                type="text"
                className='form-control validate'
                id="category"
                value={category}
                onChange={handleCategoryChange}
                style={{ backgroundColor: "lightgray" }}
              />
            </div>
            <div style={{ padding: "30px 70px" }}>
              <button style={{ padding: "10px 30px" }} className='btn btn-primary btn-block text-uppercase mb-3' onClick={handleAddCategory}>Add Category</button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AddCategory;
