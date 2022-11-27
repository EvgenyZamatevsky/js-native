// Все операторы сравнения возвращают boolean значение
// Каждый тип данных, не являющийся числом - преобразуется в число, (с операторами  === и !== преобразование не происходит)
// Специальное правило языка - при нестрогом null и undefined равны друг другу и не равны никаким другим значениям
// Любое сравнение с NaN возвращает false
// Любое сравнение с undefined возвращает false, кроме null == undefined

// > (больше)
// console.log("" > -1) // true
// console.log("  " > -1) // true
// console.log("  a  " > -1) // false
// console.log("  1   " > -1) // true

// < (меньше)
// console.log("1" < 1) // false
// console.log("a1" < 1) // false
// console.log(1 < 1) // false
// console.log(0 < 1) // true

// <= (меньше или равно)
// console.log(true <= 1) // true
// console.log(false <= 0) // true
// console.log(null <= 1) // true
// console.log(undefined <= 0) // false

// <= (больше или равно)
// console.log(NaN >= -1) // false
// console.log(Infinity >= -1) // true
// console.log(-Infinity >= -1) // false
// console.log(null >= 0) // true

// == (неравенство)
// console.log("" == 0) // true
// console.log("  " == 0) // true
// console.log("  a  " == 0) // false
// console.log("  1  " == 0) // false
// console.log("  1  " == 1) // true
// console.log("0" == 0) // true
// console.log("a1" == 1) // false
// console.log(1 == 1) // true
// console.log(true == 1) // true
// console.log(false == 0) // true
// console.log(undefined == 0) // false
// console.log(NaN == 0) // false
// console.log(Infinity == 0) // false
// console.log(-Infinity == 0) // false
// // !!!
// console.log(null == 0) // false
// console.log(undefined == null) // true

// === (строгое равенство)
// console.log("" === 0) // false
// console.log("  " === 0) // false
// console.log("  a  " === 0) // false
// console.log("  1  " === 0) // false
// console.log("  1  " === 1) // false
// console.log("0" === 0) // false
// console.log("a1" === 1) // false
// console.log(1 === 1) // true
// console.log(true === 1) // false
// console.log(false === 0) // false
// console.log(undefined === 0) // false
// console.log(NaN === 0) // false
// console.log(Infinity === 0) // false
// console.log(-Infinity === 0) // false
// console.log(null === 0) // false
// console.log(undefined === null) // false

// Сравнение строк (строки сравниваются посимвольно)
// Используется кодировка Unicode, а не настоящий алфавит

// Алгоритм сравнения двух строк:
// Сначала сравниваются первые символы строк.
// Если первый символ первой строки больше (меньше), чем первый символ второй, то первая строка больше (меньше) второй. Сравнение завершено.
// Если первые символы равны, то таким же образом сравниваются уже вторые символы строк.
// Сравнение продолжается, пока не закончится одна из строк.
// Если обе строки заканчиваются одновременно, то они равны. Иначе, большей считается более длинная строка.

// console.log("а" > "я") // false
// console.log("а" > "Я") // true
// console.log("ааая" > "аааааааааа") // true
// console.log("ааа" > "ааа") // false
// console.log("аааа" > "ааа") // true
