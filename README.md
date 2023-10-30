# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @libinali/lotide`

**Require it:**

`const _ = require('@libinali/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: This function takes in two arrays and console.log an appropriate message to the console.

* `assertEqual(actual, expected)`:This function compares the two values it takes in, and prints out a message telling us if they match or not.

* `assertObjectsEqual(actual, expected)`: This function takes in two objects and console.log an appropriate message to the console.

* `countLetters(str)`: This function takes in a sentence (as a string) and then return a count of each of the letters in that sentence.

* `countOnly(allItems, itemsToCount)`: This function will be given an array and an object. It will return an object containing counts of everything that the input object listed.

* `eqArrays(arr1, arr2)`: This function takes in two arrays and returns true or false, based on a perfect match.

* `eqObjects(obj1, obj2)`: This function take in two objects and returns true or false, based on a perfect match.

* `findKey(object, callback)`: This function takes in an object and a callback, It scans the object and return the first key for which the callback returns a truthy value.

* `findKeyByValue(key, value)`: This function takes in an object and a value. It should scan the object and return the first key which contains the given value.

* `head(arr)`: This function returns the first item in the array.

* `letterPositions(sentence)`: This function will return all the indices (zero-based positions) in the string where each character is found.

* `map(array, callback)`: This function takes in an array and a callback function, and returns a new array based on the results of the callback function.

* `middle(arr)`: This function will take in an array and return the middle-most element(s) of the given array.

* `tail(arr)`: This function returns the "tail" of an array: everything except for the first item (head) of the provided array.

* `takeUntil(array, callback)`: This function will keep collecting items from a provided array until the callback provided returns a truthy value.

* `without(source, itemsToRemove)`: This function will return a subset of a given array, removing unwanted elements.

