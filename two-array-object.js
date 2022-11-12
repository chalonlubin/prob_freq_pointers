// add whatever parameters you deem necessary & write docstring

// input: two arrays, possibly different lengths
// output: obj, with keys from first array and values from second

function twoArrayObject(keys, values) {
    // define empty obj
    // loop over the key array
    //      add new key to obj with value from values at same index, or "null"
    // return obj

    let resObject = {};

    for (let i = 0; i < keys.length; i++) {
        resObject[keys[i]] = values[i] || null;
    }

    return resObject;
}

twoArrayObject(['x', 'y', 'z'], [1, 2]);
  // {'x': 1, 'y': 2, 'z': null}

twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]);
  // {'a': 1, 'b': 2, 'c': 3}