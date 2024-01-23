import React, { useState } from 'react';
import axios from 'axios';

const ProductCard = ({ id, name, pic, description, price, onDelete, onUpdateSuccess }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [updatedName, setUpdatedName] = useState(name || '');
  const [updatedDescription, setUpdatedDescription] = useState(description || '');
  const [updatedPrice, setUpdatedPrice] = useState(price || '');

  const [newAccessoryName, setNewAccessoryName] = useState('');
  const [newAccessoryDescription, setNewAccessoryDescription] = useState('');
  const [newAccessoryPrice, setNewAccessoryPrice] = useState('');

  const handleReadMore = () => {
    setShowDetails(!showDetails);
  };

  const handleDeleteClick = async () => {
    try {
      await onDelete(id);
      console.log(`${name} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting product with id ${id}:`, error);
    }
  };

  const handleUpdateClick = async (id) => {
    try {
      console.log('Updating product with id:', id);
      console.log('Updated Name:', updatedName);
      console.log('Updated Description:', updatedDescription);
      console.log('Updated Price:', updatedPrice);

      const response = await axios.put(`http://localhost:4000/api/accessorie/${id}`, {
        'Accessorie Name': updatedName,
        'Accessorie description': updatedDescription,
        'Accessorie Price': updatedPrice,
        'Accessorie pic':"https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
      });

      console.log('Update response:', response.data);

      setEditMode(false);
      onUpdateSuccess();
    } catch (error) {
      console.error(`Error updating product with id ${id}:`, error);
    }
  };

  const handleAddClick = async () => {
    try {
      console.log('Adding a new accessory:');
      console.log('Accessory Name:', newAccessoryName);
      console.log('Accessory Description:', newAccessoryDescription);
      console.log('Accessory Price:', newAccessoryPrice);

      const response = await axios.post('http://localhost:4000/api/accessorie', {
        'Accessorie Name': newAccessoryName,
        'Accessorie description': newAccessoryDescription,
        'Accessorie Price': newAccessoryPrice,
        'Accessorie pic':"https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
      });

      console.log('Add response:', response.data);

      // Clear the form fields after successful addition
      setNewAccessoryName('');
      setNewAccessoryDescription('');
      setNewAccessoryPrice('');

      onUpdateSuccess();
    } catch (error) {
      console.error('Error adding a new accessory:', error);
    }
  };

  return (
    <div>
      <div className="card">
        <img src={pic} alt={name} className="clickable-image" />
        <div className="card-content">
          {editMode ? (
            <>
              <label>
                Name:
                <input
                  type="text"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  value={updatedDescription}
                  onChange={(e) => setUpdatedDescription(e.target.value)}
                />
              </label>
              <label>
                Price:
                <input
                  type="text"
                  value={updatedPrice}
                  onChange={(e) => setUpdatedPrice(e.target.value)}
                />
              </label>
              <button onClick={handleUpdateClick}>Update</button>
            </>
          ) : (
            <>
              <h3>{name}</h3>
              <p>{showDetails ? description : description.slice(0, 10) + '...'}</p>
              <p>Price: ${price}</p>
              <button onClick={handleReadMore}>{showDetails ? 'Read Less' : 'Read More'}</button>
              <button onClick={handleDeleteClick}>Delete</button>
              <button onClick={() => setEditMode(true)}>Edit</button>
            </>
          )}

          {/* Form for adding a new accessory */}
          <div>
            <label>
              New Accessory Name:
              <input
                type="text"
                value={newAccessoryName}
                onChange={(e) => setNewAccessoryName(e.target.value)}
              />
            </label>
            <label>
              New Accessory Description:
              <input
                type="text"
                value={newAccessoryDescription}
                onChange={(e) => setNewAccessoryDescription(e.target.value)}
              />
            </label>
            <label>
              New Accessory Price:
              <input
                type="text"
                value={newAccessoryPrice}
                onChange={(e) => setNewAccessoryPrice(e.target.value)}
              />
            </label>
            <button onClick={handleAddClick}>Add Accessory</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
