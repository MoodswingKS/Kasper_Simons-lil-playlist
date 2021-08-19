import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Nav from './components/Nav'
import About from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/about">
            <Header />
            <Nav />
            <About />
            <Footer />
          </Route>
          <Route path="/">
            <div className="App">
              <Header />
              <Nav />
              <Main />
              <Footer />
            </div>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
