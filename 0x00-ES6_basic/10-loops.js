export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];
  array.forEach((value) => {
    value = appendString + value;
    newArray.push(value);
  });

  return newArray;
}
