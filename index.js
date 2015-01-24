'use strict';

module.exports = function(string, regexp){
  var match = string.match(regexp);

  return (match || [''])[0];
};
