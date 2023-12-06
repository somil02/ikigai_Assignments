// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; import styled from 'styled-components';
import './App.css';

// Styled components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Navigation = styled.nav`
  background-color: #343a40;
  color: #fff;
  padding: 10px;
`;

const NavigationList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavigationItem = styled.li`
  display: inline-block;
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffcc00;
  }
`;

const Content = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

// Components for each page
const Home = () => <h2 className="content">Home Page</h2>;
const About = () => <h2 className="content">About Page</h2>;
const Contact = () => <h2 className="content">Contact Page</h2>;

// App component with router
const App = () => {
  return (
    <Router>
      <Container>
        <Navigation>
          <NavigationList>
            <NavigationItem>
              <NavLink to="/">Home</NavLink>
            </NavigationItem>
            <NavigationItem>
              <NavLink to="/about">About</NavLink>
            </NavigationItem>
            <NavigationItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavigationItem>
          </NavigationList>
        </Navigation>

        {/* Define routes */}
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>
      </Container>
    </Router>
  );
};

export default App;
