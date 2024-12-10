<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import React, { useEffect, useState } from 'react';
import api, { RESPONSE_DATA } from './api';

const App: React.FC = () => {
  const [data, setData] = useState<RESPONSE_DATA | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const responseData = await api.get.data(); 
      setData(responseData); 
    } catch (err) {
      setError('Failed to fetch data'); 
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>{data?.greeting}</h1>
>>>>>>> e751df1 (yavshoke)
    </div>
  );
}

export default App;
