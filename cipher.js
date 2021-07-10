function rot13(str) {
    let alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    let alphabetObject = {};
    
    for ( let i=0; i <alphabets.length; i++ ){
      if ( i < 13 ){
        alphabetObject[alphabets[i]] = alphabets[i + 13]
      }else{
        alphabetObject[alphabets[i]] = alphabets[i - 13 ]
      }
    }
    let cipher = "";
    for (let letter of str.split("") ){
      cipher += alphabetObject[letter] ? alphabetObject[letter] : letter
    }
      return cipher;
    }
    
    console.log(rot13("SERR PBQR PNZC"));