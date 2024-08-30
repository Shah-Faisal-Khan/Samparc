import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/landing';
import Profile from './pages/profile/profile';
import Login from './pages/login';
import Main from './pages/main';
import Form from './pages/form';
import Admin from './pages/admin';
import PhoneNumberValidation from './pages/phone';
import ReachOut from './pages/reachout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Form/>}/>
        <Route path="/users/:userId" element={<Profile />} />
        <Route path='/landing/:userId' element={<Landing/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path="/phone" element={< PhoneNumberValidation/>}/>
        <Route path='/reachout' element={<ReachOut/>}/>
      </Routes>
    </Router>
    // <PhoneSignUp/>
    // <Login/>
  );
}

export default App;
