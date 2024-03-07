import { NavLink } from 'react-router-dom';
import React from 'react';
import { Container } from 'components/Container/Container';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Container>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cars">Cars</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </Container>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
};

export default Layout;
