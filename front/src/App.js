import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Allproduct from './components/Allproduct';
// import Add from './components/Add.jsx';
// import Deleteproduct from './components/Deleteproduct';
// import Oneproduct from './components/Oneproduct.jsx';
// import Update from './components/Update';

import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data and update state
    axios.get('http://localhost:4000/api/accessorie')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Allproduct data={products} />
      {/* <Add />
      <Deleteproduct />
      <Oneproduct />
      <Update /> */}
    </div>
  );
}

export default App;
