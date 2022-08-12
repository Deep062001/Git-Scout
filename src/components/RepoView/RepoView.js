import React from 'react';
import { useSelector } from 'react-redux';
import './RepoView.scss';

const RepoView = () => {
    const userRepos = useSelector((state) => state.githubRepos);

    console.log(userRepos);
    return (
        <div className='outer-div'>

            {userRepos.length === 0 ? <h2>Loading..</h2> :
                userRepos.map((repo) => {
                    return <div key={repo._id}> {repo.name} </div>
                }
                )
            }

        </div>
    )
}

export default RepoView