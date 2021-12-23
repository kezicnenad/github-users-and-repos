import React, {useState} from 'react';

function GitSearch({searchGit}) {
    const [user, setUser] = useState('')

    const handleUser = (event) => {
        setUser(event.target.value);
        searchGit(user);
    }

    const handleReset = () => {
        setUser('');
    }

    return(
        <div className='app'>
            <h3>Git Search</h3>
            <input type='text' onClick={handleReset} value={user} onChange={handleUser} placeholder='Find Git User...' />
        </div>
    );
}

export default GitSearch;