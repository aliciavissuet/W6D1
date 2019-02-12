function sum() {
  let arr = Array.from(arguments);
  let total = 0;
  for (let i=0; i<arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function sum2(...args) {
  
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

Function.prototype.myBind = function(context, ...args) {
  return (...args1) => {
    if (args.length===0) {
      args = args1;
    } else if (args.length === 1) {
      args = [args[0], args1[0]];
    }
    return this.apply(context, args);
  };
}

Function.prototype.myBind2 = function(context, ...args) {
  let that = this;
  return function() {
    return that.apply(context, args);
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");

// markov.says.myBind(pavlov, "meow", "Kush")();
markov.says.myBind(pavlov)("meow", "a tree");

markov.says.myBind(pavlov, "meow")("Markov");

const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
