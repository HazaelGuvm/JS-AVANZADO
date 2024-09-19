
const operations = require('./functions')

function main(){
    
const operandoOne = 56
const operandoTwo = 14

const resultSum = operations.sum(operandoOne,operandoTwo)
const resultSubstract = operations.substract(operandoOne,operandoTwo)
const resultMultiply = operations.multiply(operandoOne,operandoTwo)
const resultDiv = operations.divideNumbers(operandoOne,operandoTwo)

console.log(`La suma vale: ${resultSum}`)
console.log(`La resta vale: ${resultSubstract}`)
console.log(`La multiplicacion vale: ${resultMultiply}`)
console.log(`La division vale: ${resultDiv}`)


}
main()