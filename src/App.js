import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom';
import Api from './components/Api';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/s' element={<Signup/>}/>
        <Route path='/a' element= {<Api/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
