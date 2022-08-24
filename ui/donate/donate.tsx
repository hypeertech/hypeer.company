import React from 'react';
import s from './donate.module.css';

export const list = [
  {
    name: 'Bitcoin',
    value: 'bc1qjqjmhs0rq2vcapmtvhp7yq9s9z277wfpu6k0q7',
  },
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
