function isInFibonacci(num) {
	let anterior = 0
  let atual = 1

	if(num == 0) {
		return true
	}

  while (atual <= num) {
    if (atual == num) {
      return true
    }
    let proximo = anterior + atual
    anterior = atual
    atual = proximo
  }
  return false
}

console.log(isInFibonacci(0))