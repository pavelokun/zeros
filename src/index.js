module.exports = function zeros(expression) {
  let array1 = expression.split('*');
  let arrayone = [];
  let arraytwo = [];
  
  for (let i = 0; i < array1.length; i++){
    if(array1[i].includes('!!')) {
      arraytwo.push(parseInt(array1[i]));
    } else {
      arrayone.push(parseInt(array1[i]));
    }
  };
  
  let arrayone2 = [];
  let arraytwo2 = [];

  for (let i of arrayone) {
    while(i>1) {
      arrayone2.push(i);
      i--;
    };
  };
   
  for (let i of arraytwo) {
    while(i>1) {
      arraytwo2.push(i);
      i-=2;
    };
  };

  let array3 = arrayone2.concat(arraytwo2);

  let zeros1 = 0;

  for (let i of array3) {
    while (i % 5 == 0) {
      zeros1++;
        i/=5;
    };
  };
  
  if (!array3.includes(2)) {
    zeros1 = 0;
  };

  return zeros1;
}
