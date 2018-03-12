import { createRandomArray, customSort } from './helperFunctions';
import { quickSort, heapSort, mergeSort } from 'js-sorting-algorithms';

export const createUserResult = arraySize => {
  const randomArrayQuickCopy = createRandomArray(arraySize).slice();
  const randomArrayHeapCopy = randomArrayQuickCopy.slice();
  // console.log("Quick Array: " + randomArrayQuickCopy);
  // console.log("Heap Array: " + randomArrayHeapCopy);

  const quickTime1 = performance.now();
  try{
    quickSort(randomArrayQuickCopy);
  } catch(error){
    alert("error encountered, clearing cache");
    window.location.reload(true);
  }
  const quickTime2 = performance.now();
  const quickExecutionTime = quickTime2 - quickTime1;

  const heapTime1 = performance.now();
  try{
    heapSort(randomArrayHeapCopy);
  } catch(error){
    alert("error encountered, clearing cache");
    window.location.reload(true);
  }
  const heapTime2 = performance.now();
  const heapExecutionTime = heapTime2 - heapTime1;

  // console.log("Quick Array Sorted: " + randomArrayQuickCopy);
  // console.log("Heap Array Sorted: " + randomArrayHeapCopy);


  return{
    type: 'addResults',
    results:[
      {
      arraySize: arraySize,
      algorithm: "Heap Sort",
      executionTime: quickExecutionTime,
      },
      {
      arraySize: arraySize,
      algorithm: "Quick Sort",
      executionTime: heapExecutionTime,
      }
    ]
  }
}

export const createAutoResult = arraySize => {
  const randomArrayCustomCopy = createRandomArray(arraySize).slice();
  const randomArrayMergeCopy = randomArrayCustomCopy.slice();
  // console.log("Custom Array: " + randomArrayCustomCopy);
  // console.log("Merge Array: " + randomArrayMergeCopy);

  const customTime1 = performance.now();
  try{
    customSort(randomArrayCustomCopy);
  } catch(error){
    alert("error encountered, clearing cache");
    window.location.reload(true);
  }
  const customTime2 = performance.now();
  const customExecutionTime = customTime2 - customTime1;
  // console.log("Custom Array: " + randomArrayCustomCopy);

  const mergeTime1 = performance.now();
  //try{
    mergeSort(randomArrayMergeCopy);
  // } catch(error){
  //   alert("error encountered, clearing cache");
  //   window.location.reload(true);
  // }
  const mergeTime2 = performance.now();
  const mergeExecutionTime = mergeTime2 - mergeTime1;
  // console.log("Merge Array: " + randomArrayMergeCopy);


  return{
    type: 'addAutoResults',
    results:[
      {
      arraySize: arraySize,
      algorithm: "Custom Sort",
      executionTime: customExecutionTime,
      },
      {
      arraySize: arraySize,
      algorithm: "Merge Sort",
      executionTime: mergeExecutionTime,
      }
    ]
  }
}
