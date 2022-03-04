main()

function main() {
    let max = 101
    let min = 1
    let userNumber
    let x = (Math.floor(getRandomArbitrary(min, max)))

    for(let i = 0; i<6; i++) {
        userNumber = +prompt(`Введіть число. Залишилось ${(6-i)} спроб`, '')
        if(userNumber === 0) return
        if (userNumber === x) {
            alert('Хай щастить, провидець!')
            return;
        } else if (userNumber > x) {
            alert('Трохи менше, козаче.')
        } else if (userNumber < x) {
            alert('Трохи більше, козаче!')
        }
    }
    alert('Спробуй іншим разом!')
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
