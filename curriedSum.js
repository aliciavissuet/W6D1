function curriedSum(numArgs) {
  let numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, el) => acc + el);
    } else {
      return _curriedSum;
    }
  }
}

Function.prototype.curry = function(numArgs) {
  let numbers = [];
  let that = this;
  return function _curry(num) {
    numbers.push(num);
    if (numbers.length===numArgs) {
      return that(numbers);
    } else {
      return _curry;
    }
  }
}

Function.prototype.curry2 = function (numArgs) {
  let numbers = [];
  const _curry2 = (num) => {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return this.apply(this, numbers);
    } else {
      return _curry2;
    }
  }
  return _curry2;
}

Function.prototype.curry3 = function (numArgs) {
  let numbers = [];
  const _curry2 = (num) => {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return this.call(this, ...numbers);
    } else {
      return _curry2;
    }
  }
  return _curry2;
}

const adder = function() {
  let args = Array.from(arguments);
  return args.reduce((acc, el) => acc + el);
}

// return function() {
// return that.apply(context, args);
//   }