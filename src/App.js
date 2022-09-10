import { useState, useEffect } from 'react';

import SearchBox from './components/search-box/SearchBox.component';
import CardList from './components/card-list/CardList.component';

import './App.css';

const App = () => {
  console.log('render');
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(filterMonsters);
  }, [monsters, searchField]);

  return (
    <div className='App'>
      <h1 className='app-title'>Meownster's Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='monsters-search-box'
      />
      <CardList monsters={filteredMonsters} />;
    </div>
  );
};

export default App;
