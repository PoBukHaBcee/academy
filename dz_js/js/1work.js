// 1
let hi = prompt("Напишите ваше имя, пожалуйста")
console.log("Привет "+hi);

// 2
let year = +prompt("Введите ваш год рождения")
const years = 2024
console.log("Вам на 2024 год ", years - year, " лет");

// 3
let nums = prompt("Введите трёхзначное число")

if(nums[0] == nums[2] || nums[1] == nums[0] || nums[2] == nums[1])
{
    console.log("Есть повторяющиеся цифры");
}
else console.log("Есть повторяющиеся цифры");

// 4
let yeet = prompt("Введите любой год")
if ((yeet % 4 == 0 && yeet % 100 != 0) || yeet % 400 == 0)
{
    console.log("Введённый вами год является високосным");
}

// 5
let num = prompt("Введите пятизначное число")
if(num[0] == num[4] && num[1] == num[3])
    {
        console.log("Ваше число палиндром");
    }

// 6
let usd = +prompt("Введите количство долларов")
let choise = +prompt("Введите в какую валюту перевести: 1.EUR, 2.UAN, 3.AZN")

if(choise == 1)
    {
        console.log("Столько будет евро", usd * 0.92702);
    }
else
    if(choise == 2){
        console.log("Столько будет Азербайджанского маната", usd * 1.7);
    }
    else
    {
        console.log("Столько будет в гривнах", usd * 40.57);
    }

// 7
let scum = +prompt("Введите сумму покупки")

if (scum>=200 && scum<300){console.log("Итоговая сумма покупки:", scum *0.3);}
else if(scum <500){console.log("Итоговая сумма покупки:", scum *0.5);}
else {console.log("Итоговая сумма покупки:", scum *0.7);}

// 8
let r = +prompt("Введите длину окружности")
let p = +prompt("Введите периметр квадрата")
if (r*2 < p/4)
    {
        console.log("Круг можно поместить в квадрат");
    }
else {console.log("Круг нельзя поместить в квадрат");}
