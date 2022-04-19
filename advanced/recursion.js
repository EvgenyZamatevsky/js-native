// 5 * 4 * 3 * 2 * 1 = 120 (factorial)

function factorial(number) {
   if (number === 1) {
      return 1
   } else {
      return factorial(number - 1) * number
   }

}
console.log(factorial(5))

/*
function factorial(5-передал сюда пятерку){
   if(5 === 1){
      условие не верно, идем дальше
   }
   запускаю т.к. условие не сработало function factorial(4 - потому что 5-1)*5 {
      if (number === 1){
         условие не верно, иду дальше
      }
      запускаю т.к. условие не сработало function factorial(3 - потому что 4-1)*4 {
         if(number === 1){
            условие не верно, иду дальше
         }
         запускаю т.к. условие не сработало function factorial(2 - потому что 3-1)*3 {
            if (number === 1){
               условие не верно, иду дальше
            }
            запускаю т.к. условие не сработало function factorial(1 - потому что 2-1)*2 {
               if(number === 1){
                  стоп, функцию не запускаю, возвращаю 1 и всплываю на верх
               }
            }
         }
      }
   }
}

ВСПЛЫВАЮ:
1. Опускаюсь на дно и отталкиваюсь от 32 строки
2. Строка 30. 1*2=2. Т.е. результатом выполнения функции будет 2
3. Строка 26. 2(результат выполнения предыдущей функции)*3=6. Т.е. результатом выполнения функции будет 6
4. Строка 22. 6(результат выполнения предыдущей функции)*4=24. Т.е. результатом выполнения функции будет 24
5. Строка 18. 24(результат выполнения предыдущей функции)*5=120. Т.е. результатом выполнения функции будет 120
*/

// Счетчик:
let count = 0
function counter() {
   count++
   console.log(count)
   if (count === 20) {
      return count
   } else {
      counter()
   }
}
counter()