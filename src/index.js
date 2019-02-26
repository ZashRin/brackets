module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr = str.split('');
  let br = [], currentBr, tr = false, ind;
  for(let i = 0; i < arr.length; i++) {
    ind = foobar(bracketsConfig, arr[i]);
    if(bracketsConfig[ind[0]][ind[1]] == bracketsConfig[ind[0]][ind[1]+1]) {
      if(tr) {
        currentBr = foobar(bracketsConfig, br.pop());
        if(bracketsConfig[currentBr[0]][currentBr[1]] == bracketsConfig[ind[0]][ind[1] + 1]) {
          tr = false;
          continue;
        }
        if(i < arr.length - 1) {
          let x = foobar(bracketsConfig, arr[i + 1]);
          if(x[1] === 0) {
            br.push(arr[i]);
            continue;
          }
        }
        return false;
      }
      tr = true;
    }
    
    if(ind[1] == 1) {
      if(br.length == 0) return false;
      else {
        currentBr = foobar(bracketsConfig, br.pop());
        if(bracketsConfig[currentBr[0]][currentBr[1]] == bracketsConfig[ind[0]][ind[1] - 1]) continue;
        return false;    
      }
    }
    br.push(arr[i]);
  }
  if(br.length) return false;
  return true;
}

function foobar(inputArray, searchValue) {
  for (let i = 0; i < inputArray.length; i++) {
      let j = inputArray[i].indexOf(searchValue);

      if (j >= 0) {
          return [i, j];
      };
  };

  return null;
};
