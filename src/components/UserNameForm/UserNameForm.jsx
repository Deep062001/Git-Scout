import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './UserNameForm.scss';

const UserNameFrom = (props) => {
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        props.fetchUser(userName);
        setUserName("");
    }

    function handleChange(e) {
        const value = e.target.value;
        setUserName(value);
    }

    return (
        <div>
            <form>
                <input name="username" value={userName} type="text" onChange={handleChange}></input>
                <button type="submit" onClick={handleSubmit}>Find User</button>
            </form>
        </div>
    )
}

export default UserNameFrom