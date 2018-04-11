const trades = [128, 97, 121, 123, 98, 97, 105]
let maxprofit = { profit: 0 }
for (let i = 0; i < trades.length - 1; i++) {
  const buy = trades[i]
  for (let j = i + 1; j < trades.length; j++) {
    const sell = trades[j]
    const diff = Number(sell) - Number(buy)
    if (diff > maxprofit.profit) {
      maxprofit = { profit: diff, buy: i + 1, sell: j + 1 }
    }
  }
}
// n^2
console.log(maxprofit)
