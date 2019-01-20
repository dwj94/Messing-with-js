// grade calc, student score, total possible, grade
// you got an A, with xx%
//90-100 A and so on
//call function and print string, 15 and 20

let gradeCalc = function (studentScore, totalPossibleScore = 20) {
    let perc = studentScore * 100 / totalPossibleScore
    let grade
    if (perc >= 90 && perc <= 100) {
        grade = 'A'
    } else if (perc >= 80) {
        grade = 'B'
    } else if (perc >= 70) {
        grade = 'C'
    } else if (perc >= 60) { 
        grade = 'D'
    } else if (perc >= 50) {
        grade = 'E'
    } else if (perc < 50 && perc >= 0) {
        grade = 'F'
    } else {
        console.log('Not a possible grade')
    }

    return `Your grade is ${grade} with a score of ${perc}%`
}

let result = gradeCalc(5,10)
console.log(result)
