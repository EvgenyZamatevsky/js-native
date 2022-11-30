// Преобразование в string с помощью глобальной функции String()
// Можно преобразовать с помощью метода toString() (не преобразовывает null и undefined)
// console.log(String("")) // ""
// console.log(String("  ")) // "  "
// console.log(String("  a  ")) // "  a  "
// console.log(String("  1  ")) // "  1  "
// console.log(String("1")) // "1"
// console.log(String("a1")) // "a1"
// console.log(String(1)) // "1"
// console.log(String(0)) // "0"
// console.log(String(true)) // "true"
// console.log(String(false)) // "false"
// console.log(String(null)) // "null"
// console.log(String(undefined)) // "undefined"
// console.log(String(NaN)) // "NaN"
// console.log(String(Infinity)) // "Infinity"
// console.log(String(-Infinity)) // "-Infinity"

// Преобразование в number с помощью глобальной функции Number()
// Можно преобразовать с помощью унарного оператора +
// console.log(Number("")) // 0
// console.log(Number("  ")) // 0 // Пробелы удаляются и остается ""
// console.log(Number("  a  ")) // NaN // Пробелы удаляются и остается "a"
// console.log(Number("  1  ")) // 1 Пробелы удаляются и остается "1"
// console.log(Number("1")) // 1
// console.log(Number("a1")) // NaN
// console.log(Number(1)) // 1
// console.log(Number(0)) // 0
// console.log(Number(true)) // 1
// console.log(Number(false)) // 0
// console.log(Number(null)) // 0
// console.log(Number(undefined)) // NaN
// console.log(Number(NaN)) // NaN
// console.log(Number(Infinity)) // Infinity
// console.log(Number(-Infinity)) // -Infinity

// Преобразование в boolean с помощью глобальной функции Boolean()
// Можно преобразовать с помощью двойного НЕ
// console.log(Boolean("")) // false
// console.log(Boolean("  ")) // true
// console.log(Boolean("  a  ")) // true
// console.log(Boolean("  1  ")) // true
// console.log(Boolean("1")) // true
// console.log(Boolean("a1")) // true
// console.log(Boolean(1)) // true
// console.log(Boolean(0)) // false
// console.log(Boolean(true)) // true
// console.log(Boolean(false)) // false
// console.log(Boolean(null)) // false
// console.log(Boolean(undefined)) // false
// console.log(Boolean(NaN)) // false
// console.log(Boolean(Infinity)) // true
// console.log(Boolean(-Infinity)) // true
// console.log(Boolean({})) // true
// console.log(Boolean([])) // true
// console.log(Boolean(() => {
// })) // true
// console.log(Boolean(function () {
// })) // true
// console.log(Boolean(new Number(0))) // true