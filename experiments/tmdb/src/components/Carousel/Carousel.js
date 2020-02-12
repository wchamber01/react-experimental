import React, { useState, useEffect, useRef } from 'react';

import left from '../../lib/arrow-left-bold.svg';
import right from '../../lib/arrow-right-bold.svg';

import css from './Carousel.module.css';

function Button(props) {
  const [show, setShow] = useState(false);
  const buttonEl = useRef(null);

  const L_Boolean = props.direction === 'L';
  const R_Boolean = props.direction === 'R';

  useEffect(() => {
    function displayButtons() {
      if (L_Boolean) {
        if (props.X > 0) {
          setShow(true);
        } else {
          setShow(false);
        }
      } else if (R_Boolean) {
        const sW = props.listRef.current.scrollWidth;
        const cW = props.listRef.current.clientWidth;

        if (props.X < sW - cW) {
          setShow(true);
        } else {
          setShow(false);
        }
      }
    }

    // if device does not has a touch screen
    if (!window.matchMedia('(pointer: coarse)').matches) {
      displayButtons();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.X]);

  function scroll() {
    const sW = props.listRef.current.scrollWidth;
    const cW = props.listRef.current.clientWidth;
    const chW = sW / props.listRef.current.childElementCount;
    const direction = L_Boolean ? -1 : 1;
    const sX = Math.ceil(cW / 2 / chW) * chW * direction;
    const nX = props.X + sX;

    props.listRef.current.scrollTo({
      top: 0,
      left: nX,
      behavior: 'smooth'
    });

    props.setX(nX);
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
        style={{
          ...(L_Boolean ? { left: '-1.6rem' } : { right: '-1.6rem' }),
          ...{ top: `${props.top}px` }
        }}
      >
        <img
          src={L_Boolean ? left : right}
          alt={`${L_Boolean ? 'left' : 'right'} carousel scroll button`}
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
      <Button
        direction="L"
        listRef={listEl}
        X={X}
        setX={setX}
        top={props.top}
      />
      <ul ref={listEl} className={css.list}>
        {props.children}
      </ul>
      <Button
        direction="R"
        listRef={listEl}
        X={X}
        setX={setX}
        top={props.top}
      />
    </div>
  );
}
