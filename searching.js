var myArr = [2,3,5,9,400,1000,1200]
console.log(binarySearch(myArr,99));

function linearSearch(arr,item){
  for(let i = 0; i < arr.length;i++){
    if(arr[i] == item){
      return true
    } 
  }
  return false
}

function binarySearch(arr,item){
  start = 0;
  end = arr.length -1;
  while(start < end){
    midpoint = Math.floor((end + start) / 2);

    if(arr[midpoint] == item)return true;
    
    if(item < arr[midpoint]){
      end = midpoint -1;
    }else{
      start = midpoint;
    }
    
  }
  return false;
}
