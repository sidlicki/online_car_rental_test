import { NavLink } from 'react-router-dom';
import React from 'react';
import { Container } from 'components/Container/Container';
import { LayoutStyled } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
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
    </LayoutStyled>
  );
};

export default Layout;
