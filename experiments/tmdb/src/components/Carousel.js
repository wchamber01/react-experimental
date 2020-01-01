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
      checkScrollPosition(100, 0);
    }
  }, [props.currX]);

  function scroll() {
    const sW = props.listRef.current.scrollWidth;
    const childrenCount = props.listRef.current.childElementCount;
    const sX =
      (sW / Math.floor(childrenCount / 2)) * (props.direction === 'L' ? -1 : 1);

    props.listRef.current.scrollBy({
      top: 0,
      left: sX,
      behavior: 'smooth'
    });

    checkScrollPosition(sW, sX);
  }

  function checkScrollPosition(sW, sX) {
    const cW = props.listRef.current.clientWidth;
    const nextX = props.currX + sX;
    console.log('nextX =', nextX);

    if (props.direction === 'L') {
      if (nextX > 0) {
        setShow(true);
      } else {
        setShow(false);
      }
    } else {
      setShow(true);
    }

    props.setCurrX(nextX);
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
  const [currX, setCurrX] = useState(0);
  const listEl = useRef(null);

  return (
    <div className={css.container}>
      <Button
        direction="L"
        listRef={listEl}
        currX={currX}
        setCurrX={setCurrX}
      />
      <ul ref={listEl} className={css.list}>
        {props.children}
      </ul>
      <Button
        direction="R"
        listRef={listEl}
        currX={currX}
        setCurrX={setCurrX}
      />
    </div>
  );
}
