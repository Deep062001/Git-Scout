import React from 'react';
import { useSelector } from 'react-redux';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import './UserInfo.scss';

const UserInfo = () => {
    const userProfile = useSelector((state) => state.githubInfo);

    console.log(userProfile);
    return (
        userProfile.length === 0 ? "" : <div className='userinfo userinfo-drk'>
            <img className='user-avatar' src={userProfile.avatar_url} alt='user-avatar' />
            <p className='fullname'>{userProfile.name}</p>
            <p className='username'>{userProfile.login}</p>
            <p className='bio'>{userProfile.bio}</p>
            <div className='icon-div'>
                <PeopleAltOutlinedIcon className='info-icons' />
                <span><span className='bold'>{userProfile.followers}</span> followers</span>
                <FiberManualRecordIcon className='dot-icon' />
                <span><span className='bold'>{userProfile.following}</span> following</span>
            </div>
            <div className='icon-div'>
                <BookOutlinedIcon className='info-icons' />
                <p><span className='bold'>{userProfile.public_repos}</span> public repos</p>
            </div>
            {
                userProfile.location && <div className='icon-div'>
                    <PlaceOutlinedIcon className='info-icons' />
                    <p>{userProfile.location}</p>
                </div>
            }

        </div>
    )
}

export default UserInfo