export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];
  for (const word of array) {
    newArray.push(appendString + word);
  }
  return newArray;
}
