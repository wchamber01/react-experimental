import React, { useState, useRef } from 'react';

import left from '../lib/arrow-left-bold.svg';
import right from '../lib/arrow-right-bold.svg';

import css from '../css/Carousel.module.css';

function Button(props) {
  const buttonEl = useRef(null);

  function scrollX() {
    // const c = document.getElementById(props.id);
    // const cW = document.getElementById(props.id).clientWidth;
    // const sW = document.getElementById(props.id).scrollWidth;
    // const liW = document.getElementById(props.id).firstElementChild.clientWidth;
    // c.scroll({
    //   top: 0,
    //   left: x + (liW * 2),
    //   behavior: 'smooth'
    // });
  }

  function blur() {
    buttonEl.current.blur();
  }

  return (
    <button
      ref={buttonEl}
      className={css.button}
      onClick={scrollX}
      onPointerUp={blur}
      style={
        props.scroll === 'left' ? { left: '-1.6rem' } : { right: '-1.6rem' }
      }
    >
      <img
        src={props.scroll === 'left' ? left : right}
        alt={`${props.scroll} carousel scroll button`}
      />
    </button>
  );
}

export default function Carousel(props) {
  const [scrollX, setScrollX] = useState(0);

  function checkMobile() {
    if (window.matchMedia('(pointer: coarse)').matches) return false;
    else return true;
  }

  return (
    <div className={css.container}>
      {checkMobile() && <Button scroll="left" />}
      <ul className={css.list}>{props.children}</ul>
      {checkMobile() && <Button scroll="right" />}
    </div>
  );
}
