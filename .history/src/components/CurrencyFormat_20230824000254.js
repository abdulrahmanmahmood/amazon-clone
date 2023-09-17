const CurrencyFormat = ({ number, currency }) => {
  const [formattedNumber, setFormattedNumber] = useState(null);

  useEffect(() => {
    const formatter = new Intl.NumberFormat(currency, {
      style: 'currency',
    });

    setFormattedNumber(formatter.format(number));
  }, [number, currency]);

  return <span>{formattedNumber}</span>;
};

export default CurrencyFormat;