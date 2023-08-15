import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css';

export const Testes = () => {
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(prevState => !prevState);
  };

  return (
    <div className="app">
      <button onClick={toggleImage}>Toggle Image</button>
      <CSSTransition
        in={showImage}
        timeout={300}
        classNames="image-transition"
        unmountOnExit
      >
        <img
          className="image"
          src="/img/rectangle-min.png"
          alt="Imagem"
        />
      </CSSTransition>
    </div>
  );
};
