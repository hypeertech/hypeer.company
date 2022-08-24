import React from 'react';
import s from './header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={s.box}>
      <div className={s.title}>Hypeer</div>
    </header>
  );
};
