import './App.scss';
import { useDispatch } from 'react-redux';
import UserNameFrom from './components/UserNameForm/UserNameForm';
import { getUserbyUserName } from './actions/githubInfo';
import { getPublicRepos } from './actions/githubRepos';
import RepoView from './components/RepoView/RepoView';

function App() {

  const dispatch = useDispatch();

  function fetchUserRepos(userName) {
    dispatch(getPublicRepos(userName));
  }

  return (
    <div className="App">
      <UserNameFrom fetchUserRepos={fetchUserRepos} />
      <RepoView />
    </div>
  );
}

export default App;
