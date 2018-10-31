const transactionData = [
  {
    entity: "foo",
    type: "B",
    agreedFx: 0.5,
    currency: "SGP",
    intructionDate: new Date("01 Jan 2016"),
    settlementDate: new Date("02 Jan 2016"),
    units: 200,
    unitPrice: 100.25
  },
  {
    entity: "bar",
    type: "S",
    agreedFx: 0.22,
    currency: "AED",
    intructionDate: new Date("05 Jan 2016"),
    settlementDate: new Date("07 Jan 2016"),
    units: 450,
    unitPrice: 150.5
  }
];

module.exports = {
  transactionData: transactionData
};
