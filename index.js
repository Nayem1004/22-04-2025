//this task from jahid vhai, remove duplicate numbers

let arr = [1, 1, 2, 3, 4, 4, 5, 6, 7, 7, 7, 8, 9, 9, 9, 9];

// 1st trying loop and solve it
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    //console.log(newArr)
    let outputDiv = newArr;
    document.getElementById("output").innerHTML = outputDiv;



  // now make the finction 
function duplicatesNum(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  result = duplicatesNum(arr);
  console.log(result);

  //max value of array

let array = [1,2,3,4,4,6,6,7, 8]
let max = array[0]
for(let i = 0; i<array.length; i++){
   if(array[i]>max){
    max = array[i]
   }
}
console.log(max)