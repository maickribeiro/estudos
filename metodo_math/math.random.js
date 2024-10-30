function getRandomNumber(begin=5, end=20, integer=true) {
    let randomNumber = Math.random() * (end - begin) + begin
    if (integer == true){
        randomNumber = Math.round(Math.random() * (end - begin) + begin)
    }
    return randomNumber
}

console.log(getRandomNumber(2, 6))