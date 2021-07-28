function reverseString( word ){
    const splitword = word.split("").reverse().join(" ");
    return splitword;
}

function reverseStringRecursion( input, memo={} ){
    if ( input == "" ) {
        return ""
    }
    let subElement = input.substr(1);
    return reverseStringRecursion(subElement) + input.charAt(0)
}

const answer = reverseStringRecursion("my name is jamiebones please act like a good man please there");
console.log(answer);  