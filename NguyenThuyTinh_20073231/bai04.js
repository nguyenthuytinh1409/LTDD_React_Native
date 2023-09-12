const bill = 275
const tip1 = bill * 0.15
const tip2 = bill * 0.2
bill >= 50 && bill <= 300
  ? console.log(
      `The bill was ${bill}, the tip was ${tip1}, and the total value ${
        bill + tip1
      }`
    )
  : console.log(
      `The bill was ${bill}, the tip was ${tip2}, and the total value ${
        bill + tip2
      }`
    )
