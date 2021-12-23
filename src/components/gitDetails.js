import React from 'react';

function GitDetails({gitovi}){
    return(
        <div className='app'>
            <h3>Git User List</h3>
            {(gitovi.avatar_url) ? (<img src={gitovi.avatar_url} alt={gitovi.avatar_url} className='avatar'  />) : ('')}
            <h3>{gitovi.name}</h3>
            <h4>BIO: {gitovi.bio}</h4>
            <h5>LOCATION: {gitovi.location}</h5>
        </div>
    );
}

export default GitDetails;