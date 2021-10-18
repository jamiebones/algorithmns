function scoresRules( score ){
    if ( score < 38 ){
        return score;
    }
    let remainder = score % 5;
    let nextMultiple = score - remainder + 5;
    const difference = nextMultiple - score;
    if ( difference < 3){
        return nextMultiple
    }
    else if ( difference >= 3){
        return score
    }

}

function gradingStudents(scores) {
    let roundUpScores = [];
    for (let i=0; i < scores.length; i++){
        const score = scores[i];
        const roundUp = scoresRules(score);
        roundUpScores.push(roundUp)
    }

    return roundUpScores;

}

const result = gradingStudents([73, 67, 38, 33]);
console.log(result);
