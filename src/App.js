import React, { useState } from 'react';

import GitList from './components/gitList';
import GitSearch from './components/gitSearch';
import './App.css';

const searchQueryURI = 'https://api.github.com';

function App() {
  const [data, setData] = useState('');
  const [user, setUser] = useState('');

    const handleSearchGit = (gitUser) => {
      setUser(gitUser);
      const searchQuery = searchQueryURI + '/users/' + user;
      console.log(user);

      fetch(searchQuery)
      .then(result => result.json())
      .then(response => setData(response))
      .catch(err => console.log(err));
    }
    console.log(data);

    return(
      <div className='app'>
        <h1>GitHub</h1>
        <GitSearch searchGit={handleSearchGit}/>
        {(data.message === '' || user !== '') ? (
        <div>
          <GitList gitovi={data} />
          {(data.avatar_url) ? (<img src={data.avatar_url} alt={data.avatar_url} className='avatar'  />) : ('')}
          <h3>{data.name}</h3>
          <h4>BIO: {data.bio}</h4>
          <h5>LOCATION: {data.location}</h5>
        </div>
        ) : <h3>Nije pronađen Git Hub User</h3>}
        
      </div>
      );
}

export default App;