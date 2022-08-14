import React, { useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { switchMode } from '../../actions/switchMode';
import { useDispatch, useSelector } from 'react-redux';
import './NavBar.scss';

const NavBar = () => {
    const [isDark, setIsDark] = useState(true);
    const dispatch = useDispatch();

    const mode = useSelector((state) => state.switchMode)

    function handleChangeTheme() {
        // changes theme
        dispatch(switchMode(isDark));
        setIsDark(!isDark);
    }

    console.log(mode);


    return (
        <div className='navbar-drk navbar'>
            <div className='left-div'>
                <GitHubIcon className='icon' />
                <SearchForm />
            </div>
            <div className='change-mode-div'>
                {isDark ?
                    <button className='mode-btn' onClick={handleChangeTheme}>
                        <DarkModeOutlinedIcon className='mode-icon' /> Dark Mode
                    </button> :
                    <button className='mode-btn' onClick={handleChangeTheme}>
                        <LightModeOutlinedIcon className='mode-icon' /> Light Mode
                    </button>
                }
            </div>
        </div>
    )
}

export default NavBar