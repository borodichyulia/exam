'use strict';

//ЗАДАЧА 1
/*
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

let n = randomInteger(3,5);
let array = [];
let l=0;

do {
    array.push(randomInteger(0,5));
    l++;
}while(l<n);
n = null;

let h3=document.body.querySelector("h3");
h3.innerHTML="Исходный массив: " + array.join(" ");

let kol=0, max=-1;
let arr=[], x=[];

for(let i=0; i<array.length; i++){
    kol=0;
    if(arr.length>0){
        arr.splice(0, arr.length);
    }

    for(let k=i+1; k<array.length; i++, k++)
    {
        if(array[i]<array[k]){
            kol+=1;
            arr.push(array[i]);
            arr.push(array[k]);
        }
        else{
            break;
        }
    }

    for(let j=0; j<arr.length; j++){
        for(let a=j+1; a<arr.length; a++){
            if(arr[j]===arr[j+1]) {
                arr.splice(j, 1);
            }
        }
    }

    if(kol>max){
        max=kol;
        x=arr;

        let div=document.getElementById("first");
        div.innerHTML="Наибольшая серия: " + x;
    }

}

*/

//ЗАДАЧА 2
/*
let str = prompt('Введите строку');
let arr=[];
for(let i=0; i<str.length; i++) {
    arr[i] = [];
    let div = document.createElement("div");
    div.innerHTML=arr[i];
    document.body.append(div);
    for (let j = 0; j < str.length; j++) {
        if (i === j) {
            arr[i][j] = str[i];
            document.body.append(arr[i][j]);
        }
        else{
            arr[i][j]='*';
            document.body.append(arr[i][j]);
        }
    }
}

 */