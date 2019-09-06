var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

var all = boys.concat(girls);
console.log(all);

var commaVal = all.join(" , ");
console.log(commaVal);

var hybVal = all.join(" - ");
console.log(hybVal);

all.push("dolf");
//function(val1,val2){all.unshift(val1),all.unshift(val1)};
//all.pop();
all.unshift("Kurt");
all.unshift("Hans");

console.log(all);
all.shift();
all.splice(3,2)
all.reverse();
all.sort();
const bigWord = all.map(v => v.charAt(0).toUpperCase() + v.slice(1));
console.log(all);
console.log(bigWord);
const filtered = all.filter( w => w.charAt(0)== 'L' || w.charAt(0)== 'l');
console.log(filtered);
