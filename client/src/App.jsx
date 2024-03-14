import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
// const Home = lazy(() => import('./pages/Home'));
// const Login = lazy(() => import('./pages/Login'));
// const Groups = lazy(() => import('./pages/Groups'));
// const Chats = lazy(() => import('./pages/Chats'));
//const NotFound = lazy(()=> import ('./pages/NotFound'));
import Chats from './pages/Chats';
import Groups from './pages/Groups';
import Login from'./pages/Login';
import Home from'./pages/Home';
import ProtectRoute from './components/auth/ProtectRoute'
import NotFound from './pages/NotFound';
let user =true;
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={
        <ProtectRoute user={user}/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/chat/:chatId" element={<Chats/>}/>
            <Route path="/groups" element={<Groups/>}/>
            </Route>
        <Route path="/login" element={<ProtectRoute user={!user} redirect="/">
          <Login />
          </ProtectRoute>
          }/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
};
export default App