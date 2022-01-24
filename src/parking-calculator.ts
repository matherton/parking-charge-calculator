/* Long Stay £7.50 per day or part day including weekends, so the minimum charge will be for one day */

export const calculateLongStay = (start: Date, end: Date) => {
  const startDate: Date = new Date(start);
  const endDate: Date = new Date(end);
  function getNumberOfDays(startDate: Date, endDate: Date) {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    const cost = diffInDays * 7.5;

    const price = `£${cost.toFixed(2)}`;

    return price;
  }

  console.log(getNumberOfDays(startDate, endDate));
};

/* Short Stay £1.10 per hour between 8am and 6pm on weekdays, 
free outside of these times. Visits need not be whole hours and can last more than one day. */
export const calculateShortStay = (start: Date, end: Date) => {
  const shortHrsInSpace = end;
  return 0;
};
