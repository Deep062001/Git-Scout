import React from 'react';
import { useDispatch } from 'react-redux';
import { getPublicRepos } from '../../actions/githubRepos';
import UserNameFrom from '../../components/UserNameForm/UserNameForm';
import RepoView from '../../components/RepoView/RepoView';
import './MainPage.scss';
import NavBar from '../../components/NavBar/NavBar';
import UserInfo from '../../components/UserInfo/UserInfo';

const MainPage = () => {
    const dispatch = useDispatch();

    function fetchUserRepos(userName) {
        dispatch(getPublicRepos(userName));
    }

    return (
        <div className='mainpage mainpage-drk'>
            {/* <UserNameFrom fetchUserRepos={fetchUserRepos} />
            <RepoView /> */}
            <NavBar />
            <div className='info-div'>
                <UserInfo />
                <RepoView />
            </div>
        </div>
    )
}

export default MainPage