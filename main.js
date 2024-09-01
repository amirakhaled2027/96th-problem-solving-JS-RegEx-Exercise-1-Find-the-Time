// The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00.

// Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.





// SOLUTION
//   \b      This is a word boundary, which ensures that the match is not part of a larger number. It matches the position between a word character and a non-word character.
//   \d\d    This matches any two digits, representing the hours in the time format.
//   :       This matches the colon separator between the hours and minutes.
//   \d\d    This matches any two digits, representing the minutes in the time format.
//   \b      Another word boundary, ensuring the match is not part of a larger number.


const RegExp = "Breakfast at 09:00 in the room 123:456.".match(/\b\d\d:\d\d\b/)
const test = "Breakfast at 09:00 in the room 123:456.".match(/\b\d\d\d:\d\d\d\b/)
console.log(RegExp);
console.log(test);