function contagem(INDICE, SOMA, K) {
    while (K < INDICE) {
        K++
        SOMA += K
    }

    return SOMA
}


console.log(contagem(13,0,0))