import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainet';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer'




const App = (props) => {
  return (
    < BrowserRouter>
      <div className='app-wraper'>
        <HeaderContainer />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/profile/:profileId' element={<ProfileContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />

            <Route path='/messages/*' element={<MessagesContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>


  );
}






export default App;
