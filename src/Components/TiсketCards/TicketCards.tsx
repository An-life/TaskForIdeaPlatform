import React from 'react';

import Currency from '../../types/currency';
import TicketsData from '../../types/common';

import TicketCard from './TicketCard/TicketCard';

type Props = {
  tickets: TicketsData[];
  currency: Currency;
};

function TicketCards({ tickets, currency }: Props) {
  return (
    <div>
      {tickets.map(ticket => (
        <TicketCard ticket={ticket} key={ticket.id} currency={currency} />
      ))}
    </div>
  );
}

export default TicketCards;
