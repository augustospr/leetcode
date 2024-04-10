// 9. Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const stringNumber = x.toString();
  const invertNumber = stringNumber.split('').reverse().join('');
  const number = parseInt(invertNumber, 10)

  if (x === number) {
    return true;
  } else {
    return false;
  }
};

// 136. Single Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  numeros = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in numeros) {
      numeros[nums[i]]++;
    } else {
      numeros[nums[i]] = 1;
    }
  }

  for (let key in numeros) {
    if (numeros[key] === 1) {
      return key;
    }
  }
};

// 191. Number of 1 Bits

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  const counter = { '0': 0, '1': 0 };
  const binaryNumber = n.toString(2).split('').map(str => parseInt(str));

  for (let num of binaryNumber) {
    if (num in counter) {
      counter[num]++;
    } else {
      counter[num] = 1;
    }
  };

  for (let key in counter) {
    if (key === '1') {
      return counter[key];
    }
  };
};

// 137. Single Number II

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var numeros = {};

  for (let num of nums) {
    if (num in numeros) {
      numeros[num]++
    }
    else {
      numeros[num] = 1;
    }
  }

  for (let unique in numeros) {
    if (numeros[unique] === 1) {
      return unique;
    }
  }
};