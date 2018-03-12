import { insertionSort } from 'js-sorting-algorithms';

export const createRandomArray = arraySize =>{
  const randomArray = new Array(arraySize);
  for(let i=0; i < arraySize; i++){
    randomArray[i] = Math.floor(Math.random()*5000);
  }
  return randomArray;
}

export const customSort = arrayToSort =>{
  if(arrayToSort.length === 1){
    return arrayToSort;
  }

  const midPoint = Math.floor(arrayToSort.length /2);
  const leftHalf = arrayToSort.slice(0, midPoint);
  const rightHalf = arrayToSort.slice(midPoint);

  return insert(
    customSort(leftHalf),
    customSort(rightHalf)
  );
}

const insert = (leftHalf, rightHalf) => {
  if (!rightHalf){
    return leftHalf;
  }
  if (!leftHalf){
    return leftHalf;
  }
  //console.log(`Left:${leftHalf} Right:${rightHalf}`)
  const insertSortArray = [...leftHalf, ...rightHalf];
  // for(let i = 0; insertSortArray.length; i++){
  //   const temp = insertSortArray[i];
  //   let j = i-1;
  //   while (j >= 0 && insertSortArray[j] > temp) {
  //     insertSortArray[j + 1] = insertSortArray[j];
  //     j--;
  //   }
  //   insertSortArray[j+1] = temp;
  // }
  // return insertSortArray;
  return insertionSort(insertSortArray);
}
