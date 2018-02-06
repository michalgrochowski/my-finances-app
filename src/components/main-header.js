import React, { Component } from 'react';

import '../styles/main-header.css';

const MainHeader = (props) => {
  return (
    <header className="main-header">
      <h1 className="main-header__title">Mój budżet</h1>
      <p className="main-header__description">Prosta aplikacja do zarządzania miesięcznym budżetem.</p>
    </header>
  )
}

export default MainHeader;