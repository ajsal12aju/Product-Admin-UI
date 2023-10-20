import React, { useEffect, useState } from 'react'
import './product.css'


function Products() {

    const [data, setData] = useState([]);

  useEffect(() => {
   
    fetch('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
      .then((response) => response.json())
      .then((data) => setData(data?.dasbhoardPage?.products))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log(data, "data")

  return (
    <div className='container mt-5'>
      <div className="row justify-content-center tm-content-row">
        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col">
            <div className='tm-bg-primary-dark tm-block tm-block-products'>
                <div className='tm-product-table-container'>
                    <table className='table1 table-hover tm-table-small tm-product-table'>
                        <thead>
                            <tr>
                            <th scope="col">&nbsp;</th>
                                <th scope="col" style={{ paddingLeft: '0' }}>PRODUCT NAME</th>
                                <th scope="col" style={{ paddingLeft: '0' }}>UNIT SOLD</th>
                                <th scope="col" style={{ paddingLeft: '0' }}>IN STOCK</th>
                                <th scope="col" style={{ paddingLeft: '0' }}>EXPIRE DATE</th>
                                <th>&nbsp;</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                               <th scope="row"><input type="checkbox"/></th>
                                <td> sdefdg</td>
                                <td>sdefdg</td>
                                <td>sdefdg</td>
                                <td>sdefdg</td>
                              
                                <td style={{fontSize:"17px"}}><i class="fa-solid fa-trash"></i></td>
                               

                            </tr>
                        </tbody>
                    </table>
                </div>
                <a href="add-product.html" class="btn btn-primary btn-block text-uppercase mb-3">Add new product</a>
                <a href="add-product.html" class="btn btn-primary btn-block text-uppercase mb-3">Delete selected Products</a>
            </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col">
            <div className='tm-bg-primary-dark tm-block tm-block-products'>
                <div className='tm-product-table-container'>
                    <table className='table1 table-hover tm-table-small tm-product-table'>
                        <thead>
                            <tr>
                            <th scope="col">&nbsp;</th>
                                <th scope="col">CATEGORY</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                               
                                <td style={{padding:"10px"}}> sdefdg</td>
                                <td style={{ textAlign: 'end', paddingRight:"20px", fontSize:"17px"  }}>
  <i className="fa-solid fa-trash"></i>
</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <a href="add-product.html" class="btn btn-primary btn-block text-uppercase mb-3">Add new Category</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
