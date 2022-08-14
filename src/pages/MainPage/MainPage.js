import React from 'react';
import { useSelector } from 'react-redux';
import { getPublicRepos } from '../../actions/githubRepos';
import UserNameFrom from '../../components/UserNameForm/UserNameForm';
import RepoView from '../../components/RepoView/RepoView';
import './MainPage.scss';
import NavBar from '../../components/NavBar/NavBar';
import UserInfo from '../../components/UserInfo/UserInfo';
import WelcomePage from '../WelcomePage/WelcomePage';

const MainPage = () => {

    const userProfile = useSelector((state) => state.githubInfo);
    const isDark = useSelector((state) => state.switchMode);
    console.log(isDark);

    return (
        <div className={`mainpage ${isDark ? "mainpage-drk" : "mainpage-lgt"}`} >
            <NavBar />
            {
                userProfile.length === 0 ?
                    <div className='welcome-div'><WelcomePage /> </div> :
                    userProfile.message === "Not Found" ?
                        <div className='welcome-div'>No such user exists</div> :
                        <div className='info-div'>
                            <UserInfo />
                            <RepoView />
                        </div>


            }
        </div>
    )
}

export default MainPage