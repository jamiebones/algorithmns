function reverseString( word ){
    const splitword = word.split("").reverse().join(" ");
    return splitword;
}


const answer = reverseString("hello my name is james");
console.log(answer);