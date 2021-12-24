import React, {useState} from 'react';

function GitRepos({reposi}) {
    const [repos, setRepos] = useState(reposi);
    console.log('************************');
    console.log(repos);
    console.log('************************');
    
    return(
        <div className='search'>
            <h2 className='naslov'>GitHub Repo</h2>
            {repos.map((repo) => (
                <h5 className='repo'>{repo.name}</h5>
            ))}
        </div>
    );
}

export default GitRepos;