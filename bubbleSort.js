// bubbleSort.js
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];
let list1 = [7, 3, 2, 4, 4, 3, 2, 16, 22];

let bubblesortFunction = function(arr){    
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
};

bubblesortFunction(list);
bubblesortFunction(list1);
console.log(list.toString()); // => 0,1,2,4,7,8,9,13,16


// Bubblesort med tekststrenge

let stringList = ["Peter", "Andreas", "Tobias", "Shaniqua"];


for(let k = stringList.length -1; k >= 0; k--){
    for(let l = 0; l<= k -1; l++){
        if(stringList[l] > stringList[l + 1]){
            let temp = stringList[l];
            stringList[l] = stringList[l + 1];
            stringList[l+1] = temp;
        }
    }
}
console.log(stringList);


// Søgning



let binarySearchRecursive = (arr, target, start, end) => {

    if (start > end) {
        return false;
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        console.log(mid);
        return true;
    }

    if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, start, mid - 1);
    } else {
        return binarySearchRecursive(arr, target, mid + 1, end);
    }
}

let x = 88;

if(binarySearchRecursive(list, x, 0, list.length-1)){
    console.log("Found it");
}else{
    console.log(-1);
};


// Fletning

let totalFletning = function(arr1, arr2){

    let result = [];
    let i1 = 0;
    let i2 = 0;
    while(i1 < arr1.length && i2 - arr2.length){
        if(arr1[i1] < arr2[i2]){
            result.push(arr1[i1]);
            i1++;
        }else{
            result.push(arr2[i2]);
            i2++;
        }
    }

    while(i1 < arr1.length){
        result.push(arr1[i1]);
        i1++;
    }

    while(i2 < arr2.length){
        result.push(arr2[i2]);
        i2++;
    }

    return result;
}

let flettetListe = totalFletning(list, list1);
console.log(flettetListe);

const allePrimtal = function(nummer){
    if(nummer < 0 || isNaN(nummer)){
        throw new error("Not a number or below 0");
    }

    for(let i = 0; i <= nummer; i++){
        if(isPrime1(i)){
            console.log(i + "Is prime");
        }
    }
}

function isPrime1(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    var m = Math.sqrt(n); //returns the square root of the passed value
    for (var i = 2; i <= m; i++)
        if (n % i == 0) return false;
    return true;
}

allePrimtal(20);