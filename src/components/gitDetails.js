import React from 'react';
import GitRepos from './gitRepos';

class GitDetails extends React.Component {
    render() {
        const git = this.props.git;
        const reposi = this.props.reposi;

        return(
            <div className='details'>
                <h2 className='naslov'>GitHub User Details</h2>
                <img alt={git.name} src={git.avatar_url} className='avatar' />
                <h3>{git.name}</h3>
                <h5>{git.location}</h5>
                <h5>{git.bio}</h5>
                {(this.props.reposi !== '') ? (<GitRepos reposi={this.props.reposi} />) : (<h5>Nema reposa</h5>)}
            </div>
        );
    }
}

export default GitDetails;