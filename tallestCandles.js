function birthdayCakeCandles(candles) {
    // Write your code here
    let candlesHolder = Object.create({});
    let tallestCandle = 0;
    for ( let i=0; i < candles.length; i++){
        let candle = candles[i];
        tallestCandle = Math.max(tallestCandle, candle);
        if (!candlesHolder.hasOwnProperty(candle)){
            candlesHolder[candle] = 1;
        }
        else{
            candlesHolder[candle]++;
        }
    }
    return candlesHolder[tallestCandle];
}

const result = birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43])
console.log(result)