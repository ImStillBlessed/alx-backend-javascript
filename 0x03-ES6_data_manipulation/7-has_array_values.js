export default function hasValuesFromArray(set, array) {
  const setArray = new Set(array);
  return setArray.isSubsetOf(set);
}
