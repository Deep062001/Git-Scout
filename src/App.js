import { useSelector } from 'react-redux';
import './App.scss';
import MainPage from './pages/MainPage/MainPage';

function App() {
  const isDark = useSelector((state) => state.switchMode);

  return (
    <div className={`App ${isDark ? "App-drk" : "App-lgt"}`}>
      <MainPage />
    </div>
  );
}

export default App;
