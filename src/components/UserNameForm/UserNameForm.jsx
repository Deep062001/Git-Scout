import React, { useState } from 'react';
import './UserNameForm.scss';

const UserNameFrom = () => {
    const [userName, setUserName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
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