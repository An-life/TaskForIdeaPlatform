import Currency from '../../types/currency';

type ButtonOptions = { id: number; label: Currency }[];

const buttonOptions: ButtonOptions = [
  { id: 1, label: 'Rub' },
  { id: 2, label: 'Usd' },
  { id: 3, label: 'Eur' },
];

export default buttonOptions;
