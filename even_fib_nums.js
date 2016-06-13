/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;

  // do your work here
  theArray = getFibs(maxFibValue)
  for (var i = theArray.length - 1; i >= 0; i--) {
    if(theArray[i] % 2 === 0) {
      sum += theArray[i];
    }
  }
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input
  var fibArray = getFibs(maxFibValue);

  //do your work here
  var highest = fibArray[fibArray.length - 1];
  return highest;
};

function getFibs(maxNum){
  var fibs = [1,2];
  while  (fibs[fibs.length -1] < maxNum) {
    currentNum = (fibs[fibs.length -1] + fibs[fibs.length -2]);
    if(currentNum <= maxNum) {
      fibs.push(currentNum);
    } else {
      return fibs;
    }
  }
  return fibs;
}
/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};