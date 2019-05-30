var words = ["ground", "control", "to", "major", "tom"];
let map = function(array, callback) {
  let result = [];
    
  array.forEach(item => result.push((callback(item))));
  console.log(result);
};

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});