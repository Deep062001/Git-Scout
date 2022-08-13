import React from 'react';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import './UserInfo.scss';

const UserInfo = () => {
    return (
        <div className='userinfo userinfo-drk'>
            <img className='user-avatar' src='https://avatars.githubusercontent.com/u/69765597?v=4' alt='user-avatar' />
            <p className='fullname'>Full Name</p>
            <p className='username'>UserName</p>
            <p className='bio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <div className='icon-div'>
                <PeopleAltOutlinedIcon className='info-icons' />
                <span><span className='bold'>2</span> followers</span>
                <FiberManualRecordIcon className='dot-icon' />
                <span><span className='bold'>2</span> following</span>
            </div>
            <div className='icon-div'>
                <BookOutlinedIcon className='info-icons' />
                <p><span className='bold'>2</span> public repos</p>
            </div>
            <div className='icon-div'>
                <PlaceOutlinedIcon className='info-icons' />
                <p>Delhi</p>
            </div>

        </div>
    )
}

export default UserInfo