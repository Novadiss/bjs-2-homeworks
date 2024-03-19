function getArrayParams(...arr) {
  min = Math.min(...arr);
  max = Math.max(...arr);
  sum = arr.reduce((a, b) => a + b, 0)
  avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    sum = arr.reduce((a, b) => a + b, 0);
    return sum;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    max = Math.max(...arr);
    min = Math.min(...arr);
    difference = max - min;
    return difference;
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    sumEvenElement = 0;
    sumOddElement = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    sumEvenElement = 0;
    countEvenElement = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }
    averageEvenElement = sumEvenElement / countEvenElement;
    return averageEvenElement;
  }
}

function makeWork (arrOfArr, func) {
  maxWorkerResult = -Infinity;
  for (i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
