import './App.css';
import Content from './components/Content';
import SearchForm from './components/SearchForm';
import ResultsBox from './components/ResultsBox';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [cocktailName, setCocktailName] = useState('');
  const handleSubmit = (newCocktailName) => {
    setCocktailName(newCocktailName);
  } 
  return (
    <div className="App">
      <Navbar />
      <Content>
        <SearchForm handleSubmit={handleSubmit}/>
        <ResultsBox cocktailName={cocktailName}/> 
      </Content>
    </div>
  );
}

export default App;
