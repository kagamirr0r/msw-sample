import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get('/user');
    const data = res.data;
    setUser(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ul style={{ listStyle: 'none' }}>
          <li>name: {user.name}</li>
          <li>age: {user.age}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
