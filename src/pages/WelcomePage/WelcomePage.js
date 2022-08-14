import React from 'react';
import logoBlk from '../../assets/git-scout-blk.png';
import './WelcomePage.scss';

const WelcomePage = () => {
    return (
        <div className='welcome welcome-drk'>
            <img className='logo-img' src={logoBlk} alt='logo' />
        </div>
    )
}

export default WelcomePage