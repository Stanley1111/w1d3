// "lighthouse in the house"

// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3,5,15,18],
//   t: [4,14],
//   o: [6,19],
//   u: [7,20],
//   s: [8,21],
//   e: [9,16,22],
//   n: [12]
// }

function posLetter (someString) {
  // 2. count the letters
  var letterArr = someString.split("");
  //console.log("The letter array:", letterArr);

  var letterCount = {};

  for (var i = 0; i < letterArr.length; i++){
    if(letterCount[letterArr[i]]){
      letterCount[letterArr[i]].push(i);
    }
    else {
      letterCount[letterArr[i]] = [i];
    }
  }

  //delete letterCount[" "];

  // 3. return object with letter count.
  console.log(letterCount);
  return letterCount;
}

posLetter("lighthouse in the house");