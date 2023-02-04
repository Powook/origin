//  import logo from './logo.svg';
import './App.css';
  import Aside from './components/ContentBox/Aside/Aside';
import { Route, Routes } from 'react-router-dom';
import MessagesContainer from './components/ContentBox/Messages/MessagesContainer';
import Photo from './components/ContentBox/Photo/Photo';
import Friends from './components/ContentBox/Friends/Friends';
import Settings from './components/ContentBox/Settings/Settings';
import UsersContainer from './components/ContentBox/Users/UsersContainer';
import { ProfilePageContainer } from './components/ContentBox/ProfilePage/ProfilePageContainer';
import {HeaderContainer} from './components/Header/HeaderContainer';

function App(props) {
  return(
      <div className='box'>
        <HeaderContainer/>    
        <Aside/>
        <div className='box-main-wrapper'>
          <Routes>
            <Route path ="/profile/:userId" element={<ProfilePageContainer/>}/>
            <Route path ="/profile" element={<ProfilePageContainer/>}/>
            <Route path='/messages' element ={<MessagesContainer />}/>
            <Route path='/photo' element={<Photo/>}/>
            <Route path='/friends' element={<Friends/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='users' element ={<UsersContainer/>}/>
          </Routes>
        </div>
      </div>
  )
}

export default App;
