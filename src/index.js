
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var res = [];
  if(matrix == undefined)
  	return res;
	for(var i = 0; i < matrix.length; i++)
  		if(i%2 == 1)
  			matrix[i].reverse();
  for(var i = 0; i < matrix.length; i++)
  	for(var j = 0; j < matrix[i].length; j++) {
  		res.push(matrix[i][j]);
  	}
  return res;
}
