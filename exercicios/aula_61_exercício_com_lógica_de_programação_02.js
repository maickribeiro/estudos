function modoPaisage(paisagem) {
    if (paisagem){
        return paisagem < 1080 ? 'modo paisagem' : 'modo normal'
    }
}

console.log(modoPaisage('d'))