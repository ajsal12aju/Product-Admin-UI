import React from 'react'
import './account.css'

function Account() {
  return (
    <div>
      <div className='container mt-5'>
        <div className='row tm-content-row'>
            <div className='col-12 tm-block-col'>
                <div className='tm-bg-primary-dark tm-block tm-block-h-auto'>
                <h2 class="tm-block-title">List of Accounts</h2>
                <p class="text-white">Accounts</p>
                <select class="custom-select">
                <option value="0">Select account</option>
                <option value="1">Admin</option>
                <option value="2">Editor</option>
                <option value="3">Merchant</option>
                <option value="4">Customer</option>
              </select>
                </div>
            </div>
        </div>

        {/* pic */}
        <div className="row tm-content-row">
          <div className="tm-block-col tm-col-avatar">
            <div className="tm-bg-primary-dark tm-block tm-block-avatar">
              <h2 className="tm-block-title">Change Avatar</h2>
              <div className="tm-avatar-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&usqp=CAU" alt="Avatar" class="tm-avatar img-fluid mb-4" />
                <a href="#" class="tm-avatar-delete-link">
                  <i className="far fa-trash-alt tm-product-delete-icon"></i>
                </a>
              </div>
              <button className="btn btn-primary btn-block text-uppercase">
                Upload New Photo
              </button>
            </div>
          </div>
          <div className="tm-block-col tm-col-account-settings">
            <div className="tm-bg-primary-dark tm-block tm-block-settings">
              <h2 className="tm-block-title">Account Settings</h2>
              <form action="" class="tm-signup-form row">
                <div className="form-group col-lg-6">
                  <label for="name">Account Name</label>
                  <input id="name" name="name" type="text" className="form-control validate" />
                </div>
                <div className="form-group col-lg-6">
                  <label for="email">Account Email</label>
                  <input id="email" name="email" type="email" className="form-control validate" />
                </div>
                <div class="form-group col-lg-6">
                  <label for="password">Password</label>
                  <input id="password" name="password" type="password" className="form-control validate" />
                </div>
                <div className="form-group col-lg-6">
                  <label for="password2">Re-enter Password</label>
                  <input id="password2" name="password2" type="password" className="form-control validate" />
                </div>
                <div className="form-group col-lg-6">
                  <label for="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" className="form-control validate" />
                </div>
                <div className="form-group col-lg-6">
                  <label className="tm-hide-sm">&nbsp;</label>
                  <button type="submit" className="btn btn-primary btn-block text-uppercase">
                    Update Your Profile
                  </button>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block text-uppercase">
                    Delete Your Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

       

        
      </div>
    </div>
  )
}

export default Account
 