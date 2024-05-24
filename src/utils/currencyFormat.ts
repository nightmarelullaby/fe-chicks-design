export const formatCountryCurrency = (
  number: number,
  currency: string = "EUR",
  country: string = "de-DE"
) =>
  new Intl.NumberFormat(country, {
    style: "currency",
    currency,
  }).format(number);
