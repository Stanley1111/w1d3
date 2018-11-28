function countLetters (someString) {
  // 1. remove the spaces from the string.
  var noSpaces = someString.split(" ").join("").toLowerCase();

  // 2. count the letters
  var letterArr = noSpaces.split("");
  //console.log(letterArr);

  var letterCount = {};

  for (var i = 0; i < letterArr.length; i++){
    if(letterCount[letterArr[i]]){
      letterCount[letterArr[i]]++;
    }
    else {
      letterCount[letterArr[i]] = 1;
    }
  }

  // 3. return object with letter count.
  console.log(letterCount);
  return letterCount;
}

countLetters("lighthouse in the house");
