import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header'
import Navbar from './Navbar';
import Contact from './Contact';
import CVPage from './CVPage';
import Footer from './Footer';

const MainContainer = styled.main`
  flex: 1 0 auto;
`;

const FooterContainer = styled.footer`
  flex-shrink: 0;
`;

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <nav>
        <Navbar />
      </nav>
      <MainContainer>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <CVPage />
          </Route>
        </Switch>
      </MainContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Router>
  );
}

export default App;
