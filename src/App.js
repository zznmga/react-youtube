import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AlertState } from './context/alert/AlertState';
import { NotesState } from './context/notes/NotesState';

function App() {
  return (
    <AlertState>
      <NotesState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </NotesState>
    </AlertState>
  );
}

export default App;
