import './App.css';
import Home from './Componets/Home/Home';
import About from './Componets/ABOUT/About';
import Contact from './Componets/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Componets/NotFound/NotFound';
import Friends from './Componets/Friends/Friends';
import Header from './Componets/Header/Header';
import FriendDetail from './Componets/FriendDetail/FriendDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
