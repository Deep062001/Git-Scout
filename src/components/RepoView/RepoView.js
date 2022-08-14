import React from 'react';
import { useSelector } from 'react-redux';
import RepoCard from '../RepoCard/RepoCard';
import './RepoView.scss';

const RepoView = () => {
    const userRepos = useSelector((state) => state.githubRepos);

    console.log(userRepos);
    return (
        <div className='repoview-outer-div'>

            {userRepos.length === 0 ? <h2>Loading...</h2> :
                userRepos.map((repo) => {
                    return <RepoCard repo={repo} key={repo.name} />
                }
                )
            }

        </div>
    )
}

export default RepoView