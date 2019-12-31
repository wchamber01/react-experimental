import React from 'react';

import left from '../lib/arrow-left-bold.svg';
import right from '../lib/arrow-right-bold.svg';

import css from '../css/Button.module.css';

export default function Button(props) {
  function blur() {
    document.getElementById(props.scroll).blur();
  }

  return (
    <button id={props.scroll} className={css.button} onPointerUp={blur}>
      <img
        src={props.scroll === 'left' ? left : right}
        alt={`${props.scroll} carousel scroll button`}
      />
    </button>
  );
}
