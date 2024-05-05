export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(appendString + array[i]);
  }
  return newArray;
}
