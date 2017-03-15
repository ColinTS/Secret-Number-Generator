'use strict';
module.exports = function() {

  //PRIVATE
  var secretNumberGenerator = Math.floor((Math.random() * 1000000) + 1);

  //PUBLIC
 function secretNumber(){
  return secretNumberGenerator;
 }
return secretNumber;
};