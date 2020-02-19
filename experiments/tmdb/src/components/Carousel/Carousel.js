import React, { useEffect, useRef, useState } from 'react';

import left from '../../lib/arrow-left-bold.svg';
import right from '../../lib/arrow-right-bold.svg';

import css from './Carousel.module.css';

///////////////////////////////////////////////////////////////////////////////
// CAROUSEL
// --------
// This is a simple, clean React carousel component which uses React hooks and
// native Web APIs to achieve native fluidity for horizontal scrolling on
// touchscreen devices. The Button component is visible to assist when
// scrolling on devices that lack touchscreen capabilities.
// --------
// Inspiration: Airbnb & Google
///////////////////////////////////////////////////////////////////////////////

export default function Carousel(props) {
  const [xAxis, setXAxis] = useState(0);
  const unorderedListEl = useRef(null);

  return (
    <div className={css.container}>
      <Button
        direction="L"
        unOrderedListRef={unorderedListEl}
        xAxis={xAxis}
        setXAxis={setXAxis}
        top={props.top}
      />
      <ul ref={unorderedListEl} className={css.unordered_list}>
        {props.children}
      </ul>
      <Button
        direction="R"
        unOrderedListRef={unorderedListEl}
        xAxis={xAxis}
        setXAxis={setXAxis}
        top={props.top}
      />
    </div>
  );
}

function Button(props) {
  const [show, setShow] = useState(false);
  const buttonEl = useRef(false);

  const L_Boolean = props.direction === 'L';

  useEffect(() => {
    function showButtons() {
      if (L_Boolean) {
        if (props.xAxis > 0) {
          setShow(true);
        } else {
          setShow(false);
        }
      } else {
        const sW = props.unOrderedListRef.current.scrollWidth;
        const cW = props.unOrderedListRef.current.clientWidth;

        if (props.xAxis < sW - cW) {
          setShow(true);
        } else {
          setShow(false);
        }
      }
    }

    // if device has a touch screen
    if (!window.matchMedia('(pointer: coarse)').matches) {
      showButtons();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.xAxis]);

  function scroll() {
    const sW = props.unOrderedListRef.current.scrollWidth;
    const cW = props.unOrderedListRef.current.clientWidth;
    const chW = sW / props.unOrderedListRef.current.childElementCount;
    const direction = L_Boolean ? -1 : 1;
    const sX = Math.ceil(cW / 2 / chW) * chW * direction;
    const nX = props.xAxis + sX;

    props.unOrderedListRef.current.scrollTo({
      top: 0,
      left: nX,
      behavior: 'smooth'
    });

    props.setXAxis(nX);
  }

  /**
   * On pointer release, remove keyboard focus from the button element.
   */
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
