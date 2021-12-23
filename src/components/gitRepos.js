import React from 'react';

function GitRepos({reposi}){
    return(
        <div className='app'>
            <h3>Git Repos</h3>
            {(reposi.length > 1) ? (reposi.map(repo => <h5>{repo.name}</h5>)) : (<h5>Nema Repoa</h5>)}
        </div>
    );
}

export default GitRepos;