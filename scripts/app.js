const MaxInput = document.getElementById('max-input')
const MinInput = document.getElementById('min-input')
const ResultInput = document.getElementById('result-text')

const findLargest = () => {
 const max = MaxInput.value 
 const min = MinInput.value 

 let index = max
 let prime = 0

 do{
let loop = 2
let limit = index
let isPrime = true

do{
if (index % loop === 0){
  isPrime = false
  break
}

loop++
}while (loop < limit)
  
  if (isPrime){
    prime = index
    break
  }

  index--
 }while (index >= min)

  if (prime !== 0){
    ResultInput.innerHTML = 'Largest prime is ' + prime
  }else {
    ResultInput.innerHTML = 'NO PRIME NUMBER'
  }
}

const findLowest = () => {
  const max = MaxInput.value
  const min = MinInput.value

  let index = max
  let prime = 0
  
  for (let index = min; index < max; index++) {
    let isPrime = true
    for (let nIndex = 2; nIndex < index; nIndex++) {
      if (index % nIndex === 0) {
        isPrime = false
        break
      }
    }

    if (isPrime) {
      prime = index
      break
    }
  }
  

if (prime !== 0){
  ResultInput.innerHTML = 'Lowest prime is ' + prime
}else {
  ResultInput.innerHTML = 'NO PRIME NUMBER'
}

 
}