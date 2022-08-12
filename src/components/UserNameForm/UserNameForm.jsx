import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUserbyUserName } from '../../actions/githubInfo';
import './UserNameForm.scss';

const UserNameFrom = (props) => {
    const [userName, setUserName] = useState("");
    const [userInfo, setUserInfo] = useState({
        Username: "",
        Name: "",
        Bio: "",
        profileImg: "",
        Location: "",
        NumberofFollowing: "",
        NumberofFollowers: "",
        NumberofpublicRepositories: ""
    });
    const userProfile = useSelector((state) => state.githubInfo);
    const dispatch = useDispatch();

    function updateUserData() {
        setUserInfo({
            Username: userProfile.login,
            Name: userProfile.name,
            Bio: userProfile.bio,
            profileImg: userProfile.avatar_url,
            Location: userProfile.Location,
            NumberofFollowing: userProfile.following,
            NumberofFollowers: userProfile.followers,
            NumberofpublicRepositories: userProfile.public_repos
        })
        console.log(userInfo);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getUserbyUserName(userName))
        props.fetchUserRepos(userName);
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
            <div className='outer-div'>
                {userProfile.length === 0 ? null :
                    <div>
                        {/* <p>{userInfo.Username}</p>
                        <p>{userInfo.Name}</p>
                        <p>{userInfo.Bio}</p>
                        <img src={userInfo.profileImg} alt="img" />
                        <p>{userInfo.Location}</p>
                        <p>{userInfo.NumberofFollowing}</p>
                        <p>{userInfo.NumberofFollowers}</p>
                        <p>{userInfo.NumberofpublicRepositories}</p> */}
                        <p>{userProfile.login}</p>
                        <p>{userProfile.name}</p>
                        <p>{userProfile.bio}</p>
                        <p><img src={userProfile.avatar_url} alt="userImg" /></p>
                        <p>{userProfile.Location}</p>
                        <p>{userProfile.following}</p>
                        <p>{userProfile.followers}</p>
                        <p>{userProfile.public_repos}</p>
                        <button onClick={() => { props.fetchUserRepos(userName) }}>Get Public Repo</button>
                    </div>}
            </div>
        </div>
    )
}

export default UserNameFrom