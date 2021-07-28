function findMaxWords(word) {
  let splitWord = word.split(/[\.,\?,\!]+/);
  //loop through the splitWordArray
  let maxWord = 0;
  for (let sentence of splitWord) {
    if (sentence !== "") {
      let sentenceSplit = sentence.split(" ");
      if (sentenceSplit.length - 1 > maxWord) {
        maxWord = sentenceSplit.length - 1;
      }
    }
  }

  return maxWord;
}

function findTransactionSum(transArray, date) {
  let transactionObject = {};
  for (let i = 0; i < transArray.length; i++) {
    const currentTransaction = transArray[i];
    let currentDate = date[i];
    //split the date
    const splitDate = currentDate.split("-");
    let month = splitDate[1];
    if (transactionObject[month]) {
      transactionObject[month].push(currentTransaction.toString());
    } else {
      transactionObject[month] = [currentTransaction.toString()];
    }
  }

  //lets calculate
  let total = 0;
  let cardTotal = 0;
  let months = 12;
  debugger;
  for (let transaction in transactionObject) {
    //each transaction
    let transactionsArray = transactionObject[transaction];
    let currentCardTrans = 0;
    let currentCardTotal = 0;
    for (let trans of transactionsArray) {
      if (trans.indexOf("-") !== -1) {
        currentCardTrans++;
        if (trans != NaN) {
          currentCardTotal += parseInt(trans);

          cardTotal += parseInt(trans);
        }
      } else {
        total += parseInt(trans);
      }
    }
    if (currentCardTrans >= 3 && currentCardTotal <= -100) {
      months--;
    }
  }

  return total + cardTotal - 5 * months;
}

// console.log(
//   findTransactionSum([100, 100, -10, -20, -30], ['2020-01-01', '2020-02-01', '2020-02-11', '2020-02-05', '2020-02-08']
//   )
// );

function organizePhotos(word) {
  //read the string
  let splitStringArray = word.split(/\n/);
  //.log(splitStringArray.length)
  //console.log((JSON.parse(splitStringArray)))
  let cityObject = {};
  for (let i = 0; i < splitStringArray.length; i++) {
    const currentLine = splitStringArray[i];
    const line = currentLine.replace(/\['/g, "").replace(/\']/, "");
    const lineArraySplit = line.split(",");
    const city = lineArraySplit[1];
    const photo = lineArraySplit[0];
    const splitPhoto = photo.split(".");

    if (cityObject[city.trim()] === undefined) {
      cityObject[city.trim()] = [city.trim() + 1 + "." + splitPhoto[1]];
    } else {
      //get how many dey city
      const cityArray = cityObject[city.trim()];
      const length = cityArray.length;
      cityObject[city.trim()].push(
        city.trim() + (length + 1) + "." + splitPhoto[1]
      );
    }
  }
  let string = [];
  for (let str in cityObject) {
    const current = cityObject[str];
    if (current.length > 9) {
      //we pad here
      //come back to this after mastering regular expressions
      for (let i = 0; i < current.length; i++) {
        if (i < 9) {
          const currentWord = current[i];
          const splitByPoint = currentWord.split(".");
          const removeDigit = splitByPoint[0].match(/\d/);
          const wordWithoutDigit = splitByPoint[0].replace(/\d/, "")
      
          const paddedWord = wordWithoutDigit + "0" + removeDigit[0]+"."+ splitByPoint[1]
          string.push(paddedWord);
          //padding and add zero
        } else {
          string.push(current[i]);
        }
      }
    } else {
      for (let i = 0; i < current.length; i++) {
        string.push(current[i]);
      }
    }
  }
  console.log(string);
}

console.log(
  organizePhotos(
    "['photo.jpg, Warsaw, 2013-09-05 14:08:15\njohn.png, London, 2015-06-20 15:13:22\nmyFriends.png, Warsaw, 2013-09-05 14:07:13\nEiffel.jpg, Paris, 2015-07-23 08:03:02\npisatower.jpg, Paris, 2015-07-22 23:59:59\nBOB.jpg, London, 2015-08-05 00:02:03\nnotredame.png, Paris, 2015-09-01 12:00:00\nme.jpg, Warsaw, 2013-09-06 15:40:22\na.png, Warsaw, 2016-02-13 13:33:50\nb.jpg, Warsaw, 2016-01-02 15:12:22\nc.jpg, Warsaw, 2016-01-02 14:34:30\nd.jpg, Warsaw, 2016-01-02 15:15:01\ne.png, Warsaw, 2016-01-02 09:49:09\nf.png, Warsaw, 2016-01-02 10:55:32\ng.jpg, Warsaw, 2016-02-29 22:13:11']"
  )
);
