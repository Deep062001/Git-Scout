import React from 'react';
import { useSelector } from 'react-redux';
import './RepoView.scss';

const RepoView = () => {
    const userRepos = useSelector((state) => state.githubInfo);

    console.log(userRepos);
    return (
        <div className='outer-div'>

            {userRepos.length === 0 ? <h2>Loading..</h2> :
                <div key={userRepos._id}> {userRepos.name} </div>
            }

        </div>
    )
}

export default RepoView