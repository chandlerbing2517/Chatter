import React,{lazy} from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
const Home = lazy(()=>import('./pages/Home'));
const Login = lazy(()=>import('./pages/Login'));
const Groups = lazy(()=>import('./pages/Groups'));
const Chats = lazy(()=>import('./pages/Chats'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chat/:chatId" element={<Chats/>}/>
        <Route path="/groups" element={<Groups/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
};

export default App

