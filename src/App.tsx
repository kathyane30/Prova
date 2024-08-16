import React from 'react';
import './App.css';
import DataFetcher from './Datafetcher';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Github</h1>
        <DataFetcher/>
      </header>
    </div>
  );
};

export default App;