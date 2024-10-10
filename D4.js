/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
const calcArea = function (l1, l2) {
  console.log("L'area di questo rettangolo è: " + l1 * l2)
}

calcArea(5, 6)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
const crazySum = function (n1, n2) {
  if (n1 !== n2) {
    return console.log(n1 + n2)
  } else if (n1 === n2) {
    return console.log((n1 + n2) * 3)
  }
}

crazySum(5, 6)
crazySum(5, 5)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
const crazyDiff = function (givenNumber, fixedNumber = 19) {
  if (givenNumber <= fixedNumber) {
    return console.log(
      'La differenza assoluta tra i due numeri è ' +
        Math.abs(givenNumber - fixedNumber)
    )
  } else if (givenNumber > fixedNumber) {
    return console.log(
      'La differenza assoluta tra i due numeri è ' +
        Math.abs((givenNumber - fixedNumber) * 3)
    )
  }
}

crazyDiff(5)
crazyDiff(20)
crazyDiff(85)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return console.log('true')
  }
}

boundary(65)
boundary(2)
boundary(400)
boundary(1)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
const epify = function (string) {
  if (string.startsWith('EPICODE')) {
    console.log(string)
  } else {
    console.log('EPICODE ' + string)
  }
}
epify('come on!')
epify('EPICODE is fantastic')
epify('forse ho capito')
epify('EPICODE is lit')

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (positiveNumber) {
  if (positiveNumber % 3 === 0 || positiveNumber % 7 === 0) {
    console.log('Number accepted')
  } else {
    console.log('Number not accepted')
  }
}
check3and7(15)
check3and7(5)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString = function (string2) {
  let stringRev = ''
  for (let i = string2.length - 1; i >= 0; i--) {
    stringRev + string2[i]
  }
  console.log(stringRev)
}

reverseString('Patricia')

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
const upperFirst = function (multipleStrings) {}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
