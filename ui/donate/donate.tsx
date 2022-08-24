import React from 'react';
import s from './donate.module.css';

export const list = [
  {
    name: 'Dash',
    value: 'Xw9USTWaxgzrHwQutHvdBZRpUrPrY5NG2q',
  },
];

export const Donate: React.FC = () => {
  return (
    <div className={s.box}>
      <h1>Support the growth of Hypeer projects</h1>
      {list.map((el, idx) => (
        <div key={idx}>
          {el.name}: {el.value}
        </div>
      ))}
    </div>
  );
};
