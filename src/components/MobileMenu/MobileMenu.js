/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <Close onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>
            Dismiss menu
          </VisuallyHidden>
        </Close>
        <NavItems>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </NavItems>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
`

const Content = styled(DialogContent)`
  background: white;
  height: 100%;
  width: 300px;
`

const NavItems = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  align-items: flex-start;
  justify-content: center;
  height: 80%;
  padding: 32px;
  gap: 16px;

  a {
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    line-height: 1.5;
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;

  a {
    font-size: 1.125rem;
    text-decoration: none;
    color: black;
    line-height: 1.5;
  }
`

const Close = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 0px;
  cursor: pointer;
  padding: 16px;

`
export default MobileMenu;
