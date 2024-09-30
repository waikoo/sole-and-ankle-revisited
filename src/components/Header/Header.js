import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <HeaderWrapper>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag"></Icon>
          </UnstyledButton>

          <UnstyledButton>
            <Icon id="search"></Icon>
          </UnstyledButton>

          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu"></Icon>
          </UnstyledButton>
        </MobileNav>

        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </HeaderWrapper>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;

  @media (${QUERIES.tabletAndDown}) {
    justify-content: space-between;
    align-items: center;
  }

  @media (${QUERIES.phoneAndDown}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media (${QUERIES.tabletAndDown}) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media (${QUERIES.tabletAndDown}) {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media (${QUERIES.tabletAndDown}) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const HeaderWrapper = styled.header`
  border-top: 4px solid ${COLORS.gray[900]};
  
`

const MobileNav = styled.nav`
  display: none;

  @media (${QUERIES.tabletAndDown}) {
    display: flex;
    gap: 32px;
  }

  @media (${QUERIES.phoneAndDown}) {
    gap: 16px;
  }
`

export default Header;
