export default function hasValuesFromArray(set, array) {
  array = new Set(array);
  return array.isSubsetOf(set);
}
