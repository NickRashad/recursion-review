// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //Strategy: take in element and return a string of the element's values in their original formats. Recurse over element and check type of each item. If it is a stringifiable array or object then we recurse.

  //if function || if null
  if (obj === null) {
    return "null";
  } else if (typeof obj === "function") {
    return "";
  } else if (typeof obj === "number" || typeof obj === "boolean") {
    //else if typeof el integer || typeof el boolean || typeof el string
    return `${obj}`;
  } else if (typeof obj === "string") {
    return `"${obj}"`;
  } else if (Array.isArray(obj) && obj.length === 0) {
    return "[]";
  } else if (Array.isArray(obj) && obj.length !== 0) {
    //recursion call
    //return a string of that array - using recursion
    //Recursion call: set var data that contains: map every element through stringifyJSON
    var data = obj.map(function(val) {
      return stringifyJSON(val);
    });
    // .toString()
    data.join();
    return "[" + data + "]";
  } else if (typeof obj === "object" && Object.keys(obj).length === 0) {
    return "{}";
  } else if (typeof obj === "object") {
    var keyVar = Object.keys(obj); //variable for key
    var resultArr = keyVar
      .map(function(key) {
        //create if statement to account for ...
        // return stringifyJSON(obj.key);
        if (typeof obj[key] !== "function" && typeof obj[key] !== "undefined") {
          // console.log(typeof obj[key]);
          return `"${key}":${stringifyJSON(obj[key])}`;
        }
      })
      .filter(function(item, index) {
        return item !== undefined;
      });
    if (resultArr.length !== 0) {
      // console.log(resultArr);
      return `{${resultArr.join()}}`;
    } else {
      return `{}`;
    }
  }
};

// var stringifiableObjects = [
//   9,
//   null,
//   true,
//   false,
//   "Hello world",
//   [],
//   [8],
//   ["hi"],
//   [8, "hi"],
//   [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
//   [8, [[], 3, 4]],
//   [[[["foo"]]]],
//   {},
//   { a: "apple" },
//   { foo: true, bar: false, baz: null },
//   { "boolean, true": true, "boolean, false": false, null: null },
//   // basic nesting
//   { a: { b: "c" } },
//   { a: ["b", "c"] },
//   [{ a: "b" }, { c: "d" }],
//   { a: [], c: {}, b: true }
// ];

// unstringifiableValues = [
//   {
//     functions: function() {},
//     undefined: undefined
//   }
// ];

// console.log(
//   stringifyJSON(unstringifiableValues),
//   "\n \n",
//   JSON.stringify(unstringifiableValues)
// );
