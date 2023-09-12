dolphinAverage = Math.round(calculateScore(44, 23, 71))
koalaAverage = Math.round(calculateScore(23, 34, 49))
console.log(dolphinAverage, koalaAverage)

function checkWinner(dolphinAverage, koalaAverage) {
  if (dolphinAverage > koalaAverage * 2) {
    return console.log(
      `Dolphin's won! They have ${dolphinAverage} and koala's only have ${koalaAverage}`
    )
  } else if (koalaAverage > dolphinAverage * 2) {
    return console.log(
      `Koala's won! They have ${koalaAverage} and Dophin's only have ${dolphinAverage}`
    )
  } else {
    return console.log(`No team win!`)
  }
}
checkWinner(dolphinAverage, koalaAverage)
//Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
console.log('Data 2')
dolphinAverage = Math.round(calculateScore(85, 54, 41))
koalaAverage = Math.round(calculateScore(23, 34, 27))
console.log(dolphinAverage, koalaAverage)

function checkWinner(dolphinAverage, koalaAverage) {
  if (dolphinAverage > koalaAverage * 2) {
    return console.log(
      `Dolphin's won! They have ${dolphinAverage} and koala's only have ${koalaAverage}`
    )
  } else if (koalaAverage > dolphinAverage * 2) {
    return console.log(
      `Koala's won! They have ${koalaAverage} and Dophin's only have ${dolphinAverage}`
    )
  } else {
    return console.log(`No team win!`)
  }
}
checkWinner(dolphinAverage, koalaAverage)
