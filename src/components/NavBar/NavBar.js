import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import './NavBar.scss';

const NavBar = () => {
    function handleChangeTheme() {
        // changes theme
    }

    return (
        <div className='navbar-drk navbar'>
            <div className='left-div'>
                <GitHubIcon className='icon' />
                <SearchForm />
            </div>
            <div className='change-mode-div'>
                <button className='mode-btn' onClick={handleChangeTheme}><DarkModeOutlinedIcon className='mode-icon' /> Dark Mode</button>
            </div>
        </div>
    )
}

export default NavBar