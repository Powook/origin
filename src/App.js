//  import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Aside from './components/ContentBox/Aside/Aside';
import Main from './components/ContentBox/ProfilePage/ProfilePage';
import { Route, Routes } from 'react-router-dom';
import Messages from './components/ContentBox/Messages/Messages';
import Photo from './components/ContentBox/Photo/Photo';
import Friends from './components/ContentBox/Friends/Friends';
import Settings from './components/ContentBox/Settings/Settings';
import {addPost} from './redux/state'

function App(props) {
  return(
      <div className='box'>
        <Header/>    
        <Aside/>
        <div className='box-main-wrapper'>
          <Routes>
            <Route path ="/profile" element={<Main state ={props.state.profilePage} addPost={addPost}/>}/>
            <Route path='/messages' element ={<Messages state={props.state.dialogsPage} />}/>
            <Route path='/photo' element={<Photo/>}/>
            <Route path='/friends' element={<Friends/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
  )
}

export default App;
