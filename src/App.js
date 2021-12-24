import React, { useState } from 'react';
import GitDetails from './components/gitDetails';
import GitSearch from './components/gitSearch';

import './App.css';

const gitURI = 'https://api.github.com/users/';
const reposURI = '/repos';

function App() {
  const [data, setData] = useState('');
  const [repos, setRepos] = useState('');
  const [user, setUser] = useState('');

  const onSearch = (usr) => {
    fetchUser(usr);
    fetchRepos(usr);

    console.log((usr.trimStart()));
  }


const fetchUser = (usr) => {
  fetch(gitURI + usr)
  .then(response => response.json())
  .then(gitUser => setData(gitUser))
  .catch(error => error);

  fetchRepos(usr);
}

const fetchRepos = (usr) => {
  fetch(gitURI + usr + reposURI)
  .then(response => response.json())
  .then(gitRepos => setRepos(gitRepos))
  .catch(error => error);
}

console.log(data);
console.log(repos);
console.log(user);

return(
    <div className='app'>
      <h1 className='appNaslov'>GitHub</h1>
      <GitSearch search={onSearch} />
      <GitDetails git={data} reposi={repos} />
    </div>
  );
}

export default App;