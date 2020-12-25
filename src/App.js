import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

function App() {
  return (
    <div>
      <UserInput/>
      <UserOutput name="Joe"/>
      <UserOutput name="John"/>
    </div>
    
  );
}

export default App;
