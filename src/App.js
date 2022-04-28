import React, { Component } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import addMessage from './redux/state';




const App = (props) => {



  return (
    < BrowserRouter>
      <div className='app-wraper'>
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/profile' element={<Profile
              profilePage={props.state.profilePage}  dispatch={props.dispatch} />} />
            <Route path='/messages/*' element={<Messages
              dialogsData={props.state.messagePage.dialogsData}
              messagesData={props.state.messagePage.messagesData} addMessage={props.addMessage} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>


  );
}






export default App;
