"use strict";
// let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", ' ');
//  alert ("Вы посмотрели " +  numberOfFilms + " фильма");

// let personalMovieDB ={
//     count:numberOfFilms ,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// const a = prompt ("Один из последних просмотренных фильмов ?", ''),
//       b= prompt ("На сколько оцените его ?" , ''),
//       c = prompt ("Один из последних просмотренных фильмов ?", ''),
//       d= prompt ("На сколько оцените его ?" , '');


// personalMovieDB.movies[a]= b;
// personalMovieDB.movies[c]= d;

// console.log(personalMovieDB);
// console.log (numberOfFilms);

// if (0){
//     console.log("OK")
// }
// else{
//     console.log ("not ok")
// }

// const num = 10;
// (num===10) ? console.log('yahu') : console.log('hup'); 
// const num =5 ;
// switch (num){
//     case 1:
//     console.log("NO");
//     break;
//     case 2:
//     console.log("NO");
//     break;
//     case 3:
//     console.log("NO");
//     break;
//     case 4:
//     console.log("NO");
//     break;
//     case 5:
//     console.log("ok");
//     break;
//     default :
//     console.log ("нет такого значения")
// }
//  const hamburger = true; 
//  const fries = true;
//  if (hamburger && fries){
//     console.log('Я сыт!');
//  }




// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// var num = 1;
// while (num < 10){
//     console.log(num)
//     num++;
    
// }

// for (let i = 1 ; i < 8; i++){
//     console.log(i)
// }
// var num=1;

// do{
//     console.log(num);
//     num++;
// }
// while (num<10);
// var i=0;
// do{
//     alert( `number ${i}!` );
//     i++;
// }
// while(i<3);
// var i= 0;
// outer:do{
//    i= prompt("Введите число большее число",'');
//    if (!i) break outer;
// }
// while (i<=100)


// var i= prompt("Введите наименьшее число" ,"");
// var num=prompt("Введите наименьшее число" ,"");
// for( ;i<num;i++){
//     if(i % 1 ==0 && i % i == 0 && i % 2 >= 1 && i % 3 >=1 ) {
//         console.log(i)
//     }
     
// }
// var num =prompt ("Введите число столбцов");
// let result = '';
// for(let i=1 ; i<num ; i++){
//     for (let j=0; j<i ; j++){
//         result+= '*';
//     }
//     result+='\n';
// }
// console.log(result);

// for(let i=20; i>=10 ; i--){
//     if(i==13){
//         break;

// }
//     console.log(i)
// }

// for (let i=2; i<=10; i++){
//     if(i%2==0){
//        console.log(i)
//     }
   
// }
// var i=2;
// while( i<=16) {
//     if (i % 2 === 0) {
//         i++;
//     continue;
// } else {
//     console.log(i);
// }
//     i++;

