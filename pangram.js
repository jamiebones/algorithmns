function pangram(word){
 word = word.toLowerCase();
 let aplhabets = {
     "a": "no",
     "b": "no",
     "c": "no",
     "d": "no",
     "e": "no",
     "f": "no",
     "g": "no",
     "h": "no",
     "i": "no",
     "j": "no",
     "k": "no",
     "l": "no",
     "m": "no",
     "n": "no",
     "o": "no",
     "p": "no",
     "q": "no",
     "r": "no",
     "s": "no",
     "t": "no",
     "u": "no",
     "v": "no",
     "w": "no",
     "x": "no",
     "y": "no",
     "z": "no",
 }
 let seen = 0;
 for (let i=0; i < word.length; i++){
     let char = word[i];
     if ( char == " " ){
         continue;
     }
        if ( aplhabets[char] == "no"){
           aplhabets[char] = "yes"
           seen++
        }
     
 }
 if ( seen == 26 ){
     return "pangram"
 }

 return "not pangram";
}



const result = pangram("We promptly judged antique ivory buckles for the prize");
console.log(result);