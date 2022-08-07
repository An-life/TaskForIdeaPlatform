import React from 'react';

import TicketsData from '../../types/common';

import TicketCard from './TicketCard/TicketCard';

type Props = {
  tickets: TicketsData[];
};

function TicketCards({ tickets }: Props) {
  return (
    <div>
      {tickets.map(ticket => (
        <TicketCard ticket={ticket} key={ticket.id} />
      ))}
    </div>
  );
}

export default TicketCards;
