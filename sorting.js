let unsortedArr  = [5,8,3,6,200,2,1]
let sortedArr = mergeSort(unsortedArr);
console.log("sorted " +sortedArr);

function bubbleSort(arr){
  var swapped = true;
  while (swapped){
    swapped = false;
    for(let i = 0;i<arr.length-1;i++){
      if(arr[i] > arr[i+1]){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
  }
  return arr;
}

function insertionSort(arr){
  for(let i = 0; i< arr.length; i++){
    j = i-1
    key = arr[i]
    while(j >= 0 && arr[j] > key){
      arr[j+1] = arr[j]
      j--;
    }
    arr[j+1] = key;
  }
  return arr;
}

function mergeSort(arr){
  if(arr.length > 2){
    let midpoint = Math.floor(arr.length /2);
    let arr1 = mergeSort(arr.slice(0,midpoint));
    let arr2 = mergeSort(arr.slice(midpoint,arr.length));
    let arr1I = 0;
    let arr2I = 0;
    let sortedArr = [];
    while (arr1I < arr1.length && arr2I < arr2.length){
      if(arr1[arr1I] < arr2[arr2I]){
        sortedArr.push(arr1[arr1I]);
        arr1I++
      }
      if(arr1[arr1I] > arr2[arr2I]){
        sortedArr.push(arr2[arr2I]);
        arr2I++
      }
    }
    while(arr1I < arr1.length){
      sortedArr.push(arr1[arr1I]);
      arr1I++;
    }
    while(arr2I < arr2.length){
      sortedArr.push(arr2[arr2I]);
      arr2I++;
    }
    return sortedArr;
  }else{
    if(arr[0] > arr[1]){
      temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
    }
    
  }
  return arr;
}
