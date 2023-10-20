import React from 'react'
import './product.css'

function products() {

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
      <div className="row tm-content-row">
        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col">
            <div className='tm-bg-primary-dark tm-block tm-block-products'>
                <div className='tm-product-table-container'>
                    <table className='table table-hover tm-table-small tm-product-table'>
                        <thead>
                            <tr>
                                <th scope="col">PRODUCT NAME</th>
                                <th scope="col">CATEGORY</th>
                                <th scope="col">UNIT SOLD</th>
                                <th scope="col">IN STOCK</th>
                                <th scope="col">EXPIRE DATE</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                               <th scope="row"><input type="checkbox"/></th>
                                <td>sdefdg</td>
                                <td>sdefdg</td>
                                <td>sdefdg</td>
                                <td>sdefdg</td>
                                <td>sdefdg</td>
                                <td><i class="fa-solid fa-trash"></i></td>
                               

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default products
