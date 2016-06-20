
function FizzBuzz(){

}

FizzBuzz.prototype.play = function(number){
  if(number > 100) throw(new Error('Number outside of range!'));
  if(number < 1) throw(new Error('Number outside of range!'));
  if (number % 15 === 0){
    return 'fizzbuzz';
  } else if (number % 3 === 0) {
    return 'fizz';
  } else if (number % 5 === 0) {
    return 'buzz';
  } else {
    return number.toString();
  };
};
