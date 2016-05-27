encode = function(inputString) {
  var outputArray = [];
  var outputLength = inputString.split("").length;
  for (var i = 0; i < outputLength; i++) {
    outputArray.push("-");
  }
  var output = outputArray.join("");
  return output;
};

module.exports = {
  encode: encode
};
