import './App.scss';
import { useDispatch } from 'react-redux';
import UserNameFrom from './components/UserNameForm/UserNameForm';
import { getUserbyUserName } from './actions/githubInfo';
import RepoView from './components/RepoView/RepoView';

function App() {

  const dispatch = useDispatch();

  function fetchUser(userName) {
    dispatch(getUserbyUserName(userName));
  }

  return (
    <div className="App">
      <UserNameFrom fetchUser={fetchUser} />
      <RepoView />
    </div>
  );
}

export default App;