// }

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for(let i=0; i<arr.length;i++){
//     result[i]=arr[i];
// }
// console.log(result);
// return result;

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for(var i=0; i<data.length; i++){
//     if(typeof(data[i])==='number'){
//         data[i] = data[i] * 2;
//     }
//     else if (typeof(data[i])=== "string") {
//         data[i]=`${data[i]}-done`;
//     }
// }
// console.log(data);
// return data;

/* let admin;
let name;

name= 'John';
admin =name;

alert ( admin ); */

/* let ourPlanetName= "Yer";
alert(Zemlya); */

// Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?

// let nameOfJs= prompt ("Название компании JS?")

// if (nameOfJs=="ECMAScript"){
//     alert ("Верно!");
// }
// else{
//     alert ("Неверно");
// }

// let Num= +prompt("Введите число");

// if(Num>0){
//     alert(1);
// }
// else if(Num<0){
//     alert(-1);
// }
// else{
//     alert(0);
// }

/* let a= +prompt("Введите первое число");
let b = +prompt("Введите второе число")

let result= a+b>4 ? "Много" : "Мало";
alert(result); */


/* let position = prompt("Введите вашу должность")

let massage = (position== "Сотрудник") ? "привет":
            (position== "Директор") ? "Здравствуйте" :
            "нет логина";
    alert(massage); */


/* let age =+prompt("Введите ваш возраст");
if (age>=14 && age<=90){
    alert("Всё верно")
}
else{
    alert("нет")
} */
/* 

/* let age=+prompt("Введите ваш возраст");
if (!(age>=14 && age<=90 )){
    alert("Всё верно")
} 
else{
    alert('нет');
} */


/* 
let age =+prompt("Введите ваш возраст");
if (age<=14 || age>=90){
    alert("Всё верно");
}
else{
    alert("нет");
} */


/* let user= prompt("Кто вы?");

if (user=="Админ"){

    let password = prompt("Введите пароль");

    if(password=="Я главный" ){

        alert("Здравствуйте!");

    }
    else if(password==null || password==""){
        alert("Отменено");
    }
    else{
        alert("Невеный пароль");
    }
}
else{
    alert("Нет такого пользователя");
} */

// При помощи цикла for выведите чётные числа от 2 до 10.
/* for(let i=2; i<10;i++){
    if(i%2==1)continue;
        alert(i);
        
    
} */
/* Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
} */

/* let i=0;
while(i<3){
    alert( `number ${i}!` );
    i++;
   
} */
/* Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно. */


/* for , while, if */
/* let num;
do{
    num= +prompt("Введите число больше 100",0);
}
while( num<=100 && num); */

/* let num = +prompt("Введите конечное число")
nextPrime:
for(let i=2; i<num; i++){

    for(let j=2 ;j<i ;j++){
        if(i%j==0) continue nextPrime;
    }
    alert(i);
} */

/* switch (browser) {
    case 'Edge':
    alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  } */
/* let browser = prompt("Введите ваш браузер")
    if ( browser=="Edge"){
        alert( "You've got the Edge!" );
    }
    else if(browser=="Chrome" || browser=="Firefox" || browser=="Safari" || browser=="Opera"){
        alert( 'Okay we support these browsers too' );

    }
    else{
        alert( 'We hope that this page looks ok!' );
    } */

/*     const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
} */

/* const number = +prompt('Введите число между 0 и 3', '');
    switch(number){
        case 0:
        alert('Вы ввели число 0');
        break;
        case 1:
        alert('Вы ввели число 1');
        break;
        case 2:
        case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
    } */
 /*    Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

    Сделайте два варианта функции checkAge:

    Используя оператор ?
    Используя оператор || */

/*     function checkAge(age) {
        return (age >18)? true : confirm("Родители разрешили ");
      
      } */

/* 
    function checkAge(age){
        return (age >18)  || confirm("Родители разрешили ");
    } */
   
    // Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

    // Пример вызовов:
    

/*     function min (a , b){

        if (a>=b) {
            return b;
        }
        else{
            return a;
        }
    }
     */
    /*  let x= 2;
     let n= 3;
    function pow(x , n){
        for(let i=x ; i<=n ;i++){
            let result= i*x;
            alert (result);
            }
        
    }
        */
/* 
    function ask (question, yes, no) {
        if (confirm(question)) yes() 
        else  no();
      }
      ask(
        "Вы согласны?",
        ()=> { alert("Вы согласились."); },
        ()=> { alert("Вы отменили выполнение."); }
      );

       */
/* let symbol= prompt("Введите символ")
let result ="";
let length = prompt("Введите длинну")
for (let i =1 ; i<length ; ){
    result=result + symbol;
    i++
    console.log(result)
        
    } */
    
   /*  function reverse(){
    for(let i=20 ; i>=10 ; i--){
            
        console.log(i);
        if(i==13) break;  
        
    }
    }
    console.log(reverse()); */
/*     function evenNum (){
        for( let num=1; num<=10; num++){
            if(num%2==0){
                console.log(num)
            }
        }
    }
    console.log(evenNum()); */
    
   /*  Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0] */
    /* let i= 5;
    let arr=[];
    for(; i<=10; i++){
        arr[i]=i;
       
    }
    console.log(arr);
     */
   /*  function secondTask() {
        // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
        let data = [5, 10, 'Shopping', 20, 'Homework'];
       
        // Пишем решение вот тут
        for(let i=0; i<=data.length; i++){
            if(typeof (data)==="number"){
                data[i]=data[i]*2
            }
            else if(typeof (data)==="string"){
                data[i]=data[i]+"-done"
            }
            
        }

        console.log(data);
        // Не трогаем
        return data;
    }
     */
/*     function thirdTask() {
        // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
        const data = [5, 10, 'Shopping', 20, 'Homework'];
        const result = [];
    
        // Пишем решение вот тут
        for(let i=0; i<=data.length; i--){
            result[i]= data[i];
        }
        console.log(result)
        // Не трогаем
        return result;
    } */

    /* const lines = 5;
    let result = '';
    // Проверяется именно переменная result, формируйте строку в ней
    for(let i=0; i<=lines; i++){
        for (let j = 0; j < lines - i; j++) {
            result += " ";
        }
        for(let j=0; j<2*i+1; j++){
            
            result+="*";
           
        }
       result+='\n';
    }
    console.log(result)
 */

    /* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания

/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i=0; i<2;i++){
    const a=prompt("Один из последних просмотренных фильмов?", " "),
          b=prompt("На сколько вы его оцениваете ?")
    if(a!=null && b!=null && a!="" && b!="" && a.length<50 ){
        personalMovieDB.movies [a]=b;
        console.log("done")
    }
    else{
        console.log("Error")
        i--;
    }
}
if (personalMovieDB.count<10){
    alert("Просмотрено довольно мало фильмов")
}
else if(personalMovieDB.count>10 && personalMovieDB.count<30 ){
    alert("Вы классический зритель")

}
else if(personalMovieDB.count>30){
    alert('Вы киноман');
}
else{
    alert("Произошла ошибка")
}
console.log(personalMovieDB) */

// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi();

// const fruits = [ "Banana", "Orange", "Aple"];
// fruits.reverse();
// console.log(fruits);

/* Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b. */
/* function inArray(a,b){
    return function(x){
        
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inArray([1, 2, 10])) ); */ 


/* function sayHello() {
    
    return `Привет ${Muhammadali} `;
}

    sayHello(" Мухаммадали");

 */
   
  /*   function returnNeighboringNumbers(num) {
        return [num-1,num,num+1]
      
    
    }

    returnNeighboringNumbers(10) */

    /* Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

Примеры:

Вызов функции getMathResult(5, 3) даст ответ 5---10---15

Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

Вызов функции getMathResult(10, '5') даст ответ 10

Вызов функции getMathResult(10, 0) даст ответ 10

Вызов функции getMathResult(20, -5) даст ответ 20 */

/* function returnNeighboringNumbers() {
    return [num-1,num,num+1]
}
   returnNeighboringNumbers()
   
// Место для третьей задачи
function getMathResult(num,times) {
      if(typeof(times)!=="number",times<=0){
       return times
      }
      let res=" ";
      for(let i=1; i<=times;i++){
       if(i===times){
           res+= `${num*i}`
       }
       else{
           res+=`${num*i} ---`;
       }
      }
      console.log (res);
      
}
getMathResult(10,10) */

/* const str= "Hello world"
console.log(str.toLocaleLowerCase(3,9)) */
/* 
let far= ["one","two","three"];
console.log(far.push())
console.log(far) */
/* 
let styles= ["Джаз" , "Блюз",]; //1
styles.push("Рок-н-ролл"); //2
let center= styles.length/2
center=Math.floor(center);
styles[center]="Классика" //3
styles.shift(0)
styles.unshift("Рэп","Регги")
console.log(styles) */

/* function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("Введите число", 0);
  
      // Прекращаем ввод?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() ); */


/* let num = 12.342;
num= Math.round(num*100)/100;
alert (num);
 */

/* let num1= 12.3432
num1= num1.toFixed(2)
alert (num1) */

/* 
let num3 = 14.393;
alert(typeof(+num3.toFixed(1)));
 */

/* 
let num1= +prompt("Введите первое число");
let num2= +prompt("Введите второе число");

alert(num1+num2);

 */

// let num= 6.35;
// alert( 6.35 * 10)
/* 
function random(min , max){
    let num= min+ Math.random()
}
console.log(Math.random())
 */

/* let res= " ";
function random(min,max){
    for(let i= min; i<=max; i++){
     res= Math.random()*(max-min)+min;
    }
}
    

random(2,100);
console.log(res) */

let numberOfFilms;
function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(numberOfFilms == " " || numberOfFilms== null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        
    }
}
    start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


    function rememberMyFilms() {  
        for(let i=0; i<2;i++){
            const a=prompt("Один из последних просмотренных фильмов?", " "),
                  b=prompt("На сколько вы его оцениваете ?")
            if(a!=null && b!=null && a!="" && b!="" && a.length<50 ){
                personalMovieDB.movies [a]=b;
                console.log("done")
            }
            else{
                console.log("Error")
                i--;
            }
        }
    }
    rememberMyFilms();


    function detectedPersonalLevel() {
        if (personalMovieDB.count<10){
            alert("Просмотрено довольно мало фильмов")
        }
        else if(personalMovieDB.count>10 && personalMovieDB.count<30 ){
            alert("Вы классический зритель")
        
        }
        else if(personalMovieDB.count>30){
            alert('Вы киноман');
        }
        else{
            alert("Произошла ошибка")
        
        }
      }
      detectedPersonalLevel();

      function showMyDB(hiden) {
        if(!hiden==true){
            console.log()
        }
        }
        showMyDB(personalMovieDB.private)
        function writeYourGenres() {
            for(let i=1 ;i<=3; i++){
                
                constg genre= prompt(`Ваш любимый жанр под номером: ${i}`);
                personalMovieDB.genres[i-1]=genre;
                
            }
          }
        
          writeYourGenres();
          

console.log(personalMovieDB)