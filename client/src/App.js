import { Route,Routes } from 'react-router-dom';
import MyProfile from './components/MyProfile.component';
import Home from './components/Home.component';

function App() {


  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<MyProfile/>}/>
      </Routes>

    </div>
  );
}

export default App;
