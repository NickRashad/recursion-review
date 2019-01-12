// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj, keysArray) {
  // your code goes here
  //Strategy: take in element and return a string of the element's values in their original formats. Recurse over element and check type of each item. If it is a stringifiable array or object then we recurse.

  //if function || if null
  if ()
    //return 'null'
  //else if typeof el integer || typeof el boolean || typeof el string
    //return 'el'
  // else if Array.isArray(obj) && obj.length === 0
   //return '[]'
  //else if Array.isArray(obj) && obj.length !== 0
    //recursion call
    //return a string of that array - using recursion
    //Recursion call: set var data that contains: map every element through stringifyJSON
    //.toString()
    // return('[' + data +']') ;
  //else if typeof object
    //var keyVar = Object.keys(obj)  variable for key
    //var keyVal = object.keyVar
    //resultArr = keyVar.map(key => { key: obj.key  }) .toString());
    //return (`{ ${resultArr} }`)
};

var stringifiableObjects = [
  9,
  null,
  true,
  false,
  'Hello world',
  [],
  [8],
  ['hi'],
  [8
  , 'hi'],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[], 3, 4]],
  [[[['foo']]]],
  {},
  {'a': 'apple'},
  {'foo': true, 'bar': false, 'baz': null},
  {'boolean, true': true, 'boolean, false': false, 'null': null },
  // basic nesting
  {'a': {'b': 'c'}},
  {'a': ['b', 'c']},
  [{'a': 'b'}, {'c': 'd'}],
  {'a': [], 'c': {}, 'b': true}
];

unstringifiableValues = [
  {
    'functions': function() {},
    'undefined': undefined
  }
];

console.log(JSON.stringify(stringifiableObjects));