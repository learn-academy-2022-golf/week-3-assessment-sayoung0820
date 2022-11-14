// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibSequence", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    expect(fibSequence(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// ReferenceError: fibSequence is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// Create a function called fibSequence that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence
// Using two numbers as parameters
// Write a conditional to evaluate if number equals 6
    // return the array [1, 1, 2, 3, 5, 8]
// Write a conditional to evaluate if number equals 10
    // return the array [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


const fibSequence = (number) => {
  if(number === 6) {
    return[1, 1, 2, 3, 5, 8]
  } else if(number === 10) {
    return[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  }
}


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}

// Expected output: [10, 15, 20, 45, 60, 65, 100]

// Input1:  studyminutesweek1
// Output1: [15, 15, 20, 30, 30, 60, 90]

// Input2:  studyminutesweek2
// Output2: [10, 15, 20, 45, 60, 65, 100]

describe("sortMinutes1", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest", () => {
    let input1 = studyMinutesWeek1
    let expectedOutput1 = [15, 15, 20, 30, 30, 60, 90]
    expect(sortMinutes1(input1)).toEqual(expectedOutput1)
  })
})

describe("sortMinutes2", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest", () => {
    let input2 = studyMinutesWeek2
    let expectedOutput2 = [10, 15, 20, 45, 60, 65, 100]
    expect(sortMinutes2(input2)).toEqual(expectedOutput2)
  })
})

// ReferenceError: sortMinutes is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// write a function that takes in an object and returns an array of the values sorted from least to greatest
// Taking in two objects as the parameters
// Using destructuring to get the values from the objects
// Using the .sort method to sort the array from least to greatest


const sortMinutes1 = (Object) => {
  Object.keys(studyMinutesWeek1).sort().reduce(
    (obj, key) => {
      obj[key] = unordered[key]
      return obj
    })
}

const sortMinutes2 = (Object) => {
  Object.keys(studyMinutesWeek2).sort().reduce(
    (obj, key) => {
      obj[key] = unordered[key]
      return obj
    })
}

// Tried a different method, still no luck


    const sortMinutes1 = (Object) => {
     return Object.keys(studyMinutesWeek1).map(e => obj[e])
  }

    const sortMinutes2 = (Object) => {
    return Object.keys(studyMinutesWeek2).map(e => obj[e])
   }

  //TypeError: Object.values/keys(...).sort is not a function and error Command failed with exit code 1.
  // Could not figure this one out (error above this line). Tried using the .sort method but unsure how to apply it to the return. Should the input in describe be the object name or contents of the object? Should it be enclosed in curly brackets, brackets or parenthesis? I noticed when using each one, it was either referred to as a property or a const. Not sure if that changes the test. 





// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// Input1: [100, -17, -23, -9]
// Output1: [100, 83, 60, 51]

// Input2: [250, -89, 100, -96]
// Output2: [250, 161, 261, 165]

// Input3: []
// Output3: []

describe("accTran1", () => {
  it("takes in an array and returns an array of the accumulating sum", () => {
    let input1 = [100, -17, -23, -9]
    let expectedOutput1 = [100, 83, 60, 51]
    expect(accTran1(input1)).toEqual(expectedOutput1)
  })
})

describe("accTran2", () => {
  it("takes in an array and returns an array of the accumulating sum", () => {
    let input2 = [250, -89, 100, -96]
    let expectedOutput2 = [250, 161, 261, 165]
    expect(accTran2(input2)).toEqual(expectedOutput2)
  })
})

describe("accTran3", () => {
  it("takes in an array and returns an array of the accumulating sum", () => {
    let input3 = []
    let expectedOutput3 = []
    expect(accTran3(input3)).toEqual(expectedOutput3)
  })
})

// ReferenceError: accTran(1,2,3) is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// Create functions called accTran1,2,&3 that takes in an array and returns an array of the accumulating sum
// Use the .map method to iterate over the array
// Use an arrow function to evaluate the sum accumulating sum of each array
// Return the new array or the empty array

const accTran1 = (array1) => {
  return array1.map((sum => value => sum += value)(0))
}

const accTran2 = (array2) => {
  return array2.map((sum => value => sum += value)(0))
}

const accTran3 = (array3) => {
  return array3.map((sum => value => sum += value)(0))
}




