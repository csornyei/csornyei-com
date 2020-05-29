import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './Header'
import Navbar from './Navbar';
import Contact from './Contact';
import CVPage from './CVPage';

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <CVPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
