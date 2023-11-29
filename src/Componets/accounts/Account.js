import React, { useState, useEffect } from 'react';
import './account.css';

function Account() {
  const [selectedAccount, setSelectedAccount] = useState('Admin');
  const [userData, setUserData] = useState({});
  const [updatedUserData, setUpdatedUserData] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data.accountsPage[selectedAccount]);
        setUpdatedUserData(data.accountsPage[selectedAccount]);
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };

    fetchUserData();
  }, [selectedAccount]);

  useEffect(() => {
    const userKey = `userdetails_${selectedAccount}`;
    const savedUserData = JSON.parse(localStorage.getItem(userKey));

    if (savedUserData) {
      setUpdatedUserData(savedUserData);
    }
  }, [selectedAccount]);

  const handleAccountSelect = (e) => {
    const selected = e.target.value;
    setSelectedAccount(selected);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('profilePic', selectedFile);


      fetch('your-upload-endpoint', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('File upload failed');
          }
          return response.json();
        })
        .then((data) => {
          const newProfilePicUrl = data.profilePicUrl;
    
          const userKey = `userdetails_${selectedAccount}`;
          const storedUserData = JSON.parse(localStorage.getItem(userKey));
    
          if (storedUserData) {
            storedUserData.profilePic = newProfilePicUrl;
            localStorage.setItem(userKey, JSON.stringify(storedUserData));
    
            console.log('New Profile Pic URL:', newProfilePicUrl); 
    
            setUpdatedUserData({ ...updatedUserData, profilePic: newProfilePicUrl });
          }
        })
        .catch((error) => {
          console.error('Error uploading file: ', error);
        });
    }
  };

  const handleUpdateProfile = () => {
    const userKey = `userdetails_${selectedAccount}`;
    const storedUserData = JSON.parse(localStorage.getItem(userKey));

    if (storedUserData) {
      const updatedData = { ...storedUserData, ...updatedUserData };
      localStorage.setItem(userKey, JSON.stringify(updatedData));
      setUpdatedUserData(updatedData);
      alert('Information Updated Successfully!');
    }
  };

  const handleFieldChange = (field, value) => {
    setUpdatedUserData({ ...updatedUserData, [field]: value });
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row tm-content-row">
          <div className="col-12 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <h2 className="tm-block-title pt-4">List of Accounts</h2>
              <p className="text-white">Accounts</p>
              <select
                className="custom-select"
                style={{ backgroundColor: '#50657b' }}
                value={selectedAccount}
                onChange={handleAccountSelect}
              >
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Merchant">Merchant</option>
                <option value="Customer">Customer</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row tm-content-row">
          <div className="col-sm-12 col-md-4 tm-block-col tm-col-avatar">
            <div className="mb-5 tm-bg-primary-dark tm-block tm-block-avatar">
              <h2 className="tm-block-title pt-4">Change Avatar</h2>
              <div className="tm-avatar-container">
              
                <div className="tm-avatar-container">
                  <label
                    className="tm-upload-label btn btn-primary btn-block text-uppercase"
                    htmlFor="fileInput"
                  >
                    Add New Photo
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                    <img
                  src={updatedUserData.profilePic || userData.profilePic}
                  alt="Avatar"
                  className="tm-avatar img-fluid mb-4"
                  style={{ height: '250px' }}
                />
                </div>
                <button
                    type="button"
                    className="btn btn-primary btn-block text-uppercase"
                    onClick={handleFileUpload}
                  >
                    Update Profile Pic
                  </button>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-8 m-block-col tm-col-account-settings">
            <div className="tm-bg-primary-dark tm-block tm-block-settings">
              <h2 className="tm-block-title pt-4">Account Settings</h2>
              <form action="" className="tm-signup-form row">
                <div className="form-group col-lg-6">
                  <label htmlFor="name">Account Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control validate"
                    value={
                      localStorage[`userdetails_${selectedAccount}`]?.name
                        ? localStorage[`userdetails_${selectedAccount}`].name
                        : updatedUserData.name
                    }
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                  />
                </div>

                <div className="form-group col-lg-6">
                  <label htmlFor="email">Account Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control validate"
                    value={updatedUserData.email || ''}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control validate"
                    value={updatedUserData.password || ''}
                    onChange={(e) => handleFieldChange('password', e.target.value)}
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-control validate"
                    value={updatedUserData.phone || ''}
                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label className="tm-hide-sm">&nbsp;</label>
                  <button
                    type="button"
                    className="btn btn-primary btn-block text-uppercase"
                    onClick={handleUpdateProfile}
                  >
                    Update Your Profile Details
                  </button>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                  >
                    Delete Your Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
