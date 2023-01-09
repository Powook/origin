//  import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Aside from './components/ContentBox/Aside/Aside';
import Main from './components/ContentBox/ProfilePage/ProfilePage';
import { Route, Routes } from 'react-router-dom';
import MessagesContainer from './components/ContentBox/Messages/MessagesContainer';
import Photo from './components/ContentBox/Photo/Photo';
import Friends from './components/ContentBox/Friends/Friends';
import Settings from './components/ContentBox/Settings/Settings';
import UsersContainer from './components/ContentBox/Users/UsersContainer';

function App(props) {
  return(
      <div className='box'>
        <Header/>    
        <Aside/>
        <div className='box-main-wrapper'>
          <Routes>
            <Route path ="/profile" element={<Main store={props.store}/>}/>
            <Route path='/messages' element ={<MessagesContainer store={props.store} />}/>
            <Route path='/photo' element={<Photo/>}/>
            <Route path='/friends' element={<Friends/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='users' element ={<UsersContainer/>}/>
          </Routes>
        </div>
        {/* <Footer/> */}
      </div>
  )
}

export default App;
