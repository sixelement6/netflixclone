/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Header.css';

export default ({black}) => {
    return (
      <header className={black ? 'black' : ''}>
        <div className="header--logo">
          <a href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"></img>
          </a>
        </div>
        <div className="header--user">
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="usuário"
            ></img>
          </a>
        </div>
      </header>
    );
}