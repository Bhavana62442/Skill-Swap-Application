import { BrowserRouter,Routes,Route} from 'react-router-dom'
//pages and components 
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Landing from './pages/Landing'
import Profile from './pages/Profile'
import Explore from './pages/Explore'
import AddSkills from './pages/AddSkills'
import SetProfile from './pages/SetProfile'
import MessagingPage from './pages/Messaging';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path = "/dashboard" element = {<Dashboard/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/register" element = {<Register/>}/>
            <Route path = "/" element = {<Landing/>}/>
            <Route path = "/profile" element = {<Profile/>}/>
            <Route path = "/explore" element = {<Explore/>}/>
            <Route path = "/addskills" element = {<AddSkills/>}/>
            <Route path = "/users" element = {<SetProfile/>}/>
            <Route path = "/messaging" element = {<MessagingPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
