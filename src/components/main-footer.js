import React, { Component } from 'react';

import '../styles/main-footer.css';

const MainFooter = (props) => {
  return (
    <footer className="main-footer">
		  <p className="main-footer__copyright">Michał Grochowski @ <a className="main-footer__link" href="https://dobrywebdev.pl" rel="noopener" target="_blank">dobrywebdev.pl</a></p>
    </footer>
  )
}

export default MainFooter;