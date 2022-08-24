import React from 'react';
import s from './hero.module.css';

export const Hero: React.FC = () => {
  return (
    <div className={s.box}>
      <div className={s.hi}>- Hi there 👋</div>
      <h1 className={s.text}>
        We build simple and flexible tech projects <span>for humans</span>.
      </h1>
      <div className={s.mail}>
        <a className={s.link} href="mailto:hello@hypeer.company">
          hello@hypeer.company
        </a>
      </div>
    </div>
  );
};
