/* Long Stay £7.50 per day or part day including weekends, so the minimum charge will be for one day */

export const calculateLongStay = (start: Date, end: Date) => {
  const date1: Date = new Date(start);
  const date2: Date = new Date(end);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  const cost = diffInDays * 7.5 + 7.5;

  const price = `£${cost.toFixed(2)}`;

  return price;
};

/* Short Stay £1.10 per hour between 8am and 6pm on weekdays (max 10hrs/day), 
free outside of these times. Visits need not be whole hours and can last more than one day. */
export const calculateShortStay = (start: Date, end: Date) => {
  const startDate: Date = new Date(start);
  const endDate: Date = new Date(end);
  // Calculating the time difference between two dates in hours
  const shortHrsInSpace = endDate.getHours() - startDate.getHours();

  if (shortHrsInSpace >= 10) {
    console.log(shortHrsInSpace, " Greater than 1day");
    const shortStayCost = shortHrsInSpace * 1.1;
    //TODO return only week days if incoming dates are over a weekend and only charge max of 10hrs per day by fixing multi day failing tests
    console.log("cost: £", shortStayCost.toFixed(2));
  } else {
    const shortStayCost = shortHrsInSpace * 1.1;
    console.log(
      "Time in hours short stay under 1 day:",
      `${shortHrsInSpace}hrs`
    );
    console.log("cost: £", shortStayCost.toFixed(2));
  }
  return shortHrsInSpace;
};
