import React from 'react';

import Currency from '../../types/currency';
import buttonOptions from './constants';

import styles from './Filters.module.scss';

type Props = {
  onClick: (currencyType: Currency) => void;
  currency: Currency;
};

function Filters({ onClick, currency }: Props) {
  return (
    <div className={styles.container}>
      <div>
        <h4 className={styles.title}>Валюта</h4>
        <div>
          {buttonOptions.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => onClick(label)}
              className={label === currency ? styles.activeButton : styles.button}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h4 className={styles.title}>Количество пересадок</h4>
      </div>
    </div>
  );
}

export default Filters;
