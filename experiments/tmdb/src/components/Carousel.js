import React, { useState, useEffect, useRef } from 'react';

import left from '../lib/arrow-left-bold.svg';
import right from '../lib/arrow-right-bold.svg';

import css from '../css/Carousel.module.css';

function Button(props) {
  const [show, setShow] = useState(false);
  const buttonEl = useRef(null);

  useEffect(() => {
    // if device has a touch screen
    if (!window.matchMedia('(pointer: coarse)').matches) {
      checkScrollPosition(0, 0);
    }
  });

  function scroll() {
    const cW = props.listRef.current.clientWidth;
    const sW = props.listRef.current.scrollWidth;
    const chW = sW / props.listRef.current.childElementCount;
    const direction = props.direction === 'L' ? -1 : 1;
    const sX = Math.ceil(cW / 2 / chW) * chW * direction;

    props.listRef.current.scrollTo({
      top: 0,
      left: props.X + sX,
      behavior: 'smooth'
    });

    checkScrollPosition(sW, sX);
  }

  function checkScrollPosition(sW, sX) {
    const nextX = props.X + sX;

    if (props.direction === 'L') {
      if (nextX > 0) {
        setShow(true);
      } else {
        setShow(false);
      }
    } else {
      setShow(true);
    }

    props.setX(nextX);
  }

  function blur() {
    buttonEl.current.blur();
  }

  return (
    show && (
      <button
        ref={buttonEl}
        className={css.button}
        onClick={scroll}
        onPointerUp={blur}
        style={
          props.direction === 'L' ? { left: '-1.6rem' } : { right: '-1.6rem' }
        }
      >
        <img
          src={props.direction === 'L' ? left : right}
          alt={`${
            props.direction === 'L' ? 'left' : 'right'
          } carousel scroll button`}
        />
      </button>
    )
  );
}

export default function Carousel(props) {
  const [X, setX] = useState(0);
  const listEl = useRef(null);

  return (
    <div className={css.container}>
      <Button direction="L" listRef={listEl} X={X} setX={setX} />
      <ul ref={listEl} className={css.list}>
        {props.children}
      </ul>
      <Button direction="R" listRef={listEl} X={X} setX={setX} />
    </div>
  );
}
