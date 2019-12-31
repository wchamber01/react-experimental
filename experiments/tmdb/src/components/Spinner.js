/**
 * Reverse-engineered from Ionic Framework — a beautiful open
 * source UI toolkit for building performant, high-quality mobile
 * and deskptop apps using web technologies (HTML, CSS, and JavaScript).
 *
 * Source: https://ionicframework.com/docs/api/spinner.
 */

import React from 'react';

import css from '../css/Spinner.module.css';

const animation = [
  { id: 1, rotate: 'rotate(180deg)', duration: '-1000ms' },
  { id: 2, rotate: 'rotate(210deg)', duration: '-916.667ms' },
  { id: 3, rotate: 'rotate(240deg)', duration: '-833.333ms' },
  { id: 4, rotate: 'rotate(270deg)', duration: '-750ms' },
  { id: 5, rotate: 'rotate(300deg)', duration: '-666.667ms' },
  { id: 6, rotate: 'rotate(330deg)', duration: '-583.333ms' },
  { id: 7, rotate: 'rotate(0deg)', duration: '-500ms' },
  { id: 8, rotate: 'rotate(30deg)', duration: '-416.667ms' },
  { id: 9, rotate: 'rotate(60deg)', duration: '-333.333ms' },
  { id: 10, rotate: 'rotate(90deg)', duration: '-250ms' },
  { id: 11, rotate: 'rotate(120deg)', duration: '-166.667ms' },
  { id: 12, rotate: 'rotate(150deg)', duration: '-83.3333ms' }
];

export default function Spinner() {
  return (
    <div className={css.container}>
      <div className={css.spinner}>
        {animation.map(config => (
          <svg
            className={css.line}
            key={config.id}
            viewBox="0 0 64 64"
            style={{
              transform: `${config.rotate}`,
              animationDelay: `${config.duration}`,
              animationDuration: '1000ms'
            }}
          >
            <line
              strokeWidth="4"
              strokeLinecap="round"
              stroke="#16191c"
              transform="translate(32,32)"
              y1="17"
              y2="29"
            ></line>
          </svg>
        ))}
      </div>
    </div>
  );
}
