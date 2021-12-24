import React, { useState } from 'react';

function GitSearch({search}) {
    const [user, setUser] = useState('');

    const handleUser = (event) => {
        setUser(event.target.value);
    }

    const handleUserAccept = () => {
        search(user);
        setUser('');
    }

    return(
        <div className='search'>
            <h2 className='naslov'>GitHub User Search</h2>
            <input type='text' value={user} onChange={handleUser} />
            <button onClick={handleUserAccept}>Search</button>
        </div>
    );
}

export default GitSearch;