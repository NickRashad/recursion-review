// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element = document) {
  // Create result array
  var result = [];
  //begin for loop
  // console.log("childnodes:" + element.childNodes, 'classList' + element.classList)
  var currentElement = element.childNodes; //-> <head> <text> <body>
  for (var i = 0; i < currentElement.length; i++) {
    // console.log(currentElement[i]);
    // If current element has class name
    // if statement check that the classList of the element is NOT undefined
    //If it's not undefined then it means we've at least one class on that element
    if (currentElement[i].classList !== undefined) {
      //iterate over the classes (in case it has more then one class)
      for (var j = 0; j < currentElement[i].classList.length; j++) {
        //and check to see if one of those class matches className
        // console.log(element);
        if (currentElement[i].classList[j] === className) {
          //if so, return the element with the class
          result.push(currentElement[i]);
          //console.log(result);
        }
      }
    }
    if (currentElement[i].hasChildNodes()) {
      //result.flatten();
      result.push(getElementsByClassName(className, element.childNodes[i]));
      // If element has child nodes then recurse
      //   pass in className and the element that has childNodes
    }
  }
  //end for loop
  // Return
  return result.flat();
};
