import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { Home } from './pages/home';
import { Auth } from './pages/auth';
import { Budget } from './pages/createBudget';
import { Navbar } from './components/navBar';

function App() {
  return (
    <div className='App'>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/Auth' element= {<Auth/>}/>
            <Route path='/budget' element= {<Budget/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
