import React from 'react';
import { useSelector } from 'react-redux';
import { getPublicRepos } from '../../actions/githubRepos';
import UserNameFrom from '../../components/UserNameForm/UserNameForm';
import RepoView from '../../components/RepoView/RepoView';
import './MainPage.scss';
import NavBar from '../../components/NavBar/NavBar';
import UserInfo from '../../components/UserInfo/UserInfo';

const MainPage = () => {

    const userProfile = useSelector((state) => state.githubInfo);
    console.log(userProfile);

    return (
        <div className='mainpage mainpage-drk'>
            {/* <UserNameFrom fetchUserRepos={fetchUserRepos} />
            <RepoView /> */}
            <NavBar />
            {
                userProfile.length === 0 ? <p className='hello'>"HELLOOOO"</p> : <div className='info-div'>
                    <UserInfo />
                    <RepoView />
                </div>
            }
        </div>
    )
}

export default MainPage