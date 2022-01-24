import { calculateLongStay, calculateShortStay } from "../parking-calculator";

// describe("short stay", () => {
//   test("It calculates a full one day short stay correctly", () => {
//     const start = new Date("Sep 07 2017 08:00:00");
//     const end = new Date("Sep 07 2017 18:00:00");
//     expect(calculateShortStay(start, end)).toEqual(1100);
//   });

//   test("It calculates a partial day short stay correctly", () => {
//     const start = new Date("Sep 07 2017 12:00:00");
//     const end = new Date("Sep 07 2017 18:00:00");
//     expect(calculateShortStay(start, end)).toEqual(660);
//   });

//   test("It calculates at hourly rate for partial hour", () => {
//     const start = new Date("Sep 07 2017 12:30:00");
//     const end = new Date("Sep 07 2017 13:00:00");
//     expect(calculateShortStay(start, end)).toEqual(55);
//   });

//   test("Multi day stay is calculated correctly", () => {
//     const start = new Date("Sep 07 2017 16:50:00");
//     const end = new Date("Sep 09 2017 19:15:00");
//     expect(calculateShortStay(start, end)).toEqual(1228);
//   });

//   test("Short stay outside chargeable period is free", () => {
//     const start = new Date("Sep 07 2017 02:00:00");
//     const end = new Date("Sep 07 2017 7:59:59");
//     expect(calculateShortStay(start, end)).toEqual(0);
//   });

//   test("Short multi day stay outside chargeable period is free", () => {
//     const start = new Date("Sep 06 2017 19:00:00");
//     const end = new Date("Sep 07 2017 7:59:59");
//     expect(calculateShortStay(start, end)).toEqual(0);
//   });

//   test("multi month short stay calculated correctly", () => {
//     const start = new Date("Sep 29 2017 08:00:00");
//     const end = new Date("Oct 02 2017 18:00:00");
//     expect(calculateShortStay(start, end)).toEqual(2200);
//   });

//   test("Multi day stay from end of period to beginning is free", () => {
//     const start = new Date("Sep 06 2017 18:00:00");
//     const end = new Date("Sep 07 2017 08:00:00");
//     expect(calculateShortStay(start, end)).toEqual(0);
//   });

//   test("Shortest possible stay is free due to being less than a penny", () => {
//     const start = new Date("Sep 06 2017 08:00:00");
//     const end = new Date("Sep 06 2017 08:00:01");
//     expect(calculateShortStay(start, end)).toEqual(0);
//   });

//   test("Shortest possible chargeable stay costs 1 penny", () => {
//     const start = new Date("Sep 06 2017 08:00:00");
//     const end = new Date("Sep 06 2017 08:00:33");
//     expect(calculateShortStay(start, end)).toEqual(1);
//   });

//   test("Leap year calculated correctly", () => {
//     const start = new Date("February 27 2020 07:50:00");
//     const end = new Date("March 02 2020 12:20:00");
//     expect(calculateShortStay(start, end)).toEqual(2676);
//   });

//   test("Non Leap year calculated correctly", () => {
//     const start = new Date("February 27 2021 07:50:00");
//     const end = new Date("March 02 2021 12:20:00");
//     expect(calculateShortStay(start, end)).toEqual(1576);
//   });

//   test("Stay from epoch to last date in millenium calculated correctly", () => {
//     const start = new Date("January 01 1970 00:00:00");
//     const end = new Date("December 31 1999 12:00:00");
//     expect(calculateShortStay(start, end)).toEqual(8609040);
//   });

//   test("Stay from last date in previous millenium to first date in current calculated correctly", () => {
//     const start = new Date("December 31 1999 00:00:00");
//     const end = new Date("January 01 2000 12:00:00");
//     expect(calculateShortStay(start, end)).toEqual(1100);
//   });
// });

describe("Long Stay", () => {
  test("One day long stay calculated correctly", () => {
    const start = new Date("Sep 07 2017 07:50:00");
    const end = new Date("Sep 07 2017 18:20:00");
    expect(calculateLongStay(start, end)).toEqual(750);
  });

  test("Multi day long stay calculated correctly", () => {
    const start = new Date("Sep 07 2017 07:50:00");
    const end = new Date("Sep 09 2017 05:20:00");
    expect(calculateLongStay(start, end)).toEqual(2250);
  });

  test("Another multi day long stay calculated correctly", () => {
    const start = new Date("January 20 2017 07:50:00");
    const end = new Date("January 25 2017 05:20:00");
    expect(calculateLongStay(start, end)).toEqual(4500);
  });

  test("Multi month long stay calculated correctly", () => {
    const start = new Date("January 30 2017 07:50:00");
    const end = new Date("February 02 2017 05:20:00");
    expect(calculateLongStay(start, end)).toEqual(3000);
  });

  test("Another multi month long stay calculated correctly", () => {
    const start = new Date("January 30 2017 07:50:00");
    const end = new Date("August 15 2017 12:20:00");
    expect(calculateLongStay(start, end)).toEqual(148500);
  });

  test("Leap year calculated correctly", () => {
    const start = new Date("February 27 2020 07:50:00");
    const end = new Date("March 02 2020 12:20:00");
    expect(calculateLongStay(start, end)).toEqual(3750);
  });

  test("Non Leap year calculated correctly", () => {
    const start = new Date("February 27 2021 07:50:00");
    const end = new Date("March 02 2021 12:20:00");
    expect(calculateLongStay(start, end)).toEqual(3000);
  });

  test("Two Leap years calculated correctly", () => {
    const start = new Date("February 27 2016 07:50:00");
    const end = new Date("March 02 2020 12:20:00");
    expect(calculateLongStay(start, end)).toEqual(1099500);
  });

  test("1 year long long stay calculated correctly", () => {
    const start = new Date("January 30 2017 07:50:00");
    const end = new Date("January 29 2018 07:20:00");
    expect(calculateLongStay(start, end)).toEqual(273750);
  });

  test("Stay on epoch only calculated correctly", () => {
    let start = new Date(0);
    let end = new Date("January 01 1970 12:00:00");
    expect(calculateLongStay(start, end)).toEqual(750);
  });

  test("Stay from epoch to second day after epoch calculated correctly", () => {
    let start = new Date(0);
    let end = new Date("January 02 1970 12:00:00");
    expect(calculateLongStay(start, end)).toEqual(1500);
  });

  test("Stay from epoch to last date in millenium calculated correctly", () => {
    const start = new Date("January 01 1970 00:00:00");
    const end = new Date("December 31 1999 12:00:00");
    expect(calculateLongStay(start, end)).toEqual(8217750);
  });

  test("Stay from last date in previous millenium to first date in current calculated correctly", () => {
    const start = new Date("December 31 1999 00:00:00");
    const end = new Date("January 01 2000 12:00:00");
    expect(calculateLongStay(start, end)).toEqual(1500);
  });
});
