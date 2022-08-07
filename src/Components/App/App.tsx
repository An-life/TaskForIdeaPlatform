import React, { useState } from 'react';
import { v1 } from 'uuid';

import TicketCards from '../TiсketCards/TicketCards';
import Filters from '../Filters/Filters';
import logo from '../../assets/logo.png';
import data from '../../tickets.json';

import styles from './App.module.scss';
import Currency from '../../types/currency';

function App() {
  const [currency, setCurrency] = useState<Currency>('Rub');
  const tickets = data.tickets.map(ticket => ({ ...ticket, id: v1() }));

  const currencyHandler = (currencyType: Currency) => setCurrency(currencyType);

  return (
    <div className={styles.container}>
      <h1>
        <img src={logo} alt="Logo" className={styles.logo} />
      </h1>
      <main className={styles.wrapper}>
        <Filters onClick={currencyHandler} currency={currency} />
        <TicketCards tickets={tickets} />
      </main>
    </div>
  );
}

export default App;
