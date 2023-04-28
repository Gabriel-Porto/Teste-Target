function reverseString(string) {
  let stringReverse = ""

  for (let cont = string.length; cont >= 0; cont--) {
    stringReverse += string[cont]
  }

  return stringReverse
}

console.log(reverseString('target'))