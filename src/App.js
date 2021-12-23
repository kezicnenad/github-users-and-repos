import React, { useState } from 'react';

import GitDetails from './components/gitDetails';
import GitSearch from './components/gitSearch';
import GitRepos from './components/gitRepos';
import './App.css';

const searchQueryURI = 'https://api.github.com';

function App() {
  const [data, setData] = useState('');
  const [repos, setRepos] = useState('');
  const [user, setUser] = useState('');

  const handleSearchGit = (gitUser) => {
    setUser(gitUser);
    const searchGitUser = searchQueryURI + '/users/' + user;
    const searchGitRepos = data.repos_url;

    fetch(searchGitUser)
    .then(result => result.json())
    .then(response => setData(response))
    .catch(err => console.log(err));

    fetch(searchGitRepos)
    .then(result => result.json())
    .then(response => setRepos(response))
    .catch(err => console.log(err));
  }

  console.log(data);
  console.log(repos);

    return(
      <div className='app'>
        <h1>GitHub</h1>
        <GitSearch searchGit={handleSearchGit}/>
        {(data.message === '' || user !== '') ? (
        <div>
          <GitDetails gitovi={data} />
          <GitRepos user={user} reposi={repos} />
        </div>
        ) : <h3>Nije pronađen Git Hub User</h3>}
        
      </div>
      );
}

export default App;