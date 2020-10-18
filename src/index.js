
// You should implement your task here.

module.exports = function towelSort (matrix) {
 if (matrix==undefined) return [];
  let arr=new Array();
 let dir=1;
  for(var row = 0; row < matrix.length; row++) {
    if (dir==1) {
    for(var col = 0; col < matrix[row].length; col++) {
      arr.push(matrix[row][col]);
    }
  }
  else 
  {
    for(var col = matrix[row].length-1; col >=0 ; col--) {
      arr.push(matrix[row][col]);
    }
  }
dir*=-1;
  }
  
  
  return arr;
}
