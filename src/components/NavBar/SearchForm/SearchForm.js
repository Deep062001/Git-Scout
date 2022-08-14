import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useDispatch } from 'react-redux';
import { getUserbyUserName } from '../../../actions/githubInfo';
import { getPublicRepos } from '../../../actions/githubRepos';
import './SearchForm.scss';

const SearchForm = () => {
    const [userName, setUserName] = useState("");

    // const userProfile = useSelector((state) => state.githubInfo);
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getUserbyUserName(userName))
        dispatch(getPublicRepos(userName));
        // props.fetchUserRepos(userName);
        setUserName("");
    }

    function handleChange(e) {
        const value = e.target.value;
        setUserName(value);
    }
    return (
        <div className='search search-drk'>
            <form className='search-form'>
                <input className='username-input' placeholder='Type username...' name="username" value={userName} type="text" onChange={handleChange}></input>
                <button className='search-btn' type="submit" onClick={handleSubmit}>
                    <SearchOutlinedIcon className='search-icon' />
                </button>
            </form>
        </div>
    )
}

export default SearchForm