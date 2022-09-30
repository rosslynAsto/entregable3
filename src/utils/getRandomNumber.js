//ESTO DA UN NUMERO RANDOM ENTRE 1 Y 126
//FLOOR REDONDE HACIA ARRIBA , ES PARA QUE NO NOS DE 0 Y COMO NO CONSIDERA A 126, SE LE SUMA 1

const getRandomNumber = ()=>{
    return Math.floor(Math.random() *126) + 1
}

export default getRandomNumber