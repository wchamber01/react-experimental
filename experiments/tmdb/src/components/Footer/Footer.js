import React from 'react';

import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <div className={css.copyright}>
        © 2020 TMDb, Inc. All rights reserved.
      </div>
    </footer>
  );
}
