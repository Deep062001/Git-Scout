import React from 'react';
import logoBlk from '../../assets/git-scout-blk.png';
import logoLgt from '../../assets/git-scout-lgt.png';
import { useSelector } from 'react-redux';
import './WelcomePage.scss';

const WelcomePage = () => {
    const isDark = useSelector((state) => state.switchMode);
    return (
        <div className={`welcome ${isDark ? "welcome-drk" : "welcome-lgt"}`}>
            {isDark ?
                <img className='logo-img' src={logoBlk} alt='logo' /> :
                <img className='logo-img' src={logoLgt} alt='logo' />
            }
        </div>
    )
}

export default WelcomePage